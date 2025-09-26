from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.api import deps
from app.crud import category as crud_category
from app.schemas.category import CategoryCreate, CategoryResponse, CategoryUpdate
from app.schemas.subcategory import (
    SubcategoryCreate,
    SubcategoryResponse,
    SubcategoryUpdate,
)

router = APIRouter(prefix="/categories", tags=["categories"])


@router.get("/", response_model=List[CategoryResponse])
def list_categories(*, db: Session = Depends(deps.get_db_session), current_user=Depends(deps.get_current_active_user)):
    return crud_category.get_categories(db)


@router.post("/", response_model=CategoryResponse, status_code=status.HTTP_201_CREATED)
def create_category(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    category_in: CategoryCreate,
):
    return crud_category.create_category(db, category_in=category_in)


@router.put("/{category_id}", response_model=CategoryResponse)
def update_category(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    category_id: int,
    category_in: CategoryUpdate,
):
    category = crud_category.get_category(db, category_id=category_id)
    if not category:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Category not found")
    return crud_category.update_category(db, category=category, category_in=category_in)


@router.delete("/{category_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_category(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    category_id: int,
):
    category = crud_category.get_category(db, category_id=category_id)
    if not category:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Category not found")
    crud_category.delete_category(db, category=category)
    return None


@router.get("/{category_id}/subcategories", response_model=List[SubcategoryResponse])
def list_subcategories_by_category(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    category_id: int,
):
    return crud_category.get_subcategories(db, category_id=category_id)


@router.get("/subcategories", response_model=List[SubcategoryResponse])
def list_subcategories(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    category_id: Optional[int] = Query(None, description="Filter by category id"),
):
    return crud_category.get_subcategories(db, category_id=category_id)


@router.post("/subcategories", response_model=SubcategoryResponse, status_code=status.HTTP_201_CREATED)
def create_subcategory(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    subcategory_in: SubcategoryCreate,
):
    if not crud_category.get_category(db, category_id=subcategory_in.category_id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Category not found")
    return crud_category.create_subcategory(db, subcategory_in=subcategory_in)


@router.put("/subcategories/{subcategory_id}", response_model=SubcategoryResponse)
def update_subcategory(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    subcategory_id: int,
    subcategory_in: SubcategoryUpdate,
):
    subcategory = crud_category.get_subcategory(db, subcategory_id=subcategory_id)
    if not subcategory:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Subcategory not found")
    if subcategory_in.category_id is not None and not crud_category.get_category(
        db, category_id=subcategory_in.category_id
    ):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Category not found")
    return crud_category.update_subcategory(db, subcategory=subcategory, subcategory_in=subcategory_in)


@router.delete("/subcategories/{subcategory_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_subcategory(
    *,
    db: Session = Depends(deps.get_db_session),
    current_user=Depends(deps.get_current_active_user),
    subcategory_id: int,
):
    subcategory = crud_category.get_subcategory(db, subcategory_id=subcategory_id)
    if not subcategory:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Subcategory not found")
    crud_category.delete_subcategory(db, subcategory=subcategory)
    return None
