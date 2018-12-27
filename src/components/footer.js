import React from 'react'
import { Link } from 'gatsby'
import Form from '../components/form'
import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.section} id="contact">
    <div className="wrapper">
      <div className="grid">
        <div className="grid-col col-1-3">
          <ul className={styles.nav}>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/works">works</Link>
            </li>
            <li>
              <a href="https://www.etsy.com/shop/MelettoArt">store</a>
            </li>
          </ul>
        </div>
        <div className="grid-col col-1-3">
          <Form />
        </div>
      </div>
      <div className={styles.secondFooter}>
        <div className="grid">
          <div className="grid-col col-1-3">
            <a className={styles.email} href="mailto:meletto.art@gmail.com">
              meletto.art@gmail.com
            </a>
          </div>
          <div className="grid-col col-2-3">
            <div className={styles.social}>
              <a href="https://www.instagram.com/meletto.art/">instagram</a>
              <a href="https://www.facebook.com/meletto.art/">facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
