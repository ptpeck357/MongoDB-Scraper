let path = require("path");
let express = require("express");
let router = express.Router();

let Note = require("../models/Note.js");
let Article = require("../models/Article.js");

/*Get notes for this article*/
router.get('/note/:id', (req, res) => {

  let ArticleId = req.params.id;

	Article.findOne({"_id": req.params.id })
  	.populate("note")
  	.exec((error, article) => {
    	if (error) {
      		console.log(error);
    	} else {
        let data = {
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
router.post('/save/note/:id', (req, res) => {

  let ArticleId = req.params.id;

	// Create a new note and pass the req.body to the entry
 	let newNote = new Note(req.body);

 	// console.log(req.body)
  	newNote.save((error, result) => {
    	if (error) {
      		console.log(error);
    	} else {

        // Use the article id to find and update it's note
        Article.findOneAndUpdate({_id: ArticleId}, { $push: { note: result._id } }, { new: true })
        // Execute the above query
        .exec((err, note) => {
          // Log any errors
          if (err) {
            console.log(err);
          } else {

            let data = {
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
router.get('/delete/:id', (req, res) => {

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