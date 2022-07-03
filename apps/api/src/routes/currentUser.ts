import { Router } from "express";
import { changePasswordSchemaAPI, updateProfileSchemaAPI } from "shared";

import {
  getCurrentUser,
  changePassword,
  deleteAccount,
  updateProfile,
} from "../controllers/users.controllers";
import {
  getMyCommunities,
  getRecommendedCommunities,
} from "../controllers/communities.controllers";
import requireUser from "../middlewares/requireUser";
import validateResource from "../middlewares/validateResource";

const router = Router();

router.get("/me", requireUser, getCurrentUser);

router.delete("/delete_account", requireUser, deleteAccount);

router.put(
  "/change_password",
  [requireUser, validateResource(changePasswordSchemaAPI)],
  changePassword
);

router.put(
  "/update_profile",
  [requireUser, validateResource(updateProfileSchemaAPI)],
  updateProfile
);

router.get("/recommended_communities", getRecommendedCommunities);

router.get("/my_communities", requireUser, getMyCommunities);

export default router;
