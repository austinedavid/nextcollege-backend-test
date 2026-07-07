import express from "express";
import studentRoute from "./routes/student.route";
import postRoute from "./routes/posts.route";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log("app is connected to DB"))
  .catch(() => console.log("something went wrong"));
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
