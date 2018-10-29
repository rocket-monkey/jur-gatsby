import React from 'react'
import classNames from 'class-names'
import { Link } from 'gatsby'

import JurLogo from './icons/JurLogoFont'
import styles from './workInProgress.module.css'

const Header = ({ siteTitle, isHeaderTiny }) => (
  <div className={styles.wrapper}>
    <JurLogo />
    <div>work in progress..</div>
  </div>
)

export default Header
