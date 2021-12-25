import { Router } from "express";

import {
  getCommunityByName,
  createCommunity,
} from "../controllers/communities.controllers";
import { createCommunitySchemaServer } from "shared";
import requireUser from "../middlewares/requireUser";
import validateResource from "../middlewares/validateResource";

const router = Router();

router.get("/:name", getCommunityByName);

router.post(
  "/",
  [requireUser, validateResource(createCommunitySchemaServer)],
  createCommunity
);

export default router;
