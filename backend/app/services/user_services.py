from typing import List

from sqlmodel import Session, select
from pydantic import EmailStr

from app.models.users import User, UserCreate


class UserService:
    async def create_user(self, user: UserCreate, db: Session) -> User:
        db_user = User(name=user.name, description=user.description)
        db.add(db_user)
        await db.commit()
        await db.refresh(db_user)
        return db_user

    async def get_user(self, user_id: int, db: Session) -> User:
        async with db as session:
            statement = select(User).where(User.id == user_id)
            result = await session.execute(statement)
            user = result.scalar()
            return user

    async def get_user_by_email(self, email: EmailStr, db: Session) -> User:
        async with db as session:
            statement = select(User).where(User.email == email)
            result = await session.execute(statement)
            user = result.scalar()
            return user

    async def get_users(self, db: Session) -> List[User]:
        async with db as session:
            statement = select(User)
            results = await session.execute(statement)
            users = results.scalars().all()
            return users
