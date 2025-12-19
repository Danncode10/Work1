import boto3
from botocore.exceptions import ClientError
from app.core.config import settings
from jose import jwt, JWTError
from jose.exceptions import ExpiredSignatureError
import requests
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

# Initialize Cognito client
cognito_client = boto3.client(
    'cognito-idp',
    region_name=settings.AWS_REGION,
    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY
)

def register_user(email: str, password: str):
    """Register a new user with AWS Cognito"""
    try:
        response = cognito_client.sign_up(
            ClientId=settings.AWS_COGNITO_CLIENT_ID,
            Username=email,
            Password=password,
            UserAttributes=[
                {
                    'Name': 'email',
                    'Value': email
                }
            ]
        )
        return {"message": "User registered successfully", "user_sub": response['UserSub']}
    except ClientError as e:
        raise Exception(f"Registration failed: {e.response['Error']['Message']}")

def login_user(email: str, password: str):
    """Authenticate user with AWS Cognito"""
    try:
        response = cognito_client.initiate_auth(
            ClientId=settings.AWS_COGNITO_CLIENT_ID,
            AuthFlow='USER_PASSWORD_AUTH',
            AuthParameters={
                'USERNAME': email,
                'PASSWORD': password
            }
        )
        return {
            "access_token": response['AuthenticationResult']['AccessToken'],
            "refresh_token": response['AuthenticationResult']['RefreshToken'],
            "id_token": response['AuthenticationResult']['IdToken']
        }
    except ClientError as e:
        raise Exception(f"Login failed: {e.response['Error']['Message']}")

security = HTTPBearer()

def verify_token(token: str) -> dict:
    """Verify and decode AWS Cognito JWT token"""
    try:
        # Get Cognito public keys
        keys_url = f"https://cognito-idp.{settings.AWS_REGION}.amazonaws.com/{settings.AWS_COGNITO_USER_POOL_ID}/.well-known/jwks.json"
        keys_response = requests.get(keys_url)
        keys = keys_response.json()['keys']

        # Decode header to get key ID
        header = jwt.get_unverified_header(token)
        key_id = header['kid']

        # Find the correct public key
        public_key = None
        for key in keys:
            if key['kid'] == key_id:
                public_key = key
                break

        if not public_key:
            raise JWTError("Invalid key ID")

        # Verify and decode token
        payload = jwt.decode(
            token,
            public_key,
            algorithms=['RS256'],
            audience=settings.AWS_COGNITO_CLIENT_ID,
            issuer=f"https://cognito-idp.{settings.AWS_REGION}.amazonaws.com/{settings.AWS_COGNITO_USER_POOL_ID}"
        )

        return payload

    except ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except JWTError as e:
        raise HTTPException(status_code=401, detail=f"Invalid token: {str(e)}")

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)) -> dict:
    """Dependency to get current authenticated user"""
    token = credentials.credentials
    return verify_token(token)
