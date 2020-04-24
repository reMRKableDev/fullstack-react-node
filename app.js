require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const db = require("./database/config/db.config");

const indexRouter = require("./routes");
const userRouter = require("./routes/users");

const app = express();

db.connector
  .sync()
  .then(() => console.log("Drop and create db"))
  .catch((error) => console.error(`sync failed: ${error}`));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", userRouter);

module.exports = app;
