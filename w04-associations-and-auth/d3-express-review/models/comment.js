var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
  details: String
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;