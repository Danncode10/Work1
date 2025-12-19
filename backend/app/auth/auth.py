import boto3
from botocore.exceptions import ClientError
from app.core.config import settings

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
