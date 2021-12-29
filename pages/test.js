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
  console.log(posts[0].postContent);
  return (
    <section>
      <div className={styles.grid}>
        <a href="/" className={styles.card}>
          <h2>Go Home &rarr;</h2>
          <p>Home sweet home</p>
        </a>
      </div>
      <ul>
        {posts.map(({ id }) => (
          <div key={id}>
            <h3>sssss</h3>
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
      postContent {
        html
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
