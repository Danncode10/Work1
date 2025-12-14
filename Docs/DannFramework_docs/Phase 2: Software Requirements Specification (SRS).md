# **PHASE 2 — Software Requirements Specification (SRS)**

---

## **2.1 Functional Requirements**

### **Core Functions (Version 1)**

1. **Guest Access (No Mandatory Login)**
    - **Trigger:** User visits the website
    - **Output:** User can browse ingredient information without signing in
    
    > The system shall allow users to browse ingredient lists and view ingredient details without authentication.
    > 

---

1. **Optional User Authentication**
    - **Trigger:** User clicks “Sign In” or “Create Account” from the profile section
    - **Output:** Authenticated user session
    
    > The system shall provide optional user registration and login through a profile section.
    > 

---

1. **View Ingredient List**
    - **Trigger:** User opens the ingredients page
    - **Output:** List of natural ingredients displayed
    
    > The system shall display a searchable list of natural ingredients.
    > 

---

1. **Search Ingredients**
    - **Trigger:** User enters a keyword
    - **Output:** Filtered ingredient results
    
    > The system shall allow users to search ingredients by name or keyword.
    > 

---

1. **View Ingredient Details**
    - **Trigger:** User selects an ingredient
    - **Output:** Ingredient details shown
    
    > The system shall display ingredient details including proven benefits, nutrition facts (including calories), risks, warnings, dosage, and research references.
    > 

---

1. **View Research Sources**
    - **Trigger:** User clicks a reference link
    - **Output:** Research source displayed or opened
    
    > The system shall provide verified research sources for each ingredient.
    > 

---

1. **User-Friendly Error Handling**
    - **Trigger:** Invalid input, no results, or system error
    - **Output:** Clear, understandable error message
    
    > The system shall display user-friendly error messages for invalid actions or system failures.
    > 

---

### **Future Functional Requirements (Out of Scope for Version 1)**

- Progressive sign-in prompts after repeated usage
- Personalized content based on user activity
- Usage tracking for recommendations

---

## **2.2 Non-Functional Requirements**

### **Performance**

- Ingredient search results should return within **1 second**
- Page loads should complete within **2 seconds**

---

### **Security**

- Secure authentication for registered users
- Password hashing and secure session handling
- HTTPS enforced for all data transmission
- Role-based access for admins

---

### **Scalability**

- Support up to **1,000 concurrent users**
- Architecture should allow future scaling and personalization features

---

### **Usability**

- No login required for basic usage
- Clear “Sign In / Create Account” access in the profile section
- Minimal interruptions during browsing
- Responsive design across devices

---

## **2.3 Technical Requirements**

### **Questions**

- **Preferred programming languages?**
    - **JavaScript** for frontend development
    - **Python** for backend development

---

- **Frameworks?**
    - **Backend:** FastAPI (REST API, fast and Pythonic)
    - **Frontend:** React
    - **Mobile (future):** React Native
    - **Styling:** Tailwind CSS and Bootstrap

---

- **Database type?**
    
    **Suggested choice:**
    
    - **Relational Database (SQL)** — **PostgreSQL**
    
    **Why this is recommended:**
    
    - Ingredient data is structured (nutrition facts, calories, risks, references)
    - Clear relationships (ingredients ↔ categories ↔ references)
    - Works very well with FastAPI
    - Supported natively by AWS (RDS)
    
    **Alternative (future, optional):**
    
    - NoSQL (DynamoDB) if traffic becomes very high and data becomes more flexible
    
    > For Version 1, PostgreSQL is the safest and simplest choice.
    > 

---

- **APIs required?**
    
    Yes. The system will use **RESTful APIs** built with FastAPI.
    
    **Required API types:**
    
    - Authentication API (optional login)
    - Ingredient listing and search API
    - Ingredient detail API
    - Research reference API
    
    **External APIs (future, optional):**
    
    - Nutrition data APIs (if expanding dataset)
    - Location services API (doctor/nutritionist search)
    - AI/ML APIs (for recipe suggestions in later versions)

---

### **Suggested Answer Guide**

> “The system will use JavaScript and Python, with React for the frontend and FastAPI for the backend. A relational database (PostgreSQL) will be used to store structured ingredient and user data. RESTful APIs will handle communication between frontend and backend, with support for future integrations.”
> 

---

## **2.4 Constraints**

### **Questions**

- **Time limit?**
    
    Version 1 must be completed within a **1-month (supposed 3 months) development timeframe**, including core functionality, basic testing, deployment, and essential documentation. The scope is intentionally limited to ensure timely delivery.
    
- **Budget?**
    
    The project budget will be finalized based on the agreed delivery scope:
    
    - **Prototype only:**
        
        Estimated budget: ________
        
        Focus on UI, core flows, and limited backend functionality.
        
        Cloud usage will rely primarily on AWS free tiers and minimal resources.
        
    - **Workable Version 1 (Production-ready):**
        
        Estimated budget: ________
        
        Includes stable backend APIs, database setup, deployment, monitoring, and basic documentation.
        
        Cloud infrastructure will use scalable AWS services with cost controls to minimize ongoing expenses.
        
    
    Final budget approval will determine the infrastructure depth, performance guarantees, and operational readiness of Version 1.
    

---

## **2.5 Acceptance Criteria**

### **Questions**

- **How do we know this feature works?**
    
    A feature is considered working when it behaves as expected under normal user actions, produces correct output, and meets defined performance and usability thresholds.
    
- **What test confirms success?**
    
    Success is confirmed through functional testing, basic performance checks, and user-flow validation in a deployed environment.
    

---

### **Acceptance Criteria (Version 1)**

- **Ingredient List & Search**
    - Users can view a list of natural ingredients without logging in
    - Searching returns relevant results within **≤ 2 seconds**
    - Clicking an ingredient displays:
        - Proven benefits
        - Nutrition facts (including calories)
        - Risks & warnings (if applicable)
- **Guest Access (No Forced Login)**
    - Users can browse ingredients and view details without creating an account
    - Login and account creation are available only through the profile section
    - No login pop-up appears in Version 1
- **System Stability**
    - No critical errors occur during normal browsing and search
    - Backend APIs return valid responses for all public endpoints
- **Performance**
    - Page load time is ≤ **3 seconds** on standard internet connections
    - API response time for search is ≤ **2 seconds**
- **Deployment**
    - The application is accessible via a public URL
    - Backend and database are running on AWS infrastructure
- **Documentation**
    - A basic README exists explaining setup, architecture, and API usage
    - Key environment variables and deployment steps are documented

---

### **Example Acceptance Statements**

> “Ingredient search is successful when a guest user receives relevant results within 2 seconds.”
> 

> “An ingredient detail page is valid when nutrition facts and benefits load without errors.”
> 

> “Version 1 is accepted when users can browse ingredient data without being required to log in.”
> 

---

## **2.6 Tech Stack Selection (AWS-First)**

- **Frontend:**
    
    React
    
- **Backend:**
    
    FastAPI
    
- **Database:**
    
    AWS RDS (PostgreSQL)
    
- **Hosting / Compute:**
    
    AWS EC2
    
- **Domain & DNS:**
    
    Amazon Route 53
    
- **Architecture Approach:**
    
    Monolithic architecture for Version 1, with a path to microservices in future versions.
    
- **Scalability Path:**
    
    ECS (Fargate), Load Balancer, and caching services introduced only when traffic demands it.
    

---

## **2.7 Security Design (Service-Oriented)**

- **Authentication method:**
    
    AWS **Cognito** for optional user login and authentication (email/password). Allows easy future social login integration.
    
- **IAM roles:**
    
    Use **AWS IAM** roles to control access to EC2, RDS, S3, and other services.
    
    - Admin role → full access
    - App role → limited access to backend resources only
- **Encryption strategy:**
    - **In transit:** HTTPS (TLS) for all communication
    - **At rest:** Enable encryption for RDS and S3 (AES-256)
- **Secrets storage:**
    
    Use **AWS Secrets Manager** to securely store API keys, database credentials, and other sensitive information.
    
- **Backup plan:**
    - Enable **RDS automated backups**
    - Schedule snapshots of EC2 volumes (EBS snapshots)
    - Optional: S3 versioning for static content

---

### **Suggested Answer Guide**

> “Authentication will use AWS Cognito, access is controlled with IAM roles, sensitive data is encrypted in transit and at rest, secrets are stored in AWS Secrets Manager, and backups are managed via RDS automated backups and EBS snapshots.”
> 

---
