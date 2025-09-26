import cors from "cors";
import express from "express";
import routes from "./routes/index.js";
import { env } from "./config/env.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: env.corsOrigin ?? true
  })
);

app.get("/", (_req, res) => {
  res.json({
    name: "Budget Tracker API",
    documentation: "Refer to backend/README.md for endpoint details."
  });
});

app.use("/api", routes);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Unexpected server error" });
});

export default app;
