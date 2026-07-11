import { findPackageJSON } from "node:module";
import postModel from "../models/post.model";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const createPost = async (req: Request, res: Response) => {
  const user = (req as any).user;
  console.log(user);
  const body = req.body;
  try {
    const newPost = new postModel({ ...body, userId: user.id });
    await newPost.save();
    return res.json({ message: "post created successfully" });
  } catch (error) {
    return res.json({ message: "something went wrong" });
  }
};

export const getAllPost = async (req: Request, res: Response) => {
  const user = (req as any).user;
  console.log(user);
  try {
    const allPost = await postModel.find();
    return res.json(allPost);
  } catch (error) {
    return res.json({ message: "something went wrong" });
  }
};

export const updateTag = async (req: Request, res: Response) => {
  const { tags, id, remove } = req.body;
  try {
    await postModel.findByIdAndUpdate(id, {
      $pull: { tags: remove },
    });
    await postModel.findByIdAndUpdate(id, { $push: { tags } });
    return res.json({ message: "tags updated successfully" });
  } catch (error) {
    return res.json({ message: "something went wrong" });
  }
};
