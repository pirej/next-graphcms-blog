import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import HomePage from "../components/HomePage";
import { usePosts } from "../hooks/usePosts";

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/ckxqxp5pl0pty01z1hfufbw6n/master",
  {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  }
);

export default function Home({ posts }) {
  const { blogData, getBlogData } = usePosts();

  /*  send the fetched data to the context/reducer  */
  ///********************************* */
  useEffect(() => {
    posts && getBlogData({ posts });

    // eslint-disable-next-line
  }, [posts]);
  ///********************************* */

  return (
    <div>
      <Head>
        <title>WebDevClub</title>
      </Head>
      <HomePage imgUrl={posts[0].images[0].url} />
    </div>
  );
}

const QUERY = gql`
  {
    posts(last: 1) {
      images {
        url
      }
      title
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
      revalidate: 1,
    },
  };
}
