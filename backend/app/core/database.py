from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker

from .config import settings

# Convert to asyncpg URL
database_url = settings.database_url.replace("postgresql://", "postgresql+asyncpg://")

# Create async engine
engine = create_async_engine(database_url, echo=True)

# Create async session factory
async_session = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)
