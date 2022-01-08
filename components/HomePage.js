import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/Link";

const StyledHomePage = styled.div`
  display: flex;
  padding: 5% 15%;
  gap: 3rem;

  .textFrame {
    flex: 1;
    background-color: #e1e5eb;
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
      /* border: solid 8px #e1e5eb; */
      border: solid 8px #aac9f2;
      span > img {
        border-radius: 2px;
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
          landing page, blog or something in between..
        </p>
        <p>
          TALK to Lisko.. my assistent down right. Or just send me a message via
          the <Link href="/contact">contact page.</Link>
        </p>
        <p>
          And if you are just curious.. feel free to look around and don’t
          forget to check my blog too.
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
