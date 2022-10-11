import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import JurLogoFont from '../icons/JurLogoFont'
import { section, wrapper, showLogo } from './styles.module.scss'

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
      // document.querySelector('#idForSafari').play()
      this.refVideo.current.play()
      this.refVideo.current.controls = false
    }, 150)
    // if (isSafari) {
    // }
  }

  render() {
    const { showSection } = this.state
    return (
      <>
        {showSection && (
          <section className={classNames(section)}>
            <Link to="/">
              <JurLogoFont />
            </Link>
          </section>
        )}

        <div
          className={classNames(wrapper, {
            [showLogo]: this.state.showLogo,
          })}
          ref={this.ref}
        >
          <video playsInline autoPlay muted loop ref={this.refVideo}>
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
