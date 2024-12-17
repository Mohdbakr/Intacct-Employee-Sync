from datetime import datetime, timedelta

from fastapi import Depends
from sqlmodel import Session
from passlib.context import CryptContext
from jose import jwt


from app.models.users import User
from app.core.config import settings
from app.services.user_services import user_service_dependency
from app.db.session import get_db

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    """Hash a plain-text password."""
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify a password against its hash."""
    return pwd_context.verify(plain_password, hashed_password)


async def authenticate_user(
    email: str, password: str, user_service: user_service_dependency, db: Session = Depends(get_db)
) -> User:
    # user = db.exec(select(User).where(User.email == email)).first()
    user = await user_service.get_user_by_email(email=email, db=db)
    if not user:
        return False
    return user


def create_access_token(data: dict, expires_delta: timedelta | None = None) -> str:
    """Create a new JWT access token."""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt


def decode_access_token(token: str) -> dict:
    """Decode a JWT token."""
    return jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
