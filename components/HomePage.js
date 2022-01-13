import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledHomePage = styled.div`
  display: flex;
  padding: 5% 15%;
  gap: 3rem;
   color: #5b718c;
    h2 {
      padding: 0 2.5rem;
      font-size: 2rem;
    }

  .textFrame {
    flex: 1;
    /* background-color: #d8e1ed; */
    border-radius: 8px;
    height: 40vh;
    padding: 0 0.7rem;
    text-align: center;

    p {
      margin: 0rem 0 0.6rem 0;
      padding: 0 2.5rem;
      font-weight: 500;
      font-size: 1.05rem;
      a {
        color: #3987e5;
      }
    }
     .noMargin {
        margin-top: -0.3rem;
      }
  }
    /* the post/image section start */
    .postWrap {
      flex: 1;
      /* background-color: #d8e1ed; */
      border-radius: 8px;
      display: flex;
      
      padding: 0 0.4rem;
      
      @media (max-width: 1440px) {
        flex: 0.8;
      }
      flex-direction: column;
      align-items: center;

      
      .imgWrapper {
        opacity: 0.85;
        border-radius: 8px;

        :hover{
        cursor: pointer;
        opacity: 1;
        }

        > span {
          border-radius: 8px;
          overflow: visible !important;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        
        span > img {
          border-radius: 8px;
        }
      }
    }

    /* the post/image section end */
  }
`;

const HomePage = props => {
  const { imgUrl } = props;
  return (
    <StyledHomePage>
      <div className="textFrame">
        <h2>Welcome to the club</h2>
        <p className="noMargin">
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
      <Link href={`/blog`} passHref>
        <div className="postWrap ">
          <section className="textWrap">
            {/* <h2>{title}</h2> */}
            <h2>Latest Posts</h2>
          </section>
          <div className="imgWrapper">
            <Image
              src={imgUrl}
              height={240}
              width={360}
              // height={267}
              // width={400}
              alt="blog-post"
              className={"image"}
            />
          </div>
        </div>
      </Link>
    </StyledHomePage>
  );
};

export default HomePage;
