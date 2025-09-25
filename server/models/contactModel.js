const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contactModel = mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  message: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports = mongoose.model("Contact", contactModel);
