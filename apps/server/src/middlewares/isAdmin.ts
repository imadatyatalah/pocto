import { NextFunction, Request, Response } from "express";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== "ADMIN") {
    return res.status(403).send("Not Admin");
  }

  return next();
};

export default isAdmin;
