import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Footer from '../components/footer'

class WorkTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { next, prev } = this.props.pageContext
    console.log(this.props.data, next, prev)
    return (
      <Layout>
        <section className="section section--page">
          <div className="wrapper">
            <div className="grid">
              <div className="grid-col col-2-3">sdff</div>
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
      }
    }
  }
`
