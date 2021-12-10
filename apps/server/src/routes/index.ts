import { Router } from "express";

import health from "./health";
import auth from "./auth";
import me from "./me";

const routes = Router();

// Health
routes.use("/health", health);

// Auth
routes.use("/auth", auth);

// User
routes.use("/me", me);

export default routes;
