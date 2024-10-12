const mongoose = require('mongoose');
const { Schema } = mongoose;

// Syllabus Schema
const syllabusSchema = new Schema({
    unit: {
        type: String, // Name or topic of the unit
        required: true
    },
    topics: {
        type: [String], // List of topics in the unit
        required: true
    }
});

// Marks Schema
const marksSchema = new Schema({
    examType: {
        type: String, // Example: Midterm, Final, Assignment, etc.
        required: true
    },
    marks: {
        type: Number, // Marks allocated to this exam type
        required: true
    }
});

// Subject Schema
const subjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String, // Subject code, e.g., CS101
        required: true,
        unique: true
    },
    syllabus: [syllabusSchema], // Array of syllabus documents
    totalMarks: {
        type: Number, // Total marks for the subject
        required: true
    },
    marksDistribution: [marksSchema], // Array of marks distribution documents
    toughnessLevel: {
        type: String, // Example: Easy, Medium, Hard
        enum: ['Easy', 'Medium', 'Hard'], 
        required: true
    },
    creditHours: {
        type: Number, // Number of credit hours for the subject
        required: true
    },
    semester: {
        type: Number, // Semester in which the subject is offered
        required: true,
        min: 1, // Minimum value of semester
        max: 8  // Assuming 8 semesters in a typical degree course
    },
    branch: [
        {
          type: String,
        },
      ]
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Subject', subjectSchema);
