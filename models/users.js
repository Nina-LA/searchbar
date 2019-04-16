const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String},
  age: Number,
  location: [Number]
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;