const asyncHandler = require("express-async-handler");
const Story = require("../models/storyModel");
const getClientIp = require("../helpers/getClientIp");
const userLog = require("../models/userLogModel");

const createStory = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error("Please upload stories image");
  }
  if (!req.body.name || !req.body.quote || !req.body.faculty) {
    res.status(400);
    throw new Error("Please enter required fields");
  }
  const story = await Story.create({
    name: req.body.name,
    quote: req.body.quote,
    faculty: req.body.faculty,
    img: req.file.filename,
  });

  const ipaddress = getClientIp(req);
  const userlog = await userLog.create({
    username: req.body.username || "unknown",
    task: req.body.task || "unknown",
    ipaddress: ipaddress,
  });
  res.status(200).json({
    message: "Story created",
    story: story,
    userlog,
  });
});

const getAllStories = asyncHandler(async (req, res) => {
  const stories = await Story.find().sort({
    createdAt: -1,
  });
  res.status(200).json({
    count: stories.length,
    stories: stories,
  });
});

const getSingleStory = asyncHandler(async (req, res) => {
  const storyId = req.params.id;
  const story = await Story.findById(storyId);
  if (!story) {
    res.status(400);
    throw new Error("story not found");
  }
  res.status(200).json(story);
});

const updateStory = asyncHandler(async (req, res) => {
  const storyId = req.params.id;
  const story = await Story.findById(storyId);
  if (!story) {
    res.status(400);
    throw new Error("story not found");
  }

  story.name = req.body.name || story.name;
  story.quote = req.body.quote || story.quote;
  story.faculty = req.body.faculty || story.faculty;
  story.status = req.body.status || story.status;
  if (req.file) {
    story.img = req.file.filename;
  }
  story.updated_at = Date.now();
  const updatedStory = await story.save();
  const ipaddress = getClientIp(req);
  const userlog = await userLog.create({
    username: req.body.username || "unknown",
    task: req.body.task || "unknown",
    ipaddress: ipaddress,
  });

  res.status(200).json({
    message: "Story updated successfully",
    story: updatedStory,
    userlog,
  });
});

const deleteStory = asyncHandler(async (req, res) => {
  const storyId = req.params.id;
  const story = await Story.findById(storyId);
  if (!story) {
    res.status(400);
    throw new Error("story not found");
  }

  await Story.deleteOne({ _id: storyId });
  const ipaddress = getClientIp(req);
  const userlog = await userLog.create({
    username: req.body.username || "unknown",
    task: req.body.task || "unknown",
    ipaddress: ipaddress,
  });
  res.status(200).json({
    message: `Story ${req.params.id} deleted`,
    userlog,
  });
});

module.exports = {
  createStory,
  updateStory,
  getSingleStory,
  getAllStories,
  deleteStory,
};
