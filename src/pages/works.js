import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './css/works.module.css'
import Layout from '../components/layout'
import Footer from '../components/footer'

const WorksPage = ({ data }) => {
  const images = data.allMarkdownRemark.edges.map(({ node }, i) => {
    const { frontmatter, fields } = node
    return (
      <div key={`gallery-${i}`} className="grid-col col-1-3">
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
    <Layout isWorkPage={true}>
      <Helmet
        title="Meletto Art | Paintings"
        meta={[
          {
            name: 'description',
            content:
              'Subjects are usually human-shaped figures in still poses but are involved in dynamic illusory scenes that represent their inner state in that specific moment, in one word their feelings. Explore all the works.',
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <section className="section section--page">
        <div className="wrapper">
          <div className="grid">{images}</div>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

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
