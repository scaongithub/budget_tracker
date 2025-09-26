import mysql from "mysql2/promise";
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

export interface MySqlBudgetStoreOptions {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

export class MySqlBudgetStore implements BudgetStore {
  private pool: mysql.Pool;

  constructor(options: MySqlBudgetStoreOptions) {
    this.pool = mysql.createPool({
      ...options,
      waitForConnections: true,
      connectionLimit: 10,
      namedPlaceholders: true
    });
  }

  private async mapIncome(row: any): Promise<Income> {
    return {
      id: row.income_id,
      userId: row.user_id,
      amount: Number(row.amount),
      date: row.date instanceof Date ? row.date.toISOString().split("T")[0] : row.date,
      source: row.source ?? undefined,
      recurring: Boolean(row.recurring)
    };
  }

  private async mapExpense(row: any): Promise<Expense> {
    return {
      id: row.expense_id,
      userId: row.user_id,
      amount: Number(row.amount),
      date: row.date instanceof Date ? row.date.toISOString().split("T")[0] : row.date,
      description: row.description ?? undefined,
      categoryId: row.category_id,
      subcategoryId: row.subcategory_id ?? null
    };
  }

  async getIncomes(): Promise<Income[]> {
    const [rows] = await this.pool.query("SELECT * FROM incomes ORDER BY date DESC, income_id DESC");
    return Promise.all((rows as mysql.RowDataPacket[]).map((row) => this.mapIncome(row)));
  }

  async createIncome(input: IncomeInput): Promise<Income> {
    const [result] = await this.pool.execute<mysql.ResultSetHeader>(
      `INSERT INTO incomes (user_id, amount, date, source, recurring)
       VALUES (:userId, :amount, :date, :source, :recurring)`
      , {
        userId: input.userId,
        amount: input.amount,
        date: input.date,
        source: input.source ?? null,
        recurring: input.recurring ? 1 : 0
      }
    );
    const insertedId = result.insertId;
    return {
      id: insertedId,
      ...input
    };
  }

  async getExpenses(): Promise<Expense[]> {
    const [rows] = await this.pool.query(
      `SELECT * FROM expenses ORDER BY date DESC, expense_id DESC`
    );
    return Promise.all((rows as mysql.RowDataPacket[]).map((row) => this.mapExpense(row)));
  }

  async createExpense(input: ExpenseInput): Promise<Expense> {
    const [result] = await this.pool.execute<mysql.ResultSetHeader>(
      `INSERT INTO expenses (user_id, amount, date, description, category_id, subcategory_id)
       VALUES (:userId, :amount, :date, :description, :categoryId, :subcategoryId)`
      , {
        userId: input.userId,
        amount: input.amount,
        date: input.date,
        description: input.description ?? null,
        categoryId: input.categoryId,
        subcategoryId: input.subcategoryId ?? null
      }
    );
    const insertedId = result.insertId;
    return {
      id: insertedId,
      ...input
    };
  }

  async getCategories(): Promise<Category[]> {
    const [categoryRows] = await this.pool.query("SELECT * FROM categories ORDER BY name ASC");
    const [subcategoryRows] = await this.pool.query("SELECT * FROM subcategories ORDER BY name ASC");

    const subcategoriesByCategory = new Map<number, Subcategory[]>();
    for (const row of subcategoryRows as mysql.RowDataPacket[]) {
      const subcategory: Subcategory = {
        id: row.subcategory_id,
        categoryId: row.category_id,
        name: row.name
      };
      const list = subcategoriesByCategory.get(subcategory.categoryId) ?? [];
      list.push(subcategory);
      subcategoriesByCategory.set(subcategory.categoryId, list);
    }

    return (categoryRows as mysql.RowDataPacket[]).map((row) => ({
      id: row.category_id,
      name: row.name,
      subcategories: subcategoriesByCategory.get(row.category_id) ?? []
    }));
  }

  async createCategory(input: CategoryInput): Promise<Category> {
    const [result] = await this.pool.execute<mysql.ResultSetHeader>(
      `INSERT INTO categories (name) VALUES (:name)`
      , {
        name: input.name
      }
    );
    return {
      id: result.insertId,
      name: input.name,
      subcategories: []
    };
  }

  async createSubcategory(categoryId: number, input: SubcategoryInput): Promise<Subcategory> {
    const [result] = await this.pool.execute<mysql.ResultSetHeader>(
      `INSERT INTO subcategories (category_id, name) VALUES (:categoryId, :name)`
      , {
        categoryId,
        name: input.name
      }
    );
    return {
      id: result.insertId,
      categoryId,
      name: input.name
    };
  }
}
