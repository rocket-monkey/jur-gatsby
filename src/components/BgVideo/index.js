import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import classNames from 'class-names'

import JurLogoFont from '../icons/JurLogoFont'
import styles from './styles.module.scss'

export default class BgVideo extends PureComponent {
  ref = React.createRef()
  refVideo = React.createRef()

  state = {
    showLogo: false,
    showSection: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showLogo: true })
    }, 800)

    setTimeout(() => {
      this.setState({ showSection: true })
    }, 200)

    // fuck you cock-juggling thunder-cunts @apple, FUCK YOU!
    // const ua = navigator.userAgent.toLowerCase()
    // const isSafari = ua.includes('safari') && !ua.includes('chrome')
    setTimeout(() => {
      this.refVideo.current.play()
      const mhee = document.createElement('div')
      mhee.innerHTML = 'yiisss'
      document.body.appendChild(mhee)
    }, 150)
    // if (isSafari) {
    // }
  }

  render() {
    const { showSection } = this.state
    return (
      <>
        {showSection && (
          <section className={classNames(styles.section)}>
            <Link to="/">
              <JurLogoFont />
            </Link>
          </section>
        )}

        <div
          className={classNames(styles.wrapper, {
            [styles.showLogo]: this.state.showLogo,
          })}
          ref={this.ref}
        >
          <video
            id="idForSafari"
            playsInline
            autoPlay
            muted
            loop
            ref={this.refVideo}
          >
            <source type="video/webm" src="/img/bgvideo.webm" />
            <source type="video/ogg" src="/img/bgvideo.ogg" />
            <source type="video/mp4" src="/img/bgvideo.mp4" />
          </video>

          <Link to="/">
            <JurLogoFont />
          </Link>
        </div>

        {this.props.children}
      </>
    )
  }
}
