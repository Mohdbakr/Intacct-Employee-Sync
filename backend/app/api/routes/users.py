from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlmodel import Session

from app.db.session import get_db
from app.models.users import UserCreate
from app.services.user_services import user_service_dependency
from app.core.security import verify_token


router = APIRouter()


async def log_operation(item_id: int):
    # Placeholder function to simulate an async background task
    print(f"Logging operation for item_id: {item_id}")


@router.get("/profile/")
async def read_users_me(current_user: str = Depends(verify_token)):
    """Secure endpoint that only logged-in users can access."""
    return {"email": current_user}


@router.post("/register/")
async def register_user(
    user: UserCreate,
    background_tasks: BackgroundTasks,
    user_service: user_service_dependency,
    db: Session = Depends(get_db),
):
    db_user = await user_service.get_user_by_email(email=user.email, db=db)
    if db_user:
        raise HTTPException(
            status_code=400, detail="User email already registered"
        )
    created_user = await user_service.create_user(db=db, user=user)
    background_tasks.add_task(log_operation, item_id=created_user.id)
    return created_user
