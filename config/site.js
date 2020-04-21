module.exports = {
  title: `tool3 repos`,
  description: `description of current github repositories owned by tool3`,
  author: `Tal Hayut`,
  linkedIn: 'https://linkedin.com/in/talhayut',
  github: 'https://github.com/tool3',
  siteUrl: `https://`,
  githubApiToken: process.env.GITHUB_API_TOKEN,
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      bio
      login
      avatarUrl
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 3, orderBy: { field: SIZE, direction:ASC } ) {
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
  }`,
  githubApiVariables: {
    number_of_repos: 15,
  },
}
