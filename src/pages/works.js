import React from 'react'
import { graphql } from 'gatsby'
//import Img from 'gatsby-image'

import styles from './css/works.module.css'
import Layout from '../components/layout'
import Footer from '../components/footer'

const WorksPage = ({ data }) =>
  console.log(data) || (
    <Layout>
      <section className="section">
        <div className="wrapper">
          <div className={styles.grid}>asdd</div>
        </div>
      </section>
      <Footer />
    </Layout>
  )

export const worksQuery = graphql`
  query PageWorks {
    allMarkdownRemark(
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

export default WorksPage
