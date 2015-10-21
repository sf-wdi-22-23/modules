var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pizza_app");

// After creating a new model, require and export it:
// module.exports.Tweet = require("./tweet.js");
module.exports.Pizza = require('./pizza.js');
module.exports.Comment = require('./comment.js');