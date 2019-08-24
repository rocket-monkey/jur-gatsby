import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import BackTo from '../components/BackTo'

export const EventArchivePageTemplate = ({
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <BackTo to="/eventArchive">EventArchive</BackTo>
            <h1>{title}</h1>
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

EventArchivePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const EventArchivePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <EventArchivePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

EventArchivePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EventArchivePage

export const EventArchivePageQuery = graphql`
  query EventArchivePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
