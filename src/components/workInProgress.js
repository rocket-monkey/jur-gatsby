import React from 'react'
import classNames from 'class-names'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import GlobalCssTag from './globalCss'
import JurLogo from './icons/JurLogoFont'
import styles from './workInProgress.module.css'

const Header = ({ siteTitle, isHeaderTiny }) => (
  <div className={styles.wrapper}>
    <Helmet>
      <html lang="en" />
      <link href="https://fonts.googleapis.com/css?family=Archivo+Black|Montserrat" rel="stylesheet" />
    </Helmet>
    <JurLogo />
    <div>big things are coming soon - it's going to be very sexy :)</div>
    <GlobalCssTag />
  </div>
)

export default Header
