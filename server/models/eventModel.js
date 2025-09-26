const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter event name"],
  },
  img: {
    type: String,
    required: [true, "Please upload event cover image"],
  },
  description: {
    type: String,
    required: [true, "Please enter event description"],
  },
  event_date: {
    type: Date,
    required: [true, "Please enter event date"],
  },
  event_time: {
    type: String,
    required: [true, "Please enter event time"],
    match: [
      /^([0-1]\d|2[0-3]):([0-5]\d)$/,
      "Please enter a valid time in HH:MM format",
    ],
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

module.exports = mongoose.model("Events", eventSchema);
