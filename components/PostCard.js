import styled from "styled-components";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Wrapper = styled.div`
  width: 49%;
  margin-right: 1%;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 2%;
  }

  /* ----------------------- */
  /* ----------------------- */

  .postWrap {
    /* ---  */
    border-radius: 8px;
    overflow: visible !important;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1),
      0 2px 10px 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1),
      0 2px 10px 0 rgba(0, 0, 0, 0.1);
    /* ---  */
    display: flex;
    margin-bottom: 2%;
    padding: 1%;
    border-radius: 8px;
    /* background-color: #d8e1ed; */
    @media (min-width: 411px) {
      align-items: center;
    }

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
        /* margin: 0 auto; */
      }

      margin-top: 4px;

      .image {
        border-radius: 8px;
      }
    }
    h2 {
      color: #5b718c;
      font-weight: 500;
    }

    h3 {
      color: #5b718c;
      font-weight: 400;
    }

    section {
      flex: 3;

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
          font-size: 1.5rem;
        }
        h3 {
          font-size: 1.05rem;
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
      @media (max-width: 414px) {
        padding: 0 1rem;
        h2 {
          font-size: 1.05rem;
          padding-top: 0.5rem;
          margin: 0;
        }
        h3 {
          font-size: 0.95rem;
          padding-bottom: 0.8rem;
          margin: 0;
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
  const { title, subtitle, imgUrl, content, slug } = props;

  const postContent = content[0].children[0].text;

  return (
    <Wrapper>
      <div>
        <Link href={`/blog/${slug}`} passHref>
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
        </Link>
      </div>
    </Wrapper>
  );
};

export default PostCard;
