from functools import lru_cache
from typing import Optional

from pydantic import BaseSettings, Field


class Settings(BaseSettings):
    """Application configuration loaded from environment variables."""

    PROJECT_NAME: str = "Budget Tracker API"
    API_V1_STR: str = "/api/v1"

    SECRET_KEY: str = Field("change-this-secret", env="SECRET_KEY")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = Field(60, env="ACCESS_TOKEN_EXPIRE_MINUTES")
    ALGORITHM: str = "HS256"

    MYSQL_HOST: str = Field("localhost", env="MYSQL_HOST")
    MYSQL_PORT: int = Field(3306, env="MYSQL_PORT")
    MYSQL_USER: str = Field("budget_user", env="MYSQL_USER")
    MYSQL_PASSWORD: str = Field("budget_password", env="MYSQL_PASSWORD")
    MYSQL_DB: str = Field("budget_tracker", env="MYSQL_DB")

    SQLALCHEMY_DATABASE_URI: Optional[str] = Field(None, env="DATABASE_URL")

    class Config:
        env_file = ".env"
        case_sensitive = True

    @property
    def database_uri(self) -> str:
        """Return the SQLAlchemy database URI."""
        if self.SQLALCHEMY_DATABASE_URI:
            return self.SQLALCHEMY_DATABASE_URI
        return (
            f"mysql+pymysql://{self.MYSQL_USER}:{self.MYSQL_PASSWORD}"
            f"@{self.MYSQL_HOST}:{self.MYSQL_PORT}/{self.MYSQL_DB}"
        )


def get_settings() -> Settings:
    return Settings()


@lru_cache
def get_cached_settings() -> Settings:
    """Return cached settings instance to avoid repeated environment parsing."""

    return Settings()


settings = get_cached_settings()
