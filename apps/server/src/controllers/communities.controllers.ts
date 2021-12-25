import { Request, Response } from "express";

import { prisma } from "../config/prisma";
import {
  communityData,
  createCommunity as createCommunityHelper,
  findCommunityByName,
} from "../helpers/communities";

import type { CreateCommunityInput } from "shared";

export const createCommunity = async (
  req: Request<{}, {}, CreateCommunityInput["body"]>,
  res: Response
) => {
  try {
    const { name, description, title } = req.body;

    const community = await prisma.community.create({
      data: createCommunityHelper(name, description, title, req.user?.id),
      select: communityData,
    });

    res.status(200).send(community);
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
