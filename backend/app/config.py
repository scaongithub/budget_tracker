from __future__ import annotations

from functools import lru_cache

from pydantic import BaseSettings, Field


class Settings(BaseSettings):
    """Application configuration loaded from environment variables."""

    mysql_host: str = Field("localhost", env="MYSQL_HOST")
    mysql_port: int = Field(3306, env="MYSQL_PORT")
    mysql_user: str = Field("budget", env="MYSQL_USER")
    mysql_password: str = Field("budget", env="MYSQL_PASSWORD")
    mysql_database: str = Field("budget", env="MYSQL_DATABASE")

    app_secret_key: str = Field("change-me", env="APP_SECRET_KEY")

    default_admin_email: str = Field("paolam.crz@gmail.com", env="DEFAULT_ADMIN_EMAIL")
    default_admin_password: str = Field("admin", env="DEFAULT_ADMIN_PASSWORD")

    class Config:
        env_file = ".env"
        case_sensitive = False


@lru_cache()
def get_settings() -> Settings:
    """Return a cached instance of :class:`Settings`."""

    return Settings()

