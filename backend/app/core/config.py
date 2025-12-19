from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Database
    database_url: str

    # AWS Configuration
    aws_region: str
    aws_access_key_id: str
    aws_secret_access_key: str

    # AWS Cognito
    aws_cognito_user_pool_id: str
    aws_cognito_client_id: str

    # Node / FastAPI Backend
    node_env: str = "development"
    port: int = 8000

    # Frontend
    react_app_api_base_url: str = "http://localhost:8000/api"

    class Config:
        env_file = "../.env"

settings = Settings()
