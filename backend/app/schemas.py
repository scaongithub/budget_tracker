from __future__ import annotations

from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel, EmailStr, Field, condecimal


Amount = condecimal(gt=0, max_digits=12, decimal_places=2)


class TimestampMixin(BaseModel):
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True


class CategoryBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    description: Optional[str] = Field(None, max_length=500)


class CategoryCreate(CategoryBase):
    pass


class CategoryUpdate(BaseModel):
    name: Optional[str] = Field(None, min_length=1, max_length=255)
    description: Optional[str] = Field(None, max_length=500)


class Category(CategoryBase, TimestampMixin):
    id: int


class IncomeBase(BaseModel):
    amount: Amount
    received_on: date = Field(default_factory=date.today)
    source: str = Field(..., min_length=1, max_length=255)
    note: Optional[str] = Field(None, max_length=500)
    category_id: Optional[int] = Field(None, ge=1)


class IncomeCreate(IncomeBase):
    pass


class IncomeUpdate(BaseModel):
    amount: Optional[Amount]
    received_on: Optional[date]
    source: Optional[str] = Field(None, min_length=1, max_length=255)
    note: Optional[str] = Field(None, max_length=500)
    category_id: Optional[int] = Field(None, ge=1)


class Income(IncomeBase, TimestampMixin):
    id: int


class ExpenseBase(BaseModel):
    amount: Amount
    spent_on: date = Field(default_factory=date.today)
    vendor: str = Field(..., min_length=1, max_length=255)
    note: Optional[str] = Field(None, max_length=500)
    category_id: Optional[int] = Field(None, ge=1)


class ExpenseCreate(ExpenseBase):
    pass


class ExpenseUpdate(BaseModel):
    amount: Optional[Amount]
    spent_on: Optional[date]
    vendor: Optional[str] = Field(None, min_length=1, max_length=255)
    note: Optional[str] = Field(None, max_length=500)
    category_id: Optional[int] = Field(None, ge=1)


class Expense(ExpenseBase, TimestampMixin):
    id: int


class User(BaseModel):
    id: int
    email: EmailStr
    full_name: Optional[str]
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True


class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=4, max_length=255)


class LoginResponse(BaseModel):
    access_token: str
    token_type: str
    expires_at: datetime
    user: User


class HealthCheck(BaseModel):
    status: str

