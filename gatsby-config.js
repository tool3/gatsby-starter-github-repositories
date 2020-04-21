require("dotenv").config()

const config = require("./config/site")

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.title,
    description: config.description,
    author: config.author,
    github: config.github,
    linkedIn: config.linkedIn
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: config.githubApiToken,
        graphQLQuery: config.githubApiQuery,
        variables: config.githubApiVariables,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tal_hayut_logo.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Merriweather`,
            variants: [`400`, `700`]
          },
          {
            family: `Source Sans Pro`,
            subsets: [`latin`]
          },
        ],
      },
    }
  ],
}
