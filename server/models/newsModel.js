const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter news name"],
  },
  content: {
    type: String,
    required: [true, "Please enter news content"],
  },
  date: {
    type: Date,
    required: [true, "Please enter news date"],
  },
  img: {
    type: String,
    required: [true, "Please enter cover image"],
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

module.exports = mongoose.model("News", newsSchema);
