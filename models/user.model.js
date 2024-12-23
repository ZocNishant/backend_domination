const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testing");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  age: String,
  isMarried: Boolean,
});

module.exports = mongoose.model("user", userSchema);
