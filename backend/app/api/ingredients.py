from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.database import get_db
from app import models, crud

router = APIRouter(prefix="/ingredients", tags=["ingredients"])
