import React from "react";
import { Link } from "gatsby";
import theme from "../theme/theme";
import styles from "styled-components";

const Title = styles.h1`
fontSize : ${theme.sizes.medium};
color : ${theme.colors.dark2};
`;

const Nav = styles.nav`
width : 100%;
height : ${theme.sizes.medium};
background : ${theme.colors.dark3};
display : flex;
align-items : center;
justify-content : space-between;
padding : ${theme.sizes.medium};
position : sticky;
top : 0;
left : 0;
`;

const List = styles.ul`
width : 40%;
display : flex;
justify-content : space-evenly;
list-style-type : none;
 a{
  cursor : pointer;
  li {
    font-size : ${theme.sizes.small};
    color : ${theme.colors.dark2};
  }
 }
 a:hover{
   text-decoration : underline;
 } 
`;

function Header({ siteTitle }) {
  return (
    <Nav>
      <Link to="/">
        <Title>{siteTitle}</Title>
      </Link>
      <List>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </List>
    </Nav>
  );
}

export default Header;
