import React from 'react'
import classNames from 'class-names'
import JurLogoFont from '../icons/JurLogo'
import IconFacebook from '../icons/Facebook'
import styles from './styles.module.scss'

const Footer = ({ data }) => {
  return (
    <section className={classNames('section', styles.footer)}>
      <div className="container">
        <div className="columns">
          <div className={classNames('column is-offset-1', styles.logo)}>
            <JurLogoFont />
            JUR Records
            <br />
            <span>Ochsengässli</span>
            <br />
            <span>5000 Aarau</span>
          </div>
          <div className="column">
            <a
              href="https://www.facebook.com/JUR-Records-834721536574427/"
              rel="noopener noreferrer"
              target="_blank"
              className={classNames(styles.link, styles.fb)}
            >
              <IconFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
