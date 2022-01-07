import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/HomePage";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledHome>
      <HomePage />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  h1 {
    /* color: teal; */
  }
`;
