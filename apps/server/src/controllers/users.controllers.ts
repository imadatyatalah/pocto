import { Request, Response } from "express";
import bcrypt from "bcryptjs";

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

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { oldPassword, newPassword } = req.body;

    // Get current user by id.
    const currentUser = await prisma.user.findUnique({
      // @ts-ignore
      where: findUserById(req.user.id),
    });

    // Check is password correct.
    const passwordMatch = await bcrypt.compare(
      oldPassword,
      currentUser?.password as string
    );

    // Return 401 error if the password is wrong.
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password!" });
    }

    // Hash the new password.
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Change the password
    await prisma.user.update({
      // @ts-ignore
      where: findUserById(req.user.id),
      data: { password: hashedPassword },
      select: userData,
    });

    res.status(200).send({
      success: true,
      message: "You have changed you password successfully",
    });
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  try {
    await prisma.user.delete({
      // @ts-ignore
      where: findUserById(req.user.id),
      select: userData,
    });

    res.status(200).send({
      success: true,
      message: "You have deleted your account successfully",
    });
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};
