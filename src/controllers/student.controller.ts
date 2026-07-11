import studentsModel from "../models/student.model";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getAllStudent = async (req: Request, res: Response) => {
  try {
    const allStudents = await studentsModel.find();
    return res.json(allStudents);
  } catch (error) {
    return res.json({ message: "something went wrong" });
  }
};

export const singleStudent = async (req: Request, res: Response) => {
  const { email } = req.query;
  if (!email) return res.json({ message: "provide an email address" });
  try {
    const singleUser = await studentsModel.findOne({ email: email as string });
    return res.json(singleUser);
  } catch (error) {
    return res.json({ message: "something went wrong" });
  }
};

export const createStudent = async (req: Request, res: Response) => {
  const { password, ...others } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new studentsModel({ ...others, password: hashedPassword });
  try {
    const savedUser = await newUser.save();
    return res.json(savedUser);
  } catch (error) {
    return res.json({ message: "something went wrong" });
  }
};

export const loginStudent = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const student = await studentsModel.findOne({ email });
    if (!student) return res.json({ message: "user does not exist" });
    // user exits
    const isValidPassword = bcrypt.compareSync(password, student.password);
    if (!isValidPassword) return res.json({ message: "invalid credential" });
    // payload
    const userInfo = {
      id: student.id,
      email: student.email,
      firstName: student.firstName,
    };
    const token = jwt.sign(userInfo, process.env.JWT_SECRETE!, {
      expiresIn: 60 * 60,
    });

    return res.json({ ...userInfo, token });
  } catch (error) {
    return res.json({ message: "something went wrong" });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  const { id, ...others } = req.body;
  try {
    await studentsModel.findByIdAndUpdate(id, { ...others });
    return res.json({ message: "user updated successfully" });
  } catch (error) {
    return res.json({ message: "something went wrong" });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.query;

  try {
    const deletedUser = await studentsModel.findByIdAndDelete(id);
    return res.json(deletedUser);
  } catch (error) {
    return res.json({ message: "something went wrong" });
  }
};
