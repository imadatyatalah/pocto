import { Router } from "express";
import { createCommunitySchemaServer } from "shared";

import {
  getCommunityByName,
  createCommunity,
} from "../controllers/communities.controllers";
import requireUser from "../middlewares/requireUser";
import validateResource from "../middlewares/validateResource";

const router = Router();

router.post(
  "/",
  [requireUser, validateResource(createCommunitySchemaServer)],
  createCommunity
);

router.get("/:name", getCommunityByName);

export default router;
