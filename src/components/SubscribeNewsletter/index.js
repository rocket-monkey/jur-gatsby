import React, { PureComponent } from 'react'
import classNames from 'class-names'
import IconNewsLetter from '../icons/Email'
import styles from './styles.module.scss'

export default class SubscribeNews extends PureComponent {
  state = {
    visible: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkVisibility)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkVisibility)
  }

  render() {
    const { visible } = this.state
    return (
      <a
        title="Jurrecords Newsletter"
        href="https://mailchi.mp/0cb800a8f1d4/jurrecords-newsletter"
        rel="noopener noreferrer"
        target="_blank"
        className={classNames(styles.newsFloating, {
          [styles.visible]: visible,
        })}
      >
        <IconNewsLetter />
      </a>
    )
  }

  checkVisibility = () => {
    if (window.scrollY > 250) {
      this.setState({ visible: true })
    } else if (window.scrollY < 100) {
      this.setState({ visible: false })
    }
  }
}
