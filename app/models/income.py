from datetime import date

from sqlalchemy import Boolean, Column, Date, ForeignKey, Integer, Numeric, String
from sqlalchemy.orm import relationship

from app.db.base_class import Base


class Income(Base):
    __tablename__ = "incomes"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    amount = Column(Numeric(12, 2), nullable=False)
    date = Column(Date, default=date.today, nullable=False)
    source = Column(String(255), nullable=False)
    recurring = Column(Boolean, default=False)

    user = relationship("User", back_populates="incomes")
