import { Router } from "express";
import requireUser from "../middlewares/requireUser";

const router = Router();

router.get("/", requireUser, (req: any, res) => {
  res.status(200).send(req.user);
});

export default router;
