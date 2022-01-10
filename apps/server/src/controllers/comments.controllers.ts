import { Request, Response } from "express";

import { prisma } from "../config/prisma";

export const createComment = async (req: Request, res: Response) => {
  try {
    const { content } = req.body;

    const comment = await prisma.comment.create({
      data: {
        content,
        user: { connect: { id: req.user?.id } },
        post: { connect: { id: req.params.postId } },
      },
    });

    res.status(201).send(comment);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const getCommentById = async (req: Request, res: Response) => {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: req.params.commentId },
    });

    res.status(200).send(comment);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const deleteCommentById = async (req: Request, res: Response) => {
  try {
    const comment = await prisma.comment.findUnique({
      where: { id: req.params.commentId },
    });

    // Check if the current user is the owner of the comment
    if (comment?.userId === req.user?.id) {
      const deletedComment = await prisma.comment.delete({
        where: { id: req.params.commentId },
      });

      res.status(200).send(deletedComment);
    } else {
      res.status(403).send({ success: false, message: "Forbidden" });
    }
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};
