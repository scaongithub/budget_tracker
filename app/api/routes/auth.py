from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.api import deps
from app.core.security import create_access_token
from app.schemas.token import Token

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/token", response_model=Token)
def login_access_token(
    db: Session = Depends(deps.get_db_session),
    form_data: OAuth2PasswordRequestForm = Depends(),
):
    user = deps.authenticate_user(db, email=form_data.username, password=form_data.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Incorrect email or password")

    token_data = create_access_token(subject=str(user.id), expires_delta=timedelta(minutes=60))
    return {
        "access_token": token_data["access_token"],
        "token_type": "bearer",
        "expires_at": token_data["expires_at"],
    }
