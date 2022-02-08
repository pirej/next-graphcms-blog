import { gql, GraphQLClient } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import styled from "styled-components";

const StyledPost = styled.div`
  /* background-color: teal; */
  padding: 0 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    /* background-color: orange; */
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5b718c;
    /* font-size: larger; */

    .imgWrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        border-radius: 8px;
        overflow: visible !important;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      span > img {
        border-radius: 8px;
      }
    }

    .textWrapper {
      padding: 0 5vw;

      a {
        color: #3987e5;
      }
    }

    h1 {
      font-size: 2rem;
    }
    h3 {
      margin-top: 1.8rem;
      font-size: 1.5rem;
    }
    p {
      font-weight: 500;
      font-size: 1.05rem;
      margin-top: 0px;
    }
  }
`;

function PostDetailPage({ post }) {
  const mainContent = post.postContent.raw.children;
  const imgUrl = post.images[0].url;
  const altImg = post.images[0].fileName;

  return (
    <StyledPost>
      <section>
        <h1>{post.title}</h1>
        <div className="imgWrapper">
          <Image src={imgUrl} alt={altImg} width={600} height={400} />
        </div>
        <h3>{post.subtitle}</h3>
        <div className="textWrapper">
          <RichText content={mainContent} />
        </div>
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
    revalidate: 1,
  };
}

export default PostDetailPage;
