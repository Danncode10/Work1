# Version 1.0.0 (Foundation — Make it Work)

## Summary
Version 1.0.0 of the Natural Health Website System focuses on establishing the core web platform. It includes essential features such as user authentication (optional for browsing), a searchable list of natural ingredients with detailed information (proven benefits, nutrition facts, risks & warnings, usage recommendations), basic error handling, and accessibility features. The system will be deployed on AWS with basic monitoring to ensure a stable foundation for future enhancements.

## Detailed Developmental Stages for Version 1.0.0

### **Stage 1: Initial Setup & Environment Configuration**
1.1 Sub Stage: **Set up Local Development Environment**
- Install Python (3.9+) and Node.js (LTS version).
- Install Python package manager (Poetry recommended) and Node.js package manager (npm/yarn).
- Configure Git and clone the project repository.
- Create a virtual environment for Python and install backend dependencies.
- Install frontend dependencies.

1.2 Sub Stage: **Configure AWS Account & IAM Roles**
- Create an AWS account (if not already existing).
- Configure AWS CLI with appropriate credentials (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`).
- Create IAM roles for EC2 instance with permissions to access RDS and CloudWatch.
- Create IAM role for application with minimal necessary permissions.

1.3 Sub Stage: **Prepare Environment Variables**
 - Create `.env.example` in the project root based on `Phase 2: SRS` requirements (DATABASE_URL, AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_COGNITO_USER_POOL_ID, AWS_COGNITO_CLIENT_ID, NODE_ENV, PORT, REACT_APP_API_BASE_URL).
- Populate a local `.env` file with development-specific values.

### **Stage 2: Database Design & Implementation**
2.1 Sub Stage: **Set up Local PostgreSQL Database**
- Install PostgreSQL locally (e.g., using Docker or Homebrew).
- Create a new database for the project.

2.2 Sub Stage: **Define Database Schema**
 - Create `users` table: `id (SERIAL PRIMARY KEY), email (VARCHAR UNIQUE NOT NULL), password_hash (VARCHAR NOT NULL), created_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`.
- Create `ingredients` table: `id (SERIAL PRIMARY KEY), name (VARCHAR NOT NULL), benefits (TEXT[]), risks (TEXT[]), nutrition_facts (JSONB), dosage (TEXT), calories (FLOAT), references (TEXT[])`.

2.3 Sub Stage: **Implement Database Connection & ORM**
- Integrate a PostgreSQL client library (e.g., `asyncpg` for FastAPI) into the backend.
- Implement database session management.

### **Stage 3: Backend (FastAPI) Development**
3.1 Sub Stage: **Initialize FastAPI Project Structure**
- Create a basic FastAPI application.
- Structure the project into logical modules (e.g., `app/api`, `app/models`, `app/crud`, `app/core`).

3.2 Sub Stage: **Implement Authentication APIs (AWS Cognito Integration)**
- Set up an AWS Cognito User Pool and App Client (as per `Phase 2: SRS`).
- Develop API endpoints for user registration (`/auth/register`) and login (`/auth/login`).
- Integrate FastAPI with AWS Cognito for user authentication and token validation.

3.3 Sub Stage: **Develop Ingredient Management APIs**
- Create API endpoint: `GET /ingredients` (Retrieve paginated ingredient list).
- Create API endpoint: `GET /ingredients/{id}` (Get specific ingredient details).
- Create API endpoint: `POST /search` (Search ingredients with query, utilizing PostgreSQL full-text search as per `Phase 3: Software Design`).
- Implement data validation for all API inputs and outputs.

3.4 Sub Stage: **Implement Core Business Logic**
- Develop logic for fetching, searching, and displaying ingredient data from the PostgreSQL database.
- Ensure data integrity and efficient querying.

### **Stage 4: Frontend (React) Development**
4.1 Sub Stage: **Initialize React Project Structure**
- Create a new React application.
- Set up routing (e.g., React Router) for different pages (home, ingredients list, ingredient detail, login/register).
- Integrate styling frameworks (Tailwind CSS and Bootstrap).

4.2 Sub Stage: **Develop Core UI Components**
- Create a Navigation bar component.
- Design a Search Bar component with input handling.
- Develop an Ingredient Card component for displaying brief ingredient info in a list.
- Create an Ingredient Detail page component for comprehensive information display (Proven Benefits, Nutrition Facts, Risks & Warnings, Dosage, References).

4.3 Sub Stage: **Implement User Interaction & Data Display**
- Connect React components to FastAPI backend APIs.
- Implement search functionality to fetch and display filtered ingredients.
- Implement logic to display detailed ingredient information upon selection.
- Develop user login/registration forms and handle authenticated sessions.

4.4 Sub Stage: **Basic Error Handling & Accessibility**
- Implement user-friendly error messages for invalid inputs, no search results, login failures, and network errors.
- Ensure responsive design across mobile, tablet, and desktop.
- Implement basic keyboard navigation and clear labels for forms/buttons.

### **Stage 5: Deployment & Operations (AWS)**
5.1 Sub Stage: **Set up AWS EC2 Instance**
- Launch a new EC2 instance (e.g., t2.micro for cost efficiency in V1).
- Install necessary software: Docker, Python, Node.js, Nginx (for reverse proxy/serving static files).
- Configure security groups to allow HTTP/HTTPS traffic.

5.2 Sub Stage: **Configure AWS RDS (PostgreSQL)**
- Create a PostgreSQL database instance using AWS RDS.
- Configure database security group to allow connections from the EC2 instance.
- Populate the database with initial ingredient data.

5.3 Sub Stage: **Containerization & Deployment**
- Dockerize the FastAPI backend application.
- Dockerize the React frontend application (or build and serve static files via Nginx).
- Deploy Docker containers to the EC2 instance.
- Configure Nginx as a reverse proxy to serve both frontend and backend from the same domain.

5.4 Sub Stage: **Domain & DNS Configuration**
- Register a domain name using Amazon Route 53.
- Configure DNS records to point to the EC2 instance or a Load Balancer.
- Set up HTTPS with ACM (AWS Certificate Manager) and integrate with a Load Balancer or Nginx.

5.5 Sub Stage: **Basic Monitoring & Logging**
- Configure CloudWatch logs for both frontend (e.g., Nginx access/error logs) and backend (FastAPI application logs).
- Set up basic CloudWatch alarms for critical metrics (e.g., EC2 CPU utilization, RDS database connections).

### **Stage 6: Documentation & Final Review**
6.1 Sub Stage: **Update Project Documentation**
- Ensure `README.md` includes setup instructions for local development and AWS deployment.
- Generate and review API documentation (FastAPI's interactive Swagger UI).
- Verify environment variable documentation in `.env.example`.

6.2 Sub Stage: **Perform Acceptance Testing**
- Conduct functional tests to ensure all `Phase 2: SRS` acceptance criteria are met.
- Perform basic performance checks (page load, search response times).
- Validate user flows (browsing, searching, viewing details, optional login).

6.3 Sub Stage: **Final Review & Release**
- Conduct a final review based on `Phase 8: Final Review Checklist`.
- Prepare for Version 1.0.0 release.
