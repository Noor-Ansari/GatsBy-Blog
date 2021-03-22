import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

function Home({ data }) {
  console.log(data.allMdx.nodes);
  return (
    <>
      <Layout />
      {data.allMdx.nodes.map((post) => (
        <div key={post.id}>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </>
  );
}

export default Home;

export const query = graphql`
  query SITE_INDEX_QUERY {
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
