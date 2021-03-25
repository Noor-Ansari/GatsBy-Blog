import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styles from "styled-components";
import theme from "../theme/theme";

function blog({ data }) {
  console.log(data.allMdx);
  return (
    <Layout>
      <Header>All blog posts</Header>
      {data.allMdx.nodes.map((node) => (
        <BlogCard key={node.id}>
          <Left>
            <h1>{node.frontmatter.title}</h1>
          </Left>
          <Right>
            <p>{node.excerpt}</p>
            <button>Read more..</button>
          </Right>
        </BlogCard>
      ))}
    </Layout>
  );
}

export default blog;

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
      }
    }
  }
`;

const BlogCard = styles.div`
height : 30vh;
display : grid;
grid-template-columns : repeat(12, 1fr);
background-color : ${theme.colors.dark2};
margin : ${theme.spacings.medium};
border-radius : ${theme.sizes.xSmall};
@media ${theme.breakpoints.mobile} {
  grid-template-rows : 1fr 3fr;
}
}
`;

const Header = styles.div`
font-size : ${theme.sizes.large};
text-align : center;
margin : ${theme.spacings.medium} 0; 
`;

const Left = styles.div`
grid-column : 1/4;
display : grid;
align-content : center;
border-right : 3px dotted #fff;
padding : ${theme.spacings.medium};
@media ${theme.breakpoints.mobile} {
  grid-column : 2/-2;
  justify-content : center;
  border-right : none;
  border-bottom : 3px dotted #fff;
}
h1{
  font-size : ${theme.sizes.medium};
  transition : ${theme.transition.link};
  :hover{
    color : ${theme.colors.dark4};
    cursor : pointer;
  } 
  @media ${theme.breakpoints.mobile} {
    font-size : ${theme.sizes.medium};
  }
`;

const Right = styles.div`
grid-column : 5/-2;
display : grid;
align-content : center;
p {
    font-size : ${theme.sizes.small};
}
button {
  width : ${theme.sizes.xxLarge};
  height : ${theme.sizes.medium};
  margin-top : ${theme.spacings.medium};
  border-radius : ${theme.sizes.xxSmall};
  border : none;  
  background-color : ${theme.colors.dark3};
  transition : ${theme.transition.link};
  :hover{
    background-color : ${theme.colors.dark4};
    cursor : pointer;
  } 
}
@media ${theme.breakpoints.mobile} {
  grid-column : 2/-2;
}
`;
