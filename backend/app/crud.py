from __future__ import annotations

from typing import Iterable, Optional

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from . import models, schemas, security
from .config import get_settings


def list_categories(db: Session) -> Iterable[models.Category]:
    return db.execute(select(models.Category).order_by(models.Category.name)).scalars().all()


def get_category(db: Session, category_id: int) -> models.Category:
    category = db.get(models.Category, category_id)
    if not category:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Category not found")
    return category


def create_category(db: Session, payload: schemas.CategoryCreate) -> models.Category:
    category = models.Category(**payload.dict())
    db.add(category)
    db.commit()
    db.refresh(category)
    return category


def update_category(db: Session, category_id: int, payload: schemas.CategoryUpdate) -> models.Category:
    category = get_category(db, category_id)
    for field, value in payload.dict(exclude_unset=True).items():
        setattr(category, field, value)
    db.add(category)
    db.commit()
    db.refresh(category)
    return category


def delete_category(db: Session, category_id: int) -> None:
    category = get_category(db, category_id)
    has_incomes = (
        db.execute(select(models.Income).filter(models.Income.category_id == category_id).limit(1))
        .scalars()
        .first()
        is not None
    )
    has_expenses = (
        db.execute(select(models.Expense).filter(models.Expense.category_id == category_id).limit(1))
        .scalars()
        .first()
        is not None
    )
    if has_incomes or has_expenses:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot delete category while it is assigned to a transaction",
        )
    db.delete(category)
    db.commit()


def _ensure_category_exists(db: Session, category_id: Optional[int]) -> None:
    if category_id is None:
        return
    if not db.get(models.Category, category_id):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Category does not exist")


def list_incomes(db: Session) -> Iterable[models.Income]:
    return (
        db.execute(select(models.Income).order_by(models.Income.received_on.desc(), models.Income.id.desc()))
        .scalars()
        .all()
    )


def get_income(db: Session, income_id: int) -> models.Income:
    income = db.get(models.Income, income_id)
    if not income:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Income not found")
    return income


def create_income(db: Session, payload: schemas.IncomeCreate) -> models.Income:
    _ensure_category_exists(db, payload.category_id)
    income = models.Income(**payload.dict())
    db.add(income)
    db.commit()
    db.refresh(income)
    return income


def update_income(db: Session, income_id: int, payload: schemas.IncomeUpdate) -> models.Income:
    income = get_income(db, income_id)
    update_data = payload.dict(exclude_unset=True)
    _ensure_category_exists(db, update_data.get("category_id", income.category_id))
    for field, value in update_data.items():
        setattr(income, field, value)
    db.add(income)
    db.commit()
    db.refresh(income)
    return income


def delete_income(db: Session, income_id: int) -> None:
    income = get_income(db, income_id)
    db.delete(income)
    db.commit()


def list_expenses(db: Session) -> Iterable[models.Expense]:
    return (
        db.execute(select(models.Expense).order_by(models.Expense.spent_on.desc(), models.Expense.id.desc()))
        .scalars()
        .all()
    )


def get_expense(db: Session, expense_id: int) -> models.Expense:
    expense = db.get(models.Expense, expense_id)
    if not expense:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Expense not found")
    return expense


def create_expense(db: Session, payload: schemas.ExpenseCreate) -> models.Expense:
    _ensure_category_exists(db, payload.category_id)
    expense = models.Expense(**payload.dict())
    db.add(expense)
    db.commit()
    db.refresh(expense)
    return expense


def update_expense(db: Session, expense_id: int, payload: schemas.ExpenseUpdate) -> models.Expense:
    expense = get_expense(db, expense_id)
    update_data = payload.dict(exclude_unset=True)
    _ensure_category_exists(db, update_data.get("category_id", expense.category_id))
    for field, value in update_data.items():
        setattr(expense, field, value)
    db.add(expense)
    db.commit()
    db.refresh(expense)
    return expense


def delete_expense(db: Session, expense_id: int) -> None:
    expense = get_expense(db, expense_id)
    db.delete(expense)
    db.commit()


def get_user_by_email(db: Session, email: str) -> Optional[models.User]:
    return db.execute(select(models.User).filter(models.User.email == email)).scalars().first()


def create_user(db: Session, email: str, password: str, full_name: Optional[str] = None) -> models.User:
    if get_user_by_email(db, email):
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="User already exists")
    password_hash = security.get_password_hash(password)
    user = models.User(email=email, password_hash=password_hash, full_name=full_name)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def authenticate_user(db: Session, email: str, password: str) -> Optional[models.User]:
    user = get_user_by_email(db, email)
    if not user or not security.verify_password(password, user.password_hash):
        return None
    return user


def ensure_default_admin(db: Session) -> models.User:
    settings = get_settings()
    user = get_user_by_email(db, settings.default_admin_email)
    if user:
        return user
    password_hash = security.get_password_hash(settings.default_admin_password)
    user = models.User(
        email=settings.default_admin_email,
        password_hash=password_hash,
        full_name="Administrator",
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

