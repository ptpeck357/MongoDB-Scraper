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
	    
	    let counter = [];

	    $("#latest-panel article.story.theme-summary").each(function(i, element) {

	      	// Add the text and href of every link, and save them as properties of the result object
	      	var article = {
	      		url: $(element).find('.story-body>.story-link').attr('href'),
           		title: $(element).find('h2.headline').text().trim(),
            	summary: $(element).find('p.summary').text().trim(),
	      		saved: false,
	   			date: Date.now()
	   		}

	   		Article.findOneAndUpdate({ 
	 			title: article.title,
	 			summary: article.summary,
	 			url: article.url,
	 			saved: article.saved,
	 			date: article.date
	 		},
	 		Article({
				title: article.title,
				summary: article.summary,
				url: article.url,
				saved: article.saved,
				date: article.date
			}),
			{	upsert: true, 
				new: true, 
				runValidators: true
			}, function(err, data){
				if (err) {
					console.log(err)
				}
			});
	     		
		});

		res.json("success");

  	});

});

module.exports = router;