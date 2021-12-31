import { GraphQLClient } from "graphql-request";
import PostCard from "../../components/PostCard";

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/ckxqxp5pl0pty01z1hfufbw6n/master",
  {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  }
);

const blog = ({ posts }) => {
  return (
    <section>
      <ul>
        {posts.map(({ id, title, postContent, images }) => (
          <PostCard
            key={id}
            title={title}
            imgUrl={images[0].url}
            content={postContent.raw.children}
          />
        ))}
      </ul>
    </section>
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
