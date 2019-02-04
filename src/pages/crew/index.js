import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './styles.module.scss'

export default class CrewOverviewPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="has-text-weight-bold is-size-2">Crew Members</h1>

              <div className={styles.container}>
                {posts.map(({ node: post }) => {
                  return (
                    <Link
                      key={post.id}
                      className={styles.crew}
                      to={post.fields.slug}
                    >
                      <Img {...post.frontmatter.image.childImageSharp} />
                      <h5>
                        <span>{post.frontmatter.title}</span>
                      </h5>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

CrewOverviewPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

/*
fixed(width: 125, height: 125) {
  ...GatsbyImageSharpFixed
}
*/
export const crewOverviewQuery = graphql`
  query CrewOverviewQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "crew-entry" } } }
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
`
