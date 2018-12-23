import React from 'react'
import { withPrefix } from 'gatsby'
import styles from './video.module.css'

class Video extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    isMobile: false,
  }

  handleVideo = () => {
    this.setState({ isMobile: !this.state.isMobile })
  }

  componentDidMount() {
    this.setState({ isMobile: window.matchMedia('(max-width: 600px)').matches })
    this.media = window.matchMedia('(max-width: 600px)')
    this.media.addListener(this.handleVideo)
  }

  componentWillUnmount() {
    this.media.removeListener(this.handleVideo)
  }

  render() {
    const { isMobile } = this.state
    return (
      <section
        className={isMobile ? styles.videoWrapperMobile : styles.videoWrapper}
      >
        <video
          loop
          playsInline
          autoPlay
          muted
          poster={
            isMobile
              ? withPrefix('/poster-mobile.jpg')
              : withPrefix('/poster-desktop.jpg')
          }
          src={
            isMobile
              ? withPrefix('/video-mobile.mp4')
              : withPrefix('/video.mp4')
          }
        />
      </section>
    )
  }
}

export default Video
