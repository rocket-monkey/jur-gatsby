import React from 'react'
import { Link } from 'gatsby'
import IconChevronLeft from '../icons/ChevronLeft'
import styles from './styles.module.scss'

const BackTo = ({ to, children }) => (
  <Link to={to} className={styles.back}>
    <IconChevronLeft />
    {children}
  </Link>
)

export default BackTo
