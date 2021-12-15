import { Request, Response } from "express";

import { prisma } from "../../config/prisma";
import { userData } from "../../helpers/users";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({ select: userData });

    res.status(200).send(users);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};
