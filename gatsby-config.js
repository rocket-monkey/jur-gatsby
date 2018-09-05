module.exports = {
  siteMetadata: {
    title: 'JUR Records',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'jurrecords.ch',
        short_name: 'jur-gatsby',
        start_url: '/',
        background_color: '#000',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/logo512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/cms/blog`,
        name: 'blog',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-postcss',
  ],
}
