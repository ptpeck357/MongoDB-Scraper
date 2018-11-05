var path = require("path");
var express = require("express");
var router = express.Router();

var Note = require("../models/Note.js");
var Article = require("../models/Article.js");

/*Get notes for this article*/
router.get('/note/:id', function(req, res) {

    var ArticleId = req.params.id;

	Article.findOne({"_id": req.params.id })
  	.populate("note")
  	.exec(function(error, article) {
    	if (error) {
      		console.log(error);
    	} else {
            var data = {
                article: article,
                ArticleId: ArticleId
            }
            // if (note) {
                res.json(data)
            // }
    	}
  	});

});

/*Save a new note*/
router.post('/save/note/:id', function(req, res) {

  var ArticleId = req.params.id;

	// Create a new note and pass the req.body to the entry
 	var newNote = new Note(req.body);

 	// console.log(req.body)
  	newNote.save(function(error, result) {
    	if (error) {
      		console.log(error);
    	} else {

            // Use the article id to find and update it's note
            Article.findOneAndUpdate({_id: ArticleId}, { $push: { note: result._id } }, { new: true })
            // Execute the above query
            .exec(function(err, note) {
                // Log any errors
                if (err) {
                  console.log(err);
                } else {

                    var data = {
                        note: newNote,
                        ArticleId: ArticleId,
                        noteid: result._id
                    }

                  res.json(data);
                }
            });
        }
    });
});

/*Delete note*/
router.get('/delete/:id', function(req, res) {

    var noteid = req.params.id;

    Note.remove({_id: noteid}, function(err){

        if (err) {

            console.log(err);

        } else {

            res.json("Delete Success");

        }

    });

});

module.exports = router;