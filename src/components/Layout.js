import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetaData";
import Header from "./Header";
import "../styles/global.css";
import Footer from "./Footer";

function Layout({ children }) {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Header siteTitle={title} siteDescription={description} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
