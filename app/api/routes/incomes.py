from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.api import deps
from app.crud import income as crud_income
from app.schemas.income import IncomeCreate, IncomeResponse, IncomeUpdate

router = APIRouter(prefix="/incomes", tags=["incomes"])


@router.get("/", response_model=List[IncomeResponse])
def list_incomes(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    month: Optional[int] = Query(None, ge=1, le=12),
    year: Optional[int] = Query(None, ge=1900),
):
    return crud_income.get_incomes(db, user_id=current_user.id, month=month, year=year)


@router.post("/", response_model=IncomeResponse, status_code=status.HTTP_201_CREATED)
def create_income(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    income_in: IncomeCreate,
):
    return crud_income.create_income(db, user_id=current_user.id, income_in=income_in)


@router.put("/{income_id}", response_model=IncomeResponse)
def update_income(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    income_id: int,
    income_in: IncomeUpdate,
):
    db_income = crud_income.get_income(db, user_id=current_user.id, income_id=income_id)
    if not db_income:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Income not found")
    return crud_income.update_income(db, db_income=db_income, income_in=income_in)


@router.delete("/{income_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_income(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    income_id: int,
):
    db_income = crud_income.get_income(db, user_id=current_user.id, income_id=income_id)
    if not db_income:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Income not found")
    crud_income.delete_income(db, db_income=db_income)
    return None
