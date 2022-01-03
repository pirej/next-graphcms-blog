import { GraphQLClient } from "graphql-request";
import PostCard from "../../components/PostCard";
import styled from "styled-components";

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/ckxqxp5pl0pty01z1hfufbw6n/master",
  {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  }
);

const PostStyle = styled.section`
  /* width: 80vw; */
  padding: 0 20%;
  margin: 5% auto;
  /* @media (min-width: 1600px) {
    padding: 0 16%;
  } */
  @media (max-width: 1280px) {
    padding: 0 14%;
  }
  @media (max-width: 1024px) {
    padding: 0 10%;
  }
  @media (max-width: 768px) {
    padding: 0 10%;
  }
`;

const blog = ({ posts }) => {
  return (
    <PostStyle>
      {posts.map(({ id, title, postContent, images }) => (
        <PostCard
          key={id}
          title={title}
          imgUrl={images[0].url}
          content={postContent.raw.children}
        />
      ))}
    </PostStyle>
  );
};

export default blog;

import { gql } from "graphql-request";

const QUERY = gql`
  {
    posts {
      id
      images {
        id
        fileName
        url
      }
      postContent {
        raw
      }
      title
      slug
      ratings
      updatedAt
      authoredBy {
        ... on Author {
          id
          author
          avatar {
            id
          }
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
  };
}
