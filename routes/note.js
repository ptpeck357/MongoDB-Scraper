var path = require("path");
var express = require("express");
var router = express.Router();

var Note = require("../models/Note.js");
var Article = require("../models/Article.js");

router.get('/note/:id', function(req, res) {

    var id = req.params.id;

    console.log(id) 

// 	Article.findOne({ "_id": req.params.id })
//   	.populate("note")
//   	.exec(function(error, doc) {
//     	if (error) {
//       		console.log(error);
//     	} else {
//       		res.render("notes");
//     	}
//   	});
// res.render("notes");
});

// db.notes.find({}, function(error, found) {
//     // Log any errors
//     if (error) {
//       console.log(error);
//     } else {
//       res.json(found);
//     }
// });
  
router.post('/save/note', function(req, res) {

	// Create a new note and pass the req.body to the entry
 	// var newNote = new Note(req.body);
 	// // console.log(req.body)
  // 	newNote.save(function(error, note) {
  //   	if (error) {
  //     		console.log(error);
  //   	} else {
  //     // Use the article id to find and update it's note
  //     Article.findOneAndUpdate({"_id": req.body.id}, { $push: { comments: dbComment._id } }, { new: true });
  //     // Execute the above query
  //     .exec(function(err, data) {
  //       // Log any errors
  //       if (err) {
  //         console.log(err);
  //       }
  //       else {
  //         // Or send the document to the browser
  //         res.json(data);
  //       }
  //     });
  //   }
  //   });
});

module.exports = router;