// require mongoose module
var mongoose = require("mongoose");
// connect to MongoDB
/*
you can check this by going to your console and using these commands
- use 'mongo' to open MongoDB
- use 'show dbs' to show your databases
- use 'use <your db name>' to select your databases
- use 'show collections' to show the models in your database
- use 'db.ModelName.find()' to query your database for a model
*/

mongoose.connect("mongodb://localhost/pizza_app");

// After creating a new model, require and export it:
// module.exports.Tweet = require("./tweet.js");
module.exports.Pizza = require('./pizza.js');
module.exports.Comment = require('./comment.js');
