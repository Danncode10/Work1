from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, text
from typing import List, Optional
from app.models.models import Ingredient

async def get_ingredients(db: AsyncSession, skip: int = 0, limit: int = 50) -> List[Ingredient]:
    result = await db.execute(select(Ingredient).offset(skip).limit(limit))
    return result.scalars().all()

async def get_ingredient_by_id(db: AsyncSession, ingredient_id: int) -> Optional[Ingredient]:
    result = await db.execute(select(Ingredient).where(Ingredient.id == ingredient_id))
    return result.scalar_one_or_none()

async def search_ingredients(db: AsyncSession, query: str, limit: int = 50) -> List[Ingredient]:
    if not query.strip():
        return await get_ingredients(db, limit=limit)

    # Use ILIKE for case-insensitive partial name matching
    stmt = select(Ingredient).where(Ingredient.name.ilike(f'%{query}%')).limit(limit)
    result = await db.execute(stmt)
    return result.scalars().all()
