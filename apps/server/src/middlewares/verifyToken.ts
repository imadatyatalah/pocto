import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

import { credentials } from "../config/credentials";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.rania_token;

  jwt.verify(token, credentials.jwt_key as string, (err, data) => {
    if (err) {
      res.status(403).send({ success: false, message: "Not Authenticated" });
    } else {
      // @ts-ignore
      req.user = data;
      next();
    }
  });
};

export default verifyToken;
