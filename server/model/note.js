var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var NoteSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isPinned: {
        type: Boolean
    },
    isArchive: {
        type: Boolean
    },
    isTrash: {
        type: Boolean
    },
    reminder: {
        type: Date
    },
    color: {
        type: String
    },
    image: {
        type: String
    }
    }, {collection: 'userNotes'}
)

var Note = module.exports = mongoose.model('userNotes', NoteSchema);

module.exports.createNote = (note, callback) => {
    var id = mongoose.Types.ObjectId(note.noteId);
    note.noteId = id;
    note.save(callback);
}