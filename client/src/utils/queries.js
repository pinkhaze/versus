import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      option1
      option2
      option1_votes
      option2_votes
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
  query posts($username: String) {
    posts(username: $username) {
      _id
      option1
      option2
      option1_votes
      option2_votes
      comments {
        commentText
        username
      }

export const QUERY_USERPOSTS = gql`
  query userPosts($username: String) {
  userPosts(username: $username) {
    _id
    option1
    option2
    option1_votes
    option2_votes
    comments {
      commentText
      username

    }
  }
`;
export const QUERY_ALLPOSTS = gql`
  query allPosts {
    allPosts {
      _id
      option1
      option2
      option1_votes
      option2_votes
      comments {
        commentText
        username
      }
    }
  }
`;
export const QUERY_POST = gql`
  query post($postId: ID!) {
    post(postId: $postId) {
      _id
      option1
      option2
      option1_votes
      option2_votes
      username
      comments {
        commentText
        username
      }
    }
  }
`;
