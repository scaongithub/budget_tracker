# Requirements Document for Monthly Budget Tracking Web App

## 1. Introduction

### 1.1 Purpose
This document outlines the requirements for developing a simple web-based application for monthly budget tracking. The app is designed specifically for a married couple, Paola and Carlo, to manage their personal finances. It will allow them to track incomes and expenses, categorize expenses, and visualize their budget. The app aims to provide an intuitive, visually appealing interface that incorporates cultural elements from Mexican and Italian origins to make it engaging and personalized.

### 1.2 Scope
- **In Scope**: User authentication, data entry for incomes and expenses, custom subcategory creation for expenses, data storage in MySQL, basic reporting and visualizations, and a culturally themed UI.
- **Out of Scope**: Advanced features like multi-user collaboration beyond the couple, tax calculations, investment tracking, or mobile app versions (focus on web app only).
- **Optional**: Integration with BBVA Italy bank APIs for automated transaction imports, subject to feasibility assessment.

### 1.3 Stakeholders
- Primary Users: Paola (assumed Mexican origin) and Carlo (assumed Italian origin).
- Developers: Software engineering team responsible for implementation.
- Assumptions: The app is for personal use; no scalability for multiple couples or commercial distribution is required.

### 1.4 Definitions and Acronyms
- UI: User Interface
- API: Application Programming Interface
- MySQL: Relational database management system
- BBVA: Banco Bilbao Vizcaya Argentaria (Spanish bank with digital operations in Italy)

## 2. Functional Requirements

### 2.1 User Authentication
- Users (Paola and Carlo) shall log in with individual credentials (username/password or email-based).
- Support for shared access to the same budget data, with optional role-based views (e.g., view-only vs. edit).
- Password reset functionality via email.

### 2.2 Income Management
- Users shall add income entries, including:
  - Amount (numeric, with currency support, default to EUR).
  - Date (default to current date).
  - Source (e.g., salary, freelance) – free text or dropdown.
  - Recurring flag (e.g., monthly salary).
- Users shall view, edit, or delete income entries.
- System shall calculate total monthly income.

### 2.3 Expense Management
- Users shall add expense entries, including:
  - Amount (numeric, EUR default).
  - Date (default to current date).
  - Description (free text).
  - Category/Subcategory (selected from predefined or user-created lists).
  - Split option (e.g., shared between Paola and Carlo).
- Users shall create, edit, or delete custom subcategories under main categories (e.g., Main: Food; Sub: Groceries, Dining Out).
- System shall calculate total monthly expenses and breakdowns by category/subcategory.
- Users shall view, edit, or delete expense entries.

### 2.4 Budget Tracking and Reporting
- System shall display a monthly overview dashboard showing:
  - Total income vs. expenses.
  - Remaining budget (income - expenses).
  - Pie charts or bar graphs for expense breakdowns by category/subcategory.
- Users shall filter views by month/year.
- Export functionality for reports (e.g., CSV or PDF).

### 2.5 Bank API Integration (Optional)
- Investigate and implement connection to BBVA Italy's open banking APIs for automated import of transactions.
  - Feasibility: Based on research, BBVA operates a 100% digital bank in Italy and provides open banking APIs via partnerships (e.g., with Banca Sella and Fabrick). Integration is possible under EU PSD2 regulations, requiring developer registration on BBVA API_Market, API keys, and user consent for account access.
  - Functionality: If integrated, allow users to link BBVA accounts, fetch recent transactions, and auto-categorize them as incomes/expenses.
  - Fallback: Manual entry if API integration is not feasible due to regulatory, technical, or access limitations.

## 3. Non-Functional Requirements

### 3.1 Performance
- Page load times under 2 seconds for standard operations.
- Handle up to 1,000 entries per month without degradation.
- Responsive design for desktop and mobile browsers.

### 3.2 Security
- Data encryption in transit (HTTPS) and at rest (MySQL encryption).
- Secure authentication (hashed passwords).
- Role-based access control to prevent unauthorized edits.
- Compliance with GDPR for personal financial data (EU-based users).

### 3.3 Reliability and Availability
- 99% uptime target.
- Automatic backups of database weekly.
- Error handling for invalid inputs (e.g., negative amounts).

### 3.4 Usability
- Intuitive interface with minimal clicks for common tasks.
- Multi-language support (English, Italian, Spanish) if needed.
- Accessibility: WCAG 2.1 compliance (e.g., alt text for images, keyboard navigation).

### 3.5 Maintainability
- Codebase structured with modular components (e.g., MVC pattern).
- Documentation for API endpoints and database schema.

### 3.6 Technology Stack
- Backend: Server-side language compatible with MySQL (e.g., Node.js with Express, PHP with Laravel).
- Database: MySQL for storing users, incomes, expenses, and categories.
- Frontend: HTML/CSS/JavaScript framework (e.g., React or Vue.js) for dynamic UI.
- Hosting: Cloud platform (e.g., AWS, Heroku) for deployment.

## 4. User Interface Design

### 4.1 Visual Theme
- Leverage Mexican and Italian cultural origins for a graphically captivating UI:
  - **Mexican Elements** (for Paola): Vibrant colors (e.g., reds, greens, yellows inspired by Mexican folk art), motifs like papel picado patterns, cacti icons, or Aztec-inspired borders for expense categories.
  - **Italian Elements** (for Carlo): Elegant, warm tones (e.g., terracotta, olive green, deep blues from Italian landscapes), icons like pasta, wine, or Renaissance art flourishes for income sections.
  - **Combined Theme**: Fusion style – e.g., a dashboard with a split design (one side Mexican vibrancy, the other Italian sophistication), using flags or cultural symbols subtly in headers/footers.
- High-contrast, modern fonts (e.g., sans-serif for readability).
- Interactive elements: Animated graphs (e.g., progress bars filling with cultural patterns).

### 4.2 Key Screens
- Login/Register Page: Simple form with cultural background image.
- Dashboard: Monthly summary with graphs and quick-add buttons.
- Add Income/Expense Forms: Dropdowns for categories, date pickers.
- Category Management: List view with add/edit options.
- Reports Page: Filterable charts and export buttons.

## 5. Database Design

### 5.1 Schema Overview
Use MySQL with the following tables (simplified ERD):

- **Users**:
  - user_id (PK, int)
  - username (varchar)
  - password_hash (varchar)
  - email (varchar)
  - role (enum: 'admin', 'user') – e.g., both Paola and Carlo as admins.

- **Incomes**:
  - income_id (PK, int)
  - user_id (FK, int)
  - amount (decimal)
  - date (date)
  - source (varchar)
  - recurring (boolean)

- **Expenses**:
  - expense_id (PK, int)
  - user_id (FK, int)
  - amount (decimal)
  - date (date)
  - description (varchar)
  - subcategory_id (FK, int)

- **Categories**:
  - category_id (PK, int)
  - name (varchar) – e.g., 'Food', 'Utilities'

- **Subcategories**:
  - subcategory_id (PK, int)
  - category_id (FK, int)
  - name (varchar) – user-created, e.g., 'Groceries' under 'Food'

Relationships: One-to-Many (Users to Incomes/Expenses; Categories to Subcategories).

## 6. Integrations and Dependencies

- **BBVA Italy APIs**: 
  - Use BBVA API_Market for open banking endpoints (e.g., accounts, transactions).
  - Requirements: API key, OAuth authentication, user consent flow.
  - Risks: Limited to BBVA customers; regulatory approval needed for production use.
- **External Libraries**: Chart.js for graphs, Bootstrap for responsive UI.
- **Dependencies**: MySQL server, web server (e.g., Apache/Nginx).

## 7. Assumptions and Risks

### 7.1 Assumptions
- Users are tech-savvy enough for web app usage.
- Currency is primarily EUR (Italy-based).
- BBVA integration is desired but not mandatory; manual entry suffices.
- Development budget allows for custom UI design.

### 7.2 Risks
- API Integration: BBVA APIs may have restrictions in Italy or require premium access.
- Cultural Sensitivity: Ensure UI elements are respectful and not stereotypical.
- Data Privacy: Handle financial data securely to avoid breaches.
- Scope Creep: Limit to core features; defer enhancements.

## 8. Next Steps
- Review and approve this document with stakeholders (Paola and Carlo).
- Proceed to design phase: Wireframes and prototypes.
- Development timeline: Estimate 4-6 weeks for MVP (Minimum Viable Product).
- Testing: Unit, integration, and user acceptance testing.

## Backend Implementation

An initial Python/FastAPI backend is available in the `app/` directory. It exposes RESTful endpoints for user management, authentication, incomes, expenses, categories, and subcategories backed by a MySQL database.

### Prerequisites

- Python 3.10+
- MySQL 8.x (or compatible)

### Setup

1. Create a Python virtual environment and install dependencies:

   ```bash
   python -m venv .venv
   source .venv/bin/activate
   pip install -r requirements.txt
   ```

2. Configure environment variables by copying `.env.example` to `.env` and updating the database credentials or by providing a full `DATABASE_URL` connection string.

3. Ensure a MySQL database exists that matches the configured credentials (default: `budget_tracker`). Tables will be created automatically on application startup.

### Running the API

```bash
uvicorn app.main:app --reload
```

The interactive API documentation is available at `http://localhost:8000/docs` after the server starts.

### Deployment on Railway

Railway requires an explicit start command for custom Python projects. This repository now includes a
`Procfile` with the following entry so the service can be launched automatically during deployment:

```
web: uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}
```

If you prefer to override the default command, you can adjust the `Procfile` or configure the start
command directly in the Railway dashboard.
