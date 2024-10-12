const mongoose = require('mongoose');

const examInfoSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    examType: {
        type: String,
        enum: ['Midterm', 'Final', 'Quiz', 'Practical', 'Assignment'],
        required: true
    },
    examDate: {
        type: Date,
        required: true
    },
    duration: {
        type: String,
        required: true // e.g., '2 hours', '3 hours'
    },
    syllabus: {
        type: String,
        required: true // A brief description or link to the syllabus
    },
    marksDistribution: {
        totalMarks: {
            type: Number,
            required: true
        },
        internalMarks: {
            type: Number,
            required: true
        },
        externalMarks: {
            type: Number,
            required: true
        }
    },
    difficultyLevel: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        required: true
    },
    semester: {
        type: Number,
        required: true
    }
});

const ExamInfo = mongoose.model('ExamInfo', examInfoSchema);

module.exports = ExamInfo;
