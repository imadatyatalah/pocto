import { Router } from "express";

import health from "./health";
import users from "./users";
import auth from "./auth";
import me from "./me";

const routes = Router();

// Health
routes.use("/health", health);

// Auth
routes.use("/auth", auth);

// Current User
routes.use("/me", me);

// Users
routes.use("/users", users);

export default routes;
