import React from 'react'
import { Link } from 'gatsby'
import classNames from 'class-names'
import JurLogo from '../icons/JurLogo'
import styles from './styles.module.scss'

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className={classNames('navbar-brand', styles.navbar)}>
            <Link to="/" className="navbar-item">
              <JurLogo />
            </Link>
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-centered">
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
        </div>
      </nav>
    )
  }
}

export default Navbar
