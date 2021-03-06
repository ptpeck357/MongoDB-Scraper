var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({

    // title is a required string
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },

    summary: {
        type: String,
        trim: true
    },

    url: {
        type: String,
        trim: true
    },

    saved: {
        type: Boolean,
        default: false
    },

    note: [
        {
            type: Schema.Types.ObjectId,
            ref: "Note"
        }
    ]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;