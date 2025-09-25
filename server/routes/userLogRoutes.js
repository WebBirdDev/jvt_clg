const express = require("express");
const router = express.Router();

const {
  getAllUserLogs,
  createUserLog,
} = require("../controllers/userlogController");

router.route("/").get(getAllUserLogs).post(createUserLog);

module.exports = router;
