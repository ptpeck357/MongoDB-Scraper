var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create the Note schema
var NoteSchema = new Schema({

	title: {
		type: String,
		required: "Please put a title"
	},

	body: {
		type: String,
		required: "Please leave a note"
	}
});

// Create the Note model with the NoteSchema
var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
