import { GraphQLClient } from "graphql-request";
import styles from "../styles/Home.module.css";
import { RichText } from "@graphcms/rich-text-react-renderer";

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/ckxqxp5pl0pty01z1hfufbw6n/master",
  {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  }
);

const test = ({ posts }) => {
  console.log(posts);
  // console.log(posts[0].images[0].url);

  return (
    <section>
      <div className={styles.grid}>
        <a href="/" className={styles.card}>
          <h2>Go Home &rarr;</h2>
          <p>Home sweet home</p>
        </a>
      </div>

      <ul>
        {posts.map(({ id, title, postContent, images }) => (
          <div key={id}>
            <h3>{title}</h3>
            <h3>{images[0].url}</h3>

            <RichText content={postContent.raw.children} />
          </div>
        ))}
      </ul>
    </section>
  );
};

export default test;

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
