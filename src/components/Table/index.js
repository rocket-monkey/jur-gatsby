import React from 'react'
import styles from './styles.module.scss'

const Table = ({ children }) => (
  <table className={styles.table}>
    <tbody>{children}</tbody>
  </table>
)

export default Table
