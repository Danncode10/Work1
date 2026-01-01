from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.database import engine
from .models.models import Base
from .api import auth_router, ingredients_router
from .core.config import settings

# Conditionally disable docs in production
docs_url = "/docs" if settings.node_env == "development" else None
redoc_url = "/redoc" if settings.node_env == "development" else None

app = FastAPI(title="Natural Health API", version="1.0.0", docs_url=docs_url, redoc_url=redoc_url)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "*"],  # Allow all origins for testing
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
