# Budget Tracker Backend

This directory contains the Express + TypeScript backend for the Budget Tracker application. The service exposes a REST API for managing users' incomes, expenses, categories, and subcategories. The API can run against a MySQL database (recommended for production) or fall back to an in-memory data store for local prototyping.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the example environment file and adjust the values to match your setup:
   ```bash
   cp .env.example .env
   ```
3. Start the development server with hot reloading:
   ```bash
   npm run dev
   ```

The API listens on `http://localhost:4000` by default.

### In-memory mode

If you do not have a MySQL database available, set `USE_IN_MEMORY_DB=true` in the `.env` file. The service will boot with seeded demo data that lives only for the lifetime of the process.

### Production build

To produce a compiled build, run:

```bash
npm run build
npm start
```

## API Overview

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET    | `/api/health` | Health check endpoint. |
| GET    | `/api/incomes` | Retrieve all income entries. |
| POST   | `/api/incomes` | Create a new income entry. |
| GET    | `/api/expenses` | Retrieve all expense entries (with categories & subcategories). |
| POST   | `/api/expenses` | Create a new expense entry. |
| GET    | `/api/categories` | Retrieve categories with their subcategories. |
| POST   | `/api/categories` | Create a new top-level category. |
| POST   | `/api/categories/:categoryId/subcategories` | Create a subcategory under the specified category. |

All POST endpoints expect JSON bodies; validation errors return HTTP 400 with details. Server errors return HTTP 500 with a descriptive message.

## Database schema

The MySQL implementation expects the following tables (aligned with the requirements document):

```sql
CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  email VARCHAR(120) NOT NULL,
  role ENUM('admin', 'user') DEFAULT 'user'
);

CREATE TABLE categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE subcategories (
  subcategory_id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE incomes (
  income_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  amount DECIMAL(12,2) NOT NULL,
  date DATE NOT NULL,
  source VARCHAR(120),
  recurring TINYINT(1) DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE expenses (
  expense_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  amount DECIMAL(12,2) NOT NULL,
  date DATE NOT NULL,
  description VARCHAR(255),
  category_id INT NOT NULL,
  subcategory_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (category_id) REFERENCES categories(category_id),
  FOREIGN KEY (subcategory_id) REFERENCES subcategories(subcategory_id)
);
```

These definitions can be adjusted to suit your production environment.
