import { Request, Response } from "express";

import type { CreateCommentInputServer } from "shared";

import { prisma } from "../config/prisma";
import { commentData } from "../helpers/comments";

export const createComment = async (
  req: Request<{ postId: string }, {}, CreateCommentInputServer["body"]>,
  res: Response
) => {
  try {
    const { content } = req.body;

    const comment = await prisma.comment.create({
      data: {
        content,
        user: { connect: { id: req.user?.id } },
        post: { connect: { id: req.params.postId } },
      },
      select: commentData,
    });

    res.status(201).send(comment);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const getCommentById = async (
  req: Request<{ commentId: string }>,
  res: Response
) => {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: req.params.commentId },
      select: commentData,
    });

    res.status(200).send(comment);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const deleteCommentById = async (
  req: Request<{ commentId: string }>,
  res: Response
) => {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: req.params.commentId },
    });

    // Check if the current user is the owner of the comment
    if (comment?.userId === req.user?.id) {
      const deleteLikes = prisma.commentLike.deleteMany({
        where: { commentId: comment?.id },
      });

      const deleteComment = prisma.comment.delete({
        where: { id: req.params.commentId },
      });

      await prisma.$transaction([deleteLikes, deleteComment]);

      res.status(200).send({
        success: true,
        message: "You have deleted your comment successfully",
      });
    } else {
      res.status(403).send({ success: false, message: "Forbidden" });
    }
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const toggleCommentLike = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    /**
     * Check is current user already liked current comment
     */
    const isCULikedComment = await prisma.commentLike.findMany({
      where: { AND: { commentId: req.params.id, userId: req.user?.id } },
    });

    if (isCULikedComment.length === 0) {
      const addLike = await prisma.commentLike.create({
        data: {
          like: true,
          user: { connect: { id: req.user?.id } },
          comment: { connect: { id: req.params.id } },
        },
      });

      res.status(200).send(addLike);
    } else {
      const removeLike = await prisma.commentLike.delete({
        where: { id: isCULikedComment[0].id },
      });

      res.status(200).send(removeLike);
    }
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};
