const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/blog-page.js");

  const {data} = await graphql(`
 {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter{
            title
          }
        }
      }
    }
  }
  `);

  data.allMarkdownRemark.edges.forEach(({ node }, idx) =>{
    const slug = node.fields.slug 
    const previous = idx === data.allMarkdownRemark.edges.length - 1 ? null : data.allMarkdownRemark.edges[idx + 1];
    const next = idx === 0 ? null : data.allMarkdownRemark.edges[idx - 1];

    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug: slug,
        previous,
        next,
      },
    });
  });
};
