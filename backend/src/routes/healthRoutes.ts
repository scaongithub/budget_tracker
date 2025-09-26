import { Router } from "express";
import { env } from "../config/env.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    status: "ok",
    mode: env.useInMemoryDb ? "in-memory" : "mysql"
  });
});

export default router;
