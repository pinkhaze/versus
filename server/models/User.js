const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,  
    required: true, 
    trim: true
  },
  email: {
    type: String, 
    required: true, 
    unique: true, 
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email.'] 
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  posts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Post',
    }
  ],
  votes: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
]
},
{
  toJSON: {
      virtuals: true,
  },
  id: false,
}
);

userSchema
    .virtual('postCount')
    .get(function () {
        return this.posts.length
    });

userSchema
    .virtual('voteCount')
    .get(function () {
        return this.votes.length
    });


// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
