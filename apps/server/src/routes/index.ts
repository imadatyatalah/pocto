import { Router } from "express";

import currentUser from "./currentUser";
import communities from "./communities";
import comments from "./comments";
import health from "./health";
import posts from "./posts";
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

// Comments
routes.use("/comments", comments);

export default routes;
