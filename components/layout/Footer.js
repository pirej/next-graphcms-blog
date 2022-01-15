import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  background-color: #3987e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  color: #d8e1ed;

  .footerWrapper {
    /* background-color: red; */
  }
`;

const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <FooterStyles>
      <div className="footerWrapper">
        <p>&copy; WebDev.Club {date}</p>
      </div>
    </FooterStyles>
  );
};

export default Footer;
