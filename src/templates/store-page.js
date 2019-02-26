import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import classNames from 'class-names'
import IconFacebook from '../components/icons/Facebook'
import styles from './store-page.module.scss'
import Content, { HTMLContent } from '../components/Content'

export const StorePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1>{title}</h1>
            <PageContent className="content" content={content} />

            <a
              title="Follow us on facebook!"
              href="https://www.facebook.com/groups/542491245766121/about/"
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
  )
}

StorePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const StorePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <StorePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

StorePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default StorePage

export const storePageQuery = graphql`
  query StorePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
