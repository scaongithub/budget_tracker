import app from "./app.js";
import { env } from "./config/env.js";

const port = env.port ?? 4000;

app.listen(port, () => {
  console.log(`Budget Tracker API running on port ${port}`);
});
