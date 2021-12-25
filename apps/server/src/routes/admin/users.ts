import { Router } from "express";

import { getUsers } from "../../controllers/admin/users.controllers";
import isAdmin from "../../middlewares/isAdmin";
import requireUser from "../../middlewares/requireUser";

const router = Router();

router.get("/", [requireUser, isAdmin], getUsers);

export default router;
