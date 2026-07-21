import express from "express";
import {
  createPost,
  getAllPost,
  updateTag,
  handleError,
} from "../controllers/post.controller";
import { authentication } from "../middlewares/authentication.middleware";
const router = express.Router();

router.post("/posts", authentication, createPost);
router.get("/posts", authentication, getAllPost);
router.put("/posts", updateTag);
router.get("/checkerror", handleError);

export default router;
