import { Request, Response } from "express";
import { z } from "zod";
import { budgetStore } from "../config/store.js";

const incomeSchema = z.object({
  userId: z.coerce.number().int().positive(),
  amount: z.coerce.number().positive(),
  date: z.string(),
  source: z.string().min(1).optional(),
  recurring: z.coerce.boolean().default(false)
});

export const getIncomes = async (_req: Request, res: Response) => {
  const incomes = await budgetStore.getIncomes();
  res.json(incomes);
};

export const createIncome = async (req: Request, res: Response) => {
  try {
    const payload = incomeSchema.parse(req.body);
    const income = await budgetStore.createIncome(payload);
    res.status(201).json(income);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Invalid income payload", details: error.flatten() });
      return;
    }
    res.status(500).json({ message: (error as Error).message });
  }
};
