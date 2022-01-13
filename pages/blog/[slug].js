import { gql, GraphQLClient } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import styled from "styled-components";

const StyledPost = styled.div`
  section {
    /* background-color: teal; */
  }
`;

function PostDetailPage({ post }) {
  const mainContent = post.postContent.raw.children;
  const imgUrl = post.images[0].url;
  const altImg = post.images[0].fileName;

  return (
    <StyledPost>
      <section>
        <Image src={imgUrl} alt={altImg} width={640} height={427} />
        <h1>Title is {post.title}</h1>
        <h3>Subtitle is {post.subtitle}</h3>
        <RichText content={mainContent} />
      </section>
    </StyledPost>
  );
}

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/ckxqxp5pl0pty01z1hfufbw6n/master",
  {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  }
);

// get the paths for all posts
export async function getStaticPaths() {
  const query = gql`
    {
      posts {
        slug
      }
    }
  `;

  const { posts } = await graphcms.request(query);

  const paths = posts.map(post => {
    return {
      params: { slug: post.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // fetch the data for the curent post defined by the params.slug
  const currentSlug = params.slug;

  const query = gql`
    query ($currentSlug: String!) {
      post(where: { slug: $currentSlug }) {
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

  const variables = { currentSlug };

  const { post } = await graphcms.request(query, variables);

  return {
    props: {
      post: post,
    },
  };
}

export default PostDetailPage;
