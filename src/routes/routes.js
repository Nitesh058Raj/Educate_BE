import express from "express";
import { getAllAnnouncements } from "../controllers/announcement.controller.js";
import {
  getAllAssignment,
  getAssignmentCount,
} from "../controllers/assignment.controller.js";
import {
  createClass,
  deleteClass,
  getClass,
  getClassName,
  getStudentList,
  updateClass,
} from "../controllers/class.controller.js";
import {
  createResource,
  getAllResource,
} from "../controllers/resource.controller.js";
import {
  createSchoolController,
  getAllSchoolController,
  getAllSchoolFromDistrictIdController,
  getSchoolController,
} from "../controllers/school.controller.js";

import {
  createUser,
  getUser,
  getUserInfoForStudent,
  getUserInfoForTeacher,
} from "../controllers/user.controller.js";

const routes = express.Router();

routes.route("/user").post(createUser);
routes.route("/user/:uid").get(getUser);
routes.route("/user/login/teacher").post(getUserInfoForTeacher);
routes.route("/user/login/student").post(getUserInfoForStudent);

routes.route("/announcements").get(getAllAnnouncements);
routes.route("/schools").get(getAllSchoolController);
routes.route("/schools/:did").get(getAllSchoolFromDistrictIdController);
routes.route("/school").post(createSchoolController);
routes.route("/school/:sid").get(getSchoolController);

routes.route("/resources").post(createResource);
routes.route("/resources/:cid").get(getAllResource);

routes.route("/class").post(createClass);
routes.route("/class/:cid").get(getClass);
routes.route("/class/:cid").put(updateClass);
routes.route("/classes/:tid").get(getClassName);
routes.route("/class/student-list/:cid").get(getStudentList);
routes.route("/class/delete/:cid").get(deleteClass);

routes.route("/assignment/:cid").get(getAllAssignment);
routes.route("/assignment/count/:cid").get(getAssignmentCount);

export default routes;
