const express = require("express");

// create application
const app = express();

// middleware
app.use(express.json());

// routings
app.get("/", (req, res) => {
  return res.send("Welcome to the home page");
});

app.post("/", (req, res) => {
  return res.send("you made a post request");
});
app.put("/", (req, res) => {
  return res.send("you just made a put request");
});
app.delete("/", (req, res) => {
  return res.send("you made a delete request");
});
app.post("/register", (req, res) => {
  const body = req.body;
  console.log(body);
  return res.send("registration was successful, login now jsjjsjsjsjsjsjsj");
});
// we listened
app.listen(5000, () => {
  console.log("app is running at port:5000");
});
