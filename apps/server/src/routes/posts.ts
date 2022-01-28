import { Router } from "express";
import { createPostSchemaServer } from "shared";

import {
  togglePostLike,
  createPost,
  deletePostById,
  getPostById,
  getPosts,
  updatePostById,
} from "../controllers/posts.controllers";
import requireUser from "../middlewares/requireUser";
import validateResource from "../middlewares/validateResource";

const router = Router();

router.post(
  "/:communityName?",
  [requireUser, validateResource(createPostSchemaServer)],
  createPost
);

router.get("/:id", getPostById);

router.get("/", getPosts);

router.put("/:id", [requireUser], updatePostById);

router.delete("/:id", requireUser, deletePostById);

router.post("/:id/likes", requireUser, togglePostLike);

export default router;
