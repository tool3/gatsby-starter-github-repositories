import React from "react"
import Octicon, { Law } from "@githubprimer/octicons-react"
import './repository.css';
import { FaStar, FaJsSquare } from 'react-icons/fa';

const RepositoryHeader = ({ repo }) => {
  return (
    <div className="repository">
      <a
        href={`https://github.com${repo.resourcePath}`}
        target="_blank"
        rel="noopener noreferrer">
        {repo.name}
      </a>
      <a href={`https://github.com${repo.resourcePath}`}>
        <FaStar color="#FFDF00" />
      </a>
    </div>
  )
}

const FooterItem = ({ children }) => (
  <div className="repository_footer_item">{children}</div>
)

const RepositoryFooter = ({ repo }) => {
  const language = repo.languages.edges[0].node
  const timeAgo = new Date(repo.updatedA) - new Date()
  const daysAgo = Math.floor(timeAgo / (1000 * 60 * 60 * 24))
  let updatedAt = repo.updatedAt.slice(0, 10)

  if (daysAgo > -21) {
    updatedAt = new Intl.RelativeTimeFormat("en", { style: "narrow" }).format(
      daysAgo,
      "day"
    )
  }
  return (
    <div className="repository_footer">
      <FooterItem>
        <FaJsSquare color={language.color} />
      </FooterItem>
      <FooterItem>
        <FaStar />
        {repo.stargazers.totalCount}
      </FooterItem>
      {
        repo.licenseInfo && (
          <FooterItem>
            <Octicon icon={Law} /> {repo.licenseInfo.name}
          </FooterItem>
        )
      }
      <FooterItem>Updated: {updatedAt}</FooterItem>
      {repo.homepageUrl && <FooterItem />} {" "}
    </div >
  )
}

const RepositoryDescription = ({ repo }) => (
  <div>
    <p>
      {repo.description}
      {repo.homepageUrl && (
        <>
          <br />
          <a href={repo.homepageUrl}>{repo.homepageUrl}</a>
        </>
      )}
    </p>
  </div>
)

const Repository = ({ repo }) => {
  return (
    <div className="repository-info">
      <RepositoryHeader repo={repo} />
      <RepositoryDescription repo={repo} />
      <RepositoryFooter repo={repo} />
    </div>
  )
}

export default Repository
