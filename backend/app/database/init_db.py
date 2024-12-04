from sqlmodel import SQLModel

from app.database.database import engine


def init_db():
    SQLModel.metadata.create_all(engine)
