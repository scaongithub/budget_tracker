import { Router } from "express";
import { createIncome, getIncomes } from "../controllers/incomeController.js";

const router = Router();

router.get("/", getIncomes);
router.post("/", createIncome);

export default router;
