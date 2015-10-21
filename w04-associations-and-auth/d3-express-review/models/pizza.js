var mongoose = require('mongoose');
var Comment = require('./comment')

var PizzaSchema = mongoose.Schema({
  size: {type: String, required: true},
  // refactor later to be embedded data with Toppings schema
  toppings: {type: String, required: false},
  cheese: {type: String, required: true},
  crust: {type: String, required: true},
  comments: [Comment.schema]
});

var Pizza = mongoose.model('Pizza', PizzaSchema);

module.exports = Pizza;