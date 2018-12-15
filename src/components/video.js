import React from 'react'
import { withPrefix } from 'gatsby'
import styles from './video.module.css'

const Video = () => (
  <section className={styles.videoWrapper}>
    <video loop autoPlay muted src={withPrefix('/video.mp4')} />
  </section>
)

export default Video
