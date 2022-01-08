import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledHomePage = styled.div`
  /* background-color: teal; */
  display: flex;
  padding: 5% 15%;
  gap: 3rem;

  .textFrame {
    flex: 1;
    /* background-color: #d8e1ed; */
    border-radius: 8px;
    height: 40vh;
    padding: 0 0.7rem;
    color: #5b718c;
    text-align: center;

    h2 {
      padding: 0 2.5rem;
      font-size: 2rem;
    }
    p {
      margin: 0.4rem 0;
      padding: 0 2.5rem;
      font-weight: 500;
      a {
        color: #3987e5;
      }
    }
  }
  .imageFrame {
    /* background-color: #d8e1ed; */
    border-radius: 8px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 2rem;
      color: #5b718c;
      margin-bottom: 1.5rem;
    }
    flex: 1;
    .imageBox {
      display: flex;
      flex-wrap: wrap;
      width: 70%;
      justify-content: center;

      .imgWrapper1,
      .imgWrapper2,
      .imgWrapper3,
      .imgWrapper4 {
        display: inline-flex;
        width: 40%;
        margin: 5px;

        span > img {
          border-radius: 5px;
        }
        :hover {
          /* border: solid 5px #aac9f2; */
          z-index: 50;
          cursor: pointer;
          transform: rotate(0);
          transform: scale(1.1);
          -webkit-transition-property: transform;
          transition-property: transform;
          -webkit-transition-duration: 0.35s;
          transition-duration: 0.35s;
          -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
        }
      }
    }
  }
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <div className="textFrame">
        <h2>Welcome to the club</h2>
        <p>
          Hey there, if you need a usefull bot, personal web site, effective
          landing page, blog or something in between.. send me a message via the{" "}
          <Link href="/contact">contact page.</Link>
        </p>
        <p>
          Also you can check my
          <Link href="/blog"> blog</Link> to see what im up to lately.
        </p>
        <p>
          Or if you are just curious, have some fun TALKING to Lisko.. my
          assistent down right.
        </p>
      </div>
      <div className="imageFrame">
        <h2>My latest posts</h2>
        <div className="imageBox">
          <div className="imgWrapper1">
            <Image
              src="/lemon-man.jpg"
              height={120}
              width={180}
              alt="blog-post-preview-image"
            />
          </div>
          <div className="imgWrapper2">
            <Image
              src="/old-dog.jpg"
              height={120}
              width={180}
              alt="blog-post-preview-image"
            />
          </div>
          <div className="imgWrapper3">
            <Image
              src="/pinocchio.jpg"
              height={120}
              width={180}
              alt="blog-post-preview-image"
              className="image3"
            />
          </div>
          <div className="imgWrapper4">
            <Image
              src="/stop.jpg"
              height={120}
              width={180}
              alt="blog-post-preview-image"
              className="image4"
            />
          </div>
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
