// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = require("./models/index");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
  db.Pizza.find({}, function(err, pizzas) {
    if (err) { res.json(err) }
    console.log("pizzas to load for index: ", pizzas);
    res.render("index", {pizzas: pizzas});
  })
});

// update a pizza
// app.put('/api/pizzas/:id', function(req, res) {

// })

app.post('/api/pizzas', function(req, res) {
  // create pizza in database
  // pizza schema information and callback
  db.Pizza.create(req.body, function(err, pizza) {
    // if there is an error, send it as json
    if (err) {
      res.json(err);
    } else {
    // what do we do when the pizza is made?
      // res.redirect('/order');
      console.log(pizza);
      res.json(pizza);
    }
  })
})

app.get('/pizzas/:_id', function(req, res) {
  // find pizza by id
  db.Pizza.findById(req.params._id, function(err, pizza) {
    if (err) {
      res.json(err);
    } else {
// render show page, passing the found pizza as a local variable for the EJS template
      res.render('show', {pizza: pizza});
    }
  })
})

app.post('/api/pizzas/:_id/comments', function(req, res) {
  // create a comment for a specific pizza
  // access the Comment model in the DB and create a new instance of it by passing the req.body JS object (looks like { details: "your info"})
  var comment = new db.Comment(req.body);
  console.log("comment is: ", comment);
  // find pizza by id, using params from the route
  db.Pizza.findById(req.params._id, function(err, pizza) {
    if (err) { res.json(err) }
    // add the comment to the pizza's comments
    pizza.comments.push(comment);
    // save the pizza
    pizza.save();
    console.log("pizza is: ", pizza);
    console.log("this pizza's comments are: ", pizza.comments);
    // send the comment we made back to the client to append to the page
    res.json(comment);
  })
})

app.listen(3000, function() {
  console.log("server running on port 3000");
});
