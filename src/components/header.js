import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.header}>
    <div className={styles.inner}>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
