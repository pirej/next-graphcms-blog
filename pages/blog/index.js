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
  display: flex;
  padding: 0 20%;
  margin: 5% auto;
  /* -- */
  @media (max-width: 1440px) {
    padding: 0 16%;
  }
  @media (max-width: 1280px) {
    padding: 0 12%;
  }
  @media (max-width: 1024px) {
    padding: 0 10%;
  }
  @media (max-width: 768px) {
    padding: 0 10%;
  }
  @media (max-width: 540px) {
    padding: 0 8%;
  }
  @media (max-width: 380px) {
    padding: 0 6%;
  }
  @media (max-width: 280px) {
    padding: 0 3%;
  }
  .mainPostSection {
    display: flex;
    flex-wrap: wrap;
  }
`;

const blog = ({ posts }) => {
  return (
    <PostStyle>
      <div className="mainPostSection">
        {posts.map(({ id, title, subtitle, postContent, images }) => (
          <PostCard
            key={id}
            title={title}
            subtitle={subtitle}
            imgUrl={images[0].url}
            content={postContent.raw.children}
          />
        ))}
      </div>
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
      subtitle
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
