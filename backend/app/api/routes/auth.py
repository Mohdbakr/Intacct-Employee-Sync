from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlmodel import Session

from app.db.session import get_db
from app.core.security import verify_password, create_access_token
from app.services.user_services import user_service_dependency
from app.core.config import settings

router = APIRouter()


@router.post("/login/")
async def login(
    user_service: user_service_dependency,
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):
    """Authenticate a user and issue a JWT token."""
    try:
        user = await user_service.get_user_by_email(email=form_data.username, db=db)
        password = verify_password(form_data.password, user.hashed_password)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Unknow error: {e}",
            headers={"WWW-Authenticate": "Bearer"},
        )
    if not user or not password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data={"sub": user.email}, expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}
