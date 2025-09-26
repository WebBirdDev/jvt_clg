const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = require("../env.template");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const getClientIp = require("../helpers/getClientIp");
const UserLog = require("../models/userlogModel");

const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, role, status } = req.body;

  if (!email || !password || !name) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username: name,
    email,
    password: hashedPassword,
    role,
    status: "active",
  });

  const ipaddress = getClientIp(req);
  const userlog = await UserLog.create({
    username: req.body.username || "unknown",
    task: req.body.task || "unknown",
    ipaddress: ipaddress,
  });

  if (user) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      token: generateJWT(user.id),
      userlog,
    });
  } else {
    res.status(400);
    throw new Error("Internal server error");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("User doesn't exist");
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    if (user.status !== "disabled") {
      const ipaddress = getClientIp(req);
      const userlog = await UserLog.create({
        username: user.username,
        task:
          req.body.task || `${user.username} logged to backend` || "unknown",
        ipaddress: ipaddress,
      });

      res.status(200).json({
        message: `Successfully logged in`,
        token: generateJWT(user.id),
        user: {
          name: user.username,
          userId: user.id,
          role: user.role,
          email: user.email,
          status: user.status,
        },
        userlog,
      });
    } else {
      res.status(200).json({
        error: "AccountDisabled",
        message: "Your account is disabled. Please contact the administrator",
      });
    }
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");
  res.status(200).json({
    count: users.length,
    users,
  });
});

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  res.status(200).json(user);
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  // Handle password update if provided in the request
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
  }

  // Update other fields in the user document
  const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  const ipaddress = getClientIp(req);
  const userlog = await UserLog.create({
    username: req.body.loggedusername || "unknown",
    task: req.body.task || "unknown",
    ipaddress: ipaddress,
  });

  const updatedFieldsMessage = Object.keys(req.body).join(", ");

  res.status(200).json({
    message: `Your ${updatedFieldsMessage} is updated`,
    updateUser,
    userlog,
  });
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  // Soft delete the user
  user.status = "disabled";
  await user.save();

  const ipaddress = getClientIp(req);
  const userlog = await UserLog.create({
    username: req.body.loggedusername || "unknown",
    task: req.body.task || `${user.username} soft deletion` || "unknown",
    ipaddress: ipaddress,
  });
  res.status(200).json({
    message: `User deleted ${req.params.id}`,
    userlog,
  });
});

const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  getUser,
  getUsers,
  deleteUser,
};
