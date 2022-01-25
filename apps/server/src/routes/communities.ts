import { Router } from "express";
import { createCommunitySchemaServer, createPostSchemaServer } from "shared";

import {
  getCommunityByName,
  createCommunity,
  createPostInCommunity,
} from "../controllers/communities.controllers";
import requireUser from "../middlewares/requireUser";
import validateResource from "../middlewares/validateResource";

const router = Router();

router.post(
  "/",
  [requireUser, validateResource(createCommunitySchemaServer)],
  createCommunity
);

router.post(
  "/:name",
  [requireUser, validateResource(createPostSchemaServer)],
  createPostInCommunity
);

router.get("/:name", getCommunityByName);

export default router;
