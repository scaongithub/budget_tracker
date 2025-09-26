from datetime import datetime

from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str
    expires_at: datetime


class TokenPayload(BaseModel):
    sub: str | None = None
    exp: int | None = None
