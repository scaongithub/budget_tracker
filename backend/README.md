# Budget Tracker Backend

A FastAPI backend that exposes REST endpoints for managing categories, incomes, expenses, and user authentication for the
budget tracker application. Data is stored in MySQL using SQLAlchemy models and the schema is created automatically on startup.

## Features

- **FastAPI** application with automatic OpenAPI documentation.
- **CORS** enabled for all origins to simplify local front-end development.
- MySQL persistence powered by SQLAlchemy ORM models.
- CRUD endpoints for categories, incomes, and expenses with data validation.
- Authentication endpoint for password-based login.
- Friendly `/health` endpoint to confirm service availability.

## Getting started

### 1. Create a virtual environment

```bash
python -m venv .venv
source .venv/bin/activate
```

> On Windows use `.venv\Scripts\activate` instead of the `source` command above.

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure environment variables

Create a `.env` file alongside `requirements.txt` or export these variables in your shell before running the API:

| Variable | Description | Default |
| --- | --- | --- |
| `MYSQL_HOST` | MySQL server hostname | `localhost` |
| `MYSQL_PORT` | MySQL server port | `3306` |
| `MYSQL_USER` | Database user | `budget` |
| `MYSQL_PASSWORD` | Database user password | `budget` |
| `MYSQL_DATABASE` | Database schema name | `budget` |
| `APP_SECRET_KEY` | Secret key for generating access tokens | `change-me` |
| `DEFAULT_ADMIN_EMAIL` | Provisioned admin user email | `paolam.crz@gmail.com` |
| `DEFAULT_ADMIN_PASSWORD` | Provisioned admin user password | `admin` |

Example `.env` configuration:

```
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=budget
MYSQL_PASSWORD=super-secret
MYSQL_DATABASE=budget
APP_SECRET_KEY=use-a-strong-secret
DEFAULT_ADMIN_EMAIL=paolam.crz@gmail.com
DEFAULT_ADMIN_PASSWORD=admin
```

### 4. Run the development server

```bash
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`. Interactive documentation can be found at `http://localhost:8000/docs`.
On first startup the database schema is created automatically and a default administrator account is provisioned.

## Project structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── config.py
│   ├── crud.py
│   ├── database.py
│   ├── main.py
│   ├── models.py
│   ├── routes.py
│   ├── schemas.py
│   └── security.py
├── README.md
└── requirements.txt
```

## Future enhancements

- Add richer authorization rules and per-user budgeting data.
- Implement pagination and filtering for large datasets.
- Integrate background jobs for recurring transactions and reporting.
