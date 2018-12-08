import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className="wrapper">
    <nav className={styles.nav}>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div className={styles.navLinks}>
        <Link to="/works">works</Link>
        <Link to="/about">about</Link>
      </div>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
