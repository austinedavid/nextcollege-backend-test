import express, { Request, Response, NextFunction } from "express";
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
app.get("/", (req, res) => {
  return res.send("Welcome to Next college");
});
app.use(studentRoute);
app.use(postRoute);

// error handling middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  return res.json({ message: error.message || "Server Error try again" });
});

// we listened
app.listen(5000, () => {
  console.log("app is running at port:5000");
});
