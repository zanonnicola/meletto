import React from 'react'
import styles from './form.module.css'

const Form = () => (
  <form
    name="contact"
    method="POST"
    action="#"
    netlify-honeypot="bot-field"
    data-netlify="true"
    className={styles.form}
  >
    <div className={styles.inputWrapper}>
      <input
        type="text"
        name="name"
        id="inpName"
        required
        placeholder="full name"
      />
    </div>
    <div className={styles.inputWrapper}>
      <input
        type="email"
        name="email"
        id="inpEmail"
        required
        placeholder="your email"
      />
    </div>
    <div className={styles.inputWrapper}>
      <label htmlFor="inpArea">Message</label>
      <textarea name="message" id="inpArea" cols="30" rows="10" required />
    </div>
    <input className={styles.submit} type="submit" value="Send" />
  </form>
)

export default Form
