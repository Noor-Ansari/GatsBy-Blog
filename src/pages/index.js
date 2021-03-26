import React from "react";
import Layout from "../components/Layout";
import styles from "styled-components";
import theme from "../theme/theme";

const Wrapper = styles.div`
margin : ${theme.sizes.medium};
padding : ${theme.sizes.medium};
background-color : ${theme.colors.dark2};
`;

const Heading = styles.h1`
font-size : ${theme.sizes.large};
margin-bottom : ${theme.sizes.small};
`;

const Content = styles.p`
font-size : ${theme.sizes.medium};
line-height : 1.3;
`;

function Home() {
  return (
    <Layout>
      <Wrapper>
        <Heading>Hiii I am Noor Mohammad.</Heading>
        <Content>
          A self-taught developer who is curious to learn and use various kinds
          of technologies and then use them to build somethig that people can
          use. <br />
          <br /> This is the place where I usually write about the technologies
          that I learn. So if you are a tech savy person and want to learn about
          different programing languages, frameworks, libraries, WELCOME this is
          the best place for you. <br />
          <br /> ohhh!! <br />
          <br /> I forgot to tell that I also share projects tutorials here.
          some of them would be for fun and some for showcasing in your
          portfolio.
        </Content>
      </Wrapper>
    </Layout>
  );
}

export default Home;
