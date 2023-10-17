const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("posts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("posts");
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    allPosts: async(parent, args) => {
      return Post.find();
    }
  },

  Mutation: {
    // adds user
    addUser: async (parent, { username, email, password }) => {
      console.log(username);
      const user = await User.create({ username, email, password });
      console.log(user);
      const token = signToken(user);

      return { token, user };
    },

    // login authentification
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    // adds post of a single matchup
    addPost: async (parent, { option1, option2, username }) => {
      const post = await Post.create({ option1, option2, username });
      await User.findOneAndUpdate(
        { username: username },
        { $addToSet: { posts: post._id } }
      );

      return post;
    },

    // adds a comment on the entire matchup itself
    addComment: async (parent, { postId, commentText, username }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: { comments: { commentText, username } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    // removes entire post
    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },

    // removes a single comment
    removeComment: async (parent, { postId, commentId }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },

    createVote: async (parent, { _id, optionNum }) => {
      const vote = await Post.findOneAndUpdate(
        { _id },
        { $inc: { [`option${optionNum}`]: 1 } },
        { new: true }
      );
    },
    deleteVote: async (parent, { _id, optionNum }) => {
      const vote = await Post.findOneAndUpdate(
        { _id },
        { $inc: { [`option${optionNum}`]: -1 } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
