const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const path = require("path");
const connect_db = require("./config/dbConnect");
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: false }));

// Serve uploads
app.use("/uploads", express.static("server/uploads"));
app.use("/uploads/events", express.static(path.join(__dirname, "uploads/events")));
app.use("/uploads/news", express.static(path.join(__dirname, "uploads/news")));
app.use("/uploads/success_story", express.static(path.join(__dirname, "uploads/success_story")));

// Serve API routes
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/userlog", require("./routes/userLogRoutes"));
app.use("/api/v1/events", require("./routes/EventRoutes"));
app.use("/api/v1/news", require("./routes/NewsRoutes"));
app.use("/api/v1/stories", require("./routes/StoryRoute"));

// Serve React frontend build
const clientBuildPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientBuildPath));

// Fallback route — must be **after API routes**
app.use((req, res, next) => {
  // Only send index.html if request is not for an API
  if (!req.path.startsWith("/api")) {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  } else {
    next();
  }
});

// Error handler
app.use(errorHandler);

// Connect DB and start server
connect_db()
  .then(() => {
    app.listen(port, () => {
      console.log(`server connected and started in ${port}`);
    });
  })
  .catch((error) => {
    console.log(`error in connection with db: ${error}`);
  });
