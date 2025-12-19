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
    region_name=settings.aws_region,
    aws_access_key_id=settings.aws_access_key_id,
    aws_secret_access_key=settings.aws_secret_access_key
)

def register_user(email: str, password: str):
    """Register a new user with AWS Cognito"""
    try:
        response = cognito_client.sign_up(
            ClientId=settings.aws_cognito_client_id,
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
            ClientId=settings.aws_cognito_client_id,
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
        keys_url = f"https://cognito-idp.{settings.aws_region}.amazonaws.com/{settings.aws_cognito_user_pool_id}/.well-known/jwks.json"
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
            audience=settings.aws_cognito_client_id,
            issuer=f"https://cognito-idp.{settings.aws_region}.amazonaws.com/{settings.aws_cognito_user_pool_id}"
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
