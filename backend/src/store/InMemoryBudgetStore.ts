import { randomUUID } from "crypto";
import {
  BudgetStore
} from "./BudgetStore.js";
import {
  Category,
  CategoryInput,
  Expense,
  ExpenseInput,
  Income,
  IncomeInput,
  Subcategory,
  SubcategoryInput
} from "../types/budget.js";

const uuidToNumericId = (() => {
  let counter = 1;
  const map = new Map<string, number>();
  return (uuid: string) => {
    if (!map.has(uuid)) {
      map.set(uuid, counter++);
    }
    return map.get(uuid)!;
  };
})();

const nextId = () => uuidToNumericId(randomUUID());

export class InMemoryBudgetStore implements BudgetStore {
  private incomes: Income[] = [];
  private expenses: Expense[] = [];
  private categories: Category[] = [];

  constructor() {
    this.seed();
  }

  private seed() {
    const foodCategory: Category = {
      id: nextId(),
      name: "Food",
      subcategories: []
    };
    const housingCategory: Category = {
      id: nextId(),
      name: "Housing",
      subcategories: []
    };

    const groceriesSubcategory: Subcategory = {
      id: nextId(),
      categoryId: foodCategory.id,
      name: "Groceries"
    };
    const diningOutSubcategory: Subcategory = {
      id: nextId(),
      categoryId: foodCategory.id,
      name: "Dining Out"
    };
    const rentSubcategory: Subcategory = {
      id: nextId(),
      categoryId: housingCategory.id,
      name: "Rent"
    };

    foodCategory.subcategories.push(groceriesSubcategory, diningOutSubcategory);
    housingCategory.subcategories.push(rentSubcategory);

    this.categories.push(foodCategory, housingCategory);

    this.incomes.push({
      id: nextId(),
      userId: 1,
      amount: 3200,
      date: new Date().toISOString().split("T")[0],
      source: "Salary",
      recurring: true
    });

    this.expenses.push({
      id: nextId(),
      userId: 1,
      amount: 450,
      date: new Date().toISOString().split("T")[0],
      description: "Weekly groceries",
      categoryId: foodCategory.id,
      subcategoryId: groceriesSubcategory.id
    });
  }

  async getIncomes(): Promise<Income[]> {
    return [...this.incomes];
  }

  async createIncome(input: IncomeInput): Promise<Income> {
    const income: Income = { ...input, id: nextId() };
    this.incomes.push(income);
    return income;
  }

  async getExpenses(): Promise<Expense[]> {
    return [...this.expenses];
  }

  async createExpense(input: ExpenseInput): Promise<Expense> {
    const expense: Expense = { ...input, id: nextId() };
    this.expenses.push(expense);
    return expense;
  }

  async getCategories(): Promise<Category[]> {
    return this.categories.map((category) => ({
      ...category,
      subcategories: [...category.subcategories]
    }));
  }

  async createCategory(input: CategoryInput): Promise<Category> {
    const category: Category = {
      id: nextId(),
      name: input.name,
      subcategories: []
    };
    this.categories.push(category);
    return category;
  }

  async createSubcategory(categoryId: number, input: SubcategoryInput): Promise<Subcategory> {
    const category = this.categories.find((item) => item.id === categoryId);
    if (!category) {
      throw new Error(`Category ${categoryId} not found`);
    }
    const subcategory: Subcategory = {
      id: nextId(),
      categoryId,
      name: input.name
    };
    category.subcategories.push(subcategory);
    return subcategory;
  }
}
