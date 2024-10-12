const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL of the teacher's image
    required: true,
  },
  branch: [
    {
      type: String,
    },
  ],
  semester: [
    {
      type: Number,
    },
  ],
  subjects: [
    {
      type: String, // List of subjects the teacher handles
      required: true,
    },
  ],
  reviews: [
    {
      user: String,
      rating: Number,
      comment: String,
    },
  ],
  overallRating: {
    type: Number,
    default: 0, // Will be calculated based on reviews
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Teacher", teacherSchema);
