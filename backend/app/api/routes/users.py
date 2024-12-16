from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from fastapi.security import OAuth2PasswordBearer
from sqlmodel import Session
from jose import JWTError

from app.db.session import get_db
from app.models.users import UserCreate
from app.services.user_services import UserService
from app.core.security import decode_access_token


router = APIRouter()


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login/")


async def log_operation(item_id: int):
    # Placeholder function to simulate an async background task
    print(f"Logging operation for item_id: {item_id}")


def get_user_service():
    return UserService()


user_service_dependency = Annotated[Session, Depends(get_user_service)]


def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = decode_access_token(token)
        email: str = payload.get("sub")
        if email is None:
            raise HTTPException(status_code=401, detail="Token is invalid or expired")
        return email
    except JWTError:
        raise HTTPException(status_code=401, detail="Token is invalid or expired")


@router.get("/profile/")
async def read_users_me(current_user: str = Depends(get_current_user)):
    """Secure endpoint that only logged-in users can access."""
    return {"email": current_user}


@router.post("/register/")
async def register_user(
    user: UserCreate,
    background_tasks: BackgroundTasks,
    user_service: user_service_dependency,
    db: Session = Depends(get_db),
):
    db_user = await user_service.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="User email already registered")
    created_user = await user_service.create_user(db=db, user=user)
    background_tasks.add_task(log_operation, item_id=created_user.id)
    return created_user
