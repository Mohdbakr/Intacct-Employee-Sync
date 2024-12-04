from fastapi import FastAPI
from contextlib import asynccontextmanager

from app.database.init_db import init_db

app = FastAPI()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # perform startup tasks
    init_db()
    yield

    # perform cleanup tasks


@app.get("/")
def read_root():
    """_summary_

    Returns:
        _type_: _description_
    """
    return {"message": "Welcome to the Employee Sync API"}
