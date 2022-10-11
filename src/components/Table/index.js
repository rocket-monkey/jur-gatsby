import React from 'react'
import { table } from './styles.module.scss'

const Table = ({ children }) => (
  <table className={table}>
    <tbody>{children}</tbody>
  </table>
)

export default Table
