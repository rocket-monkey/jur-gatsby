import React from 'react'
import { Link } from 'gatsby'
import classNames from 'class-names'
import BgVideo from '../../components/BgVideo'
import styles from './styles.module.scss'

const Navbar = class extends React.Component {
  state = {
    burgerActive: false,
  }

  render() {
    const { burgerActive } = this.state
    return (
      <>
        <BgVideo />
        <div
          className={classNames('navbar-burger', 'burger', {
            'is-active': burgerActive,
          })}
          onClick={this.handleBurgerClick}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className={classNames(styles.navbar, { [styles.open]: burgerActive })}
        >
          <Link to="/spirit">Spirit</Link>
          <Link to="/crew">Crew</Link>
          <Link to="/events">Events</Link>
          <Link to="/store">Store</Link>
          <Link to="/ware">Ware</Link>
          {/*
            <Link to="/contact/examples">
              Form Examples
            </Link>
          */}
        </div>
      </>
    )
  }

  handleBurgerClick = () => {
    this.setState({ burgerActive: !this.state.burgerActive })
  }
}

export default Navbar
