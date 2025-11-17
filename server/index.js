const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const path = require("path");
const connect_db = require("./config/dbConnect");
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");

// === Serve React frontend build ===
const clientBuildPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientBuildPath));

// IMPORTANT: This must come **before** your API routes to handle React Router paths
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.get("/", (req, res) => res.send("Hello world"));

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static("server/uploads"));
app.use(
  "/uploads/events",
  express.static(path.join(__dirname, "uploads/events"))
);
app.use("/uploads/news", express.static(path.join(__dirname, "uploads/news")));
app.use(
  "/uploads/success_story",
  express.static(path.join(__dirname, "uploads/success_story"))
);
app.use(cors());
// add routes you defined
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/userlog", require("./routes/userLogRoutes"));
app.use("/api/v1/events", require("./routes/EventRoutes"));
app.use("/api/v1/news", require("./routes/NewsRoutes"));
app.use("/api/v1/stories", require("./routes/StoryRoute"));
// handling errors here
app.use(errorHandler);

// connect db then start server
connect_db()
  .then(() => {
    app.listen(port, () => {
      console.log(`server connected and started in ${port}`);
    });
  })
  .catch((error) => {
    console.log(`error in connection with db: ${error}`);
  });
