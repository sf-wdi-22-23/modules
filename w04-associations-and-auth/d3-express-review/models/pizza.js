var mongoose = require('mongoose');
var Comment = require('./comment')

// This is another way to set up your schema.
// Both are fine to use. They function similarly.
// var Schema = mongoose.Schema;
//
// var PizzaSchema = new Schema({
//   size: {type: String, required: true},
//   // refactor later to be embedded data with Toppings schema
//   toppings: {type: String, required: false},
//   cheese: {type: String, required: true},
//   crust: {type: String, required: true},
//   comments: [Comment.schema]
// });

var PizzaSchema = mongoose.Schema({
  size: {type: String, required: true},
  // refactor later to be embedded data with Toppings schema
  toppings: {type: String, required: false},
  cheese: {type: String, required: true},
  crust: {type: String, required: true},
  comments: [Comment.schema] // pass the schema for your embedded model here
});

// create a model, making a copy of the schema
// http://mongoosejs.com/docs/models.html
var Pizza = mongoose.model('Pizza', PizzaSchema);

// export this file
module.exports = Pizza;
