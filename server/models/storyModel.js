const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter name "],
  },
  faculty: {
    type: String,
    required: [true, "Please enter faculty "],
  },

  quote: {
    type: String,
    required: [true, "Please enter quote"],
  },
  img: {
    type: String,
    required: [true, "Please enter image"],
  },
  status: {
    type: String,
    enum: ["active", "disabled"],
    default: "active",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Story", StorySchema);
