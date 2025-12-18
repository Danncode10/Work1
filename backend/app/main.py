from fastapi import FastAPI
from .core.database import engine
from .models.models import Base

app = FastAPI(title="Natural Health API", version="1.0.0")

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.get("/")
def read_root():
    return {"message": "Welcome to Natural Health API"}
