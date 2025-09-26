import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string().transform(Number).default("4000"),
  CORS_ORIGIN: z.string().optional(),
  DB_HOST: z.string().optional(),
  DB_PORT: z
    .string()
    .transform((value) => Number(value))
    .optional(),
  DB_USER: z.string().optional(),
  DB_PASSWORD: z.string().optional(),
  DB_NAME: z.string().optional(),
  USE_IN_MEMORY_DB: z
    .string()
    .transform((value) => value.toLowerCase() === "true")
    .default("false")
});

const rawEnv = envSchema.parse({
  PORT: process.env.PORT ?? "4000",
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  USE_IN_MEMORY_DB: process.env.USE_IN_MEMORY_DB ?? "false"
});

export const env = {
  port: rawEnv.PORT,
  corsOrigin: rawEnv.CORS_ORIGIN,
  useInMemoryDb: rawEnv.USE_IN_MEMORY_DB,
  mysql: rawEnv.USE_IN_MEMORY_DB
    ? undefined
    : {
        host: rawEnv.DB_HOST ?? "localhost",
        port: rawEnv.DB_PORT ?? 3306,
        user: rawEnv.DB_USER ?? "root",
        password: rawEnv.DB_PASSWORD ?? "",
        database: rawEnv.DB_NAME ?? "budget_tracker"
      }
};
