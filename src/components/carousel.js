import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
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
        <div className={styles.grid}>
          <div className={styles.innerGrid}>{images}</div>
        </div>
      </div>
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
