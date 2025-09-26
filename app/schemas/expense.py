from datetime import date
from typing import Optional

from pydantic import BaseModel, ConfigDict, Field


class ExpenseBase(BaseModel):
    amount: float = Field(..., gt=0)
    date: date = Field(default_factory=date.today)
    description: str = Field(..., max_length=255)
    subcategory_id: Optional[int] = None
    split_between: Optional[str] = Field(None, max_length=50)


class ExpenseCreate(ExpenseBase):
    pass


class ExpenseUpdate(BaseModel):
    amount: Optional[float] = Field(None, gt=0)
    date: Optional[date] = None
    description: Optional[str] = Field(None, max_length=255)
    subcategory_id: Optional[int] = None
    split_between: Optional[str] = Field(None, max_length=50)


class ExpenseResponse(ExpenseBase):
    id: int
    user_id: int

    model_config = ConfigDict(from_attributes=True)
