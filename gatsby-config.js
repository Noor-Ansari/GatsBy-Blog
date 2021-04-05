const siteMetadata = {
  title: `The DEV Blog`,
  description: `This is my personal blog where I write about my coding journey.`,
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `roboto mono`,
          `source sans pro\:300,400,400i,700`,
        ],
        display: "swap",
      },
    },
  ],
};
