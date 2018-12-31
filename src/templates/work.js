import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Carousel from '../components/carousel'
import styles from './work.module.css'
import dx from '../components/assets/freccia-dx.svg'
import sx from '../components/assets/freccia-sx.svg'

function normalizeSlug(slug) {
  return slug.replace('gallery', 'works') + '/'
}
class WorkTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const imagesToDisplay = post.frontmatter.pictures || []
    const { next, prev } = this.props.pageContext
    const nextURL = Object.keys(next).length ? next.fields.slug : '/works'
    const prevURL = Object.keys(prev).length ? prev.fields.slug : '/works'

    const carousel = this.props.data.carousel.edges
    // Filter the array to rtemove current product
    // Shuffle to generate random order
    // Pick 3 items
    const carouselItems = carousel
      .filter(
        ({ node }) =>
          normalizeSlug(node.fields.slug) !== this.props.location.pathname
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 7)

    const workPrictures = imagesToDisplay.map(({ image }, i) => (
      <figure key={`pic-${i}`} className={styles.workImage}>
        <Img fluid={image.childImageSharp.fluid} />
      </figure>
    ))

    const details = (
      <React.Fragment>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <h2 className={styles.subtitle}>{post.frontmatter.subtitle}</h2>
        <p className={styles.description}>{post.frontmatter.description}</p>
        <a className={styles.link} href={post.frontmatter.link}>
          purchase
        </a>
        <div className={styles.arrowsContainer}>
          <Link to={prevURL}>
            <img src={sx} alt="prev" />
          </Link>
          <Link to={nextURL}>
            <img src={dx} alt="next" />
          </Link>
        </div>
      </React.Fragment>
    )
    return (
      <Layout isWorkPage={true}>
        <Helmet
          title={`${post.frontmatter.title} | Meletto Art`}
          meta={[
            {
              name: 'description',
              content: `${post.frontmatter.description}`,
            },
          ]}
        />
        <section className="section section--page">
          <div className="wrapper">
            <div className="grid-f">
              <div className="col-f-2-3">
                <div className={styles.hideOnDesktop}>{details}</div>
                {workPrictures}
                <Link className={styles.backLink} to="/works">
                  <img src={sx} alt="prev" /> back to all paintings
                </Link>
              </div>
              <div className="col-f-1-3 sticky">
                <div className={styles.hideOnMobile}>{details}</div>
              </div>
            </div>
          </div>
        </section>
        <Carousel items={carouselItems} />
        <Footer />
      </Layout>
    )
  }
}

export default WorkTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        description
        link
        pictures {
          image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    carousel: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { isPage: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 724, maxHeight: 724) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            thumbnailOnHover {
              childImageSharp {
                fluid(maxWidth: 724, maxHeight: 724) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
