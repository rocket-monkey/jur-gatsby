import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import classNames from 'class-names'
import { Helmet } from 'react-helmet'
import IconFacebook from '../components/icons/Facebook'
import Content, { HTMLContent } from '../components/Content'
import TimeTable from '../components/TimeTable'
import BackTo from '../components/BackTo'
import Map from '../components/Map'
import styles from './event-post.module.scss'

const parseTable = (timeTable, isPreview) => {
  if (!isPreview) {
    return timeTable
  }

  const table = []
  timeTable._tail.array.forEach(entry => {
    const newEntry = {}
    if (entry._root) {
      entry._root.entries.forEach(e => {
        newEntry[e[0]] = e[1]
      })
    }
    table.push(newEntry)
  })

  return table
}

const mapLocation = (location, locationAlt) => {
  if (locationAlt) {
    return `https://www.google.de/maps?f=q&hl=de&q=${encodeURI(locationAlt)}`
  }

  switch (location) {
    case 'amboss-rampe':
      return 'https://www.google.de/maps?f=q&hl=de&q=Amboss+Rampe+Zollstrasse+Zurich'
    default:
    case 'kiff-aarau':
      return 'https://www.google.de/maps?f=q&hl=de&q=Kiff+Telistrasse+118+Aarau'
    case 'x-tra':
      return 'https://www.google.de/maps?f=q&hl=de&q=Limmatstrasse+118+8005+Zürich'
  }
}

const mapLocationShortName = location => {
  switch (location) {
    case 'amboss-rampe':
      return 'Amboss Rampe, Zürich'
    case 'kiff-aarau':
      return 'KIFF, Aarau'
    default:
      return location
  }
}

const mapLocationName = location => {
  switch (location) {
    case 'amboss-rampe':
      return (
        <>
          Amboss Rampe
          <br /> Zollstrasse 80
          <br /> 8005 Zürich
        </>
      )
    default:
    case 'kiff-aarau':
      return (
        <>
          KIFF
          <br /> Tellistrasse 118
          <br /> 5000 Aarau
        </>
      )
  }
}

export const EventPageTemplate = ({
  isPreview,
  title,
  content,
  image,
  timeTable,
  location,
  locationAlt,
  fbLink,
  contentComponent,
  href,
  artists,
  crew,
}) => {
  const PageContent = contentComponent || Content

  const desc =
    typeof content.replace !== 'undefined'
      ? content.replace(/<p>/i, '').replace(/<\/p>/i, '')
      : ''
  return (
    <>
      {!isPreview && (
        <Helmet>
          <title>JUR Records - {title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={desc} />
          <meta
            property="og:image"
            content={`https://jurrecords.ch${image && image.fluid.src}`}
          />
          <meta property="og:url" content={href} />
        </Helmet>
      )}

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <BackTo to="/events">Alle Events</BackTo>
              <h1>{title}</h1>
              <div className="image-container">
                {image && !!image.fluid ? (
                  <Img {...image} />
                ) : (
                  <div
                    className="full-width-image-container margin-top-0"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  />
                )}
              </div>
              <PageContent className="content" content={content} />
              <h2>Time Table</h2>
              <TimeTable
                timeTable={parseTable(timeTable, isPreview)}
                crew={crew}
                artists={artists}
              />
              <h2>Wo? {mapLocationShortName(location)}</h2>
              <Map
                name={mapLocationName(location)}
                location={mapLocation(location, locationAlt)}
              />
              <h2>Facebook Link</h2>
              <a
                title={`${title} on facebook!`}
                href={fbLink}
                rel="noopener noreferrer"
                target="_blank"
                className={classNames(styles.link, styles.fb)}
              >
                <IconFacebook />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

EventPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const EventPage = ({ data, ...props }) => {
  const { markdownRemark: post, artists, crew } = data

  return (
    <EventPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      image={post.frontmatter.image && post.frontmatter.image.childImageSharp}
      content={post.html}
      timeTable={post.frontmatter.timeTable}
      fbLink={post.frontmatter.fbLink}
      location={post.frontmatter.location}
      locationAlt={post.frontmatter.locationAlt}
      href={props.location.href}
      artists={artists.edges}
      crew={crew.edges}
    />
  )
}

EventPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EventPage

export const eventPageQuery = graphql`
  query EventPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        location
        locationAlt
        fbLink
        image {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        timeTable {
          act
          label
          time
        }
      }
    }
    artists: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "artist-entry" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            page
          }
        }
      }
    }
    crew: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "crew-entry" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
