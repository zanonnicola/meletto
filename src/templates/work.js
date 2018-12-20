import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Footer from '../components/footer'
import styles from './work.module.css'

class WorkTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    //const { next, prev } = this.props.pageContext
    const workPrictures = post.frontmatter.pictures.map(({ image }, i) => (
      <figure key={`pic-${i}`} className={styles.workImage}>
        <Img fluid={image.childImageSharp.fluid} />
      </figure>
    ))
    console.log(this.props.data)
    return (
      <Layout>
        <section className="section section--page">
          <div className="wrapper">
            <div className="grid-f">
              <div className="col-f-2-3">
                {workPrictures}
                <Link className={styles.backLink} to="/works">
                  &lsaquo; back to all paintings
                </Link>
              </div>
              <div className="col-f-1-3 sticky">
                <h1 className={styles.title}>{post.frontmatter.title}</h1>
                <h2 className={styles.subtitle}>{post.frontmatter.subtitle}</h2>
                <p className={styles.description}>
                  {post.frontmatter.description}
                </p>
                <a className={styles.link} href={post.frontmatter.link}>
                  purchase
                </a>
              </div>
            </div>
          </div>
        </section>
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
  }
`
