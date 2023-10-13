import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts($_id: String) {
    post(_id: $_id) {
      _id
      post1
      post2
      post1_votes
      post2_votes
      username
    }
  }
`;
export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      post1
      post2
      post1_votes
      post2_votes
      username
      comments {
        _id
        commentText
        username
      }
    }
  }
`;
