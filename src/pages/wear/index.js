import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import MasonryLayout from 'react-masonry-layout'
import classNames from 'class-names'
import Img from 'gatsby-image'
import styles from './styles.module.scss'

export default class WearOverviewPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1>Wear</h1>

              <MasonryLayout
                id="masonry-layout"
                sizes={[
                  { columns: 2, gutter: 10 },
                  { mq: '768px', columns: 3, gutter: 15 },
                  { mq: '1024px', columns: 3, gutter: 25 },
                ]}
              >
                {posts.map(({ node: post }, i) => {
                  const even = i % 2 === 0
                  console.log({ post })

                  return (
                    <div
                      key={post.id}
                      className={classNames(styles.wear, {
                        [styles.even]: even,
                        [styles.odd]: !even,
                      })}
                    >
                      {/* <Img {...post.frontmatter.image.childImageSharp} /> */}
                    </div>
                  )
                })}
              </MasonryLayout>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

WearOverviewPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const wearOverviewQuery = graphql`
  query WearOverviewQuery {
    wear: markdownRemark(frontmatter: { templateKey: { eq: "wear-page" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "wear-entry" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            images {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
