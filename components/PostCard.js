import styled from "styled-components";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 49%;
  margin-right: 1%;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 2%;
  }

  /* ----------------------- */
  /* Sweep To Right */
  .hvr-sweep-to-right {
    border-radius: 8px;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    cursor: pointer;
  }
  .hvr-sweep-to-right:before {
    border-radius: 8px;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #103b61;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-sweep-to-right:hover,
  .hvr-sweep-to-right:focus,
  .hvr-sweep-to-right:active {
    color: white;
  }
  .hvr-sweep-to-right:hover:before,
  .hvr-sweep-to-right:focus:before,
  .hvr-sweep-to-right:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  /* ----------------------- */

  .postWrap {
    display: flex;
    margin-bottom: 2%;
    padding: 1%;
    border-radius: 8px;
    @media (min-width: 411px) {
      align-items: center;
    }

    /* :hover {
      background-color: #103b61;
      cursor: pointer;
    }*/
    /* :active {
      background-color: #266dad;
      cursor: pointer;
    } */
    @media (max-width: 414px) {
      flex-direction: column;
    }

    .imgWrapper {
      @media (max-width: 1920px) {
        flex: 1;
      }
      @media (max-width: 1440px) {
        flex: 1;
      }
      @media (max-width: 1280px) {
        flex: 1;
      }
      @media (max-width: 1024px) {
        flex: 1;
      }
      @media (max-width: 768px) {
        flex: 1;
      }
      @media (max-width: 411px) {
        margin: 0 auto;
      }

      margin-top: 4px;

      .image {
        border-radius: 8px;
      }
    }
    h2 {
      color: #8abeff;
    }
    h2,
    h3 {
      font-weight: 400;
    }

    section {
      flex: 3;
      /* background-color: teal; */

      @media (min-width: 768px) {
        flex: 4;
      }
      @media (min-width: 540px) {
        flex: 4;
      }
      h2 {
        margin: 0.2% 0 0.3% 1.5%;
      }
      h3 {
        margin: 0.2% 0 0.3% 1.5%;
      }
      @media (min-width: 1920px) {
        h2 {
          font-size: 1.4rem;
        }
        h3 {
          font-size: 1rem;
        }
      }
      @media (max-width: 1600px) {
        h2 {
          font-size: 1.2rem;
        }
        h3 {
          font-size: 0.9rem;
        }
      }
      @media (max-width: 1440px) {
        h2 {
          font-size: 1.2rem;
        }
        h3 {
          font-size: 0.9rem;
        }
      }
      @media (max-width: 1280px) {
        h2 {
          font-size: 1.18rem;
        }
        h3 {
          font-size: 0.85rem;
        }
      }
      @media (max-width: 1024px) {
        h2 {
          font-size: 1.05rem;
        }
        h3 {
          font-size: 0.82rem;
        }
      }
      @media (max-width: 768px) {
        h2 {
          font-size: 1.2rem;
        }
        h3 {
          font-size: 0.95rem;
        }
      }
      @media (max-width: 540px) {
        h2 {
          font-size: 1.05rem;
        }
        h3 {
          font-size: 0.85rem;
        }
      }
      @media (max-width: 480px) {
        h2 {
          font-size: 1rem;
        }
        h3 {
          font-size: 0.8rem;
        }
      }
      @media (max-width: 411px) {
        padding: 0 0.4rem;
        h2 {
          font-size: 1.15rem;
          padding-top: 0.5rem;
        }
        h3 {
          font-size: 0.95rem;
          padding-bottom: 0.8rem;
        }
      }
      @media (max-width: 380px) {
        padding: 0 0.1rem;
        h2 {
          font-size: 1.15rem;
          padding-top: 0.5rem;
        }
        h3 {
          font-size: 0.95rem;
          padding-bottom: 0.8rem;
        }
      }
      @media (max-width: 360px) {
        h2 {
          font-size: 1.1rem;
          padding-top: 0.3rem;
        }
        h3 {
          font-size: 0.95rem;
          padding-bottom: 0.7rem;
        }
      }
      @media (max-width: 320px) {
        h2 {
          font-size: 1rem;
          padding-top: 0.25rem;
        }
        h3 {
          font-size: 0.9rem;
          padding-bottom: 0.6rem;
        }
      }
      @media (max-width: 280px) {
        h2 {
          font-size: 0.9rem;
          padding-top: 0.25rem;
        }
        h3 {
          font-size: 0.75rem;
          padding-bottom: 0.6rem;
        }
      }
    }
  }
`;

const PostCard = props => {
  const { title, subtitle, imgUrl, content } = props;

  const postContent = content[0].children[0].text;
  return (
    <Wrapper>
      <div className="postWrap hvr-sweep-to-right">
        <div className="imgWrapper">
          <Image
            src={imgUrl}
            height={200}
            width={300}
            alt="blog-post"
            className={"image"}
          />
        </div>
        <section className="textWrap">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          {/* <p>{postContent}..</p> */}
        </section>
      </div>
    </Wrapper>
  );
};

export default PostCard;
