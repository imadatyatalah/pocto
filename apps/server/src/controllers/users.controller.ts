import { Request, Response } from "express";

import { prisma } from "../config/prisma";
import { findUserByUsername, userData } from "../helpers/users";

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
