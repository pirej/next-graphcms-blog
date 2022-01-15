import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = props => {
  return (
    <StyledLayout>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
