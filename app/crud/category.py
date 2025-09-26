from typing import List, Optional

from sqlalchemy.orm import Session

from app.models.category import Category, Subcategory
from app.schemas.category import CategoryCreate, CategoryUpdate
from app.schemas.subcategory import SubcategoryCreate, SubcategoryUpdate


def get_categories(db: Session) -> List[Category]:
    return db.query(Category).order_by(Category.name).all()


def get_category(db: Session, category_id: int) -> Optional[Category]:
    return db.query(Category).filter(Category.id == category_id).first()


def create_category(db: Session, category_in: CategoryCreate) -> Category:
    category = Category(name=category_in.name)
    db.add(category)
    db.commit()
    db.refresh(category)
    return category


def update_category(db: Session, category: Category, category_in: CategoryUpdate) -> Category:
    if category_in.name is not None:
        category.name = category_in.name
    db.add(category)
    db.commit()
    db.refresh(category)
    return category


def delete_category(db: Session, category: Category) -> None:
    db.delete(category)
    db.commit()


def get_subcategories(db: Session, category_id: Optional[int] = None) -> List[Subcategory]:
    query = db.query(Subcategory)
    if category_id is not None:
        query = query.filter(Subcategory.category_id == category_id)
    return query.order_by(Subcategory.name).all()


def get_subcategory(db: Session, subcategory_id: int) -> Optional[Subcategory]:
    return db.query(Subcategory).filter(Subcategory.id == subcategory_id).first()


def create_subcategory(db: Session, subcategory_in: SubcategoryCreate) -> Subcategory:
    subcategory = Subcategory(name=subcategory_in.name, category_id=subcategory_in.category_id)
    db.add(subcategory)
    db.commit()
    db.refresh(subcategory)
    return subcategory


def update_subcategory(db: Session, subcategory: Subcategory, subcategory_in: SubcategoryUpdate) -> Subcategory:
    if subcategory_in.name is not None:
        subcategory.name = subcategory_in.name
    if subcategory_in.category_id is not None:
        subcategory.category_id = subcategory_in.category_id
    db.add(subcategory)
    db.commit()
    db.refresh(subcategory)
    return subcategory


def delete_subcategory(db: Session, subcategory: Subcategory) -> None:
    db.delete(subcategory)
    db.commit()
