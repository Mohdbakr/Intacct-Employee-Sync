from sqlmodel import create_engine, SQLModel, Session

from app.core.config import settings

engine = create_engine(settings.DATABASE_URL, echo=True)


def init_db():
    SQLModel.metadata.create_all(engine)


def get_db():
    with Session(engine) as session:
        yield session
