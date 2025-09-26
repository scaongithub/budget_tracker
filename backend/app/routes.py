from __future__ import annotations

from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from . import crud, schemas, security
from .database import get_db

router = APIRouter()


@router.get("/health", response_model=schemas.HealthCheck)
def health_check() -> schemas.HealthCheck:
    return schemas.HealthCheck(status="ok")


# Category endpoints ---------------------------------------------------
@router.get("/categories", response_model=List[schemas.Category])
def list_categories(db: Session = Depends(get_db)) -> List[schemas.Category]:
    return list(crud.list_categories(db))


@router.post(
    "/categories",
    response_model=schemas.Category,
    status_code=status.HTTP_201_CREATED,
)
def create_category(
    payload: schemas.CategoryCreate, db: Session = Depends(get_db)
) -> schemas.Category:
    return crud.create_category(db, payload)


@router.get("/categories/{category_id}", response_model=schemas.Category)
def get_category(category_id: int, db: Session = Depends(get_db)) -> schemas.Category:
    return crud.get_category(db, category_id)


@router.put("/categories/{category_id}", response_model=schemas.Category)
def update_category(
    category_id: int,
    payload: schemas.CategoryUpdate,
    db: Session = Depends(get_db),
) -> schemas.Category:
    return crud.update_category(db, category_id, payload)


@router.delete("/categories/{category_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_category(category_id: int, db: Session = Depends(get_db)) -> None:
    crud.delete_category(db, category_id)


# Income endpoints -----------------------------------------------------
@router.get("/incomes", response_model=List[schemas.Income])
def list_incomes(db: Session = Depends(get_db)) -> List[schemas.Income]:
    return list(crud.list_incomes(db))


@router.post(
    "/incomes",
    response_model=schemas.Income,
    status_code=status.HTTP_201_CREATED,
)
def create_income(
    payload: schemas.IncomeCreate,
    db: Session = Depends(get_db),
) -> schemas.Income:
    return crud.create_income(db, payload)


@router.get("/incomes/{income_id}", response_model=schemas.Income)
def get_income(income_id: int, db: Session = Depends(get_db)) -> schemas.Income:
    return crud.get_income(db, income_id)


@router.put("/incomes/{income_id}", response_model=schemas.Income)
def update_income(
    income_id: int,
    payload: schemas.IncomeUpdate,
    db: Session = Depends(get_db),
) -> schemas.Income:
    return crud.update_income(db, income_id, payload)


@router.delete("/incomes/{income_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_income(income_id: int, db: Session = Depends(get_db)) -> None:
    crud.delete_income(db, income_id)


# Expense endpoints ----------------------------------------------------
@router.get("/expenses", response_model=List[schemas.Expense])
def list_expenses(db: Session = Depends(get_db)) -> List[schemas.Expense]:
    return list(crud.list_expenses(db))


@router.post(
    "/expenses",
    response_model=schemas.Expense,
    status_code=status.HTTP_201_CREATED,
)
def create_expense(
    payload: schemas.ExpenseCreate,
    db: Session = Depends(get_db),
) -> schemas.Expense:
    return crud.create_expense(db, payload)


@router.get("/expenses/{expense_id}", response_model=schemas.Expense)
def get_expense(expense_id: int, db: Session = Depends(get_db)) -> schemas.Expense:
    return crud.get_expense(db, expense_id)


@router.put("/expenses/{expense_id}", response_model=schemas.Expense)
def update_expense(
    expense_id: int,
    payload: schemas.ExpenseUpdate,
    db: Session = Depends(get_db),
) -> schemas.Expense:
    return crud.update_expense(db, expense_id, payload)


@router.delete("/expenses/{expense_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_expense(expense_id: int, db: Session = Depends(get_db)) -> None:
    crud.delete_expense(db, expense_id)


@router.post("/auth/login", response_model=schemas.LoginResponse)
def login(payload: schemas.LoginRequest, db: Session = Depends(get_db)) -> schemas.LoginResponse:
    user = crud.authenticate_user(db, payload.email, payload.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    token = security.create_access_token({"user_id": user.id})
    return schemas.LoginResponse(
        access_token=token["access_token"],
        token_type=token["token_type"],
        expires_at=token["expires_at"],
        user=schemas.User.from_orm(user),
    )
