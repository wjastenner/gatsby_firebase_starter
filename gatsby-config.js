require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `WS Gatsby Firebase Starter`,
    description: `A Gatsby starter including state management using context and authorisation and a no sql database using firebase.`,
    author: `@willstenner`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
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
        name: `WS Gatsby Firebase Starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#45D695`,
        theme_color: `#45D695`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
