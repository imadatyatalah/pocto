import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

import { credentials } from "../config/credentials";

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
  const { pocto_token } = req.cookies;

  if (!pocto_token) {
    return next();
  }

  jwt.verify(pocto_token, credentials.jwt_key as string, (err, data) => {
    if (!err) {
      req.user = data;
      return next();
    }
  });
};

export default deserializeUser;
