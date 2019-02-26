import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

export const SpiritPageTemplate = ({
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
          <div className="column is-10 is-offset-1">
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
          </div>
        </div>
      </div>
    </section>
  )
}

SpiritPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SpiritPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <SpiritPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      hero={null}
      content={post.html}
    />
  )
}

SpiritPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SpiritPage

export const spiritPageQuery = graphql`
  query SpiritPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
