from datetime import date
from typing import Optional

from pydantic import BaseModel, ConfigDict, Field


class IncomeBase(BaseModel):
    amount: float = Field(..., gt=0)
    date: date = Field(default_factory=date.today)
    source: str = Field(..., max_length=255)
    recurring: bool = False


class IncomeCreate(IncomeBase):
    pass


class IncomeUpdate(BaseModel):
    amount: Optional[float] = Field(None, gt=0)
    date: Optional[date] = None
    source: Optional[str] = Field(None, max_length=255)
    recurring: Optional[bool] = None


class IncomeResponse(IncomeBase):
    id: int
    user_id: int

    model_config = ConfigDict(from_attributes=True)
