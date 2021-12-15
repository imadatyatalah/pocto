import { Router } from "express";

import { signUp, signin, signout } from "../controllers/auth.controllers";

const router = Router();

router.post("/signup", signUp);

router.post("/signin", signin);

router.get("/signout", signout);

export default router;
