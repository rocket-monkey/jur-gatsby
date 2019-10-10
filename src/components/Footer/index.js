import React from 'react'
import classNames from 'class-names'
import JurLogoFont from '../icons/JurLogo'
import IconFacebook from '../icons/Facebook'
import IconInstagram from '../icons/Instagram'
import styles from './styles.module.scss'

const Footer = ({ data }) => {
  return (
    <section className={classNames('section', styles.footer)}>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className={styles.logo}>
              <JurLogoFont />
            </div>
            JUR Records
            <br />
            <span>Ochsengässli 7</span>
            <br />
            <span>5000 Aarau</span>
            <div className={styles.socialMedia}>
              <a
                title="Like us on facebook!"
                href="https://www.facebook.com/JUR-Records-834721536574427/"
                rel="noopener noreferrer"
                target="_blank"
                className={classNames(styles.link, styles.fb)}
              >
                <IconFacebook />
              </a>
              <a
                title="Follow us on instagram!"
                href="https://www.instagram.com/jur_records/"
                rel="noopener noreferrer"
                target="_blank"
                className={classNames(styles.link, styles.fb)}
              >
                <IconInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
