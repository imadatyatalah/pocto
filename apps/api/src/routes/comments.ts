import { Router } from "express";
import { createCommentSchemaAPI } from "shared";

import {
  toggleCommentLike,
  createComment,
  deleteCommentById,
  getCommentById,
} from "../controllers/comments.controllers";
import requireUser from "../middlewares/requireUser";
import validateResource from "../middlewares/validateResource";

const router = Router();

router.get("/:commentId", getCommentById);

router.post(
  "/:postId",
  [requireUser, validateResource(createCommentSchemaAPI)],
  createComment
);

router.delete("/:commentId", requireUser, deleteCommentById);

router.post("/:id/likes", requireUser, toggleCommentLike);

export default router;
