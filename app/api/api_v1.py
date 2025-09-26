from fastapi import APIRouter

from app.api.routes import auth, categories, expenses, incomes, users

api_router = APIRouter()
api_router.include_router(auth.router)
api_router.include_router(users.router)
api_router.include_router(incomes.router)
api_router.include_router(expenses.router)
api_router.include_router(categories.router)
