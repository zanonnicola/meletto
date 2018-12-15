import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Video from '../components/video'

const IndexPage = () => (
  <Layout>
    <Video />
    <div className="wrapper">
      <h1>meet the artist</h1>
      <h2>a brief story</h2>
      <p>Welcome to your new Site.</p>
      <p>Saudo!!</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laborum
        aut inventore aspernatur! Ex odit alias ipsam aliquam commodi est
        praesentium beatae aperiam hic, assumenda rerum excepturi laudantium
        vero necessitatibus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laborum
        aut inventore aspernatur! Ex odit alias ipsam aliquam commodi est
        praesentium beatae aperiam hic, assumenda rerum excepturi laudantium
        vero necessitatibus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laborum
        aut inventore aspernatur! Ex odit alias ipsam aliquam commodi est
        praesentium beatae aperiam hic, assumenda rerum excepturi laudantium
        vero necessitatibus.
      </p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/works">Go to Works</Link>
    </div>
  </Layout>
)

export default IndexPage
