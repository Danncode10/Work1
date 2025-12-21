from fastapi import FastAPI
from .core.database import engine
from .models.models import Base
from app.api import auth_router, ingredients_router

app = FastAPI(title="Natural Health API", version="1.0.0")

# Add /api prefix to all routes
app.include_router(auth_router, prefix="/api")
app.include_router(ingredients_router, prefix="/api")

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.get("/")
def read_root():
    return {"message": "Welcome to Natural Health API"}
