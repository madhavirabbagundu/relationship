const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
  title: String,

  user:{  //normalized approach def
    type: mongoose.Types.ObjectId,
    ref:"user"
   },

   post:{ //embedded approach
    title:String,
    id:mongoose.Types.ObjectId
   }

//   user:
}, 
{
  timestamps: true
});

const comment = mongoose.model('comment', commentSchema);
module.exports = comment;