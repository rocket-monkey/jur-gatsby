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
        <Link
          to="/start"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </Link>
        <Link
          to="/spirit"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Spirit
        </Link>
        <Link
          to="/crew"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Crew
        </Link>
        <Link
          to="/events"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Events
        </Link>
        <Link
          to="/store"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Store
        </Link>
        <Link
          to="/ware"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Ware
        </Link>
      </div>
    </BgVideo>
  </>
)

export default Header
