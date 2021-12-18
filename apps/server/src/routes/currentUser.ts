import { Router } from "express";

import {
  getCurrentUser,
  changePassword,
  deleteAccount,
  updateProfile,
} from "../controllers/users.controllers";
import requireUser from "../middlewares/requireUser";
import validateResource from "../middlewares/validateResource";
import { changePasswordSchema, updateProfileSchema } from "../validations";

const router = Router();

router.get("/me", requireUser, getCurrentUser);

router.delete("/delete_account", requireUser, deleteAccount);

router.put(
  "/change_password",
  [requireUser, validateResource(changePasswordSchema)],
  changePassword
);

router.put(
  "/update_profile",
  [requireUser, validateResource(updateProfileSchema)],
  updateProfile
);

export default router;
