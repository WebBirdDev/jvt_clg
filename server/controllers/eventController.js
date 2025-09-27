const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");
const getClientIp = require("../helpers/getClientIp");
const userLog = require("../models/userLogModel");

const createEvent = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error("Please upload event image");
  }
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.date ||
    !req.body.time
  ) {
    res.status(400);
    throw new Error("Please enter required fields");
  }

  const event = await Event.create({
    name: req.body.name,
    description: req.body.description,
    event_date: req.body.date,
    event_time: req.body.time,
    img: req.file.filename,
  });

  const ipaddress = getClientIp(req);
  const userlog = await userLog.create({
    username: req.body.username || "unknown",
    task: req.body.task || "unknown",
    ipaddress: ipaddress,
  });
  res.status(200).json({
    message: "Event created",
    event: event,
    userlog,
  });
});

const getAllEvents = asyncHandler(async (req, res) => {
  const events = await Event.find().sort({
    createdAt: -1,
  });
  res.status(200).json({
    count: events.length,
    events: events,
  });
});

const getSingleEvent = asyncHandler(async (req, res) => {
  const eventId = req.params.id;
  const event = await Event.findById(eventId);
  if (!event) {
    res.status(400);
    throw new Error("Event not found");
  }
  res.status(200).json(event);
});

const updateEvent = asyncHandler(async (req, res) => {
  const eventId = req.params.id;
  const event = await Event.findById(eventId);
  if (!event) {
    res.status(400);
    throw new Error("Event not found");
  }

  event.name = req.body.name || event.name;
  event.description = req.body.description || event.description;
  event.event_time = req.body.time || event.event_time;
  event.event_date = req.body.date || event.event_date;
  event.status = req.body.status || event.status;
  if (req.file) {
    event.img = req.file.filename;
  }

  const updatedEvent = await event.save();
  const ipaddress = getClientIp(req);
  const userlog = await userLog.create({
    username: req.body.username || "unknown",
    task: req.body.task || "unknown",
    ipaddress: ipaddress,
  });

  res.status(200).json({
    message: "Event updated successfully",
    event: updatedEvent,
    userlog,
  });
});

const deleteEvent = asyncHandler(async (req, res) => {
  const eventId = req.params.id;
  const event = await Event.findById(eventId);
  if (!event) {
    res.status(400);
    throw new Error("Event not found");
  }
  await Event.deleteOne({ _id: eventId });
  const ipaddress = getClientIp(req);
  const userlog = await UserLog.create({
    username: req.body.username || "unknown",
    task: req.body.task || "unknown",
    ipaddress: ipaddress,
  });
  res.status(200).json({
    message: `event ${req.params.id} deleted`,
    userlog,
  });
});
module.exports = {
  createEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
