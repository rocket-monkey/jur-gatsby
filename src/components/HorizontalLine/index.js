import React from 'react'
import classNames from 'class-names'
import styles from './styles.module.scss'

export default ({ half }) => (
  <hr className={classNames(styles.hr, { [styles.half]: half })} />
)
