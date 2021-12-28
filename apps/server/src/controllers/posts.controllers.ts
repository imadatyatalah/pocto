import { Request, Response } from "express";

import { prisma } from "../config/prisma";
import {
  findPostById,
  postData,
  updatePost,
  createPost as createPostHelper,
} from "../helpers/posts";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;

    const post = await prisma.post.create({
      data: createPostHelper(title, content, req.user?.id),
      select: postData,
    });

    res.status(201).send(post);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await prisma.post.findUnique({
      where: findPostById(req.params.id),
      select: postData,
    });

    res.status(200).send(post);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      select: postData,
    });

    res.status(200).send(posts);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const updatePostById = async (req: Request, res: Response) => {
  try {
    const post = await prisma.post.findUnique({
      where: findPostById(req.params.id),
      select: postData,
    });

    // Check if the current user is the owner of the post
    if (post?.userId === req.user?.id) {
      const { title, content } = req.body;

      const updatedPost = await prisma.post.update({
        where: findPostById(req.params.id),
        data: updatePost(title, content),
        select: postData,
      });

      res.status(200).send(updatedPost);
    } else {
      res.status(403).send({ success: false, message: "Forbidden" });
    }
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const deletePostById = async (req: Request, res: Response) => {
  try {
    const post = await prisma.post.findUnique({
      where: findPostById(req.params.id),
      select: postData,
    });

    // Check if the current user is the owner of the post
    if (post?.userId === req.user?.id) {
      const deletedPost = await prisma.post.delete({
        where: findPostById(req.params.id),
        select: postData,
      });

      res.status(200).send(deletedPost);
    } else {
      res.status(403).send({ success: false, message: "Forbidden" });
    }
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};
