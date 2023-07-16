import express from "express";
import {
  getAllSchoolController,
  getSchoolController,
} from "../controllers/school.controller.js";

const routes = express.Router();

routes.route("/schools").get(getAllSchoolController);
routes.route("/school/:id").get(getSchoolController);

export default routes;
