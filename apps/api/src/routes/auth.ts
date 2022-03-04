import { Router } from "express";
import { signupSchemaAPI, signinSchemaAPI } from "shared";

import { signUp, signin, signout } from "../controllers/auth.controllers";
import validateResource from "../middlewares/validateResource";

const router = Router();

router.post("/signup", validateResource(signupSchemaAPI), signUp);

router.post("/signin", validateResource(signinSchemaAPI), signin);

router.get("/signout", signout);

export default router;
