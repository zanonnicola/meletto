import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Nuka from 'nuka-carousel'
import { Media } from 'react-breakpoints'
import Img from 'gatsby-image'
import styles from './carousel.module.css'

const Carousel = ({ items }) => {
  const images = items.map(({ node }, i) => {
    const { frontmatter, fields } = node
    return (
      <div key={`carousel-${i}`} className={styles.gridCol}>
        <Link
          to={fields.slug.replace('gallery', 'works')}
          className={styles.box}
        >
          <div className={styles.boxInner}>
            <Img fluid={frontmatter.thumbnail.childImageSharp.fluid} />
          </div>
          <div className={styles.boxInner}>
            <Img fluid={frontmatter.thumbnailOnHover.childImageSharp.fluid} />
          </div>
        </Link>
        <h3 className={styles.title}>{frontmatter.title}</h3>
        <p className={styles.description}>{frontmatter.description}</p>
      </div>
    )
  })
  return (
    <section className={styles.section}>
      <div className="wrapper">
        <h2 className={styles.heading}>other works</h2>
      </div>
      <Media>
        {({ breakpoints, currentBreakpoint }) => {
          switch (currentBreakpoint) {
            case 'mobile':
              return (
                <div className={styles.fullWidth}>
                  <div className={styles.grid}>
                    <div className={styles.innerGrid}>{images}</div>
                  </div>
                </div>
              )
            case 'desktop':
              return (
                <div className={styles.carousel}>
                  <Nuka
                    cellSpacing={60}
                    slideWidth="277px"
                    withoutControls={true}
                    wrapAround={true}
                    cellAlign="center"
                    autoplay={true}
                    swiping={true}
                    easing="easeQuadInOut"
                    edgeEasing="easeQuadInOut"
                  >
                    {images}
                  </Nuka>
                </div>
              )
            case 'wide':
              return (
                <div className={styles.carousel}>
                  <Nuka
                    cellSpacing={60}
                    slideWidth="277px"
                    withoutControls={true}
                    wrapAround={true}
                    cellAlign="left"
                    autoplay={true}
                    swiping={true}
                    easing="easeQuadInOut"
                    edgeEasing="easeQuadInOut"
                  >
                    {images}
                  </Nuka>
                </div>
              )
          }
        }}
      </Media>
    </section>
  )
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
}

Carousel.defaultProps = {
  items: [],
}

export default Carousel
