import database from "../configs/database.config.js";
import { Query } from "../queries/queries.js";
import { debugLog } from "../utils/logging.util.js";

export const getAllAssignment = (req, res) => {
  database.query(Query.ASSIGNMENT.GET_ALL, [req.params.cid], (err, results) => {
    if (err) {
      debugLog(err);
      return res.send({
        message: "Error occurred while retrieving assignments.",
        statusCode: 500,
        status: "Internal Server Error",
      });
    }
    return res.send({
      message: "Assignments retrieved successfully!",
      statusCode: 200,
      status: "OK",
      data: results,
    });
  });
};

export const getAssignmentCount = (req, res) => {
  database.query(
    Query.ASSIGNMENT.GET_COUNT,
    [req.params.cid],
    (err, results) => {
      if (err) {
        debugLog(err);
        return res.send({
          message: "Error occurred while retrieving assignments.",
          statusCode: 500,
          status: "Internal Server Error",
        });
      }
      return res.send({
        message: "Assignment Count retrieved successfully!",
        statusCode: 200,
        status: "OK",
        data: results,
      });
    }
  );
};

export const getAssignment = (req, res) => {
  database.query(
    Query.ASSIGNMENT.GET_SINGLE,
    [req.params.aid],
    (err, results) => {
      if (err) {
        debugLog(err);
        return res.send({
          message: "Error occurred while retrieving assignment.",
          statusCode: 500,
          status: "Internal Server Error",
        });
      } else if (results.length === 0) {
        return res.send({
          message: "Assignment not found.",
          statusCode: 404,
          status: "Not Found",
        });
      }
      return res.send({
        message: "Assignment retrieved successfully!",
        statusCode: 200,
        status: "OK",
        data: results,
      });
    }
  );
};

export const createAssignment = (req, res) => {
  database.query(
    Query.ASSIGNMENT.CREATE,
    Object.values(req.body),
    (err, results) => {
      if (err) {
        debugLog(err);
        if (err.code === "ER_DUP_ENTRY") {
          return res.send({
            message: "Assignment already exists.",
            statusCode: 409,
            status: "Conflict",
          });
        }
        return res.send({
          message: "Error occurred while creating assignment.",
          statusCode: 500,
          status: "Internal Server Error",
        });
      }
      return res.send({
        message: "Assignment created successfully!",
        statusCode: 201,
        status: "Created",
        data: results,
      });
    }
  );
};
