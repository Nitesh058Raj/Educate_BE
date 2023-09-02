import database from "../configs/database.config.js";
import { Query } from "../queries/queries.js";
import { debugLog } from "../utils/logging.util.js";

export const getAllResource = (req, res) => {
  database.query(
    Query.RESOURCE.GET_WITH_CID,
    [req.params.cid],
    (err, results) => {
      if (err) {
        debugLog(err);
        return res.send({
          message: "Error occurred while retrieving resources.",
          statusCode: 500,
          status: "Internal Server Error",
        });
      }
      return res.send({
        message: "Resources retrieved successfully!",
        statusCode: 200,
        status: "OK",
        data: results,
      });
    }
  );
};

export const getResource = (req, res) => {
  database.query(
    Query.RESOURCE.GET_SINGLE,
    [req.params.rid],
    (err, results) => {
      if (err) {
        debugLog(err);
        return res.send({
          message: "Error occurred while retrieving resource.",
          statusCode: 500,
          status: "Internal Server Error",
        });
      } else if (results.length === 0) {
        return res.send({
          message: "Resource not found",
          statusCode: 404,
          status: "Not Found",
        });
      }
      return res.send({
        message: "Resource retrieved successfully!",
        statusCode: 200,
        status: "OK",
        data: results,
      });
    }
  );
};

export const createResource = (req, res) => {
  database.query(
    Query.RESOURCE.CREATE,
    Object.values(req.body),
    (err, results) => {
      if (err) {
        debugLog(err);
        return res.send({
          message: "Error occurred while creating resource.",
          statusCode: 500,
          status: "Internal Server Error",
        });
      }
      return res.send({
        message: "Resource created successfully!",
        statusCode: 200,
        status: "OK",
        data: results,
      });
    }
  );
};

export const deleteResource = (req, res) => {
  database.query(Query.RESOURCE.DELETE, [req.params.rid], (err, results) => {
    if (err) {
      debugLog(err);
      return res.send({
        message: "Error occurred while deleting resource.",
        statusCode: 500,
        status: "Internal Server Error",
      });
    }
    return res.send({
      message: "Resource deleted successfully!",
      statusCode: 200,
      status: "OK",
      data: results,
    });
  });
};
