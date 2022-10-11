import React from 'react'
import classNames from 'classnames'
import { hr, half } from './styles.module.scss'

export default ({ half }) => <hr className={classNames(hr, { [half]: half })} />
