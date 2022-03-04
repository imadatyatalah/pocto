import { credentials } from "./config/credentials";
import app from "./app";

app.listen(credentials.server_port, () =>
  console.log(`> Ready on http://localhost:${credentials.server_port}`)
);
