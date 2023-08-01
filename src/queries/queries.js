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
      "INSERT INTO users(UserName, UserPassword, UserRole) VALUES (?, ?, ?)",
    GET_ALL: "SELECT * FROM users",
    GET_SINGLE: "SELECT * FROM users WHERE UserID = ?",
  },
  ANNOUNCEMENT: {
    CREATE: "INSERT INTO announcements(Content) VALUES (?)",
    GET_ALL: "SELECT * FROM announcements",
    GET_SINGLE: "SELECT * FROM announcements WHERE AnnouncementID = ?",
  },
  CLASS: {
    CREATE:
      "INSERT INTO classes(ClassName, ClassDescription, TeacherID, SchoolID) VALUES (?, ?, ?, ?)",
    DELETE: "DELETE FROM classes WHERE ClassID = ?",
    GET_SINGLE:
      "SELECT ClassName, ClassDescription FROM classes WHERE ClassID = ?",
    GET_CLASS_NAME: "SELECT ClassName FROM classes WHERE TeacherID = ?",
    GET_STUDENT_LIST:
      "SELECT s.StudentID, s.StudentName, s.Email, s.Contact, c.ClassID FROM Students s JOIN ClassStudents cs ON s.StudentID = cs.StudentID JOIN Classes c ON cs.ClassID = c.ClassID WHERE c.ClassID = ?",
  },
  STUDENT: {
    GET_ALL: "SELECT * FROM students",
    GET_SINGLE: "SELECT * FROM students WHERE StudentID = ?",
    GET_WITH_UID: "SELECT * FROM students WHERE UserID = ?",
  },
  TEACHER: {
    GET_ALL: "SELECT * FROM teachers",
    GET_SINGLE: "SELECT * FROM teachers WHERE TeacherID = ?",
    GET_WITH_UID: "SELECT * FROM teachers WHERE UserID = ?",
  },
  RESOURCE: {
    CREATE:
      "INSERT INTO resources(ClassID, ResourceName, ResourceUrl) VALUES (?, ?, ?)",
    GET_WITH_CID: "SELECT * FROM resources WHERE ClassID = ?",
    GET_SINGLE: "SELECT * FROM resources WHERE ResourceID = ?",
  },
  ASSIGNMENT: {
    GET_ALL: "SELECT * FROM assignments WHERE ClassID = ?",
    GET_SINGLE: "SELECT * FROM assignments WHERE AssignmentID = ?",
  },
  HELPANDSUPPORT: {
    GET_ALL: "SELECT * FROM helpandsupport",
    GET_SINGLE: "SELECT * FROM helpandsupport WHERE HelpAndSupportID = ?",
  },
};
