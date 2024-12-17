from typing import Optional

from sqlmodel import Field, SQLModel
from pydantic import EmailStr


class UserBase(SQLModel):
    email: EmailStr = Field(unique=True, index=True)
    is_active: bool = Field(default=True)
    is_superuser: bool = Field(default=False)


class UserCreate(UserBase):
    password: str


class User(UserBase, table=True):
    id: Optional[int] = Field(primary_key=True, index=True)
    hashed_password: str


class UserRead(UserBase):
    id: int
