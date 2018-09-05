import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import './global.css'
import styles from './layout.module.css'

const BlogLayout = ({ slug, title, children }) => (
  <>
    <Helmet
      title={slug}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header siteTitle="JUR Records" />
    <div className={styles.layout}>
      {children}
    </div>
  </>
)

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout
