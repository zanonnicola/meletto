import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Footer from '../components/footer'
import styles from './work.module.css'

class WorkTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { next, prev } = this.props.pageContext
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
            <div className="grid">
              <div className="grid-col col-2-3">{workPrictures}</div>
              <div className="grid-col col-1-3">
                <h1>{post.frontmatter.title}</h1>
                <h2>{post.frontmatter.subtitle}</h2>
                <p>{post.frontmatter.description}</p>
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
