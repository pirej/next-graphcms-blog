import styled from "styled-components";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
  .postWrap {
    display: flex;
    margin-bottom: 2%;
    background-color: #103b61;
    /* background-color: #102a42; */
    padding: 1%;
    border-radius: 8px;

    .imgWrapper {
      @media (max-width: 1920px) {
        /* flex: 1; */
      }
      @media (max-width: 1440px) {
        flex: 1;
      }
      @media (max-width: 1280px) {
        flex: 1;
      }
      @media (max-width: 1024px) {
        flex: 2;
      }
      @media (max-width: 768px) {
        flex: 2;
      }

      /* background-color: red; */
      margin-top: 4px;

      .image {
        border-radius: 8px;
      }
    }
    /* line-height: 150%; */
    h2 {
      color: #8abeff;
    }
    section {
      flex: 3;
      /* background-color: teal; */
      h2 {
        margin: 0.2% 0 0.3% 1.5%;
        letter-spacing: 0.05rem;
      }
      p {
        margin: 0.2% 0 0.2% 1.5%;
        font-size: 1.1rem;
        /* letter-spacing: 0.01rem; */
      }
      @media (min-width: 1920px) {
        h2 {
          font-size: 1.8rem;
        }
        p {
          font-size: 1.3rem;
          /* line-height: 1.2rem; */
        }
      }
      @media (max-width: 1920px) {
        h2 {
          font-size: 1.6rem;
        }
        p {
          font-size: 1.2rem;
          /* line-height: 1.2rem; */
        }
      }
      @media (max-width: 1440px) {
        h2 {
          font-size: 1.5rem;
        }
        p {
          font-size: 1.05rem;
          line-height: 1.2rem;
        }
      }
      @media (max-width: 1280px) {
        h2 {
          font-size: 1.55rem;
        }
        p {
          font-size: 1.2rem;
          line-height: 1.3rem;
        }
      }
      @media (max-width: 1024px) {
        h2 {
          font-size: 1.6rem;
        }
        p {
          font-size: 1.3rem;
          line-height: 1.4rem;
          letter-spacing: 0.01rem;
        }
      }
      @media (max-width: 768px) {
        h2 {
          font-size: 1.25rem;
          
        }
        p {
          font-size: 1rem;
          line-height: 1.1rem;
          letter-spacing: 0.03rem;
        }
      }
      @media (max-width: 540px) {
        h2 {
          font-size: 1rem;
        }
        p {
          font-size: 0.9rem;
          line-height: 1rem;
        }
      }
      @media (max-width: 414px) {
        h2 {
          font-size: 0.85rem;
        }
        p {
          font-size: 0.80rem;
          line-height: 0.80rem;
        }
      @media (max-width: 380px) {
        h2 {
          font-size: 0.8rem;
        }
        p {
          font-size: 0.8rem;
          line-height: 0.9rem;
        }
      }
      @media (max-width: 360px) {
        h2 {
          font-size: 0.75rem;
        }
        p {
          font-size: 0.70rem;
          line-height: 0.75rem;
        }
      }
      @media (max-width: 320px) {
        h2 {
          font-size: 0.75rem;
        }
        p {
          font-size: 0.75rem;
          line-height: 0.75rem;
        }
      }
      @media (max-width: 280px) {
        h2 {
          font-size: 0.6rem;
        }
        p {
          font-size: 0.6rem;
          line-height: 0.9rem;
        }
      }
    }
  }
`;

const PostCard = props => {
  const { title, imgUrl, content } = props;

  /******************************** */
  /* get the window width at page load */
  const [winWidth, setWinWidth] = useState(5);
  console.log(winWidth);
  /******************************** */
  /* responsive substring value based on window's width */
  useEffect(() => {
    if (typeof window !== "undefined") {
      let win = window.innerWidth;
      win >= 1440
        ? setWinWidth(660)
        : win >= 1360
        ? setWinWidth(520)
        : win >= 1280
        ? setWinWidth(400)
        : win >= 1024
        ? setWinWidth(300)
        : win >= 768
        ? setWinWidth(260)
        : win >= 540
        ? setWinWidth(120)
        : win >= 411
        ? setWinWidth(95)
        : win >= 375
        ? setWinWidth(70)
        : win >= 360
        ? setWinWidth(85)
        : win >= 320
        ? setWinWidth(65)
        : setWinWidth(15);
    }
  }, []);
  /******************************** */

  const subheading = content[0].children[0].text;
  const firstParagraph = content[1].children[0].text.substring(0, winWidth);
  return (
    <Wrapper>
      <div className="postWrap">
        <div className="imgWrapper">
          <Image
            src={imgUrl}
            height={200}
            width={300}
            alt="blog-post"
            className={"image"}
          />
        </div>
        <section>
          <h2>{title}</h2>
          {/* <h3>{subheading}</h3> */}
          <p>{firstParagraph}..</p>
        </section>
      </div>
    </Wrapper>
  );
};

export default PostCard;
