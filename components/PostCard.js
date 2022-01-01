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
      /* background-color: red; */
      border-radius: 8px;
      margin-top: 4px;

      img {
        display: flax;
        border-radius: 8px;
        flex: 1;
      }
    }
    /* line-height: 150%; */
    h2 {
      color: #8abeff;
    }
    section {
      flex: 4;
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
    }
  }
`;

const PostCard = props => {
  const { title, imgUrl, content } = props;

  // console.log(content);
  const subheading = content[0].children[0].text;
  const firstParagraph = content[1].children[0].text.substring(0, 400);

  return (
    <Wrapper>
      <div className="postWrap">
        <div className="imgWrapper">
          <Image src={imgUrl} height={200} width={300} alt="blog-post" />
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
