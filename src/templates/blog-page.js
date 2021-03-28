import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
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

function BlogPage({ data, pageContext }) {
  console.log(data);
  console.log(pageContext);
  const { previous, next } = pageContext;
  return (
    <Layout>
      <Header>{data.mdx.frontmatter?.title}</Header>
      <p>{data.mdx.frontmatter.date}</p>
      <BlogCard>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </BlogCard>
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>{previous.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <p>{next.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
    </Layout>
  );
}

export default BlogPage;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
