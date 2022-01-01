import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  .postWrap {
    display: flex;
    margin-bottom: 2%;
    background-color: #103b61;
    /* background-color: #102a42; */
    padding: 1%;
    border-radius: 8px;

    .imgWrapper {
      @media (max-width: 1440px) {
        flex: 2;
      }
      @media (max-width: 1280px) {
        flex: 2;
      }
      @media (max-width: 1024px) {
        flex: 3;
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
      @media (max-width: 1920px) {
        h2 {
        }
        p {
        }
      }
      @media (max-width: 1440px) {
        h2 {
          font-size: 1.5rem;
        }
        p {
          font-size: 1rem;
          line-height: 1.2rem;
        }
      }
      @media (max-width: 1280px) {
        h2 {
        }
        p {
        }
      }
      @media (max-width: 1024px) {
        h2 {
        }
        p {
        }
      }
      @media (max-width: 768px) {
        h2 {
        }
        p {
        }
      }
    }
  }
`;

const PostCard = props => {
  const { title, imgUrl, content } = props;

  // console.log(content);
  const subheading = content[0].children[0].text;
  //const firstParagraph = content[1].children[0].text.substring(0, 180); //1024
  const firstParagraph = content[1].children[0].text.substring(0, 520); //1440

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
