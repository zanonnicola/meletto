import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Ciao Mago!</h1>
    <p>Welcome to your new Site.</p>
    <p>Saudo!!</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/works">Go to Works</Link>
  </Layout>
)

export default IndexPage
