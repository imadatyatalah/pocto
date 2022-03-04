import { credentials } from "./credentials";

export const corsOptions = {
  methods: ["GET", "PUT", "POST", "DELETE"],
  origin: [credentials.client_base_url, credentials.admin_base_url],
  optionsSuccessStatus: 200,
  credentials: true,
};
