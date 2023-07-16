import express from "express";
import chalk from "chalk";
import cors from "cors";

import { debugLog } from "./utils/logging.util.js";
import routes from "./routes/routes.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("API WORKING FINE!");
});

app.listen(PORT, () => {
  debugLog(`Server is running on port ${chalk.green(PORT)}`);
});
