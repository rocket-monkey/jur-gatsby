import React from 'react'
import classNames from 'class-names'
import { Link } from 'gatsby'

import JurLogoFont from './icons/JurLogo'
import styles from './header.module.css'

const Header = ({ siteTitle, isHeaderTiny }) => (
  <>
    <section className={classNames(styles.section, { [styles.tiny]: isHeaderTiny })}>
      <Link to="/">
        <JurLogoFont />
      </Link>
    </section>
  </>
)

export default Header
