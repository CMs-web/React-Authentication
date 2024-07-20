const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    name: String,
    required: true,
  },
  {
    email: String,
    required: true,
  },
  {
    passsword: String,
    required: true,
  }
);

module.exports = mongoose.model("user", userModel)