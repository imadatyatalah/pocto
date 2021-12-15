import { Request, Response } from "express";

import { prisma } from "../config/prisma";
import { findUserById, findUserByUsername, userData } from "../helpers/users";

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const currentUser = await prisma.user.findUnique({
      // @ts-ignore
      where: findUserById(req.user.id),
      select: userData,
    });

    res.status(200).send(currentUser);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const getUserByUsername = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: findUserByUsername(req.params.username),
      select: userData,
    });

    res.status(200).send(user);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};
