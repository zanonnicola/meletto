import React from 'react'
import { Link } from 'gatsby'
import Form from '../components/form'
import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.section}>
    <div className="wrapper">
      <div className="flex">
        <div className="flex-40">
          <ul className={styles.nav}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="flex-60">
          <Form />
        </div>
      </div>
      <div className={styles.secondFooter}>
        <div className="flex">
          <div className="flex-40">
            <a className={styles.email} href="mailto:meletto.art@gmail.com">
              meletto.art@gmail.com
            </a>
          </div>
          <div className="flex-60">
            <div className={styles.social}>
              <a href="#0">instagram</a>
              <a href="#0">facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
