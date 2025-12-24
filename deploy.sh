#!/bin/bash

# NutriFriendly Backend Deployment Script
# Run this on EC2 to update and deploy the latest backend

echo "Pulling latest changes..."
git pull origin v1

echo "Building Docker image..."
docker build -t nutrifriendly-backend .

echo "Stopping old containers..."
docker stop $(docker ps -q --filter ancestor=nutrifriendly-backend) 2>/dev/null || echo "No old containers to stop"

echo "Starting new container..."
docker run -d -p 8000:8000 --env-file .env nutrifriendly-backend

echo "Checking container status..."
docker ps

echo "Testing API..."
sleep 3  # Wait for app to start
curl -s http://localhost:8000/api/ingredients || echo "API test failed - check logs with: docker logs \$(docker ps -q --filter ancestor=nutrifriendly-backend)"

echo "Deployment complete!"
