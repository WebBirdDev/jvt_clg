const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser,
  getUsers,
  updateUser,
  getUser,
  deleteUser,
} = require("../controllers/userController");

router.route("/").post(createUser).get(getUsers);
router.route("/login").post(loginUser);
router.route("/:id").put(updateUser).get(getUser).delete(deleteUser);

module.exports = router;
