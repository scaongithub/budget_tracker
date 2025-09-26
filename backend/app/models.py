from __future__ import annotations

from datetime import date

from sqlalchemy import Column, Date, DateTime, ForeignKey, Integer, Numeric, String, UniqueConstraint
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from .database import Base


class TimestampMixin:
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )


class Category(Base, TimestampMixin):
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False, unique=True)
    description = Column(String(500), nullable=True)

    incomes = relationship("Income", back_populates="category", cascade="all, delete")
    expenses = relationship("Expense", back_populates="category", cascade="all, delete")

    def __repr__(self) -> str:  # pragma: no cover - debug helper
        return f"<Category id={self.id} name={self.name!r}>"


class Income(Base, TimestampMixin):
    __tablename__ = "incomes"

    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Numeric(12, 2), nullable=False)
    received_on = Column(Date, default=date.today, nullable=False)
    source = Column(String(255), nullable=False)
    note = Column(String(500), nullable=True)
    category_id = Column(Integer, ForeignKey("categories.id", ondelete="SET NULL"), nullable=True)

    category = relationship("Category", back_populates="incomes")

    def __repr__(self) -> str:  # pragma: no cover
        return f"<Income id={self.id} amount={self.amount}>"


class Expense(Base, TimestampMixin):
    __tablename__ = "expenses"

    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Numeric(12, 2), nullable=False)
    spent_on = Column(Date, default=date.today, nullable=False)
    vendor = Column(String(255), nullable=False)
    note = Column(String(500), nullable=True)
    category_id = Column(Integer, ForeignKey("categories.id", ondelete="SET NULL"), nullable=True)

    category = relationship("Category", back_populates="expenses")

    def __repr__(self) -> str:  # pragma: no cover
        return f"<Expense id={self.id} amount={self.amount}>"


class User(Base, TimestampMixin):
    __tablename__ = "users"
    __table_args__ = (UniqueConstraint("email", name="uq_users_email"),)

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), nullable=False)
    password_hash = Column(String(255), nullable=False)
    full_name = Column(String(255), nullable=True)

    def __repr__(self) -> str:  # pragma: no cover
        return f"<User id={self.id} email={self.email!r}>"

