# Version 1.0.0 (Foundation — Make it Work)

## Change Log Documentation
Documentation of each stage is located in the `Docs/Versions/Changelog/` directory. Every change made to the project is documented in the corresponding changelog files for detailed explanations of what happened during each stage.

## Summary
Version 1.0.0 of NutriFriendly focuses on establishing the core web platform. It includes essential features such as user authentication (optional for browsing), a searchable list of natural ingredients with detailed information (proven benefits, nutrition facts, risks & warnings, usage recommendations), basic error handling, and accessibility features. The system will be deployed on AWS with basic monitoring to ensure a stable foundation for future enhancements.

## Medical & Educational Disclaimer
This platform provides educational information about natural ingredients and their general uses. It is not intended to diagnose, treat, cure, or prevent any disease. Users should consult qualified healthcare professionals for personalized medical advice, diagnosis, or treatment. The information presented is for informational purposes only and should not replace professional medical judgment.

## Version 1.0.0 — Explicit Non-Goals
Version 1.0.0 does NOT include:
- AI-powered diagnosis or health recommendations
- Personalized medical advice or user profiles
- Subscription models or premium features
- User-generated content or community forums
- Advanced analytics or data mining
- Third-party integrations beyond basic AWS services

## Detailed Developmental Stages for Version 1.0.0

### **Stage 1: Initial Setup & Environment Configuration**
1.1 ✅ Sub Stage: **Set up Local Development Environment**
- Install Python (3.9+).
- Install Python package manager (Poetry recommended).
- Configure Git and clone the project repository.
- Create a virtual environment for Python and install backend dependencies.
- Install frontend dependencies (handled in Stage 4).

1.2 ✅ Sub Stage: **Configure AWS Account & IAM Roles**
- Create an AWS account (if not already existing).
- Configure AWS CLI with appropriate credentials (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`).
- Create IAM roles for EC2 instance with permissions to access RDS and CloudWatch.
- Create IAM role for application with minimal necessary permissions.

1.3 🔶 Sub Stage: **Prepare Environment Variables** (Partially Complete - Placeholders Used)
 - Create `.env.example` in the project root based on `Phase 2: SRS` requirements (DATABASE_URL, AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_COGNITO_USER_POOL_ID, AWS_COGNITO_CLIENT_ID, NODE_ENV, PORT, REACT_APP_API_BASE_URL).
- Populate a local `.env` file with development-specific values (only AWS credentials updated; database and Cognito IDs use placeholders pending later stages).

### **Stage 2: Database Design & Implementation**
2.1 ✅ Sub Stage: **Set up Local PostgreSQL Database**
- Install PostgreSQL locally (e.g., using Docker or Homebrew).
- Create a new database for the project.

  2.1.1 ✅ Sub Stage: **TablePlus Setup Guide** (Jump from (v1.4.2.5))
  - [x] Install TablePlus via Homebrew: `brew install tableplus`
  - [x] Launch TablePlus and create new PostgreSQL connection
  - [x] Configure connection: Host=localhost, Port=5432, User=lesterdannlopez, Database=naturalhealthdb
  - [x] Test connection and save
  - [x] Navigate to ingredients table and insert sample data
  - [x] Verify data appears in frontend ingredients list

2.2 ✅ Sub Stage: **Define Database Schema**
 - Create `users` table: `id (SERIAL PRIMARY KEY), email (VARCHAR UNIQUE NOT NULL), password_hash (VARCHAR NOT NULL), created_at (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`.
- Create `ingredients` table: `id (SERIAL PRIMARY KEY), name (VARCHAR NOT NULL), benefits (TEXT[]), risks (TEXT[]), nutrition_facts (JSONB), dosage (TEXT), calories (FLOAT), references (TEXT[])`.

2.3 ✅ **Ingredient Data Sources & Trust Model**
- Ingredient data is sourced from reputable references including peer-reviewed studies, government nutrition databases, and recognized health organizations.
- Each ingredient must include at least one scientific or authoritative reference in the `references` field.
- Data is manually curated to ensure accuracy and trustworthiness; no automated or AI-generated content is included.

### **Stage 3: Backend (FastAPI) Development**
3.1 ✅ Sub Stage: **Initialize FastAPI Project Structure**
- Create a basic FastAPI application.
- Structure the project into logical modules (e.g., `app/api`, `app/models`, `app/crud`, `app/core`).

  3.1.1.1 ✅ Sub Stage: **Add Database Dependencies** 
  - Install database dependencies via Poetry (FastAPI, Uvicorn, asyncpg, SQLAlchemy, pydantic-settings).

  3.1.1.2 ✅ Sub Stage: **Complete Database Connection & ORM Setup** 
  - Configure database connection settings using pydantic-settings to read DATABASE_URL from .env file.
  - Set up SQLAlchemy async engine and session management for PostgreSQL with asyncpg driver.
  - Define ORM models for users and ingredients tables using SQLAlchemy declarative base.
  - Integrate database setup into FastAPI application with automatic table creation on startup.

  3.1.1.3 ✅ Sub Stage: **Create Shell Script for Running the Server**
  - Create a shell script (dev.sh) in the backend directory for convenience: `uvicorn app.main:app --reload`
  - Make the script executable: `chmod +x dev.sh`
  - This allows running the development server with the shorter command: `./dev.sh`

3.2 ✅ Sub Stage: **Implement Authentication APIs (AWS Cognito Integration)**

  3.2.1 ✅ Set up AWS Cognito User Pool and App Client
  3.2.2 ✅ Install AWS Cognito Dependencies and Create Authentication Service Module
  3.2.3 ✅ Implement Authentication API Endpoints
  3.2.4 ✅ Implement Token Validation Middleware
  3.2.5 ✅ AWS Cognito App Client Configuration Update and Troubleshooting
  3.2.6 ✅ Comprehensive Authentication Endpoint Testing

3.3 ✅ Sub Stage: **Develop Ingredient Management APIs**
- Create API endpoint: `GET /ingredients` (Retrieve paginated ingredient list).
- Create API endpoint: `GET /ingredients/{id}` (Get specific ingredient details).
- Create API endpoint: `POST /search` (Search ingredients with query, utilizing PostgreSQL full-text search as per `Phase 3: Software Design`).
- Implement data validation for all API inputs and outputs.

3.4 ✅ Sub Stage: **Implement Core Business Logic**
- [x] Review and finalize CRUD functions for ingredient data operations (fetching, searching, single-item retrieval)
- [x] Implement data validation and integrity checks in database queries
- [x] Optimize query performance for pagination and search operations
- [x] Add error handling for database operations and edge cases
- [x] Ensure business rules for data processing are correctly applied
- [x] Integrate business logic with API endpoints for consistent data flow

### **Stage 4: Frontend (React) Development**
4.1 ✅ Sub Stage: **Set Up the React Project Using the Starter Repository**
- Initialize the frontend project by cloning the pre-configured React starter repository that includes modern tooling and essential libraries.
- The starter repository (https://github.com/Danncode10/Web-Starter-React.git) provides a blank canvas for React applications, pre-configured with:
  - React 18.2.0 with Vite 5.0.12 for fast development and build processes
  - Tailwind CSS 3.4.1 for utility-first styling and rapid UI development
  - Bootstrap 5.3.3 (CSS-only version) for additional component classes and responsive design utilities
  - Redux Toolkit & React Redux for scalable state management across the application
  - Essential libraries including React Router (for client-side routing), Axios (for HTTP requests), and clsx (for conditional CSS classes)

  4.1.1 Sub Stage: **Clone the Starter Repository**
  - [x] Open your terminal or command prompt in the desired project directory.
  - [x] Clone the starter repository into a 'ui' directory: `git clone https://github.com/Danncode10/Web-Starter-React.git ui`

  4.1.2 Sub Stage: **Navigate and Clean Git History**
  - [x] Navigate into the cloned project directory: `cd ui`
  - [x] Remove the existing git history to start fresh: `rm -rf .git`

  4.1.3 Sub Stage: **Install Project Dependencies**
  - [x] Install all project dependencies using npm: `npm install`

  4.1.4 Sub Stage: **Start Development Server**
  - [x] Verify the setup by starting the development server: `npm run dev`
  - [x] Confirm the development server launches (typically on http://localhost:5173 for Vite)
  - [x] Verify hot module replacement is working for fast development iterations

  4.1.5 Sub Stage: **Configure Environment Variables**
  - [x] Create a `.env.local` file in the 'ui' directory
  - [x] Add `VITE_API_BASE_URL=http://localhost:8000/api` (for development, pointing to the FastAPI backend)

  4.1.6 Sub Stage: **Set Up Basic Project Structure**
  - [x] Create subdirectories in the 'src' folder if needed:
    - [x] `components/` for reusable UI components
    - [x] `pages/` for page-level components (Home, Ingredients, etc.)
    - [x] `store/` for Redux slices and configuration
    - [x] `services/` for API integration functions

4.2 Sub Stage: **Configure Routing and Overall Layout**

  4.2.1 ✅ Sub Stage: **Install React Router Dependencies**
  - [x] Install React Router DOM package in the ui directory using npm

  4.2.2 ✅ Sub Stage: **Set Up Main Router Structure**
  - [x] Create router configuration in App.jsx with routes for /, /ingredients, /ingredients/:id, /login, /register
  - [x] Implement route definitions and component mappings

  4.2.3 ✅ Sub Stage: **Create Root App Component with Providers**
  - [x] Wrap application with Router provider from React Router
  - [x] Integrate Redux Provider for state management
  - [x] Add global CSS imports for Tailwind and Bootstrap

  4.2.4 ✅ Sub Stage: **Implement Main Layout Component**
  - [x] Create persistent layout wrapper with navigation bar using Bootstrap classes
  - [x] Add responsive navigation with mobile hamburger menu
  - [x] Include main content area and optional footer

  4.2.5 ✅ Sub Stage: **Add Route Protection and Redirects**
  - [x] Implement logic for optional authentication redirects
  - [x] Ensure browsing routes remain accessible without login
  - [x] Add authentication checks for protected routes if needed

  4.2.6 ✅ Sub Stage: **Suggest a Name for this project 📍**
  - [x] Use A.I. to generate name for this project
  - [x] Look for available domain names in GoDaddy
  - [x] Update the github name and folder name of root
  - [x] Update the documentation for no conflict
  - [x] Update UI

  4.2.7 ✅ Sub Stage: **Establish UI Design System**
  - [x] Define color palette for consistent branding
  - [x] Set up typography scale and font hierarchy
  - [x] Create spacing and sizing guidelines
  - [x] Establish component styling standards

4.3 ✅ Sub Stage: **Implement Redux State Management**
- [x] Update the Redux store configuration in src/store/index.js to include new reducers for ingredients, auth, filters, and pagination.
- [x] Create ingredientsSlice.js to manage ingredient list, selected ingredient, search results, loading states, and error handling.
- [x] Create authSlice.js for user authentication state (login status, tokens, user data).
- [x] Create filtersSlice.js for search filters and query parameters.
- [x] Create paginationSlice.js for handling pagination state and controls.
- [x] Implement async thunks using createAsyncThunk for API operations: fetching ingredients, searching, authentication.
- [x] Update components to connect to Redux using useDispatch and useSelector hooks.
- [x] Remove the example counter slice and component from the store and codebase.

4.3.1: Test
- [x] Test if it worked

4.4 Sub Stage: **Develop Core UI Components**

  4.4.1 Sub Stage: **Create Navigation Bar Component**
  - [x] Integrated search bar.

  4.4.2 Sub Stage: **Design Search Bar Component**
  - [x] Build a search input with debounced input, Redux integration, and clear functionality.

  4.4.3 Sub Stage: **Develop Ingredient Card Component**
  - [x] Create a card for list displays showing name, hover effects, and navigation handlers.
  - [x] When the ingredients is clicked, it will redirect to page to show more info

  4.4.4 Sub Stage: **Create Ingredient Detail Page Component**
  - [x] Build a detailed page with header, benefits, nutrition, risks, dosage, and references sections and add back to go back to ingredients

  4.4.5 Sub Stage: **Implement Utility Components**
  - [x] Add loading spinner/skeleton, error message display, and pagination controls.

  4.4.6 Sub Stage: **Test Stage**
  - [x] Verify all components function correctly, integrate with Redux, and ensure responsiveness.

4.5 Sub Stage: **Integrate with Backend APIs**

  4.5.1 ✅ Sub Stage: **Update Ingredients.jsx to use Redux thunk (fetchIngredients)**
  - [x] Replace direct API calls with dispatch(fetchIngredients()) from Redux thunk
  - [x] Integrate loading and error states from Redux into component rendering
  - [x] Update UI to display Redux-managed ingredient list and states

  4.5.2 ✅ Sub Stage: **Redux Integration and ErrorPage Component**
  - [x] Create ErrorPage.jsx reusable component for error states
  - [x] Update IngredientDetail.jsx to use Redux thunk (fetchIngredientById) instead of direct API calls
  - [x] Integrate loading and error states from Redux into IngredientDetail component
  - [x] Fix error message handling in Ingredients.jsx for object responses
  - [x] Use ErrorPage component for consistent error UI in IngredientDetail

  4.5.3 ✅ Sub Stage: **Implement search functionality in Ingredients.jsx**
  - [x] Use Redux thunk (searchIngredients) triggered by query changes instead of query-only state
  - [x] Dispatch searchIngredients(query) when user inputs search term
  - [x] Display search results from Redux state, integrating loading and error handling

  4.5.4 ✅ Sub Stage: **Update Login.jsx and Register.jsx to use Redux thunks**
  - [x] Implement login form in Login.jsx using dispatch(loginUser(credentials))
  - [x] Implement register form in Register.jsx using dispatch(registerUser(userData))
  - [x] Integrate loading and error states from Redux into both components
  - [x] Handle authentication success (e.g., redirect after login/register)
  - [x] Add password visibility toggle buttons to both forms
  - [x] Implement error clearing on user input to improve UX
  - [x] Update authSlice thunks to handle backend API response formats
---  
#### ⚠️ Note: 
User accounts require manual confirmation by AWS administrator in Cognito console before login is allowed.

---

  4.5.5 ✅ Sub Stage: **Create and integrate ErrorBoundary component**
  - [x] Create ErrorBoundary.jsx using React's error boundary pattern
  - [x] Wrap App.jsx with ErrorBoundary for global error handling
  - [x] Test error boundary functionality

4.6 ✅ Skipped, no need for visualization

4.7 ✅ Sub Stage: **Basic Error Handling, Accessibility & Testing**

  4.7.1 Sub Stage: **Implement comprehensive error handling**
  - [x] Implement user-friendly error messages for network failures
  - [x] Implement validation messages for form inputs
  - [x] Implement fallback displays when data is not available
  - [x] Implement retry mechanisms for failed requests
  - [x] Test

  4.7.2 Sub Stage: **Ensure accessibility compliance**
  - [x] Use semantic HTML elements (<header>, <main>, <section>, etc.)
  - [x] Add ARIA labels and roles where necessary
  - [x] Implement keyboard navigation (tab order, Enter/Space key handling)
  - [x] Maintain sufficient color contrast ratios
  - [x] Support screen readers with proper alt text and labeling
  - [x] Test

  4.7.3 Sub Stage: **Verify responsive design across all device sizes**
  - [x] Mobile-first approach using Bootstrap's responsive classes
  - [x] Test on multiple breakpoints (xs, sm, md, lg, xl)
  - [x] Ensure touch-friendly button sizes and spacing
  - [x] Test

  4.7.4 ✅ Sub Stage: **Implement basic automated testing** (📖 Still need to review this part)
  - [x] Unit tests for Redux slices and utility functions
  - [x] Component tests using React Testing Library
  - [x] End-to-end tests for critical user flows
  - [x] (Advanced testing suites, such as full CI/CD pipelines or load testing, are Optional / Post-V1)
  - [x] Test

### **Stage 5: Deployment & Operations (AWS)**

5.1 Sub Stage: **Set up AWS Account and Prerequisites**
- [x] If you don't have an AWS account, create one at https://aws.amazon.com/free/ (free tier available for 12 months).
- [x] Sign in to the AWS Management Console at https://console.aws.amazon.com/.
- [x] Set up Multi-Factor Authentication (MFA) for your root account for security.
- [x] Create an IAM user with administrative permissions (if not using root for development).
- [x] Install AWS CLI on your local machine: Download and install AWS CLI v2 from https://aws.amazon.com/cli/.
- [x] Configure AWS CLI by running `aws configure` in your terminal and entering your Access Key ID, Secret Access Key, default region (e.g., us-east-1), and output format (json).
- [x] Understand AWS free tier limits to avoid unexpected charges.
- [x] Test

5.2 Sub Stage: **Create Storage with Amazon S3 (For Static Assets)**
- [ ] Navigate to the S3 service in AWS Management Console.
- [ ] Create a new bucket: Click "Create bucket". Enter a unique bucket name (e.g., "mynaturalhealthwebsite-assets"). Choose a region (AWS Region) that is geographically close to your users for better performance. Keep "ACLs disabled" for Block Public Access (we'll use CloudFront for public access). Enable versioning and bucket encryption for security.
- [ ] Configure bucket permissions: Create a bucket policy to allow CloudFront access (we'll come back to this).
- [ ] Upload static assets (CSS, JS, images) from your React build to the S3 bucket.
- [ ] Test

5.3 Sub Stage: **Set up AWS EC2 Instance**
- [ ] Launch a new EC2 instance (t2.micro is eligible for free tier, 750 hours/month): Go to EC2 service in AWS Console. Click "Launch Instance". Choose an Amazon Machine Image (AMI) - select "Ubuntu Server 22.04 LTS (HVM)" for Linux-based deployment. Choose Instance Type: t2.micro (free tier eligible). Create a new key pair (or use existing) for SSH access - download the .pem file securely. Configure Network Settings: Create a new security group or use default. Configure Storage: 8 GB (default) is usually sufficient for small applications.
- [ ] Configure Security Group (firewall rules): Allow SSH (port 22) from your IP address only (or 0.0.0.0/0 for simplicity, but less secure). Allow HTTP (port 80) and HTTPS (port 443) from anywhere (0.0.0.0/0). Optionally allow port 3000 or 8000 for testing (restrict to your IP).
- [ ] Launch the instance and note the Public IP address (you'll need this for SSH).
- [ ] Connect to EC2 via SSH: Use your terminal: `ssh -i "your-key-pair.pem" ubuntu@<your-instance-public-ip>`. Or use EC2 Instance Connect in AWS Console for web-based access.
- [ ] Update the system: `sudo apt update && sudo apt upgrade -y`.
- [ ] Install necessary software: Docker: `sudo apt install docker.io -y`, then add user to docker group: `sudo usermod -aG docker $USER`, restart terminal. Node.js: `curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt-get install -y nodejs`. Nginx: `sudo apt install nginx -y`. Git: `sudo apt install git -y`. Python and pip: `sudo apt install python3 python3-pip -y`.
- [ ] Verify installations: `node --version`, `npm --version`, `docker --version`, `nginx -v`, etc.
- [ ] Test

5.4 Sub Stage: **Configure AWS RDS PostgreSQL Database**
- [ ] Navigate to RDS service in AWS Management Console.
- [ ] Create a new database: Click "Create database". Choose "Standard create". Engine type: PostgreSQL. Version: Latest PostgreSQL version (e.g., 15.x). Template: Free tier (if eligible) or Dev/Test for cost efficiency. DB instance identifier: "mynaturalhealthdb" (unique name). Master username: "postgres" (or custom). Set master password (note it down securely). DB instance class: db.t3.micro (free tier eligible). Storage: General Purpose SSD, 20 GB (sufficient for small database). VPC: Choose the same VPC as your EC2 instance.
- [ ] Configure additional settings: Database authentication: Password authentication. Backup: Disable automated backups to save costs for development. Monitoring: Enable Enhanced monitoring for basic insights.
- [ ] Configure security group: Create a new security group for RDS. Add inbound rule: PostgreSQL (port 5432), source type Custom, source as your EC2 security group ID.
- [ ] Launch the database and note the endpoint (e.g., mynaturalhealthdb.xxxxxx.us-east-1.rds.amazonaws.com).
- [ ] Connect to the database from EC2: Install PostgreSQL client on EC2: `sudo apt install postgresql-client -y`. Connect using psql: `psql --host=<rds-endpoint> --port=5432 --username=postgres --password --dbname=postgres`.
- [ ] Create database tables using your schema from Stage 2.
- [ ] Populate with initial ingredient data using INSERT statements or a script.
- [ ] Note: Ingredient data is seeded manually via scripts or database imports. An admin dashboard for ongoing data management is deferred to later versions.
- [ ] Test

5.5 Sub Stage: **Configure AWS Cognito for Authentication (Optional)**
- [ ] Navigate to Cognito service.
- [ ] Create a new user pool: Click "Create user pool". Authentication providers: User name, email. Password policy: Basic settings (8+ characters). Required attributes: Email. Sign-in options: Email (case insensitive).
- [ ] Create an App client: Client name: "naturalhealthwebapp". Client type: Public client. Dont generate client secret. Note the User Pool ID and Client ID for environment variables.
- [ ] Configure domain: Set up a domain for hosted UI if needed.
- [ ] Test

5.6 Sub Stage: **Prepare Application for Deployment**
- [ ] On your local machine, prepare the backend: Create Dockerfile for FastAPI app in backend directory. Example Dockerfile content: ```FROM python:3.11-slim WORKDIR /app COPY requirements.txt . RUN pip install -r requirements.txt COPY . . EXPOSE 8000 CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]``` Update environment variables in .env for production: DATABASE_URL=postgresql://username:password@rds-endpoint:5432/database. AWS_REGION=us-east-1. AWS_COGNITO_USER_POOL_ID=your_pool_id. AWS_COGNITO_CLIENT_ID=your_client_id.
- [ ] Prepare the frontend: Build the React app: `npm run build` (creates dist/ folder). Update .env with production API base URL (your domain/api later). Optionally, create a Dockerfile for React if using container deployment.
- [ ] Test

5.7 Sub Stage: **Deploy Applications to EC2**
- [ ] Transfer files to EC2: Use SCP or git clone your repositories on EC2. Example for SCP: `scp -i your-key.pem -r backend/ ubuntu@ip:/home/ubuntu/`.
- [ ] Build and run containers on EC2: Build backend image: `cd backend && docker build -t naturalhealth-backend .`. Run backend container: `docker run -d -p 8000:8000 -e DATABASE_URL=... naturalhealth-backend`. For frontend, serve the built files via Nginx (copy dist/ to /var/www/html/naturalhealth).
- [ ] Configure Nginx as reverse proxy: Create config: `sudo nano /etc/nginx/sites-available/naturalhealth` with server block for your-domain.com. Enable site: `sudo ln -s /etc/nginx/sites-available/naturalhealth /etc/nginx/sites-enabled/`. Disable default: `sudo unlink /etc/nginx/sites-enabled/default`. Test config: `sudo nginx -t`. Reload: `sudo systemctl reload nginx`.
- [ ] Test

5.8 Sub Stage: **Set up Domain & DNS with Route 53**
- [ ] Register a domain: Go to Route 53 in AWS Console. Click "Register domain". Search for available domain names (e.g., naturalhealthsite.com). Add to cart and complete purchase (annual fees apply).
- [ ] Create a hosted zone: In Route 53, go to "Hosted zones". Click "Create hosted zone". Enter your domain name. Note the 4 name servers listed (NS records).
- [ ] If domain was registered elsewhere, update domain's name servers to AWS NS records.
- [ ] Add DNS records: A record: Name "@" (root), Value is your EC2 public IP, Type A, TTL 300. Optionally, A record for "www" pointing to same IP. A record for subdomain APIs if needed.
- [ ] For CloudFront (if using S3 for assets): Create distribution in CloudFront. Origin: S3 bucket. Alternate domain names: your domain or cdn subdomain. Add CNAME record in Route 53 pointing to CloudFront URL.
- [ ] Test

5.9 Sub Stage: **Configure SSL with AWS Certificate Manager**
- [ ] Go to AWS Certificate Manager (ACM). Request a certificate: Click "Request a certificate". Public certificate, Next. Add domain names: your-domain.com and www.your-domain.com. Choose DNS validation (recommended).
- [ ] Add validation CNAME records to Route 53 hosted zone (records provided by ACM).
- [ ] Import certificate to EC2 for Nginx: Export certificate from ACM (but ACM certificates can't be exported). Alternative: Use Let's Encrypt on EC2: `sudo apt install certbot python3-certbot-nginx -y`. Run: `sudo certbot --nginx -d your-domain.com -d www.your-domain.com`. Update Nginx config to use HTTPS (certbot will handle it).
- [ ] Redirect HTTP to HTTPS in Nginx config: Add server block for listen 80, return 301 https://$server_name$request_uri.
- [ ] Test

5.10 Sub Stage: **Set up Monitoring and Logging**
- [ ] Enable CloudWatch for EC2: Install CloudWatch agent: `wget https://s3.amazonaws.com/amazoncloudwatch-agent/amazon_linux/amd64/latest/amazon-cloudwatch-agent.rpm && sudo rpm -Uvh amazon-cloudwatch-agent.rpm`. Configure: `/opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard`.
- [ ] Configure CloudWatch logs for application: Create log groups for frontend (Nginx) and backend. Use AWS CLI or SDK to send logs.
- [ ] Set up CloudWatch alarms: Go to CloudWatch > Alarms. Create alarm for EC2 CPU > 80%. Create alarm for RDS free storage < 5GB. Configure SNS topic for email notifications.
- [ ] Basic cost monitoring: Use AWS Cost Explorer to track spending. Set up budget alerts in Billing console. (Heavy monitoring, such as detailed metrics dashboards or advanced alerting systems, is Optional / Post-V1).
- [ ] Test

5.11 Sub Stage: **Security Hardening and Backup**
- [ ] Configure backup strategies: Enable automated RDS backups (retain 7 days). Create AMI snapshots of EC2 weekly. S3 versioning and lifecycle policies for cost management.
- [ ] Security best practices:
- [ ] Test

## Version 1 Success Metrics / Acceptance Summary
Version 1.0.0 is considered successful if the following measurable criteria are met:
- Search functionality works reliably across all ingredients.
- Ingredient detail pages load within 2 seconds on standard connections.
- Mobile accessibility scores at least 90% on Lighthouse.
- System maintains 99% uptime during operational periods.
- No critical security vulnerabilities are present.
- All core features (browsing, searching, viewing details) function without errors in production.
