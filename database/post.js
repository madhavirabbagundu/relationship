const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  name: String,
  content: String,
  bio: String,
  password:String,
  user:{  //normalized approach def
   type: mongoose.Types.ObjectId,
   ref:"user"
  }
}, 
{
  timestamps: true
});

const post = mongoose.model('post', postSchema);
module.exports = post;