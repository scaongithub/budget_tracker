import { Category, CategoryInput, Expense, ExpenseInput, Income, IncomeInput, Subcategory, SubcategoryInput } from "../types/budget.js";

export interface BudgetStore {
  getIncomes(): Promise<Income[]>;
  createIncome(input: IncomeInput): Promise<Income>;
  getExpenses(): Promise<Expense[]>;
  createExpense(input: ExpenseInput): Promise<Expense>;
  getCategories(): Promise<Category[]>;
  createCategory(input: CategoryInput): Promise<Category>;
  createSubcategory(categoryId: number, input: SubcategoryInput): Promise<Subcategory>;
}
