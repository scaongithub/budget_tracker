from __future__ import annotations

from datetime import datetime, timedelta
from hashlib import sha256
from secrets import token_urlsafe
from typing import Any, Dict, Optional

from passlib.context import CryptContext

from .config import get_settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


_settings = get_settings()


def verify_password(plain_password: str, password_hash: str) -> bool:
    return pwd_context.verify(plain_password, password_hash)


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)


def create_access_token(
    data: Dict[str, Any], expires_delta: Optional[timedelta] = None
) -> Dict[str, Any]:
    expire = datetime.utcnow() + (expires_delta or timedelta(hours=1))
    raw_token = token_urlsafe(32)
    signature = sha256(f"{raw_token}{_settings.app_secret_key}".encode("utf-8")).hexdigest()
    token = f"{raw_token}.{signature}"
    payload = {"access_token": token, "token_type": "bearer", "expires_at": expire}
    payload.update(data)
    return payload

