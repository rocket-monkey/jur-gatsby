import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default class WareOverviewPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1>Ware</h1>

              <p>coming soon!</p>
              {/*

              {posts.map(({ node: post }) => {
                return (
                  <div
                    className="content"
                    style={{ border: '1px solid #333', padding: '2em 4em' }}
                    key={post.id}
                  >
                    <p>
                      <Link className="has-text-primary" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <Img fixed={post.frontmatter.image.childImageSharp.fixed} />
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-small" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </div>
                )
              })}
              */}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

WareOverviewPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const wareOverviewQuery = graphql`
  query WareOverviewQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "ware-entry" } } }
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
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
