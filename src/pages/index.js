import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi dnb heads</h1>
    <p>Welcome to your new JUR Records site.</p>
    <p>Now go build something great.</p>

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
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              return (
                <Link to={`/${node.frontmatter.path}`}>{node.frontmatter.title}</Link>
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

export default IndexPage
