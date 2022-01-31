import { Router } from "express";

import { banUser, getUsers } from "../../controllers/admin/users.controllers";
import isAdmin from "../../middlewares/isAdmin";
import requireUser from "../../middlewares/requireUser";

const router = Router();

router.get("/", [requireUser, isAdmin], getUsers);

router.put("/:username", [requireUser, isAdmin], banUser);

export default router;
