import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import classNames from 'class-names'
import IconFacebook from '../components/icons/Facebook'
import styles from './store-page.module.scss'
import Content, { HTMLContent } from '../components/Content'
import HorizontalLine from '../components/HorizontalLine'

export const StorePageTemplate = ({
  title,
  hero,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div
            className={classNames('column is-10 is-offset-1', styles.wrapper)}
          >
            <h1>{title}</h1>
            {hero && !!hero.fluid ? (
              <Img {...hero} />
            ) : (
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url(${hero})`,
                }}
              />
            )}
            <HorizontalLine />
            <PageContent className="content" content={content} />
            <p>JUR Store auf Facebook:</p>
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
      hero={post.frontmatter.image.childImageSharp}
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
