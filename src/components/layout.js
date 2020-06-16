import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            github
            linkedIn
          }
        }
      }
    `}
    render={data => (
      <div className="main">
        {children}
        <footer className="footer">
          <div className="github_btns">
            <iframe src="https://ghbtns.com/github-btn.html?user=tool3&repo=gatsby-starter-github-repositories&type=star" frameBorder="0" scrolling="0" width="60" height="20" title="GitHub"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=tool3&type=follow" frameBorder="0" scrolling="0" width="117" height="20" title="GitHub"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=tool3&type=fork" frameBorder="0" scrolling="0" width="60" height="20" title="GitHub"></iframe>
          </div>
          <div className="author">
            {data.site.siteMetadata.author} © {new Date().getFullYear()}
          </div>
          <div className="footer_icons">
            <a href={data.site.siteMetadata.github} target="_blank" rel="noopener noreferrer">
              <FaGithub color='#fbc7d4' />
            </a>
            <a href={data.site.siteMetadata.linkedIn} target="_blank" rel="noopener noreferrer">
              <FaLinkedin color='#fbc7d4' />
            </a>
          </div>
        </footer>
      </div >
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
