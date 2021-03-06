import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import { prisma } from "../config/prisma";
import {
  findUserById,
  findUserByUsername,
  updateUser,
  userData,
  currentUserData,
} from "../helpers/users";

import type { ChangePasswordInputAPI, UpdateProfileInputAPI } from "shared";

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const currentUser = await prisma.user.findUnique({
      where: findUserById(req.user?.id),
      select: currentUserData,
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

export const changePassword = async (
  req: Request<{}, {}, ChangePasswordInputAPI["body"]>,
  res: Response
) => {
  try {
    const { oldPassword, newPassword } = req.body;

    // Get current user by id.
    const currentUser = await prisma.user.findUnique({
      where: findUserById(req.user?.id),
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
      where: findUserById(req.user?.id),
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

export const updateProfile = async (
  req: Request<{}, {}, UpdateProfileInputAPI["body"]>,
  res: Response
) => {
  try {
    const { name, bio, website, location } = req.body;

    const updatedUser = await prisma.user.update({
      where: findUserById(req.user?.id),
      data: updateUser(name, bio, website, location),
      select: userData,
    });

    res.status(200).send(updatedUser);
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  try {
    const deletePostsLikes = prisma.postLike.deleteMany({
      where: { userId: req.user?.id },
    });

    const deleteCommentsLikes = prisma.commentLike.deleteMany({
      where: { userId: req.user?.id },
    });

    const deleteComments = prisma.comment.deleteMany({
      where: { userId: req.user?.id },
    });

    const deleteProfile = prisma.profile.delete({
      where: { userId: req.user?.id },
    });

    const deleteUser = prisma.user.delete({
      where: { id: req.user?.id },
    });

    const deletePosts = prisma.post.deleteMany({
      where: { userId: req.user?.id },
    });

    const deleteCommunities = prisma.community.deleteMany({
      where: { userId: req.user?.id },
    });

    await prisma.$transaction([
      deletePostsLikes,
      deleteCommentsLikes,
      deleteComments,
      deletePosts,
      deleteCommunities,
      deleteProfile,
      deleteUser,
    ]);

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
