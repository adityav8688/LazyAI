from sqlmodel import SQLModel, create_engine

DATABASE_URL = "postgresql://postgres:root@localhost:5432/chat_db"

engine = create_engine(
    DATABASE_URL,
    echo = True
)

def create_db():
    SQLModel.metadata.create_all(engine)
    