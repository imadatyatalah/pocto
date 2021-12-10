import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";

const router = Router();

router.get("/", verifyToken, (req: any, res) => {
  res.status(200).send(req?.user);
});

export default router;
