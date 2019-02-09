import React from 'react'
import { Link } from 'gatsby'
import classNames from 'class-names'
import { CSSTransition } from 'react-transition-group'
import JurLogo from '../icons/JurLogo'
import JurLogoFont from '../icons/JurLogoFont'
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
          timeout={600}
          unmountOnExit
          mountOnEnter
        >
          <div className={styles.navbar}>
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
        </CSSTransition>
      </>
    )
  }

  handleBurgerClick = () => {
    this.setState({ burgerActive: !this.state.burgerActive })
  }
}

export default Navbar
