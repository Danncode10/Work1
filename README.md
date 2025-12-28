# NutriFriendly

## Project Summary
NutriFriendly is a comprehensive web application project that demonstrates building a production-ready, full-stack health and wellness platform. The system provides users with a searchable database of natural ingredients, complete with detailed information on benefits, nutrition facts, risks, warnings, and usage recommendations. Featuring a modern tech stack (FastAPI, React, PostgreSQL) and cloud deployment (AWS), this project serves as both a functional application blueprint and a comprehensive learning resource for software development methodologies.

**Current Focus**: Version 1.0.0 implementation using the Dann Framework - a question-first, solo-developer-friendly approach to software development that emphasizes thorough planning, documentation, and iterative improvement.

## Repository Purpose & Goal
This repository serves dual purposes:
1. **Implementation Blueprint**: Provides step-by-step instructions, code structures, and deployment guides for building a complete health information system
2. **Learning Framework**: Demonstrates the Dann Framework methodology through extensive documentation, version planning, and SDLC (Software Development Life Cycle) practices

The ultimate goal is to create a scalable, accessible platform that empowers users to make informed decisions about natural health and nutrition, while establishing a replicable framework for future solo software development projects.

## Current Status
**Version 1.0.0** - Complete Implementation with AWS Deployment

The project has been fully implemented and deployed to AWS. All development stages have been completed including:
- FastAPI backend deployed on AWS EC2 with Docker
- React frontend for local development
- PostgreSQL database on AWS RDS with SSL
- Secure database access via SSH tunneling
- Production-ready deployment infrastructure

*Last update: Stage 5 deployment infrastructure fully operational on AWS*

## Setup & Deployment

### Environment Setup

1. **Clone the repository and set up environment variables:**
   ```bash
   git clone <repository-url>
   cd nutrifriendly
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Local Development - Frontend (React)

To start the React frontend development server:

1. Navigate to the ui directory:
   ```bash
   cd ui
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`.

### Production Deployment - Backend (AWS EC2)

The backend is deployed using Docker on AWS EC2 instance. Run these commands in your AWS instance:

1. **Check running containers:**
   ```bash
   docker ps
   ```

2. **Build the Docker image:**
   ```bash
   docker build -t nutrifriendly .
   ```

3. **Run the container:**
   ```bash
   docker run -d -p 8000:8000 --env-file .env nutrifriendly
   ```

4. **Stop a running container:**
   ```bash
   docker stop <container_id>
   ```

The backend API will be available at `http://your-ec2-ip:8000`.

### Database Access (Local Development)

For local database management using DBeaver (macOS only):

1. **Create SSH tunnel to AWS RDS:**
   ```bash
   ./tunnel.sh
   ```

2. **Connect DBeaver to:**
   - Host: `localhost`
   - Port: `5433`
   - Database: Your RDS database name
   - Username/Password: From your .env file

**Note:** The `.env` file should be copied to your AWS EC2 instance for production deployment.

## Documentation Guide
This repository provides comprehensive documentation structured for systematic development:

### Reading Order:
1. **Dann Framework Documentation** (`Docs/DannFramework_docs/`) - Start here (Phases 1-8)
   - Phase 1: Project Planning & Problem Definition
   - Phase 2: Software Requirements Specification (SRS)
   - Phase 3: Software Design
   - Phase 4: System Modeling (UML)
   - Phase 5: SDLC Strategy
   - Phase 6: Deployment, Operations & Cost
   - Phase 7: Maintenance & Sustainability
   - Phase 8: Final Review Checklist

2. **Version Implementation Guides** (`Docs/Versions/`)
   - Version 1.md: Detailed 6-stage development pipeline
   - Each version provides step-by-step instructions for complete implementation

### Key Documentation Concepts:
- **Phases** provide the framework methodology and conceptual guidance
- **Versions** contain practical implementation instructions with code examples
- Start with Phases to understand the "why", then use Versions for the "how"

## Version Summaries

### Version 1.0.0 (Foundation — Make it Work)
- Core responsive web application with user authentication.
- Searchable list of natural ingredients with detailed information (benefits, nutrition, risks, dosage).
- Basic error handling, accessibility, and deployment on AWS.

### Version 2.0.0 (Refinement — Make it Better)
- Enhancements to UI/UX and performance.
- Advanced search, filtering, and user preferences.
- Basic, rule-based meal planning and a view-only doctor/nutritionist directory.
- Admin tools for content moderation.

### Version 3.0.0 (Make it Smart)
- Integration of AI for ingredient and recipe suggestions.
- Bot consultation for general health questions.
- Risk/safety analysis based on user input and personalized recommendations.
- Optional escalation to verified professionals.

### Version 4.0.0 (Make it Accessible Everywhere)
- Development of a mobile application (React Native or similar).
- Synchronization with web accounts and push notifications.
- Offline viewing capabilities for saved ingredients.

## Suggested Features (Notes)

- User-generated content submission for ingredients/recipes with a robust moderation system.
- Gamification elements to encourage healthy eating habits.
- Integration with wearable devices for health tracking.
- Community forums for users to share experiences and tips.
- Premium content access for verified doctors/nutritionists to offer more in-depth consultations.
