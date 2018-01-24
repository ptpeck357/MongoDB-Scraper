var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create the Note schema
var NoteSchema = new Schema({

  title: {
    type: String
  },

  body: {
    type: String
  }
});

// Create the Note model with the NoteSchema
var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
