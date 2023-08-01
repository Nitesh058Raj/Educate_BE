import database from "../configs/database.config.js";
import { Query } from "../queries/queries.js";
import { debugLog } from "../utils/logging.util.js";

export const getAllSchoolController = (req, res) => {
  database.query(Query.SCHOOL.GET_ALL, (err, results) => {
    if (err) {
      debugLog(err);
      return res.send({
        message: "Error occurred while retrieving schools.",
        statusCode: 500,
        status: "Internal Server Error",
      });
    }
    return res.send({
      message: "Schools retrieved successfully!",
      statusCode: 200,
      status: "OK",
      data: results,
    });
  });
};

export const getAllSchoolFromDistrictIdController = (req, res) => {
  database.query(Query.SCHOOL.GET_ALL_FROM_DISTRICT_ID, [req.params.did], (err, results) => {
    if (err) {
      debugLog(err);
      return res.send({
        message: "Error occurred while retrieving schools.",
        statusCode: 500,
        status: "Internal Server Error",
      });
    }
    return res.send({
      message: "Schools retrieved successfully!",
      statusCode: 200,
      status: "OK",
      data: results,
    });
  });
}

export const getSchoolController = (req, res) => {
  database.query(Query.SCHOOL.GET_SINGLE, [req.params.sid], (err, results) => {
    if (err) {
      debugLog(err);
      return res.send({
        message: "Error occurred while retrieving school.",
        statusCode: 500,
        status: "Internal Server Error",
      });
    } else if (results.length === 0) {
      return res.send({
        message: "School not found.",
        statusCode: 404,
        status: "Not Found",
      });
    }
    return res.send({
      message: "School retrieved successfully!",
      statusCode: 200,
      status: "OK",
      data: results,
    });
  });
};

export const createSchoolController = (req, res) => {
  database.query(
    Query.SCHOOL.CREATE,
    Object.values(req.body),
    (err, results) => {
      if (err) {
        debugLog(err);
        return res.send({
          message: "Error occurred while creating school.",
          statusCode: 500,
          status: "Internal Server Error",
        });
      }
      return res.send({
        message: "School created successfully!",
        statusCode: 201,
        status: "Created",
        data: results,
      });
    }
  );
};
