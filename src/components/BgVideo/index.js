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
    top: '0%',
    transform: 'translate(-50%, 0)',
  }

  parallaxImg = () => {
    return
    var speed = 1
    var imgY = this.ref.current.getBoundingClientRect().top
    var winY = window.scrollY
    var winH = window.innerHeight
    var parentH = this.ref.current.offsetHeight

    // The next pixel to show on screen
    var winBottom = winY + winH

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = (winBottom - imgY) * speed
      // Max number of pixels until block disappear
      var imgTop = winH + parentH
      // Porcentage between start showing until disappearing
      var imgPercent = (imgBottom / imgTop) * 100 + (50 - speed * 50)
    }
    this.setState({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)',
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showLogo: true })
    }, 800)
    window.addEventListener('scroll', this.parallaxImg, { passive: true })

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
    window.removeEventListener('scroll', this.parallaxImg, { passive: true })
  }

  render() {
    const styleObj = { top: this.state.top, transform: this.state.transform }
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

          <JurLogoFont style={styleObj} />
        </div>

        {this.props.children}
      </>
    )
  }
}
