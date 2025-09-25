const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userLogSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  ipaddress: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserLog", userLogSchema);
