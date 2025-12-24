#!/usr/bin/env python3
"""
Database seeding script for NutriFriendly.

This script populates the database with initial ingredient data.
Run this script after the database tables are created.
"""

import asyncio
import sys
from pathlib import Path

# Add the backend directory to Python path
backend_dir = Path(__file__).parent
sys.path.insert(0, str(backend_dir))

from app.core.database import get_db
from app.models.models import Ingredient

# Sample ingredient data
SAMPLE_INGREDIENTS = [
    {
        "name": "Turmeric",
        "benefits": ["Anti-inflammatory", "Antioxidant properties", "Supports joint health"],
        "risks": ["May cause stomach upset", "Can interact with blood thinners", "Not recommended for gallbladder issues"],
        "nutrition_facts": {
            "calories_per_100g": 312,
            "protein": "9.7g",
            "carbohydrates": "67.1g",
            "fat": "3.3g",
            "fiber": "22.7g"
        },
        "dosage": "500-2000mg per day, preferably with black pepper for better absorption",
        "calories": 312.0,
        "references": ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5664031/", "https://ods.od.nih.gov/factsheets/Curcumin-HealthProfessional/"]
    },
    {
        "name": "Ginger",
        "benefits": ["Relieves nausea", "Reduces inflammation", "Aids digestion"],
        "risks": ["May cause heartburn", "Can thin blood", "Not recommended for gallstones"],
        "nutrition_facts": {
            "calories_per_100g": 80,
            "protein": "1.8g",
            "carbohydrates": "17.8g",
            "fat": "0.8g",
            "fiber": "2.0g"
        },
        "dosage": "1-3g per day, fresh or dried",
        "calories": 80.0,
        "references": ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6341159/", "https://ods.od.nih.gov/factsheets/Ginger-HealthProfessional/"]
    },
    {
        "name": "Ashwagandha",
        "benefits": ["Reduces stress and anxiety", "Improves sleep quality", "Boosts immune function"],
        "risks": ["May cause drowsiness", "Can interact with thyroid medication", "Not recommended during pregnancy"],
        "nutrition_facts": {
            "calories_per_100g": 359,
            "protein": "3.9g",
            "carbohydrates": "69.3g",
            "fat": "0.3g",
            "fiber": "32.3g"
        },
        "dosage": "300-600mg per day of root extract",
        "calories": 359.0,
        "references": ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6750292/", "https://www.healthline.com/nutrition/ashwagandha"]
    },
    {
        "name": "Vitamin C (Ascorbic Acid)",
        "benefits": ["Boosts immune system", "Antioxidant protection", "Supports collagen production"],
        "risks": ["High doses can cause diarrhea", "May increase kidney stone risk", "Can interfere with some medications"],
        "nutrition_facts": {
            "calories_per_100g": 0,
            "protein": "0g",
            "carbohydrates": "100g",
            "fat": "0g",
            "fiber": "0g"
        },
        "dosage": "65-90mg per day for adults",
        "calories": 0.0,
        "references": ["https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5707683/"]
    },
    {
        "name": "Omega-3 Fatty Acids",
        "benefits": ["Supports heart health", "Reduces inflammation", "Improves brain function"],
        "risks": ["May cause blood thinning", "High doses can cause diarrhea", "Potential fishy aftertaste"],
        "nutrition_facts": {
            "calories_per_100g": 902,
            "protein": "0g",
            "carbohydrates": "0g",
            "fat": "100g",
            "fiber": "0g"
        },
        "dosage": "1-3g per day of EPA+DHA combined",
        "calories": 902.0,
        "references": ["https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/", "https://www.heart.org/en/health-topics/consumer-healthcare/what-is-cardiovascular-disease/more-heart-disease-tools--resources/omega-3-fats--fish-oil-supplements"]
    }
]

async def seed_database():
    """Seed the database with sample ingredients."""
    print("Starting database seeding...")

    try:
        async for db in get_db():
            # Check if data already exists
            result = await db.execute("SELECT COUNT(*) FROM ingredients")
            count = result.scalar()
            if count > 0:
                print(f"Database already has {count} ingredients. Skipping seeding.")
                return

            # Insert sample data
            for ingredient_data in SAMPLE_INGREDIENTS:
                ingredient = Ingredient(**ingredient_data)
                db.add(ingredient)
                print(f"Added ingredient: {ingredient.name}")

            await db.commit()
            print(f"Successfully seeded database with {len(SAMPLE_INGREDIENTS)} ingredients.")

    except Exception as e:
        print(f"Error seeding database: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)

if __name__ == "__main__":
    asyncio.run(seed_database())
