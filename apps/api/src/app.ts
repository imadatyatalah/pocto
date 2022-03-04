import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { corsOptions } from "./config/cors";
import routes from "./routes/index";
import deserializeUser from "./middlewares/deserializeUser";

// Create Express server
const app = express();

// Express configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(deserializeUser);

// Routes
app.use("/", routes);

export default app;
