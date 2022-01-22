import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const StyledHomePage = styled.div`
  display: flex;
  padding: 6% 15%;
  @media (max-width: 1440px) {
    padding: 7% 12%;
  }
  @media (max-width: 1280px) {
    padding: 10% 12%;
  }
  @media (max-width: 1024px) {
    padding: 5% 8%;
  }
  @media (max-width: 768px) {
    display: block;

    padding: 5% 10%;
    margin-bottom: 6rem;
  }
  @media (max-width: 540px) {
    display: block;
    padding: 5% 8%;
  }
  gap: 3rem;
  color: #5b718c;
    

  .textFrame {
    flex: 1;
    border-radius: 8px;
    padding: 0 0.7rem;
    @media (max-width: 768px){
      padding: 0;
    }

    .textWrapper{
      margin: 0 15%;
      @media (max-width: 1024px) {
        padding-right: 0%;
        h2{
          font-size: 2.1rem;
        }
        p{
          font-size: 1.04rem;
        }
      }
      @media (max-width: 768px) {
        p{
          font-size: 1.1rem;
        }
      }
      @media (max-width: 414px) {
        h2{
          font-size: 1.9rem;
        }
        p{
          font-size: 1.04rem;
          font-size: 0.95rem;
        }
      }
      @media (max-width: 360px) {
        h2{
          font-size: 1.6rem;
        }
        p{
          font-size: 1rem;
        }
      }
      @media (max-width: 320px) {
        h2{
          font-size: 1.5rem;
        }
        p{
          font-size: 1rem;
        }
      }
    }
    

    h2 {
      font-size: 2.15rem;
    }

    p {
      margin: 0 0 0.6rem 0;
      font-size: 1.1rem;
      a {
        color: #3987e5;
      }
    }
     .noMargin {
        margin-top: -0.3rem;
      }

      button{
        margin-top: 1rem;
      }

  @media (max-width: 1440px) {
    .textWrapper{
      margin: 0 13% 0 2%;
    }
  }
  @media (max-width: 1280px) {
    .textWrapper{
      margin: 0 9% 0 0%;
    }
  }
  @media (max-width: 1024px) {
    button{
        font-size: 1.04rem;
    }
  }
  @media (max-width: 768px) {
    .textWrapper{
      margin: 0;
    }
  }
    

  }
    /* the post/image section start */
    .postWrap {
      flex: 1;
      border-radius: 8px;
      display: flex;
       .wrapper{
        width: 370px;
        @media (max-width: 1440px){
            width: 360px;
        }
        @media (max-width: 1024px){
            width: 345px;
        }
        @media (max-width: 768px){
            width: 614.4px;
            margin-bottom: 2.5rem;
        }
        @media (max-width: 540px){
            width: 453.6px;
            margin-bottom: 2.8rem;
        }
        @media (max-width: 411px){
            width: 345.2px;
            margin-bottom: 3.4rem;
        }
        @media (max-width: 360px){
            width: 302.4px;
            margin-bottom: 2.4rem;
        }
        @media (max-width: 320px){
            width: 268.8px;
        }
      }
      

      .textWrap{
        h2{
          font-size: 2.15rem;
          @media (max-width: 1024px){
            font-size: 2.1rem;
          }
          
          @media (max-width: 411px){
              font-size: 1.9rem;
          }
          
          @media (max-width: 360px){
              font-size: 1.6rem;
          }
          
          @media (max-width: 320px){
              font-size: 1.5rem;
          }
          
        }
      }
      
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
        <div className="textWrapper">
          <h2>Welcome to the club</h2>
          <p className="noMargin">
            Hey there, if you need a usefull bot, personal web site, effective
            landing page, blog or something in between..{" "}
            <Link href="/contact">send me a message.</Link>
          </p>
          <p>
            Check my <Link href="/blog">blog</Link>
          </p>
          <p>
            Or if you are just curious, have some fun TALKING to Lisko.. my
            assistent down right.
          </p>
          <Link href={`/contact`} passHref>
            <button>Contact me</button>
          </Link>
        </div>
      </div>
      <Link href={`/blog`} passHref>
        <div className="postWrap ">
          <div className="wrapper">
            <section className="textWrap">
              <h2>Latest Posts</h2>
            </section>

            <div className="imgWrapper">
              <Image
                src={imgUrl}
                height={414}
                width={620}
                alt="blog-post"
                className={"image"}
                priority
              />
            </div>
          </div>
        </div>
      </Link>
    </StyledHomePage>
  );
};

export default HomePage;
