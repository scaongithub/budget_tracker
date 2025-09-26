from typing import Optional

from pydantic import BaseModel, ConfigDict, Field


class SubcategoryBase(BaseModel):
    name: str = Field(..., max_length=100)
    category_id: int


class SubcategoryCreate(SubcategoryBase):
    pass


class SubcategoryUpdate(BaseModel):
    name: Optional[str] = Field(None, max_length=100)
    category_id: Optional[int] = None


class SubcategoryResponse(SubcategoryBase):
    id: int

    model_config = ConfigDict(from_attributes=True)
