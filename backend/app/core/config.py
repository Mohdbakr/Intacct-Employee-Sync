from typing import Optional

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    database_url: str

    sageintacct_sender_id: str
    sageintacct_sender_password: str
    sageintacct_user_id: str
    sageintacct_company_id: str
    sageintacct_user_password: str
    sageintacct_entity_id: Optional[str] = None


settings = Settings()
