import { findPackageJSON } from "node:module";
import postModel from "../models/post.model";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = (req as any).user;
  console.log(user);
  const body = req.body;
  try {
    const newPost = new postModel({ ...body, userId: user.id });
    await newPost.save();
    return res.json({ message: "post created successfully" });
  } catch (error) {
    next(error);
  }
};

export const getAllPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = (req as any).user;
  console.log(user);
  try {
    const allPost = await postModel.find();
    return res.json(allPost);
  } catch (error) {
    next(error);
  }
};

export const updateTag = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { tags, id, remove } = req.body;
  try {
    await postModel.findByIdAndUpdate(id, {
      $pull: { tags: remove },
    });
    await postModel.findByIdAndUpdate(id, { $push: { tags } });
    return res.json({ message: "tags updated successfully" });
  } catch (error) {
    next(error);
  }
};

export const handleError = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    throw new Error();
    return res.send("hello welcome");
  } catch (error) {
    next(error);
  }
};
