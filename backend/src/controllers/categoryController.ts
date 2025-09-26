import { Request, Response } from "express";
import { z } from "zod";
import { budgetStore } from "../config/store.js";

const categorySchema = z.object({
  name: z.string().min(1)
});

const subcategorySchema = z.object({
  name: z.string().min(1)
});

export const getCategories = async (_req: Request, res: Response) => {
  const categories = await budgetStore.getCategories();
  res.json(categories);
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const payload = categorySchema.parse(req.body);
    const category = await budgetStore.createCategory(payload);
    res.status(201).json(category);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Invalid category payload", details: error.flatten() });
      return;
    }
    res.status(500).json({ message: (error as Error).message });
  }
};

export const createSubcategory = async (req: Request, res: Response) => {
  try {
    const payload = subcategorySchema.parse(req.body);
    const categoryId = Number(req.params.categoryId);
    if (!Number.isInteger(categoryId) || categoryId <= 0) {
      res.status(400).json({ message: "categoryId must be a positive integer" });
      return;
    }
    const subcategory = await budgetStore.createSubcategory(categoryId, payload);
    res.status(201).json(subcategory);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Invalid subcategory payload", details: error.flatten() });
      return;
    }
    res.status(500).json({ message: (error as Error).message });
  }
};
