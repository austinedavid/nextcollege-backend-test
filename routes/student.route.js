const express = require("express");
const {
  getAllStudent,
  singleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controller");

const router = express.Router();

router.get("/students", getAllStudent);
router.get("/students/:id", singleStudent);
router.post("/student", createStudent);

router.put("/student", updateStudent);
router.delete("/student", deleteStudent);

module.exports = router;
