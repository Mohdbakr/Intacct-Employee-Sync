from typing import Optional
import os

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    DATABASE_URL: str

    SAGEINTACCT_SENDER_ID: str
    SAGEINTACCT_SENDER_PASSWORD: str
    SAGEINTACCT_USER_ID: str
    SAGEINTACCT_USER_PASSWORD: str
    SAGEINTACCT_COMPANY_ID: str
    SAGEINTACCT_ENTITY_ID: Optional[str] = None

    SECRET_KEY: str = os.getenv("SECRET_KEY", "super-secret-key")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    ALGORITHM: str = "HS256"


settings = Settings()
