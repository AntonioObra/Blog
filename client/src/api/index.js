import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.REACT_APP_GRAPHCMS_ENDPOINT;

//function for posting comments, currently not implemented
export const comments = async (req, res) => {
  console.log(req);
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, req.body);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
