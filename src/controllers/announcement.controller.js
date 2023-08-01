import database from "../configs/database.config.js";
import { Query } from "../queries/queries.js";
import { debugLog } from "../utils/logging.util.js";

export const getAllAnnouncements = async (req, res) => {
  database.query(Query.ANNOUNCEMENT.GET_ALL, (err, results) => {
    if (err) {
      debugLog(err);
      return res.send({
        message: "Error occurred while retrieving announcements.",
        statusCode: 500,
        status: "Internal Server Error",
      });
    }
    return res.send({
      message: "Announcements retrieved successfully!",
      statusCode: 200,
      status: "OK",
      data: results,
    });
  });
};
