import database from "../configs/database.config.js";
import { Query } from "../queries/queries.js";
import { debugLog } from "../utils/logging.util.js";

export const getClass = (req, res) => {
  database.query(Query.CLASS.GET_SINGLE, [req.params.cid], (err, results) => {
    if (err) {
      debugLog(err);
      return res.send({
        message: "Error occurred while retrieving class.",
        statusCode: 500,
        status: "Internal Server Error",
      });
    } else if (results.length === 0) {
      return res.send({
        message: "Class not found.",
        statusCode: 404,
        status: "Not Found",
      });
    }
    return res.send({
      message: "Class retrieved successfully!",
      statusCode: 200,
      status: "OK",
      data: results,
    });
  });
};

export const createClass = (req, res) => {
  database.query(
    Query.CLASS.CREATE,
    Object.values(req.body),
    (err, results) => {
      if (err) {
        debugLog(err);
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).send({
            message: "Class already exists.",
            statusCode: 409,
            status: "Conflict",
          });
        }
        return res.send({
          message: "Error occurred while creating class.",
          statusCode: 500,
          status: "Internal Server Error",
        });
      }
      return res.send({
        message: "Class created successfully!",
        statusCode: 201,
        status: "Created",
        data: results,
      });
    }
  );
};

export const deleteClass = (req, res) => {
  database.query(Query.CLASS.DELETE, [req.params.cid], (err, results) => {
    if (err) {
      debugLog(err);
      return res.status(500).send({
        message: "Error occurred while deleting class.",
        statusCode: 500,
        status: "Internal Server Error",
      });
    } else if (results.affectedRows === 0) {
      return res.status(404).send({
        message: "Class not found.",
        statusCode: 404,
        status: "Not Found",
      });
    }
    return res.send({
      message: "Class deleted successfully!",
      statusCode: 200,
      status: "OK",
    });
  });
};

export const getClassName = (req, res) => {
  database.query(
    Query.CLASS.GET_CLASS_NAME,
    [req.params.tid],
    (err, results) => {
      if (err) {
        debugLog(err);
        return res.send({
          message: "Error occurred while retrieving class name.",
          statusCode: 500,
          status: "Internal Server Error",
        });
      } else if (results.length === 0) {
        return res.send({
          message: "Class not found!",
          statusCode: 404,
          status: "Not Found",
        });
      }
      return res.send({
        message: "Class name retrieved successfully.",
        statusCode: 200,
        status: "OK",
        data: results,
      });
    }
  );
};

export const getStudentList = (req, res) => {
  database.query(
    Query.CLASS.GET_STUDENT_LIST,
    [req.params.cid],
    (err, results) => {
      if (err) {
        debugLog(err);
        return res.send({
          message: "Error occurred while retrieving student list.",
          statusCode: 500,
          status: "Internal Server Error",
        });
      }
      return res.send({
        message: "Student list retrieved successfully!",
        statusCode: 200,
        status: "OK",
        data: results,
      });
    }
  );
};

export const updateClass = (req, res) => {
  database.query(
    Query.CLASS.UPDATE,
    [req.body.className, req.body.classDescription, req.params.cid],
    (err, results) => {
      if (err) {
        debugLog(err);
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).send({
            message: "Class already exists.",
            statusCode: 409,
            status: "Conflict",
          });
        }
        return res.send({
          message: "Error occurred while updating class.",
          statusCode: 500,
          status: "Internal Server Error",
        });
      } else if (results.affectedRows === 0) {
        return res.send({
          message: "Class not found.",
          statusCode: 404,
          status: "Not Found",
        });
      }
      return res.send({
        message: "Class updated successfully!",
        statusCode: 200,
        status: "OK",
      });
    }
  );
};
