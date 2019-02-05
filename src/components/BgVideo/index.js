import React, { PureComponent } from 'react'
import classNames from 'class-names'

import JurLogo from '../icons/JurLogo'
import JurLogoFont from '../icons/JurLogoFont'
import styles from './styles.module.scss'

export default class BgVideo extends PureComponent {
  ref = React.createRef()
  refVideo = React.createRef()
  state = {
    showLogo: false,
    top: 0,
  }

  onScroll = event => {
    const { top } = this.state
    const hV = window.innerHeight
    const hE = this.ref.current.offsetHeight
    const hB = this.refVideo.current.offsetHeight
    const yV = window.pageYOffset //Relative to document.
    const yE = this.ref.current.getBoundingClientRect().top //Relative to view-port.
    const yB = ((hB - hE) * yE) / (hE - hV) //Relative to element.

    if (!window.__BGVID_HEIGHT__) {
      window.__BGVID_HEIGHT__ = hE
    }

    let speed = 5
    if (window.innerWidth > 960) {
      speed = 1
    }

    const update = { top: yB * speed }
    this.setState(update)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showLogo: true })
    }, 800)
    window.addEventListener('scroll', this.onScroll, { passive: true })

    // fuck you cock-juggling thunder-cunts @apple, FUCK YOU!
    const ua = navigator.userAgent.toLowerCase()
    const isSafari = ua.includes('safari/') && !ua.includes('chrome')
    if (isSafari) {
      setTimeout(() => {
        this.refVideo.current.play()
      }, 50)
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll, { passive: true })
  }

  render() {
    const styleObj = { top: `calc(50% + ${this.state.top}px)` }
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
            style={styleObj}
          >
            <source type="video/webm" src="/img/bgvideo.webm" />
            <source type="video/ogg" src="/img/bgvideo.ogg" />
            <source type="video/mp4" src="/img/bgvideo.mp4" />
          </video>

          <JurLogoFont />
        </div>

        {this.props.children}
      </>
    )
  }
}
