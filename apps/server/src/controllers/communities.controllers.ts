import { Request, Response } from "express";

import { prisma } from "../config/prisma";
import {
  communityData,
  createCommunity as createCommunityHelper,
  createPostInCommunity as createPostInCommunityHelper,
  findCommunityByName,
} from "../helpers/communities";
import { postData } from "../helpers/posts";

import type { CreateCommunityInputServer, CreatePostInputServer } from "shared";

export const createCommunity = async (
  req: Request<{}, {}, CreateCommunityInputServer["body"]>,
  res: Response
) => {
  try {
    const { name, description, title } = req.body;

    const community = await prisma.community.create({
      data: createCommunityHelper(name, description, title, req.user?.id),
      select: communityData,
    });

    res.status(201).send(community);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const createPostInCommunity = async (
  req: Request<{ name: string }, {}, CreatePostInputServer["body"]>,
  res: Response
) => {
  try {
    const { content } = req.body;

    const post = await prisma.post.create({
      data: createPostInCommunityHelper(content, req.params.name, req.user?.id),
      select: postData,
    });

    res.status(201).send(post);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const getCommunityByName = async (req: Request, res: Response) => {
  try {
    const community = await prisma.community.findUnique({
      where: findCommunityByName(req.params.name),
      select: communityData,
    });

    res.status(200).send(community);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};
