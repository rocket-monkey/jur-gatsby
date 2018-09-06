/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

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
            }
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const slug = node.frontmatter.path
        console.log('create page:', slug)
        createPage({
          path: `/${slug}/`,
          component: path.resolve(`./src/templates/blogTemplate.js`),
          // If you have a layout component at src/layouts/blog-layout.js
          // The context is passed as props to the component as well
          // as into the component's GraphQL query.
          context: {
            slug
          },
        })
      });
    });
};