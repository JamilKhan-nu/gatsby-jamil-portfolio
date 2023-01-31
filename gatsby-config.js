module.exports = {
  siteMetadata: {
    title: "My Portfolio",
    author: "Jamil Khan",
    logo: "JK",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
