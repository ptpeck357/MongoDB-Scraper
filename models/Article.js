var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({

  // title is a required string
  title: {
    type: String,
    trim: true,
    unique: true,
    dropDups : false,
    required: true
  },

  // link is a required string
  summary: {
    type: String,
    trim: true,
    required: true
  },

  url: {
    type: String,
    trim: true,
    required: true
  },

  saved: {
    type: Boolean
  }

  // note: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Note"
  // }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;