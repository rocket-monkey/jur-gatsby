import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import WorkInProgress from '../components/workInProgress'

const HomePage = () => {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query GetHomeQuery {
            markdownRemark(frontmatter: { path: { eq: "home" } }) {
              html
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                galleryImages
              }
            }
          }
        `}
        render={data => {
          console.log('data', data)
          const { markdownRemark } = data // data.markdownRemark holds our post data
          const { frontmatter, html } = markdownRemark
          return (
            <div className="blog-post">
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.date}</h2>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              {frontmatter.galleryImages.map((image, idx) => (
                <Image key={idx} name={image} />
              ))}
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

export default HomePage
