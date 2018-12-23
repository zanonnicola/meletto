import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './css/home.module.css'
import Layout from '../components/layout'
import Video from '../components/video'
import Footer from '../components/footer'
import dx from '../components/assets/freccia-dx.svg'

const IndexPage = ({ data }) => (
  <Layout>
    <Video />
    <section className="section">
      <div className="wrapper">
        <h1 className="primary">meet the artist</h1>
        <h2 className="secondary">a brief story</h2>
        <div className="text-wrapper padding-top-50">
          <p>
            painting is probably the only thing I can actually do naturally, i
            mean letting everything go avoiding any kind of overthinking… this
            is why i still do it. being fascinated by the Italian Futurism’s
            aesthetic code and the colours of Impressionists, i tend to combine
            few pictorial techniques. from oil to inks, pastels and markers on
            canvas or wooden supports. i typically represent human-shaped
            figures in still poses but involved in dynamic illusory scenes to
            show their inner view in that specific moment… their feelings.
          </p>

          <p>
            when i’m not painting or wondering about new random projects, you
            can find me grabbing a warm cup of coffee or appreciating a nice
            piece of music. after years of local galleries and independent
            exhibitions, here’s my first online shop for you to enjoy.
          </p>
          <Link to="works" className={styles.goTo}>
            see my works now <img src={dx} alt="go" />
          </Link>
        </div>
      </div>
    </section>
    <figure className={styles.bioImg}>
      <div className={styles.bioImgWrapper}>
        <Img fluid={data.fileName.childImageSharp.fluid} />
      </div>
    </figure>
    <section className={styles.collage}>
      <div className={styles.collageFull}>
        <Img fluid={data.collage1.childImageSharp.fluid} />
      </div>
      <div className={styles.collage50}>
        <div className={styles.collage50ColL}>
          <Img fluid={data.collage2.childImageSharp.fluid} />
        </div>
        <div className={styles.collage50ColR}>
          <Img fluid={data.collage3.childImageSharp.fluid} />
        </div>
      </div>
      <div className={styles.collage32}>
        <div className={styles.collage32ColL}>
          <Img fluid={data.collage4.childImageSharp.fluid} />
        </div>
        <div className={styles.collage32ColR}>
          <Img fluid={data.collage5.childImageSharp.fluid} />
        </div>
      </div>
      <div className={styles.collage23}>
        <div className={styles.collage23ColL}>
          <Img fluid={data.collage6.childImageSharp.fluid} />
        </div>
        <div className={styles.collage23ColR}>
          <Img fluid={data.collage7.childImageSharp.fluid} />
        </div>
      </div>
      <div className={styles.collageFull}>
        <Img fluid={data.collage8.childImageSharp.fluid} />
      </div>
    </section>
    <Footer />
  </Layout>
)

export const collageImageFull = graphql`
  fragment collageImageFull on File {
    childImageSharp {
      fluid(maxWidth: 2048) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const bioImg = graphql`
  query {
    fileName: file(relativePath: { eq: "bio.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 666, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    collage1: file(relativePath: { eq: "collage-1.jpg" }) {
      ...collageImageFull
    }
    collage2: file(relativePath: { eq: "collage-2.jpg" }) {
      ...collageImageFull
    }
    collage3: file(relativePath: { eq: "collage-3.jpg" }) {
      ...collageImageFull
    }
    collage4: file(relativePath: { eq: "collage-4.jpg" }) {
      ...collageImageFull
    }
    collage5: file(relativePath: { eq: "collage-5.jpg" }) {
      ...collageImageFull
    }
    collage6: file(relativePath: { eq: "collage-6.jpg" }) {
      ...collageImageFull
    }
    collage7: file(relativePath: { eq: "collage-7.jpg" }) {
      ...collageImageFull
    }
    collage8: file(relativePath: { eq: "collage-8.jpg" }) {
      ...collageImageFull
    }
  }
`

export default IndexPage
