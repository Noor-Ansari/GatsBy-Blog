const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/blog-page.js");

  const result = await graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((post, idx) => {
    const previous = idx === posts.length - 1 ? null : posts[idx + 1];
    const next = idx === 0 ? null : posts[idx - 1];

    createPage({
      path: post.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.fields.slug,
        previous,
        next,
      },
    });
  });
};
