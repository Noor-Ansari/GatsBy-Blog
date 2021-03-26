import React from "react";
import { graphql } from "gatsby";
import styles from "styled-components";
import theme from "../theme/theme";
import Layout from "../components/Layout";

const Header = styles.h1`
text-align : center;
margin : ${theme.spacings.medium};
`;

const BlogCard = styles.div`
min-height : 100vh;
background-color : ${theme.colors.dark2}; 
margin : ${theme.spacings.medium};
padding : ${theme.sizes.medium};
`;

function BlogPage({ data }) {
  console.log(data);
  return (
    <Layout>
      <Header>{data.mdx.frontmatter.title}</Header>
      <BlogCard>{data.mdx.excerpt}</BlogCard>
    </Layout>
  );
}

export default BlogPage;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 1000000)
      frontmatter {
        title
      }
    }
  }
`;
