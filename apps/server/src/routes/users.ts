import { Router } from "express";

import { getUserByUsername } from "../controllers/users.controller";

const router = Router();

router.get("/:username", getUserByUsername);

export default router;
