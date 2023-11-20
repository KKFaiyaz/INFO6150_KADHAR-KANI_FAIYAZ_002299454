const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    validate: /^[a-zA-Z ]*$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: /^[a-zA-Z0-9._-]+@northeastern\.edu$/,
  },
  password: {
    type: String,
    required: true,
    validate: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
