const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  dob: String,
  dept: String,
  enrollYear: Number,
  isActive: Boolean,
});

module.exports = mongoose.model('Student', studentSchema);
