const express = require("express");
const chalk = require("chalk"); // colorize console.log
const debug = require("debug")("app");

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  debug(`Server is running on port ${chalk.green(PORT)}`);
});
