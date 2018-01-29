var path = require("path");
var express = require("express");
var router = express.Router();

var Note = require("../models/Note.js");
var Article = require("../models/Article.js");

router.get('/', function(req, res) {

	// Grab every doc in the Articles array
	Article.find({}, function(error, articles) {
		
		// Log any errors
		if (error) {
			console.log(error);
		} else {

			var data = {
				articles: articles
			};

			res.render('home', data);

		}
	});
});

module.exports = router;