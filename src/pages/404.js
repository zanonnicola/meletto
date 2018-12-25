import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/footer'

const NotFoundPage = () => (
  <Layout>
    <section className="section section--page">
      <div className="wrapper">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </section>
    <Footer />
  </Layout>
)

export default NotFoundPage
