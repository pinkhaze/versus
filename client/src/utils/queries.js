import { gql } from '@apollo/client';

export const QUERY_USER = gql `
    query user ($username: String!) {
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

export const QUERY_POST = gql`
    query post {
        post {
            _id
            name
        }
    }
`

export const QUERY_MATCHUPS = gql`
    query matchups($_id: String){
        matchups(_id: $_id) {
            _id
            post1
            post2
            post1_votes
            post2_votes
        }
    }
`