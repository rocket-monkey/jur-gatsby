import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Content, { HTMLContent } from '../components/Content'

export const EventPageTemplate = ({
  title,
  content,
  image,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1>{title}</h1>
            {!!image.fluid ? (
              <Img {...image} />
            ) : (
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            )}
            <PageContent className="content" content={content} />
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
