import { Router } from "express";

import {
  getCurrentUser,
  changePassword,
} from "../controllers/users.controllers";
import requireUser from "../middlewares/requireUser";

const router = Router();

router.get("/me", requireUser, getCurrentUser);

router.put("/change_password", requireUser, changePassword);

export default router;
