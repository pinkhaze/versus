const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    posts: [Post]
  }

  type Post {
    _id: ID!
    option1: String!
    option2: String!
    option1_votes: Int
    option2_votes: Int
    comments: [Comment]
  }

  type Comment {
    commentText: String!
    username: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
    allPosts: [Post]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(option1: String!, option2: String!, username: String!): Post
    addComment(PostId: ID!, commentText: String!, username: String!): Post
    removePost(PostId: ID!): Post
    removeComment(PostId: ID!, commentId: ID!): Post
    createVote(_id: String!, optionNum: Int!): Post
    deleteVote(_id: String!, optionNum: Int!): Post
  }
`;

module.exports = typeDefs;
