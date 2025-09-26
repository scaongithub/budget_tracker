from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.api import deps
from app.crud import expense as crud_expense
from app.schemas.expense import ExpenseCreate, ExpenseResponse, ExpenseUpdate

router = APIRouter(prefix="/expenses", tags=["expenses"])


@router.get("/", response_model=List[ExpenseResponse])
def list_expenses(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    month: Optional[int] = Query(None, ge=1, le=12),
    year: Optional[int] = Query(None, ge=1900),
):
    return crud_expense.get_expenses(db, user_id=current_user.id, month=month, year=year)


@router.post("/", response_model=ExpenseResponse, status_code=status.HTTP_201_CREATED)
def create_expense(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    expense_in: ExpenseCreate,
):
    return crud_expense.create_expense(db, user_id=current_user.id, expense_in=expense_in)


@router.put("/{expense_id}", response_model=ExpenseResponse)
def update_expense(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    expense_id: int,
    expense_in: ExpenseUpdate,
):
    db_expense = crud_expense.get_expense(db, user_id=current_user.id, expense_id=expense_id)
    if not db_expense:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Expense not found")
    return crud_expense.update_expense(db, db_expense=db_expense, expense_in=expense_in)


@router.delete("/{expense_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_expense(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    expense_id: int,
):
    db_expense = crud_expense.get_expense(db, user_id=current_user.id, expense_id=expense_id)
    if not db_expense:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Expense not found")
    crud_expense.delete_expense(db, db_expense=db_expense)
    return None
