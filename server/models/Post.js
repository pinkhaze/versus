const { Schema, model } = require("mongoose");

// TODO:
const postSchema = new Schema({
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option1_votes: {
    type: Number,
    default: 0,
  },
  option2_votes: {
    type: Number,
    default: 0,
  },
  //ask if this is needed
  username: {
    type: String,
    required: true,
    trim: true,
  },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now,
  //     get: (timestamp) => dateFormat(timestamp),
  //   },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      //   createdAt: {
      //     type: Date,
      //     default: Date.now,
      //     get: (timestamp) => dateFormat(timestamp),
      //   },
    },
  ],
});

const Post = model("Post", postSchema);

module.exports = Post;
