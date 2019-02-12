import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Content, { HTMLContent } from '../components/Content'
import TimeTable from '../components/TimeTable'
import BackTo from '../components/BackTo'
import Map from '../components/Map'

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

const mapLocation = location => {
  switch (location) {
    case 'amboss-rampe':
      return { lat: 47.381717, lng: 8.531592 }
    default:
    case 'kiff-aarau':
      return { lat: 47.398671, lng: 8.064249 }
  }
}

const mapLocationShortName = location => {
  switch (location) {
    case 'amboss-rampe':
      return 'Amboss Rampe, Zürich'
    default:
    case 'kiff-aarau':
      return 'KIFF, Aarau'
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
      return 'KIFF, Tellistrasse, Aarau'
  }
}

export const EventPageTemplate = ({
  isPreview,
  title,
  content,
  image,
  timeTable,
  location,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
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
            <TimeTable timeTable={parseTable(timeTable, isPreview)} />
            <h2>Wo? {mapLocationShortName(location)}</h2>
            {!isPreview && (
              <Map
                name={mapLocationName(location)}
                location={mapLocation(location)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

EventPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const EventPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <EventPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      image={post.frontmatter.image.childImageSharp}
      content={post.html}
      timeTable={post.frontmatter.timeTable}
      location={post.frontmatter.location}
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
  }
`
