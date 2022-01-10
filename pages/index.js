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
  const { color } = usePosts();
  console.log("the context color is ", color);

  ///********************************* */
  // const [blogPosts, setBlogPosts] = usePostContext([""]);

  // useEffect(() => {
  //   posts && setBlogPosts(posts);

  //   // eslint-disable-next-line
  // }, []);

  // console.log("stejtot e", blogPosts);
  ///********************************* */

  return (
    <div>
      <HomePage />
    </div>
  );
}

const QUERY = gql`
  {
    posts(orderBy: createdAt_DESC) {
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
      createdAt
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
