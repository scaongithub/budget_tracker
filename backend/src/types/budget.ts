export interface Income {
  id: number;
  userId: number;
  amount: number;
  date: string;
  source?: string;
  recurring: boolean;
}

export interface Expense {
  id: number;
  userId: number;
  amount: number;
  date: string;
  description?: string;
  categoryId: number;
  subcategoryId?: number | null;
}

export interface Category {
  id: number;
  name: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: number;
  categoryId: number;
  name: string;
}

export type IncomeInput = Omit<Income, "id">;
export type ExpenseInput = Omit<Expense, "id">;
export type CategoryInput = Pick<Category, "name">;
export type SubcategoryInput = Pick<Subcategory, "name">;
