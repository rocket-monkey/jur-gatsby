import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import WorkInProgress from '../components/workInProgress'

const IndexPage = () => {
  return (
    <Layout>
      <WorkInProgress />
    </Layout>
  )

  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query BlogListingQuery {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    path
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <div id="data">
              {data.allMarkdownRemark.edges.map(({ node }, index) => {
                return (
                  <Link to={`/${node.frontmatter.path}`} key={index}>{node.frontmatter.title}</Link>
                )
              })}
            </div>
          )
        }}
      />
      {/*
        <Link to="/page-2/">Go to page 2</Link>
      */}
    </Layout>
  )
}

export default IndexPage
