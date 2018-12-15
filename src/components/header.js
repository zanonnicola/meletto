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
      <Link to="/works">works</Link>
      <Link to="/about">about</Link>
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
