import React from "react"
import Octicon, { Law, RepoForked } from "@githubprimer/octicons-react"
import './repository.css';
import { FaStar, FaJsSquare, FaCss3, FaHtml5 } from 'react-icons/fa';

const RepositoryHeader = ({ repo }) => {
  const languages = repo.languages.edges;
  return (
    <div className="repository">
      <a
        href={`https://github.com${repo.resourcePath}`}
        target="_blank"
        rel="noopener noreferrer">
        {repo.name}
      </a>
      <FooterLangugages>
        {languages.map((node, index) => <Language key={index} language={node} />)}
      </FooterLangugages>
    </div>
  )
}

const FooterItem = ({ children }) => (
  <div className="repository_footer_item">{children}</div>
)

const FooterLangugages = ({ children }) => (
  <div className="repository_footer_languages">{children}</div>
)

const Language = ({ language }) => {
  const lang = language.node;
  switch (lang.name) {
    case "JavaScript":
      return <FaJsSquare color={lang.color} />;
    case "CSS":
      return <FaCss3 color={lang.color} />;
    case "HTML":
      return <FaHtml5 color={lang.color} />;
    case "TypeScript":
      return <FaJsSquare color={lang.color} />;
    default:
      return <FaJsSquare color={lang.color} />;
  }
}

const RepositoryFooter = ({ repo }) => {
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
        <a href={`https://github.com${repo.resourcePath}`}>
          <FaStar color="#FFDF00" />
        </a>
        {repo.stargazers.totalCount}
      </FooterItem>
      <FooterItem><Octicon icon={RepoForked} />{repo.forkCount}</FooterItem>
      {
        repo.licenseInfo && (
          <FooterItem>
            <Octicon icon={Law} /> {repo.licenseInfo.name}
          </FooterItem>
        )
      }
      <FooterItem>Updated {updatedAt}</FooterItem>
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
