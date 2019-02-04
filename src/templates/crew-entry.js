import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Content, { HTMLContent } from '../components/Content'

export const CrewPageTemplate = ({
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
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <Img {...image} />
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

CrewPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CrewPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <CrewPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      image={post.frontmatter.image.childImageSharp}
    />
  )
}

CrewPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CrewPage

export const crewPageQuery = graphql`
  query CrewPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
