import { Request, Response } from "express";
import { z } from "zod";
import { budgetStore } from "../config/store.js";

const expenseSchema = z.object({
  userId: z.coerce.number().int().positive(),
  amount: z.coerce.number().positive(),
  date: z.string(),
  description: z.string().min(1).optional(),
  categoryId: z.coerce.number().int().positive(),
  subcategoryId: z.coerce.number().int().positive().nullable().optional()
});

export const getExpenses = async (_req: Request, res: Response) => {
  const expenses = await budgetStore.getExpenses();
  res.json(expenses);
};

export const createExpense = async (req: Request, res: Response) => {
  try {
    const payload = expenseSchema.parse(req.body);
    const expense = await budgetStore.createExpense({
      ...payload,
      subcategoryId: payload.subcategoryId ?? null
    });
    res.status(201).json(expense);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Invalid expense payload", details: error.flatten() });
      return;
    }
    res.status(500).json({ message: (error as Error).message });
  }
};
