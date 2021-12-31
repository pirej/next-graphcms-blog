import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledHome>
      <h1>HOME</h1>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  h1 {
    /* color: teal; */
  }
`;
