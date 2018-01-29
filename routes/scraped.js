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

	      	// Add the text and href of every link, and save them as properties of the result object
	      	title = $(this).children("h2").text();
	      	summary = $(this).children(".summary").text();
	      	url = $("a.story-link").attr("href");
	      	saved = false;
	   		date = Date.now();

	     		Article.findOneAndUpdate({ 
	     			title: title,
	     			summary: summary,
	     			url: url,
	     			saved: saved,
	     			date: date
	     		},
	     		Article({
					title: title,
					summary: summary,
					url: url,
					saved: saved,
					date: date
				}),
				{	upsert: true, 
					new: true, 
					runValidators: true
				});
		});
  	});

});

module.exports = router;