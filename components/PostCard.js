import { RichText } from "@graphcms/rich-text-react-renderer";
import styled from "styled-components";

const Wrapper = styled.div`
  /* background-color: teal; */
  /* color: black; */
  line-height: 150%;
  h2 {
    color: #8abeff;
  }
`;

const PostCard = props => {
  const { title, imgUrl, content } = props;

  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>image url = {imgUrl}</p>
      <RichText content={content} />
    </Wrapper>
  );
};

export default PostCard;
