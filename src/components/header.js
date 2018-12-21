import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.css'
import logo from './assets/logo.svg'

const Header = ({ siteTitle }) => (
  <nav className={styles.nav}>
    <Link to="/" className="global-logo">
      <img src={logo} alt={siteTitle} />
    </Link>
    <div className={styles.navLinks}>
      <div className="wrapper">
        <div className="grid">
          <div className="grid-col col-2-3">&nbsp;</div>
          <div className="grid-col col-1-3">
            <Link to="/works">works</Link>
            <a href="#contact">contact</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
