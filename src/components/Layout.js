import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetaData";
import Header from "./Header";
import styled from "styled-components";

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`;

function Layout({ children }) {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyles>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyles>
  );
}

export default Layout;
