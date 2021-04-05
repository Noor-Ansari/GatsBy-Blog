import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetaData";
import Header from "./Header";
import "../styles/global.css";
import styles from "styled-components";
import theme from "../theme/theme"

function Layout({ children }) {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Header siteTitle={title} siteDescription={description} />
      <Body>{children}</Body>
    </>
  );
}

export default Layout;

const Body = styles.div`
  width : 60%;
  margin : 0 auto;
  @media ${theme.breakpoints.tablet}{
    width : 80%;
  }
`;
  