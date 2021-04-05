import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styles from "styled-components";
import theme from "../theme/theme";

function blog({ data }) {
  return (
    <Layout>
      <Header>All blog posts</Header>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <BlogCard key={node.id}>
          <Title>
            <h1><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h1>
            <small>Published Date: {node.frontmatter.date}</small>
          </Title>
          <Body>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>
              <Btn>Read more... </Btn>
            </Link>
          </Body>
        </BlogCard>
      ))}
    </Layout>
  );
}

export default blog;

export const query = graphql`
query {
  allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {published: {eq: true}}}
  ) {
    edges {
      node {
        id
        excerpt(pruneLength: 200)
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
}`;

const BlogCard = styles.article`
min-height : 30vh;
display : flex;
flex-direction : column;
margin-bottom : ${theme.spacings.medium};
}
`;

const Header = styles.header`
font-size : ${theme.sizes.large};
margin : ${theme.spacings.medium} 0;
padding : ${theme.spacings.small} 0; 
border-bottom : 1px solid #000;
`;

const Title = styles.header`
margin : ${theme.spacings.small} 0;
h1{
  a{
    text-decoration : none;
    color : ${theme.colors.accent};
  }
  a:hover{
    color : ${theme.colors.accentHover};
  }
  font-size : ${theme.sizes.medium};
  @media ${theme.breakpoints.mobile} {
    font-size : ${theme.sizes.medium};
  }
}
`;

const Body = styles.section`
  font-size : ${theme.sizes.small};
`;

const Btn = styles.button`
  width : ${theme.sizes.xxLarge};
  height : ${theme.sizes.medium};
  margin-top : ${theme.spacings.medium};
  border-radius : ${theme.sizes.xxSmall};
  border : none;  
  background-color : ${theme.colors.accent};
  color : #fff;
  transition : ${theme.transition.link};
  :hover{
    background-color : ${theme.colors.accentHover};
    cursor : pointer;
  } 
`;
