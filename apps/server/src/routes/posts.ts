import { Router } from "express";

import {
  createPost,
  deletePostById,
  getPostById,
  getPosts,
  updatePostById,
} from "../controllers/posts.controllers";
import requireUser from "../middlewares/requireUser";

const router = Router();

router.post("/", [requireUser], createPost);

router.get("/:id", getPostById);

router.get("/", getPosts);

router.put("/:id", [requireUser], updatePostById);

router.delete("/:id", [requireUser], deletePostById);

export default router;
