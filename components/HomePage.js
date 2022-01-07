import React from "react";
import styled from "styled-components";
import Image from "next/image";

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

    h1,
    p {
      color: #5b718c;
      padding: 0 2.5rem;
    }
    p {
      margin: 0.4rem 0;
      /* line-height: 1.5rem; */
    }
  }
  .imageFrame {
    display: flex;
    flex: 1;
    /* background-color: teal; */
    position: relative;
    /* justify-content: center; */
    .imgWrapper1 {
      z-index: 3;
      position: absolute;
      left: 25%;
      top: 5%;
      transform: rotate(3deg);
    }
    .imgWrapper2 {
      z-index: 2;
      position: absolute;
      left: 10%;
      top: 13%;
      transform: rotate(-10deg);
    }
    .imgWrapper3 {
      z-index: 5;
      position: absolute;
      left: 35%;
      top: 35%;
      transform: rotate(10deg);
    }
  }
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <div className="textFrame">
        <h1>Welcome to the club</h1>
        <p>
          Hey there, if you need a usefull bot, personal web site, effective
          landing page, blog or something in between..
        </p>
        <p>
          TALK to Lisko.. my assistent down right. Or just send me a message via
          the contact page.
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
            height={200}
            width={300}
            alt="blog-post-preview-image"
          />
        </div>
        <div className="imgWrapper2">
          <Image
            src="/old-dog.jpg"
            height={200}
            width={300}
            alt="blog-post-preview-image"
          />
        </div>
        <div className="imgWrapper3">
          <Image
            src="/pinocchio.jpg"
            height={200}
            width={300}
            alt="blog-post-preview-image"
          />
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
