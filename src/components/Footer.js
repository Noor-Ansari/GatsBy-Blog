import React from "react";
import styles from "styled-components";
import theme from "../theme/theme";

const Foot = styles.footer`
width : 100%;
background-color : ${theme.colors.dark3};
font-size : ${theme.sizes.small};
padding : ${theme.sizes.small};
position : absolute;
bottom : 0;
left : 0;
`;

function Footer() {
  return (
    <Foot>
      <p>
        Site developed by Noor Mohammad &copy;{" "}
        {new Date().getFullYear().toString()}{" "}
      </p>
    </Foot>
  );
}

export default Footer;
