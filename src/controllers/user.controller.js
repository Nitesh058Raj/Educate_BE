import database from "../configs/database.config.js";
import { Query } from "../queries/queries.js";
import { debugLog } from "../utils/logging.util.js";

export const getUser = (req, res) => {
  database.query(Query.USER.GET_SINGLE, [req.params.uid], (err, results) => {
    if (err) {
      debugLog(err);
      return res.send({
        message: "Error occurred while retrieving user.",
        statusCode: 500,
        status: "Internal Server Error",
      });
    } else if (results.length === 0) {
      return res.send({
        message: "User not found.",
        statusCode: 404,
        status: "Not Found",
      });
    }
    return res.send({
      message: "User retrieved successfully!",
      statusCode: 200,
      status: "OK",
      data: results,
    });
  });
};

export const createUser = (req, res) => {
  database.query(Query.USER.CREATE, Object.values(req.body), (err, results) => {
    if (err) {
      debugLog(err);
      return res.send({
        message: "Error occurred while creating user.",
        statusCode: 500,
        status: "Internal Server Error",
      });
    }
    return res.send({
      message: "User created successfully!",
      statusCode: 201,
      status: "Created",
      data: results,
    });
  });
};

export const getUserInfoForTeacher = (req, res) => {
  database.query(
    Query.USER.GET_ALL_INFO_WITH_USERNAME_AND_PASSWORD_FOR_TEACHER,
    Object.values(req.body),
    (err, results) => {
      if (err) {
        debugLog(err);
        return res.send({
          message: "Error occurred while retrieving user.",
          statusCode: 500,
          status: "Internal Server Error",
        });
      } else if (results.length === 0) {
        return res.send({
          message: "User not found.",
          statusCode: 404,
          status: "Not Found",
        });
      }
      return res.send({
        message: "User retrieved successfully!",
        statusCode: 200,
        status: "OK",
        data: results,
      });
    }
  );
};

export const getUserInfoForStudent = (req, res) => {
  database.query(
    Query.USER.GET_ALL_INFO_WITH_USERNAME_AND_PASSWORD_FOR_STUDENT,
    Object.values(req.body),
    (err, results) => {
      if (err) {
        debugLog(err);
        return res.send({
          message: "Error occurred while retrieving user.",
          statusCode: 500,
          status: "Internal Server Error",
        });
      } else if (results.length === 0) {
        return res.send({
          message: "User not found.",
          statusCode: 404,
          status: "Not Found",
        });
      }
      return res.send({
        message: "User retrieved successfully!",
        statusCode: 200,
        status: "OK",
        data: results,
      });
    }
  );
};
