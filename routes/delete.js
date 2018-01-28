var path = require("path");
var express = require("express");
var router = express.Router();

var Note = require("../models/Note.js");
var Article = require("../models/Article.js");

router.get("/delete/:id", function(req, res){

	var id = req.params.id;

	Article.remove(
	{
		_id: id
	}, 

	function(error, response) {

	    // Log any errors to the console
	    if (error) {

	      console.log(error);

	    } else {	    
	    		res.redirect("/saved");
	 		}
  	});

});

module.exports = router;