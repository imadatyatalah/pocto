import { Router } from "express";
import { signupSchemaServer, signinSchemaServer } from "shared";

import { signUp, signin, signout } from "../controllers/auth.controllers";
import validateResource from "../middlewares/validateResource";

const router = Router();

router.post("/signup", validateResource(signupSchemaServer), signUp);

router.post("/signin", validateResource(signinSchemaServer), signin);

router.get("/signout", signout);

export default router;
