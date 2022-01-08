import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledHomePage = styled.div`
  display: flex;
  padding: 5% 15%;
  gap: 3rem;

  .textFrame {
    flex: 1;
    background-color: #d8e1ed;
    border-radius: 8px;
    height: 40vh;
    padding: 0.7rem;
    color: #5b718c;

    h1 {
      padding: 0 2.5rem;
    }
    p {
      margin: 0.4rem 0;
      padding: 0 2.5rem;
      a {
        color: #3987e5;
      }
    }
  }
  .imageFrame {
    display: flex;
    flex: 1;
    position: relative;

    .imgWrapper1,
    .imgWrapper2,
    .imgWrapper3 {
      display: inline-flex;
      border-radius: 8px;
      border: solid 8px #d8e1ed;
      span > img {
        border-radius: 1px;
      }
      :hover {
        z-index: 10;
        border: solid 8px #aac9f2;
        cursor: pointer;
        transform: rotate(0);
        transform: scale(1.1);
        /****************************************************/
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.35s;
        transition-duration: 0.35s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
        /****************************************************/
      }
    }
    .imgWrapper1 {
      z-index: 3;
      position: absolute;
      left: 24%;
      top: 8%;
      transform: rotate(4deg);
    }
    .imgWrapper2 {
      z-index: 2;
      position: absolute;
      left: 12%;
      top: 13%;
      transform: rotate(-12deg);
    }
    .imgWrapper3 {
      z-index: 5;
      position: absolute;
      left: 35%;
      top: 28%;
      transform: rotate(12deg);
    }
  }
`;

const HomePage = () => {
  const imageStyle = { color: "red" };
  return (
    <StyledHomePage>
      <div className="textFrame">
        <h1 style={{ imageStyle }}>Welcome to the club</h1>
        <p>
          Hey there, if you need a usefull bot, personal web site, effective
          landing page, blog or something in between.. send me a message via the{" "}
          <Link href="/contact">contact page.</Link>
        </p>
        <p>
          And if you are just curious, have some fun TALKING to Lisko.. my
          assistent down right.
        </p>
        <p>
          Also you can check my
          <Link href="/blog"> latest blog posts.</Link>
        </p>
      </div>
      <div className="imageFrame">
        <div className="imgWrapper1">
          <Image
            src="/lemon-man.jpg"
            height={228}
            width={342}
            alt="blog-post-preview-image"
          />
        </div>
        <div className="imgWrapper2">
          <Image
            src="/old-dog.jpg"
            height={228}
            width={342}
            alt="blog-post-preview-image"
          />
        </div>
        <div className="imgWrapper3">
          <Image
            src="/pinocchio.jpg"
            height={228}
            width={342}
            alt="blog-post-preview-image"
            className="image3"
          />
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
