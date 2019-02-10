import React from 'react'
import { Link } from 'gatsby'
import classNames from 'class-names'
import BodyClassName from 'react-body-classname'
import styles from './styles.module.scss'

const Menu = class extends React.Component {
  render() {
    return (
      <>
        <BodyClassName
          className={classNames({
            [styles.navActive]: this.props.active,
          })}
        >
          <div className={styles.nav} onClick={this.handleClick}>
            <div className={styles.content}>
              <ul className={styles.list}>
                <li
                  className={classNames(styles.item, {
                    [styles.active]: this.isActive('/'),
                  })}
                >
                  <Link to="/" className="hover-target">
                    home
                  </Link>
                </li>
                <li
                  className={classNames(styles.item, {
                    [styles.active]: this.isActive('/spirit'),
                  })}
                >
                  <Link to="/spirit" className="hover-target">
                    spirit
                  </Link>
                </li>
                <li
                  className={classNames(styles.item, {
                    [styles.active]: this.isActive('/crew'),
                  })}
                >
                  <Link to="/crew" className="hover-target">
                    crew
                  </Link>
                </li>
                <li
                  className={classNames(styles.item, {
                    [styles.active]: this.isActive('/events'),
                  })}
                >
                  <Link to="/events" className="hover-target">
                    events
                  </Link>
                </li>
                <li
                  className={classNames(styles.item, {
                    [styles.active]: this.isActive('/store'),
                  })}
                >
                  <Link to="/store" className="hover-target">
                    store
                  </Link>
                </li>
                <li
                  className={classNames(styles.item, {
                    [styles.active]: this.isActive('/ware'),
                  })}
                >
                  <Link to="/ware" className="hover-target">
                    ware
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
