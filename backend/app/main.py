from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from passlib.context import CryptContext

from app.db import session
from app.api.routes import users
from app.api.routes import employees
from app.api.routes import auth


@asynccontextmanager
async def lifespan(app: FastAPI):
    # perform startup tasks
    session.init_db()
    yield

    # perform cleanup tasks


app = FastAPI(lifespan=lifespan)
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(employees.router, prefix="/employees", tags=["Employee"])
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])

origins = [
    "http://frontend:8080",
    "https://yourfrontenddomain.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows all origins from the list
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Your JWT secret and algorithm
SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


@app.get("/")
def read_root():
    """_summary_

    Returns:
        _type_: _description_
    """
    return {"message": "Welcome to the Employee Sync API"}
