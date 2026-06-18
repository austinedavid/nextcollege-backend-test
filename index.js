const express = require("express");
const studentRoute = require("./routes/student.route");
const postRoute = require("./routes/posts.route");

// create application
const app = express();
// middleware
app.use(express.json());

// routings
app.use(studentRoute);
app.use(postRoute);
// we listened
app.listen(5000, () => {
  console.log("app is running at port:5000");
});
