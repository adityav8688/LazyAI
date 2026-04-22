from sqlmodel import SQLModel, Field
from typing import Optional

class Chat(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    msg: str
    output: str

class getChat(SQLModel):
    msg: str
    output: str

class setMsg(SQLModel):
    msg: str