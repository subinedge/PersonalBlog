/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:"JavaScript Will Rule",
    description:"The goal isn’t to build a website. The goal is to build your business.",
    author:"Subin Sudhakaran"
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`images`,
        path:`${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
  ]
}
