import React from 'react'
import { Link } from 'gatsby'
import classNames from 'class-names'
import JurLogoFont from '../icons/JurLogoFont'
import BgVideo from '../../components/BgVideo'
import Menu from './Menu'
import styles from './styles.module.scss'

const Navbar = class extends React.Component {
  state = {
    burgerActive: false,
  }

  render() {
    const { burgerActive } = this.state
    return (
      <>
        <section className={classNames(styles.section)}>
          <Link to="/">
            <JurLogoFont />
          </Link>
        </section>

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

        <Menu
          active={burgerActive}
          location={this.props.location}
          setNavbarState={this.setState.bind(this)}
        />
      </>
    )
  }

  handleBurgerClick = () => {
    this.setState({ burgerActive: !this.state.burgerActive })
  }
}

export default Navbar
