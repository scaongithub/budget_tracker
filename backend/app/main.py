from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import Base, engine, session_scope
from . import crud, models
from .routes import router

app = FastAPI(title="Budget Tracker API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api")


@app.get("/", include_in_schema=False)
def root() -> dict[str, str]:
    return {"message": "Budget Tracker backend is running"}


@app.on_event("startup")
def on_startup() -> None:
    Base.metadata.create_all(bind=engine)
    with session_scope() as session:
        crud.ensure_default_admin(session)
