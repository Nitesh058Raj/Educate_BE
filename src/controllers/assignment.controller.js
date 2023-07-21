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
