import React from "react";
import { Link } from "gatsby";
import theme from "../theme/theme";
import styles from "styled-components";



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
      </List>
    </Nav>
  );
}

export default Header;

const Title = styles.label`
font-size : ${theme.sizes.medium};
color : ${theme.colors.light1};
font-weight : 700;
cursor : pointer;
@media ${theme.breakpoints.mobile}{
  font-size : ${theme.sizes.small};
}
`;

const Nav = styles.nav`
width : 100%;
background : ${theme.colors.accent};
height : ${theme.sizes.medium};
display : flex;
align-items : center;
justify-content : space-between;
padding : ${theme.spacings.medium};
position : sticky;
top : 0;
left : 0;
`;

const List = styles.ul`
width : 35%;
display : flex;
align-items : center;
justify-content : space-evenly;
list-style-type : none;
 a{
  cursor : pointer;
  li {
    font-size : ${theme.sizes.small};
    color : ${theme.colors.light1};
  }
 }
 a:hover{
   text-decoration : underline;
   color : ${theme.colors.light1};
 } 
`;