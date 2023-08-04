export const Query = {
  SCHOOL: {
    CREATE:
      "INSERT INTO schools(schoolName, schoolAddress, districtID) VALUES (?, ?, ?)",
    GET_ALL: "SELECT * FROM schools",
    GET_ALL_FROM_DISTRICT_ID: "SELECT * FROM schools WHERE districtID = ?",
    GET_SINGLE: "SELECT * FROM schools WHERE schoolID = ?",
  },
  USER: {
    CREATE:
      "INSERT INTO users(userName, userPassword, userRole) VALUES (?, ?, ?)",
    GET_ALL: "SELECT * FROM users",
    GET_SINGLE: "SELECT * FROM users WHERE userID = ?",
  },
  ANNOUNCEMENT: {
    CREATE: "INSERT INTO announcements(content) VALUES (?)",
    GET_ALL: "SELECT * FROM announcements",
    GET_SINGLE: "SELECT * FROM announcements WHERE announcementID = ?",
  },
  CLASS: {
    CREATE:
      "INSERT INTO classes(className, classDescription, teacherID, schoolID) VALUES (?, ?, ?, ?)",
    DELETE: "DELETE FROM classes WHERE classID = ?",
    GET_SINGLE:
      "SELECT className, classDescription FROM classes WHERE classID = ?",
    GET_CLASS_NAME:
      "SELECT classID, className FROM classes WHERE teacherID = ?",
    GET_STUDENT_LIST:
      "SELECT s.studentID, s.studentName, s.email, s.contact, c.classID FROM students s JOIN classStudents cs ON s.studentID = cs.studentID JOIN classes c ON cs.classID = c.classID WHERE c.classID = ?",
  },
  STUDENT: {
    GET_ALL: "SELECT * FROM students",
    GET_SINGLE: "SELECT * FROM students WHERE studentID = ?",
    GET_WITH_UID: "SELECT * FROM students WHERE userID = ?",
  },
  TEACHER: {
    GET_ALL: "SELECT * FROM teachers",
    GET_SINGLE: "SELECT * FROM teachers WHERE teacherID = ?",
    GET_WITH_UID: "SELECT * FROM teachers WHERE userID = ?",
  },
  RESOURCE: {
    CREATE:
      "INSERT INTO resources(classID, resourceName, resourceUrl) VALUES (?, ?, ?)",
    GET_WITH_CID: "SELECT * FROM resources WHERE classID = ?",
    GET_SINGLE: "SELECT * FROM resources WHERE resourceID = ?",
  },
  ASSIGNMENT: {
    GET_ALL: "SELECT * FROM assignments WHERE classID = ?",
    GET_SINGLE: "SELECT * FROM assignments WHERE assignmentID = ?",
    GET_COUNT:
      "SELECT COUNT(*) AS total_assignments, SUM(CASE WHEN assignmentStatus = 'Active' THEN 1 ELSE 0 END) AS active_assignments FROM assignments WHERE classID = ?",
  },
  HELPANDSUPPORT: {
    GET_ALL: "SELECT * FROM helpandsupport",
    GET_SINGLE: "SELECT * FROM helpandsupport WHERE helpAndSupportID = ?",
  },
};
