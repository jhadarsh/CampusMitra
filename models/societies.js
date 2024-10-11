const mongoose = require('mongoose');

const societySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL to the society's image
  },
  auditionDate: {
    type: Date,
    required: true,
  },
  numberOfStudents: {
    type: Number,
    required: true,
  },
  president: {
    name: String,
    contactInfo: String,
  },
  vicePresident: {
    name: String,
    contactInfo: String,
  },
  coreTeam: [
    {
      name: String,
      role: String,
    },
  ],
  facultyName: {
    type: String,
    required: true,
  },
  establishmentDate: {
    type: Date,
    required: true,
  },
});

const Society = mongoose.model('Society', societySchema);
module.exports = Society;
