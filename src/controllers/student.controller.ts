import studentsModel from "../models/student.model";
import { Request, Response } from "express";

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
  const body = req.body;
  const newUser = new studentsModel({ ...body });
  try {
    const savedUser = await newUser.save();
    return res.json(savedUser);
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
