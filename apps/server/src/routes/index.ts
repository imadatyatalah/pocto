import { Router } from "express";

import currentUser from "./currentUser";
import communities from "./communities";
import posts from "./posts";
import health from "./health";
import users from "./users";
import auth from "./auth";

// Admin
import adminUsers from "./admin/users";

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

// Posts
routes.use("/posts", posts);

export default routes;
