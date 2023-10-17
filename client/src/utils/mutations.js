import { gql } from "@apollo/client";
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const ADD_VERSUS = gql`
//     mutation addVersus($versusText: String!) {
//         addVersus(versusText: $versusText){
//             _id
//             versusText
//             versusAuthor
//             createdAt

//         }
//     }
// `;

export const ADD_POST = gql`
  mutation addPost($option1: String!, $option2: String!, $username: String!) {
    addPost(option1: $option1, option2: $option2, username: $username) {
      _id
      option1
      option2
      comments {
        commentText
      }
    }
  }
`;
export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!, $username: String!) {
    addComment(
      postId: $postId
      commentText: $commentText
      username: $username
    ) {
      _id
      option1
      option2
      username
      comments {
        # _id
        commentText
      }
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $optionNum: Int!) {
    createVote(_id: $_id, optionNum: $optionNum) {
      _id
      option1
      option2
      option1_votes
      option2_votes
    }
  }
`;
