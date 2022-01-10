import { Router } from "express";
import { createCommentSchemaServer } from "shared";

import {
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
  [requireUser, validateResource(createCommentSchemaServer)],
  createComment
);

router.delete("/:commentId", [requireUser], deleteCommentById);

export default router;
