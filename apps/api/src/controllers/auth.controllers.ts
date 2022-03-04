import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { prisma } from "../config/prisma";
import { credentials } from "../config/credentials";
import { createUser, findUserByEmail } from "../helpers/users";

import type { SignupInputAPI, SigninInputAPI } from "shared";

export const signUp = async (
  req: Request<{}, {}, SignupInputAPI["body"]>,
  res: Response
) => {
  try {
    const { email, password, name, username } = req.body;

    // Hash the given password.
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with the given data.
    const user = await prisma.user.create({
      data: createUser(email, hashedPassword, name, username),
    });

    // Create a JWT token that is valid for 30 days.
    const token = jwt.sign(
      { id: user.id, role: user.role },
      credentials.jwt_key as string,
      {
        expiresIn: "30d",
      }
    );

    // Send the JWT token as a cookies.
    res.cookie("pocto_token", token, {
      secure: true,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 1000 * 30,
      sameSite: "lax",
    });

    res.status(201).send({
      success: true,
      message: "Your account was created successfully!",
    });
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const signin = async (
  req: Request<{}, {}, SigninInputAPI["body"]>,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const invalidErrorMessage = "Invalid email or password!";

    // Get user by email.
    const user = await prisma.user.findUnique({
      where: findUserByEmail(email),
    });

    // Return 401 error if user is not found.
    if (!user) {
      return res.status(401).json({
        success: false,
        message: invalidErrorMessage,
      });
    }

    // Check is password correct.
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Return 401 error if the password is wrong.
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: invalidErrorMessage,
      });
    }

    // Create a JWT token that is valid for 30 days.
    const token = jwt.sign(
      { id: user.id, role: user.role },
      credentials.jwt_key as string,
      {
        expiresIn: "30d",
      }
    );

    // Send the JWT token as a cookies.
    res.cookie("pocto_token", token, {
      secure: true,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 1000 * 30,
      sameSite: "lax",
    });

    res
      .status(200)
      .send({ success: true, message: "You have successfully signed in!" });
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: "Something went wrong", error: err });
  }
};

export const signout = async (req: Request, res: Response) => {
  // Remove pocto_token cookie
  res.clearCookie("pocto_token");

  // Redirect to client homepage
  res.redirect(credentials.client_base_url);
};
