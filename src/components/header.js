import React from 'react'
import classNames from 'class-names'
import { Link } from 'gatsby'

import JurLogoFont from './icons/JurLogoFont'
import styles from './header.module.css'

const Header = ({ siteTitle, isHeaderTiny }) => (
  <>
    <section className={classNames(styles.section, { [styles.tiny]: isHeaderTiny })}>
      <Link to="/"><JurLogoFont /></Link>
    </section>
    <div className={classNames(styles.dummy, { [styles.tiny]: isHeaderTiny })} />
  </>
)

export default Header
