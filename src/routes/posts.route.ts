import express from "express";
import {
  createPost,
  getAllPost,
  updateTag,
} from "../controllers/post.controller";
const router = express.Router();

router.post("/posts", createPost);
router.get("/posts", getAllPost);
router.put("/posts", updateTag);

export default router;
