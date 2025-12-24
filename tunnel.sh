#!/bin/bash

# NutriFriendly Database SSH Tunnel Script
# Creates secure tunnel from local port 5433 to AWS RDS through EC2
# Configuration loaded from .env file

# Load environment variables
if [ -f ".env" ]; then
    export $(grep -v '^#' .env | xargs)
else
    echo "❌ Error: .env file not found!"
    echo "Please ensure .env file exists in the project root"
    exit 1
fi

# Extract database host from DATABASE_URL
# DATABASE_URL=postgresql://postgres:password@host:port/database
DB_HOST=$(echo $DATABASE_URL | sed 's|postgresql://[^@]*@\([^:]*\):.*|\1|')

echo "🚀 Starting SSH tunnel to NutriFriendly database..."
echo "📍 EC2 IP: $EC2_IP"
echo "🔗 Database: $DB_HOST"
echo ""
echo "Keep this terminal open. Use DBeaver to connect to localhost:5433"
echo "Press Ctrl+C to stop the tunnel"
echo ""

ssh -i "$SSH_KEY_PATH" \
    -L 5433:$DB_HOST:5432 \
    ubuntu@$EC2_IP
