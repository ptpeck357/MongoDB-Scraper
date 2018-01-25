var request = require("request");
var cheerio = require("cheerio");

var path = require("path");
var express = require("express");
var router = express.Router();

var Note = require("../models/Note.js");
var Article = require("../models/Article.js");

router.get("/scrape", function(req, res){

 	request("https://www.nytimes.com/section/us?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=U.S.&WT.nav=page", function(error, response, html) {

	    var $ = cheerio.load(html);

	    $(".story-meta").each(function(i, element) {

	      	// Save an empty result object
	     	var result = {};

	      	// Add the text and href of every link, and save them as properties of the result object
	      	result.title = $(this).children("h2").text();
	      	result.summary = $(this).children(".summary").text();
	      	result.url = $("a.story-link").attr("href");
	      	result.image = $("img").attr("src");

	      	var entry = new Article(result);

		    entry.save(function(err, doc) {
	        	if (err) {
	        		console.log(err);
       	 		} else {
           			// res.redirect("/");
	        	}

	      	});

	    });
  	});
});

module.exports = router;