import express from "express";
import chalk from "chalk";
import debug from "debug";

const PORT = process.env.PORT || 5000;
const app = express();
const debugLog = debug("app");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  debugLog(`Server is running on port ${chalk.green(PORT)}`);
});
