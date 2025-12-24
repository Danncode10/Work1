from sqlalchemy import Column, Integer, String, Float, DateTime, ARRAY, JSON
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class Ingredient(Base):
    __tablename__ = "ingredients"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    benefits = Column(ARRAY(String))
    risks = Column(ARRAY(String))
    nutrition_facts = Column(JSON)
    dosage = Column(String)
    calories = Column(Float)
    references = Column(ARRAY(String))

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "benefits": self.benefits,
            "risks": self.risks,
            "nutrition_facts": self.nutrition_facts,
            "dosage": self.dosage,
            "calories": self.calories,
            "references": self.references
        }
