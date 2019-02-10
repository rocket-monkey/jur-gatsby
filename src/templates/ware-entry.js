import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

export const WarePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1>{title}</h1>
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

WarePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const WarePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <WarePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

WarePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WarePage

export const warePageQuery = graphql`
  query WarePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
