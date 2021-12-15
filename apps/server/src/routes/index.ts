import { Router } from "express";

import health from "./health";
import users from "./users";
import auth from "./auth";
import currentUser from "./currentUser";

const routes = Router();

// Health
routes.use("/health", health);

// Auth
routes.use("/auth", auth);

// Current User
routes.use("/current_user", currentUser);

// Users
routes.use("/users", users);

export default routes;
