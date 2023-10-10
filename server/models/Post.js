const { Schema, model } = require('mongoose');

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
});

const Post = model('Post', postSchema);

module.exports = Post;