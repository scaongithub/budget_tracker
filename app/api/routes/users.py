from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api import deps
from app.crud import user as crud_user
from app.schemas.user import UserCreate, UserResponse, UserUpdate

router = APIRouter(prefix="/users", tags=["users"])


@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def create_user(*, db: Session = Depends(deps.get_db_session), user_in: UserCreate):
    if crud_user.get_user_by_email(db, email=user_in.email):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    if crud_user.get_user_by_username(db, username=user_in.username):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Username already exists")
    user = crud_user.create_user(db, user_in=user_in)
    return user


@router.get("/me", response_model=UserResponse)
def read_user_me(current_user=Depends(deps.get_current_active_user)):
    return current_user


@router.put("/me", response_model=UserResponse)
def update_user_me(
    *,
    db: Session = Depends(deps.get_db_session),
    user_in: UserUpdate,
    current_user=Depends(deps.get_current_active_user),
):
    user = crud_user.update_user(db, db_user=current_user, user_in=user_in)
    return user
