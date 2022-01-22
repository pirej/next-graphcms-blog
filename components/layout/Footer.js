import { useRouter } from "next/router";
import styled from "styled-components";
import Chatbot from "../Chatbot";

const FooterStyles = styled.footer`
  background-color: #3987e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  color: #d8e1ed;
  position: relative;

  .botWrap {
    position: absolute;
    right: 1%;
    bottom: 50px;
  }
`;

const Footer = () => {
  let date = new Date().getFullYear();
  const router = useRouter();
  // console.log(router.pathname);

  return (
    <FooterStyles>
      <div className="footerWrapper">
        <p>&copy; WebDev.Club {date}</p>
      </div>
      {router.pathname === "/" && (
        <div className="botWrap">
          <Chatbot />
        </div>
      )}
    </FooterStyles>
  );
};

export default Footer;
