const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  title: String,
  email: String,
  bio: String,
}, 
{
  timestamps: true
});

const user = mongoose.model('user', UserSchema);
module.exports = user;