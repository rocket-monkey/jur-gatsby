import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { capitalize } from '../../helpers/capitalize'
import Img from 'gatsby-image'
import styles from './styles.module.scss'

export default class WearOverviewPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log({ posts })

    return (
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1>Wear</h1>

              <table className={styles.table}>
                <tbody>
                  {posts.map(({ node: post }) => {
                    const firstImg =
                      post.frontmatter.images &&
                      post.frontmatter.images.length &&
                      post.frontmatter.images[0]

                    return (
                      <tr>
                        <td>
                          {firstImg && (
                            <Img {...firstImg.image.childImageSharp} />
                          )}
                        </td>
                        <td>
                          <h3>{post.frontmatter.title}</h3>
                          <p>{post.frontmatter.description}</p>
                        </td>
                        <td>{post.frontmatter.size.join(' / ')}</td>
                        <td>{capitalize(post.frontmatter.gender)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
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
            description
            size
            gender
            templateKey
            date(formatString: "MMMM DD, YYYY")
            images {
              image {
                childImageSharp {
                  fluid(maxWidth: 600) {
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
