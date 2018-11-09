let request = require("request");
let cheerio = require("cheerio");

let path = require("path");
let express = require("express");
let router = express.Router();

let Note = require("../models/Note.js");
let Article = require("../models/Article.js");

router.get("/scrape", (req, res) => {

 	request("https://www.nytimes.com/section/us?action=click&pgtype=Homepage&region=TopBar&module=HPMiniNav&contentCollection=U.S.&WT.nav=page", (error, response, html) => {

	    let $ = cheerio.load(html);

	    $("#stream-panel > .css-13mho3u > ol > li").each((i, element) => {

				// Add the text and href of every link, and save them as properties of the result object
				let newArticle = new Article({
					url: "https://www.nytimes.com" + $(element).find('.css-4jyr1y > a').attr('href'),
					title: $(element).find('h2').text().trim(),
					summary: $(element).find('div.css-4jyr1y > a > p').text().trim()
				});

	   		Article.create(newArticle, (error, doc) => {
					if (error) {
						console.log(error)
					}
		  	});
		});

		res.json("success");

  	});
});

module.exports = router;