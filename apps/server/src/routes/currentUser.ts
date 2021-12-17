import { Router } from "express";

import {
  getCurrentUser,
  changePassword,
  deleteAccount,
  updateProfile,
} from "../controllers/users.controllers";
import requireUser from "../middlewares/requireUser";

const router = Router();

router.get("/me", requireUser, getCurrentUser);

router.delete("/delete_account", requireUser, deleteAccount);

router.put("/change_password", requireUser, changePassword);

router.put("/update_profile", requireUser, updateProfile);

export default router;
