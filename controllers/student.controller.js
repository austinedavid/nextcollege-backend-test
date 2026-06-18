const students = require("../models/student.model");

const getAllStudent = (req, res) => {
  return res.json(students);
};

const singleStudent = (req, res) => {
  const { id } = req.params;
  const oneStudent = students.find((student) => student.id == id);
  return res.json(oneStudent);
};

const createStudent = (req, res) => {
  const payload = req.body;
  const newStudent = { id: students.length + 1, ...payload };
  students.push(newStudent);
  return res.send("user created successfully");
};

const updateStudent = (req, res) => {
  const { email, ...others } = req.body;
  const userIndex = students.findIndex((student) => student.email == email);
  const currentInfo = students[userIndex];
  const newStudentInfo = { ...currentInfo, ...others };
  students.splice(userIndex, 1, newStudentInfo);
  return res.send("account updated successfully");
};

const deleteStudent = (req, res) => {
  const { email } = req.body;
  const userIndex = students.findIndex((student) => student.email == email);
  students.splice(userIndex, 1);
  return res.send("account deleted successfully");
};

module.exports = {
  getAllStudent,
  singleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
