const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var studentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mathScore: {
        type: Number,
        required: true
    },
    englishScore: {
        type: Number,
        required: true
    },
});

var students = mongoose.model('students', studentSchema);

module.exports = students;