import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class WorkTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default WorkTemplate

export const pageQuery = graphql`
  query WorkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
