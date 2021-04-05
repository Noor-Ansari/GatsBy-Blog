import React from "react";
import { graphql, Link } from "gatsby";
import styles from "styled-components";
import theme from "../theme/theme";
import Layout from "../components/Layout";

function BlogPage({ data, pageContext }) {
const {previous, next} = pageContext
  return (
    <Layout>
      <Header>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <small>{data.markdownRemark.frontmatter.date}</small>  
      </Header>
      <BlogCard>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </BlogCard>
      <Foot>
      {previous && (
        <>
          {previous && (
            <Link to={previous.node.fields.slug}>
              <p>{previous.node.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      {next && (
        <>
          {next && (
            <Link to={next.node.fields.slug}>
              <p>{next.node.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      </Foot>
    </Layout>
  );
}

export default BlogPage;

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString : "MMMM DD, YYYY")
      }
      fields{
        slug
      }
    }
  }
`


const Header = styles.header`
h1{
  font-size : ${theme.sizes.large};
}
margin : ${theme.spacings.medium} 0;
`;

const BlogCard = styles.div` 
padding-bottom : ${theme.spacings.medium};
margin-bottom : ${theme.spacings.medium};
border-bottom : 1px solid #111;
`;

const Foot = styles.div`
  display : flex;
  justify-content : space-between;
  a:hover{
    text-decoration : underline;
  }
`