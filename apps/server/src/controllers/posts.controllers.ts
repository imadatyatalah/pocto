import { Request, Response } from "express";
import type { CreatePostInputServer } from "shared";

import { prisma } from "../config/prisma";
import {
  findPostById,
  postData,
  updatePost,
  createPost as createPostHelper,
} from "../helpers/posts";

export const createPost = async (
  req: Request<
    {},
    {},
    CreatePostInputServer["body"],
    { communityName?: string }
  >,
  res: Response
) => {
  try {
    const { content } = req.body;

    const post = await prisma.post.create({
      data: createPostHelper(content, req.user?.id, req.query.communityName),
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
      orderBy: { createdAt: "desc" },
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
      const { content } = req.body;

      const updatedPost = await prisma.post.update({
        where: findPostById(req.params.id),
        data: updatePost(content),
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

export const deletePostById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const post = await prisma.post.findUnique({
      where: findPostById(req.params.id),
      select: postData,
    });

    // Check if the current user is the owner of the post
    if (post?.userId === req.user?.id) {
      const deletePostLikes = prisma.postLike.deleteMany({
        where: { postId: { equals: post?.id } },
      });

      /**
       * Gets all post comments and returns an array of comments ids
       */
      const getPostCommentsIds = post?.comments.map((comment) => {
        return { commentId: comment["id"] };
      });

      const deletePostCommentsLikes = prisma.commentLike.deleteMany({
        where: { OR: getPostCommentsIds },
      });

      const deleteComments = prisma.comment.deleteMany({
        where: { postId: { equals: post?.id } },
      });

      const deletePost = prisma.post.delete({
        where: findPostById(req.params.id),
        select: postData,
      });

      await prisma.$transaction([
        deletePostLikes,
        deletePostCommentsLikes,
        deleteComments,
        deletePost,
      ]);

      res.status(200).send({
        success: true,
        message: "You have deleted your post successfully",
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

export const togglePostLike = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    /**
     * Check is current user already liked current post
     */
    const isCULikedPost = await prisma.postLike.findMany({
      where: { AND: { postId: req.params.id, userId: req.user?.id } },
    });

    if (isCULikedPost.length === 0) {
      const addLike = await prisma.postLike.create({
        data: {
          like: true,
          user: { connect: { id: req.user?.id } },
          post: { connect: { id: req.params.id } },
        },
      });

      res.status(200).send(addLike);
    } else {
      const removeLike = await prisma.postLike.delete({
        where: { id: isCULikedPost[0].id },
      });

      res.status(200).send(removeLike);
    }
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};
