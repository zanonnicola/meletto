import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children, isWorkPage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Best known for creating energetic dynamic artworks, he often builds his compositions using an exasperated distorted perspective to create attractive compositions that are then filled with vibrant colours, resulting in a genuine original style.',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          siteTitle={data.site.siteMetadata.title}
          isWorkPage={isWorkPage}
        />
        <div className={isWorkPage ? 'worksPage' : ''}>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isWorkPage: PropTypes.bool,
}

export default Layout
