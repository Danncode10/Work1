from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from app.auth.auth import register_user, login_user

# Create router for auth endpoints
router = APIRouter()

# Request/Response models
class RegisterRequest(BaseModel):
    email: EmailStr
    password: str

class RegisterResponse(BaseModel):
    message: str
    user_sub: str

# Login request/response models
class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class LoginResponse(BaseModel):
    access_token: str
    refresh_token: str
    id_token: str

# Register endpoint
@router.post("/auth/register", response_model=RegisterResponse)
async def register(request: RegisterRequest):
    try:
        result = register_user(request.email, request.password)
        return RegisterResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# Login endpoint
@router.post("/auth/login", response_model=LoginResponse)
async def login(request: LoginRequest):
    try:
        tokens = login_user(request.email, request.password)
        return LoginResponse(**tokens)
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))
