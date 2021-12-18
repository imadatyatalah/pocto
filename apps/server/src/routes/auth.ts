import { Router } from "express";

import { signUp, signin, signout } from "../controllers/auth.controllers";
import { signupSchema, signinSchema } from "../validations";
import validateResource from "../middlewares/validateResource";

const router = Router();

router.post("/signup", validateResource(signupSchema), signUp);

router.post("/signin", validateResource(signinSchema), signin);

router.get("/signout", signout);

export default router;
