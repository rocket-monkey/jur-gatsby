import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.scss'

const BackTo = ({ to, children }) => (
  <Link to={to} className={styles.back}>
    {children}
  </Link>
)

export default BackTo
