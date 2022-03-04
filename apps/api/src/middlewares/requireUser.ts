import { NextFunction, Request, Response } from "express";

const requireUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(403).send("Not Authenticated");
  }

  return next();
};

export default requireUser;
