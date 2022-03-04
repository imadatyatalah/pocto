import { Request, Response } from "express";

import { prisma } from "../../config/prisma";
import { findUserByUsername, userData } from "../../helpers/users";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      select: { isBanned: true, ...userData },
    });

    res.status(200).send(users);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const banUser = async (req: Request, res: Response) => {
  try {
    const bannedUser = await prisma.user.update({
      where: findUserByUsername(req.params.username),
      data: { isBanned: true },
      select: userData,
    });

    res.status(200).send(bannedUser);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};
