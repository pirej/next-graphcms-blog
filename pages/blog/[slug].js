import { gql, GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/ckxqxp5pl0pty01z1hfufbw6n/master",
  {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  }
);

function PostDetailPage({ post }) {
  // console.log("post props logg....", post);

  return (
    <div>
      <h1>The slug is: {post.slug}</h1>
      <h3>Title is {post.title}</h3>
      <h3>Subtitle is {post.subtitle}</h3>
      <h3>Post ID is {post.id}</h3>
    </div>
  );
}

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
