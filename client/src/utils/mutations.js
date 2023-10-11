import { gql } from '@apollo/client';

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

export const CREATE_MATCHUP = gql`
    mutation createMatchup($post1: String!, $post2: String!) {
        createMatchup(post1: $post1, post2: $post2) {
            _id
            post1
            post2
        }
    }
`;

export const CREATE_VOTE = gql `
    mutation createVote($_id: String!, $voteNum: Int!) {
        createVote(_id: $_id, voteNum: $voteNum) {
            _id
            post1
            post2
            post1_votes
            post2_votes
        }
    }
`;