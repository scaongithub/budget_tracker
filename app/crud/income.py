from typing import List, Optional

from sqlalchemy import extract
from sqlalchemy.orm import Session

from app.models.income import Income
from app.schemas.income import IncomeCreate, IncomeUpdate


def get_incomes(
    db: Session,
    user_id: int,
    month: Optional[int] = None,
    year: Optional[int] = None,
) -> List[Income]:
    query = db.query(Income).filter(Income.user_id == user_id)
    if month is not None:
        query = query.filter(extract("month", Income.date) == month)
    if year is not None:
        query = query.filter(extract("year", Income.date) == year)
    return query.order_by(Income.date.desc()).all()


def get_income(db: Session, user_id: int, income_id: int) -> Optional[Income]:
    return (
        db.query(Income)
        .filter(Income.user_id == user_id)
        .filter(Income.id == income_id)
        .first()
    )


def create_income(db: Session, user_id: int, income_in: IncomeCreate) -> Income:
    income = Income(
        user_id=user_id,
        amount=income_in.amount,
        date=income_in.date,
        source=income_in.source,
        recurring=income_in.recurring,
    )
    db.add(income)
    db.commit()
    db.refresh(income)
    return income


def update_income(db: Session, db_income: Income, income_in: IncomeUpdate) -> Income:
    if income_in.amount is not None:
        db_income.amount = income_in.amount
    if income_in.date is not None:
        db_income.date = income_in.date
    if income_in.source is not None:
        db_income.source = income_in.source
    if income_in.recurring is not None:
        db_income.recurring = income_in.recurring
    db.add(db_income)
    db.commit()
    db.refresh(db_income)
    return db_income


def delete_income(db: Session, db_income: Income) -> None:
    db.delete(db_income)
    db.commit()
