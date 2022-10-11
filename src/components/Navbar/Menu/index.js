import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import BodyClassName from 'react-body-classname'
import {
  nav,
  content,
  list,
  item,
  active,
  navActive,
} from './styles.module.scss'

const Menu = class extends React.Component {
  render() {
    return (
      <>
        <BodyClassName
          className={classNames({
            [navActive]: this.props.active,
          })}
        >
          <div className={nav} onClick={this.handleClick}>
            <div className={content}>
              <ul className={list}>
                <li
                  className={classNames(item, {
                    [active]: this.isActive('/'),
                  })}
                >
                  <Link to="/" className="hover-target">
                    home
                  </Link>
                </li>
                <li
                  className={classNames(item, {
                    [active]: this.isActive('/spirit'),
                  })}
                >
                  <Link to="/spirit" className="hover-target">
                    spirit
                  </Link>
                </li>
                <li
                  className={classNames(item, {
                    [active]: this.isActive('/crew'),
                  })}
                >
                  <Link to="/crew" className="hover-target">
                    crew
                  </Link>
                </li>
                <li
                  className={classNames(item, {
                    [active]: this.isActive('/events'),
                  })}
                >
                  <Link to="/events" className="hover-target">
                    events
                  </Link>
                </li>
                <li
                  className={classNames(item, {
                    [active]: this.isActive('/store'),
                  })}
                >
                  <Link to="/store" className="hover-target">
                    store
                  </Link>
                </li>
                <li
                  className={classNames(item, {
                    [active]: this.isActive('/wear'),
                  })}
                >
                  <Link to="/wear" className="hover-target">
                    wear
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </BodyClassName>
      </>
    )
  }

  isActive = type => {
    return this.props.location.pathname === type
  }

  handleClick = () => {
    setTimeout(() => {
      this.props.setNavbarState({ burgerActive: false })
    }, 150)
  }
}

export default Menu
