//* You Have To Install mongoose : npm i mongoose 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//* Schemas defines the type of the data
const studentSchema = new Schema({
    name: {
        type: String
    },
    age: Number,
    city: String,
    email: {
        type: String,
        required: true
    },
    score: Number
}, { timestamps: true});

//* Creating The Model : The Model Allow us To communicate with the database
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;