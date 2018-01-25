var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({

  // title is a required string
  title: {
    type: String,
    required: true
  },

  // link is a required string
  summary: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  }

  // note: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Note"
  // }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
