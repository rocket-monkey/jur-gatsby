import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import classNames from 'classnames'
import MasonryLayout from 'react-masonry-layout'
import Img from 'gatsby-image'
import { crew, even, odd } from './styles.module.scss'

export default class CrewOverviewPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const sortedCrew = posts.sort((a, b) => {
      const titleA = a.node.frontmatter.title.toLowerCase()
      const titleB = b.node.frontmatter.title.toLowerCase()
      if (titleA < titleB) {
        return -1
      }
      if (titleA > titleB) {
        return 1
      }
      return 0
    })

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
                  { mq: '768px', columns: 3, gutter: 15 },
                  { mq: '1024px', columns: 3, gutter: 25 },
                ]}
              >
                {sortedCrew.map(({ node: post }, i) => {
                  const isEven = i % 2 === 0
                  return (
                    <Link
                      key={post.id}
                      className={classNames(crew, {
                        [even]: isEven,
                        [odd]: !isEven,
                      })}
                      to={post.fields.slug}
                    >
                      <Img {...post.frontmatter.image.childImageSharp} />
                      <h5>
                        <span>{post.frontmatter.title}</span>
                      </h5>
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
