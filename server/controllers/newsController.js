const asyncHandler = require("express-async-handler");
const News = require("../models/newsModel");
const getClientIp = require("../helpers/getClientIp");
const userLog = require("../models/userLogModel");

const createNews = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error("Please upload news image");
  }
  if (!req.body.name || !req.body.content || !req.body.date) {
    res.status(400);
    throw new Error("Please enter required fields");
  }
  const news = await News.create({
    name: req.body.name,
    content: req.body.content,
    date: req.body.date,
    img: req.file.filename,
  });

  const ipaddress = getClientIp(req);
  const userlog = await userLog.create({
    username: req.body.username || "unknown",
    task: req.body.task || "unknown",
    ipaddress: ipaddress,
  });
  res.status(200).json({
    message: "News created",
    news: news,
    userlog,
  });
});

const getAllNews = asyncHandler(async (req, res) => {
  const news = await News.find().sort({
    createdAt: -1,
  });
  res.status(200).json({
    count: news.length,
    news: news,
  });
});

const getSingleNews = asyncHandler(async (req, res) => {
  const newsId = req.params.id;
  const news = await News.findById(newsId);
  if (!news) {
    res.status(400);
    throw new Error("News not found");
  }
  res.status(200).json(news);
});

const updateNews = asyncHandler(async (req, res) => {
  const newsId = req.params.id;
  const news = await News.findById(newsId);
  if (!news) {
    res.status(400);
    throw new Error("News not found");
  }

  news.name = req.body.name || news.name;
  news.content = req.body.content || news.content;
  news.date = req.body.date || news.date;
  news.status = req.body.status || news.status;
  news.updated_at = Date.now();
  if (req.file) {
    news.img = req.file.filename;
  }

  const updatedNews = await news.save();
  const ipaddress = getClientIp(req);
  const userlog = await userLog.create({
    username: req.body.username || "unknown",
    task: req.body.task || "unknown",
    ipaddress: ipaddress,
  });

  res.status(200).json({
    message: "News updated successfully",
    news: updatedNews,
    userlog,
  });
});

const deleteNews = asyncHandler(async (req, res) => {
  const newsId = req.params.id;
  const news = await News.findById(newsId);
  if (!news) {
    res.status(400);
    throw new Error("News not found");
  }

  await News.deleteOne({ _id: newsId });
  const ipaddress = getClientIp(req);
  const userlog = await userLog.create({
    username: req.body.username || "unknown",
    task: req.body.task || "unknown",
    ipaddress: ipaddress,
  });
  res.status(200).json({
    message: `news ${req.params.id} deleted`,
    userlog,
  });
});

module.exports = {
  createNews,
  updateNews,
  getAllNews,
  getSingleNews,
  deleteNews,
};
