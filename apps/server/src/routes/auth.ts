import { Router } from "express";

import { signUp, login, signout } from "../controllers/auth.controller";

const router = Router();

router.post("/signup", signUp);

router.post("/login", login);

router.get("/signout", signout);

export default router;
