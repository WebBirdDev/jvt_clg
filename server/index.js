const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const path = require("path");
const connect_db = require("./config/dbConnect");
const { errorHandler } = require("./middleware/errorMiddleware");

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

app.use(errorHandler);
connect_db()
  .then(() => {
    app.listen(port, () => {
      console.log(`server connected and started in ${port}`);
    });
  })
  .catch((error) => {
    console.log(`error in connection with db: ${error}`);
  });
