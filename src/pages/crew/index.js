import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import MasonryLayout from 'react-masonry-layout'
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
              <h1>Crew Members</h1>

              <MasonryLayout
                id="masonry-layout"
                sizes={[
                  { columns: 2, gutter: 10 },
                  { mq: '768px', columns: 2, gutter: 15 },
                  { mq: '1024px', columns: 3, gutter: 25 },
                ]}
                className={styles.layout}
              >
                {posts.map(({ node: post }, i) => {
                  let height = i % 2 === 0 ? 200 : 100
                  return (
                    <Link
                      key={post.id}
                      className={styles.crew}
                      to={post.fields.slug}
                    >
                      <div
                        className={styles.card}
                        style={{
                          height: `${height}px`,
                          lineHeight: `${height}px`,
                          color: 'white',
                          fontSize: '32px',
                          display: 'block',
                          background: 'rgba(0,0,0,0.7)',
                        }}
                      >
                        <h5>{this.renderTitle(post.frontmatter.title)}</h5>
                        <div>
                          <Img
                            {...post.frontmatter.image.childImageSharp}
                            styles={{ width: 'inherit' }}
                          />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </MasonryLayout>
            </div>
          </div>
        </div>
      </section>
    )
  }

  renderTitle = title => {
    const parts = title.split(' ')
    return parts.map((p, i) => <span key={`title-part-${i}`}>{p}</span>)
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
                fixed(width: 500, height: 500) {
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
