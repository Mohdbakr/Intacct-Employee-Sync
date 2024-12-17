from typing import List, Annotated

from fastapi import Depends
from sqlmodel import Session
from sqlalchemy.future import select as async_select
from pydantic import EmailStr

from app.models.users import User, UserCreate


class UserService:
    async def create_user(self, user: UserCreate, db: Session) -> User:
        db_user = User(
            email=user.email,
            hashed_password=user.hashed_password,
            is_active=user.is_active,
            is_superuser=user.is_superuser,
        )
        db.add(db_user)
        await db.commit()
        await db.refresh(db_user)
        return db_user

    async def get_user(self, user_id: int, db: Session) -> User:
        async with db as session:
            statement = async_select(User).where(User.id == user_id)
            result = await session.execute(statement)
            user = result.scalar()
            return user

    async def get_user_by_email(self, email: EmailStr, db: Session) -> User:
        async with db as session:
            statement = async_select(User).where(User.email == email)
            result = await session.execute(statement)
            user = result.scalar()
            return user

    async def get_users(self, db: Session) -> List[User]:
        async with db as session:
            statement = async_select(User)
            results = await session.execute(statement)
            users = results.scalars().all()
            return users


def get_user_service():
    return UserService()


user_service_dependency = Annotated[Session, Depends(get_user_service)]
