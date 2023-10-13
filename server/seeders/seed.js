const connection = require('../config/connection');
const { User, Post } = require('../models');
const { users, posts, comments } = require('./data');

connection.on('error', (err) => err);

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

connection.once('open', async () => {
    console.log('connected');
    // Delete the collections if they exist
    await User.deleteMany();
    await Post.deleteMany();
    let userData = await User.insertMany(users)
    console.log(userData);
    for (let i = 0; i < posts.length; i++) {
        const element = posts[i];
        let myUser = getRandomArrItem(userData)
        element.username = myUser.username
        console.log(element);
        const postData = await Post.create(element)
        console.log(postData);
        await User.findOneAndUpdate(
            {_id: myUser._id},
            {$addToSet: {posts: postData._id}},
            {new: true}
        )
        await Post.findOneAndUpdate(
            {_id: postData._id},
            {$addToSet: {comments: comments[i]}},
            {new: true}
        )    
   }
   console.log('database complete');
   process.exit(0);
})
