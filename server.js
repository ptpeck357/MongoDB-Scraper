var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Set mongoose to leverage built in JavaScript ES6 Promises
// mongoose.Promise = Promise;

var PORT = process.env.PORT || 3000;

/* Database */
// var db = require('../models');

/* Routes */
var home = require('./routes/home.js');
var saved = require('./routes/saved.js');
var scraped = require('./routes/scraped.js');

/* Init App */
var app = express();

/* View Engine */
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(logger("dev"));

/* Set Static Folder */
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', home);
app.use('/', saved);
app.use('/', scraped);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

module.exports = app;