var path = require("path");
var express = require("express");
var router = express.Router();

var Note = require("../models/Note.js");
var Article = require("../models/Article.js");

router.get("/delete", function(req, res){

	Article.remove({}, function(error, response) {

    // Log any errors to the console
    if (error) {

      console.log(error);

    } else {	    
    		res.redirect("/");
 		}
  	});

});

module.exports = router;