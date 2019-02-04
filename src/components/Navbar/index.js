import React from 'react'
import { Link } from 'gatsby'
import classNames from 'class-names'
import { CSSTransition } from 'react-transition-group'
import JurLogo from '../icons/JurLogo'
import styles from './styles.module.scss'

const Navbar = class extends React.Component {
  state = {
    burgerActive: false,
  }

  componentDidMount() {
    if (window.innerWidth >= 1088) {
      this.setState({ burgerActive: true })
    }
  }

  render() {
    const { burgerActive } = this.state

    const menuJsx = (
      <div className={styles.menu}>
        <div
          className={classNames(
            'navbar-start',
            'has-text-centered',
            styles.links
          )}
          onClick={this.handleLinkClick}
        >
          <Link className="navbar-item" to="/spirit">
            Spirit
          </Link>
          <Link className="navbar-item" to="/crew">
            Crew
          </Link>
          <Link className="navbar-item" to="/events">
            Events
          </Link>
          <Link className="navbar-item" to="/store">
            Store
          </Link>
          <Link className="navbar-item" to="/ware">
            Ware
          </Link>
          {/*
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          */}
        </div>
        <div className="navbar-end has-text-centered" />
      </div>
    )

    return (
      <nav
        className={classNames('navbar', styles.navbar)}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={classNames('navbar-item', styles.logo, {
                [styles.logoActive]: burgerActive,
              })}
              onClick={this.handleLinkClick}
            >
              <JurLogo />
            </Link>

            {/* Hamburger menu */}
            <div
              className={classNames('navbar-burger', 'burger', styles.burger, {
                'is-active': burgerActive,
              })}
              onClick={this.handleBurgerClick}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <CSSTransition
            in={burgerActive}
            classNames={{
              enter: styles.enter,
              enterActive: styles.enterActive,
              appear: styles.enter,
              appearActive: styles.enterActive,
              exit: styles.exit,
              exitActive: styles.exitActive,
              exitDone: styles.exitDone,
            }}
            timeout={150}
            unmountOnExit
            mountOnEnter
          >
            {menuJsx}
          </CSSTransition>
        </div>
      </nav>
    )
  }

  handleBurgerClick = () => {
    this.setState({ burgerActive: !this.state.burgerActive })
  }

  handleLinkClick = () => {
    this.setState({ burgerActive: false })
  }
}

export default Navbar
