var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({

    title: {
        type: String,
        required: true,
        unique : true,
        dropDups: true
    },

    summary: {
        type: String,
        required: true,
        unique : true,
        dropDups: true
    },

    url: {
        type: String,
        required: true,
        unique : true,
        dropDups: true
    },

    notes: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }

});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
