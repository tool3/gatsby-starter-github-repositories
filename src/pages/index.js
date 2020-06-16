import React from "react"
import { graphql } from "gatsby"

import Repository from "../components/repository"
import Layout from "../components/layout"
import Avatar from "../components/avatar"
import SEO from "../components/seo"
import './index.css';



const IndexPage = ({ data }) => {
  const {
    name,
    avatarUrl,
    repositories,
    login,
    bio
  } = data.githubData.data.viewer

  return (
    <Layout>
      <SEO title={`${name} repos`} />
      <Avatar img={avatarUrl} />
      <div className="maker_wrapper">
        <div>
          <div className="maker">{name}</div>
          <br />
          <div className="aka">a.k.a</div>
          <br />
          <div className="wrapper">
            <div className="login">{login}</div>
          </div>
          <br />
          <div className="bio">{bio}</div>
        </div>
      </div>
      <div className="repos">
        <div className="repository-list">
          {repositories.nodes
            .map((repo) => <Repository key={repo.name} repo={repo} />)
            .reverse()}
        </div>
      </div>

    </Layout>
  )
}

export default IndexPage

export const gitHubQuery = graphql`
  {
    githubData {
      data {
        viewer {
          name
          bio
          login
          avatarUrl
          repositories {
            nodes {
              name
              description
              homepageUrl
              resourcePath
              forkCount
              createdAt
              updatedAt
              languages {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              licenseInfo {
                name
              }
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`
