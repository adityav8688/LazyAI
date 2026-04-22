from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from database import *
from models import *
from chat import *

router = APIRouter()

def get_session():
    with Session(engine) as session:
        yield session

@router.get("/chat", response_model=list[getChat])
def get_chats(session: Session = Depends(get_session)):
    chats = session.exec(select(Chat)).all()

    if len(chats) == 0:
        raise HTTPException(status_code=404, detail="there is no data to show.")
    return chats

@router.post("/chat", response_model=getChat)
def add_chat(db_chat: setMsg, session: Session = Depends(get_session)):
    chat = Chat(msg=db_chat.msg)
    print(chat.msg)

    try:
        chat.output = aiRes(chat.msg)
    except Exception as e:
        chat.output = "Error generating response. Try again some time later"
    
    session.add(chat)
    session.commit()
    session.refresh(chat)
    return chat