import { BudgetStore } from "./BudgetStore.js";
import { InMemoryBudgetStore } from "./InMemoryBudgetStore.js";
import { MySqlBudgetStore } from "./MySqlBudgetStore.js";

interface StoreConfig {
  useInMemory: boolean;
  mysql?: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
}

export const createBudgetStore = (config: StoreConfig): BudgetStore => {
  if (config.useInMemory) {
    return new InMemoryBudgetStore();
  }

  if (!config.mysql) {
    throw new Error("MySQL configuration is required when USE_IN_MEMORY_DB is false");
  }

  return new MySqlBudgetStore(config.mysql);
};
