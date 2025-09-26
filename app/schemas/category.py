from typing import Optional

from pydantic import BaseModel, ConfigDict, Field


class CategoryBase(BaseModel):
    name: str = Field(..., max_length=100)


class CategoryCreate(CategoryBase):
    pass


class CategoryUpdate(BaseModel):
    name: Optional[str] = Field(None, max_length=100)


class CategoryResponse(CategoryBase):
    id: int

    model_config = ConfigDict(from_attributes=True)
