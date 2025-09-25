const asyncHandler = require("express-async-handler");
const UserLogs = require("../models/userlogModel");
const getClientIp = require("../helpers/getClientIp");

const getAllUserLogs = asyncHandler(async (req, res) => {
  const userlogs = await UserLogs.find().sort({ created_at: -1 }); // latest first
  res.status(200).json({
    count: userlogs.length,
    userlogs,
  });
});

const createUserLog = asyncHandler(async (req, res) => {
  const ipaddress = getClientIp(req);
  const userlog = await UserLogs.create({
    username: req.body.username || "unknown",
    task: req.body.task || "unknown",
    ipaddress: ipaddress,
  });
  res.status(200).json({
    userlog,
  });
});

module.exports = {
  getAllUserLogs,
  createUserLog
};
