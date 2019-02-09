import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Events from '../../components/Events'

export default class EventsOverviewPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: events } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Events events={events} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

EventsOverviewPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const eventsOverviewQuery = graphql`
  query EventsOverviewQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "event-post" } } }
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
                fluid(maxWidth: 2048) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            timeTable {
              act
              label
              time
            }
          }
        }
      }
    }
  }
`
