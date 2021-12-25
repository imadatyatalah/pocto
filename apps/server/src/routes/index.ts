import { Router } from "express";

import currentUser from "./currentUser";
import communities from "./communities";
import health from "./health";
import users from "./users";
import adminUsers from "./admin/users";
import auth from "./auth";

const routes = Router();

// Health
routes.use("/health", health);

// Auth
routes.use("/auth", auth);

// Current User
routes.use("/current_user", currentUser);

// Users
routes.use("/users", users);
routes.use("/admin/users", adminUsers);

// Communities
routes.use("/communities", communities);

export default routes;
