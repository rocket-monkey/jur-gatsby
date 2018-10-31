import React from 'react'
import classNames from 'class-names'
import { Link } from 'gatsby'

import JurLogoFont from './icons/JurLogoFont'
import BgVideo from './bgVideo'
import styles from './header.module.css'

const Header = ({ siteTitle, isSticky }) => (
  <>
    <section className={classNames(styles.section)}>
      <Link to="/start">
        <JurLogoFont />
      </Link>
    </section>

    <BgVideo>
      <div className={styles.navigation}>
        <Link to="/start" className={styles.link} activeClassName={styles.activeLink}>
          Home
        </Link>
        <Link to="/events" className={styles.link} activeClassName={styles.activeLink}>
          Events
        </Link>
        <Link to="/merchandising" className={styles.link} activeClassName={styles.activeLink}>
          Merchandising
        </Link>
        <Link to="/store" className={styles.link} activeClassName={styles.activeLink}>
          JUR Store
        </Link>
      </div>
    </BgVideo>
  </>
)

export default Header
