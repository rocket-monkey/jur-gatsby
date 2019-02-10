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
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showLogo: true })
    }, 800)

    // fuck you cock-juggling thunder-cunts @apple, FUCK YOU!
    const ua = navigator.userAgent.toLowerCase()
    const isSafari = ua.includes('safari/') && !ua.includes('chrome')
    if (isSafari) {
      setTimeout(() => {
        this.refVideo.current.play()
      }, 50)
    }
  }

  render() {
    return (
      <>
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
