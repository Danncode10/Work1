from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel
from typing import List
from app.core.database import get_db
from app import models, crud

class SearchRequest(BaseModel):
    query: str

    class Config:
        json_schema_extra = {
            "example": {
                "query": "vitamin c"
            }
        }

class IngredientResponse(BaseModel):
    id: int
    name: str
    benefits: List[str]
    risks: List[str]
    nutrition_facts: dict
    dosage: str
    calories: float
    references: List[str]

    class Config:
        from_attributes = True

router = APIRouter(prefix="/ingredients", tags=["ingredients"])

@router.get("/", response_model=List[IngredientResponse])
async def get_ingredients(
    skip: int = Query(0, ge=0, description="Number of items to skip"),
    limit: int = Query(50, ge=1, le=100, description="Maximum number of items to return"),
    db: AsyncSession = Depends(get_db)
):
    """
    Retrieve a paginated list of ingredients.
    
    - **skip**: Number of items to skip (default: 0)
    - **limit**: Maximum number of items to return (default: 50, max: 100)
    """
    ingredients = await crud.get_ingredients(db, skip=skip, limit=limit)
    return ingredients

@router.get("/{ingredient_id}", response_model=IngredientResponse)
async def get_ingredient(ingredient_id: int, db: AsyncSession = Depends(get_db)):
    """
    Retrieve a specific ingredient by ID.
    
    - **ingredient_id**: The ID of the ingredient to retrieve
    """
    ingredient = await crud.get_ingredient_by_id(db, ingredient_id)
    if not ingredient:
        raise HTTPException(status_code=404, detail="Ingredient not found")
    return ingredient

@router.post("/search", response_model=List[IngredientResponse])
async def search_ingredients(request: SearchRequest, db: AsyncSession = Depends(get_db)):
    """
    Search ingredients using full-text search on names and benefits.
    
    Returns ingredients ranked by relevance to the search query.
    """
    ingredients = await crud.search_ingredients(db, request.query)
    return ingredients
