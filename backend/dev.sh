#!/bin/bash
# Check if PostgreSQL is already running
if ! brew services list | grep -q "postgresql.*started"; then
    echo "Starting PostgreSQL..."
    brew services start postgresql
    # Wait for PostgreSQL to be ready
    while ! pg_isready -h localhost -p 5432 >/dev/null 2>&1; do
        sleep 1
    done
    echo "PostgreSQL is ready."
else
    echo "PostgreSQL is already running."
fi

# Start the FastAPI server
echo "Starting FastAPI server..."
poetry run uvicorn app.main:app --reload
