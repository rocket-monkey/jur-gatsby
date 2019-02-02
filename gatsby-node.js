/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

const getPrefix = type => {
  switch (type) {
    case 'content':
      return '/content'

    default:
      return ''
  }
}

const getTemplate = type => {
  switch (type) {
    case 'content':
      return 'contentTemplate'

    default:
      return 'blogTemplate'
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              type
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { path: slug } = node.frontmatter
      const type = node.frontmatter.type
      const pathName = `/${type}/${slug}/`
      console.log('create page:', slug, type, pathName)
      createPage({
        path: pathName,
        component: path.resolve(`./src/templates/${getTemplate(type)}.js`),
        // If you have a layout component at src/layouts/blog-layout.js
        // The context is passed as props to the component as well
        // as into the component's GraphQL query.
        context: {
          slug,
        },
      })
    })
  })
}
