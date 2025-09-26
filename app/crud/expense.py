from typing import List, Optional

from sqlalchemy import extract
from sqlalchemy.orm import Session

from app.models.expense import Expense
from app.schemas.expense import ExpenseCreate, ExpenseUpdate


def get_expenses(
    db: Session,
    user_id: int,
    month: Optional[int] = None,
    year: Optional[int] = None,
) -> List[Expense]:
    query = db.query(Expense).filter(Expense.user_id == user_id)
    if month is not None:
        query = query.filter(extract("month", Expense.date) == month)
    if year is not None:
        query = query.filter(extract("year", Expense.date) == year)
    return query.order_by(Expense.date.desc()).all()


def get_expense(db: Session, user_id: int, expense_id: int) -> Optional[Expense]:
    return (
        db.query(Expense)
        .filter(Expense.user_id == user_id)
        .filter(Expense.id == expense_id)
        .first()
    )


def create_expense(db: Session, user_id: int, expense_in: ExpenseCreate) -> Expense:
    expense = Expense(
        user_id=user_id,
        amount=expense_in.amount,
        date=expense_in.date,
        description=expense_in.description,
        subcategory_id=expense_in.subcategory_id,
        split_between=expense_in.split_between,
    )
    db.add(expense)
    db.commit()
    db.refresh(expense)
    return expense


def update_expense(db: Session, db_expense: Expense, expense_in: ExpenseUpdate) -> Expense:
    if expense_in.amount is not None:
        db_expense.amount = expense_in.amount
    if expense_in.date is not None:
        db_expense.date = expense_in.date
    if expense_in.description is not None:
        db_expense.description = expense_in.description
    if expense_in.subcategory_id is not None:
        db_expense.subcategory_id = expense_in.subcategory_id
    if expense_in.split_between is not None:
        db_expense.split_between = expense_in.split_between
    db.add(db_expense)
    db.commit()
    db.refresh(db_expense)
    return db_expense


def delete_expense(db: Session, db_expense: Expense) -> None:
    db.delete(db_expense)
    db.commit()
