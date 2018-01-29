var path = require("path");
var express = require("express");
var router = express.Router();

var Note = require("../models/Note.js");
var Article = require("../models/Article.js");

router.get('/saved', function(req, res) {

  // Grab every doc in the Articles array
  Article.find({saved: true}).sort({"date": 1})
  .populate("note")
    .exec(function(error, articles) {
        if (error) {
            console.log(error);
        } else {

            var data = {
                articles: articles
            };

            res.render('saved', data);
        }
    });
});

/*Updating article to set as "saved"*/
router.get('/saved/:id', function(req, res) {

    var id = req.params.id;

    Article.update(
        {
          _id: id
        },
        {
            // Set "saved" to true for the article we specified
            $set: {
                saved: true
            }
        },
        // When that's done, run this function
        function(error, edited) {
            // show any errors
            if (error) {
                console.log(error);
            } else {
                res.json("Saved success!")
            }
        }
    );

});

/*Unsave current article from the "Saved" section*/
router.get("/unsave/:id", function(req, res){

    var id = req.params.id;
    
    Article.update(
        {
          _id: id
        },
        {
            // Set "saved" to false for the article we specified
            $set: {
                saved: false
            }
        },
        // When that's done, run this function
        function(error, edited) {
            // show any errors
            if (error) {
                console.log(error);
            } else {
                res.redirect("/saved")
            }
        }
    );

});
  
module.exports = router;

