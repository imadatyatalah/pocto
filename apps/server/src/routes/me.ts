import { Router } from "express";

import { getCurrentUser } from "../controllers/users.controllers";
import requireUser from "../middlewares/requireUser";

const router = Router();

router.get("/", requireUser, getCurrentUser);

export default router;
