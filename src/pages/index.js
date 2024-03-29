import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
// import BlogPosts from '../components/BlogPosts'
import Events from '../components/Events'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    // const { edges: posts } = data.blogPosts
    const { edges: events } = data.events

    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta property="og:title" content="JUR Records" />
          <meta
            property="og:description"
            content="Welcome to JUR Records, dem Schweizer Drum and Bass Label seit 1991."
          />
          <meta
            property="og:image"
            content="blob:https://www.jurrecords.ch/ca2b4c68-2d4c-4fbd-a496-41138572f069"
          />
          <meta property="og:url" content="https://www.jurrecords.ch" />
        </Helmet>
        <section className="section">
          <div className="container content">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <Events teaser events={events} />

                <h2>{data.home.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: data.home.html }} />
                {/*
                    <BlogPosts posts={posts} />
                  */}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    home: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
          }
        }
      }
    }
    events: allMarkdownRemark(
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
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
            dateShort: date(formatString: "DD.MM.YY")
            dateJs: date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            timeTable {
              time
            }
          }
        }
      }
    }
  }
`
