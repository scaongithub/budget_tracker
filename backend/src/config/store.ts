import { createBudgetStore } from "../store/index.js";
import { env } from "./env.js";

export const budgetStore = createBudgetStore({
  useInMemory: env.useInMemoryDb,
  mysql: env.mysql
    ? {
        host: env.mysql.host,
        port: env.mysql.port,
        user: env.mysql.user,
        password: env.mysql.password,
        database: env.mysql.database
      }
    : undefined
});
