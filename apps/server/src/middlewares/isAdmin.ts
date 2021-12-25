import { NextFunction, Request, Response } from "express";
import createError from "http-errors";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== "ADMIN") return next(createError(403, "Not Admin"));

  return next();
};

export default isAdmin;
