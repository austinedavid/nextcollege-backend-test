import express from "express";
import {
  getAllStudent,
  singleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  loginStudent,
} from "../controllers/student.controller";

const router = express.Router();

router.get("/students", getAllStudent);
router.get("/students/:id", singleStudent);
router.post("/student", createStudent);
router.post("/login", loginStudent);
router.put("/student", updateStudent);
router.delete("/student", deleteStudent);

export default router;
