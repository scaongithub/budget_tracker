import { Router } from "express";
import categoryRoutes from "./categoryRoutes.js";
import expenseRoutes from "./expenseRoutes.js";
import healthRoutes from "./healthRoutes.js";
import incomeRoutes from "./incomeRoutes.js";

const router = Router();

router.use("/health", healthRoutes);
router.use("/incomes", incomeRoutes);
router.use("/expenses", expenseRoutes);
router.use("/categories", categoryRoutes);

export default router;
