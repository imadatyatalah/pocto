import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { prisma } from "../config/prisma";
import { credentials } from "../config/credentials";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password, name, username } = req.body;

    // Hash the given password.
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with the given data.
    const user = await prisma.user.create({
      data: {
        email,
        name,
        username,
        password: hashedPassword,
      },
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
    res.cookie("rania_token", token, {
      secure: true,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 1000 * 30,
      sameSite: "lax",
    });

    res
      .status(201)
      .send({ success: true, message: "You have signed up successfully" });
  } catch (err) {
    res.send({ success: false, message: "Something went wrong", error: err });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Get user by email.
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Return 401 error if user is not found.
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password!",
      });
    }

    // Check is password correct.
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Return 401 error if the password is wrong.
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password!",
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
    res.cookie("rania_token", token, {
      secure: true,
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 1000 * 30,
      sameSite: "lax",
    });

    res
      .status(201)
      .send({ success: true, message: "You have logged in successfully" });
  } catch (err) {
    res.send({ success: false, message: "Something went wrong", error: err });
  }
};
