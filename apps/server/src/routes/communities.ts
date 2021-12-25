import { Router } from "express";

import {
  getCommunityByName,
  createCommunity,
} from "../controllers/communities.controllers";
import { createCommunitySchema } from "../validations/index";
import requireUser from "../middlewares/requireUser";
import validateResource from "../middlewares/validateResource";

const router = Router();

router.get("/:name", getCommunityByName);

router.post(
  "/",
  [requireUser, validateResource(createCommunitySchema)],
  createCommunity
);

export default router;
