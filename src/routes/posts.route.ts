import express from "express";
import {
  createPost,
  getAllPost,
  updateTag,
} from "../controllers/post.controller";
import { authentication } from "../middlewares/authentication.middleware";
const router = express.Router();

router.post("/posts", authentication, createPost);
router.get("/posts", authentication, getAllPost);
router.put("/posts", updateTag);

export default router;
