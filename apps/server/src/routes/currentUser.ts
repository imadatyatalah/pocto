import { Router } from "express";
import { changePasswordSchemaServer, updateProfileSchemaServer } from "shared";

import {
  getCurrentUser,
  changePassword,
  deleteAccount,
  updateProfile,
} from "../controllers/users.controllers";
import requireUser from "../middlewares/requireUser";
import validateResource from "../middlewares/validateResource";

const router = Router();

router.get("/me", requireUser, getCurrentUser);

router.delete("/delete_account", requireUser, deleteAccount);

router.put(
  "/change_password",
  [requireUser, validateResource(changePasswordSchemaServer)],
  changePassword
);

router.put(
  "/update_profile",
  [requireUser, validateResource(updateProfileSchemaServer)],
  updateProfile
);

export default router;
