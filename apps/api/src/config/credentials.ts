import dotenv from "dotenv";

dotenv.config();

export const credentials = {
  jwt_key: process.env.JWT_KEY,
  server_port: process.env.PORT || 1337,
  client_base_url: process.env.CLIENT_BASE_URL || "http://localhost:3000",
  admin_base_url: process.env.ADMIN_BASE_URL || "http://localhost:3002",
};
