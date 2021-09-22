import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
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
              <Events events={events} archive={data.archive} />
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
      sort: { order: ASC, fields: [frontmatter___date] }
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
            dateShort: date(formatString: "DD.MM.YY")
            dateJs: date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fluid(maxWidth: 1115) {
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
    archive: markdownRemark(
      frontmatter: { templateKey: { eq: "eventArchive-page" } }
    ) {
      html
      frontmatter {
        title
        templateKey
        # flyers {
        #   label
        #   image {
        #     childImageSharp {
        #       fluid(maxWidth: 1115) {
        #         ...GatsbyImageSharpFluid_withWebp
        #       }
        #     }
        #   }
        # }
      }
    }
  }
`
