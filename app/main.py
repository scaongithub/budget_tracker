from fastapi import FastAPI

from app.api.api_v1 import api_router
from app.core.config import settings
from app.db import base  # noqa: F401
from app.db.base import Base
from app.db.session import engine

app = FastAPI(title=settings.PROJECT_NAME)


@app.on_event("startup")
def on_startup() -> None:
    Base.metadata.create_all(bind=engine)


app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get("/", tags=["health"]) 
def read_health() -> dict[str, str]:
    return {"status": "ok"}
