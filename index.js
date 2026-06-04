const express = require("express");

// create application
const app = express();

// student database
const students = [
  { id: 1, name: "Chisom", email: "chisom@gmail.com", password: "55555" },
  { id: 2, name: "Victor", email: "victor@gmail.com", password: "99999" },
  { id: 3, name: "Efosa", email: "efosa@gmail.com", password: "33333" },
];

// middleware
app.use(express.json());

// routings
app.get("/", (req, res) => {
  return res.json(students);
});

app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  const oneStudent = students.find((student) => student.id == id);
  return res.json(oneStudent);
});

app.post("/student", (req, res) => {
  const payload = req.body;
  const newStudent = { id: students.length + 1, ...payload };
  students.push(newStudent);
  return res.send("user created successfully");
});

app.put("/", (req, res) => {
  const { email, ...others } = req.body;
  const userIndex = students.findIndex((student) => student.email == email);
  const currentInfo = students[userIndex];
  const newStudentInfo = { ...currentInfo, ...others };
  students.splice(userIndex, 1, newStudentInfo);
  return res.send("account updated successfully");
});

app.delete("/", (req, res) => {
  const { email } = req.body;
  const userIndex = students.findIndex((student) => student.email == email);
  students.splice(userIndex, 1);
  return res.send("account deleted successfully");
});
// we listened
app.listen(5000, () => {
  console.log("app is running at port:5000");
});
