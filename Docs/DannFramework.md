# **Dann Framework**

### *A Question-First Software Development Framework for Solo Developers*

> Principle:
> 
> 
> *If you can’t answer the question clearly, don’t code it yet.*
> 

---

# **PHASE 1 — Project Planning & Problem Definition**

---

## **1.1 Problem Statement**

### **Questions**

- **What problem am I solving?**
    
    I want to build a website where users can view natural foods and their health benefits, supported by legitimate and trusted research sources. The site will also include an **“Ask a Doctor”** section. In future versions, users will be able to access customized meal plans and recipes based on their preferences, and search for natural food recipes.
    
- **Who experiences this problem?**
    
    Health-conscious people who are selective and careful about the information they trust.
    
- **How often does the problem occur?**
    
    This problem occurs primarily among health-conscious individuals and people who want ready-made or guided meal plans.
    
- **Why is this problem worth solving?**
    
    To promote natural health alternatives and help users connect with nearby doctors available for nutrition consultation.
    
- **What happens if this problem remains unsolved?**
    
    Users may consume foods that are not suitable for their health and struggle to decide what healthy meals to prepare.
    

---

### **Suggested Answer Guide**

> “Users struggle to find legitimate information about natural health because reliable sources are often scattered or unclear. This leads to confusion about healthy food choices and difficulty in planning meals, resulting in unhealthy habits and wasted time.”
> 

---

## **1.2 Target Users**

### **Questions**

- **Who are the primary users?**
    
    Health-conscious individuals looking for reliable information about natural foods and their benefits.
    
- **Are there secondary users or admins?**
    
    Secondary users could be people searching for healthy food recipes based on their location. Admins are responsible for managing content, verifying sources, and moderating questions in the “Ask a Doctor” section.
    
- **What is their technical skill level?**
    
    This refers to how comfortable users are with technology and digital platforms.
    
    Example answers:
    
    - Low: Only basic browsing and smartphone use
    - Medium: Comfortable with websites and mobile apps
    - High: Can navigate advanced features like filters, search, and account management
- **What devices do they commonly use?**
    
    Smartphones (iOS & Android), iPads/tablets, laptops/desktops
    

---

### **Suggested Answer Guide**

> “Primary users are health-conscious individuals with medium-level technical skills, mostly using smartphones, tablets, and laptops. Secondary users include recipe seekers, while admins manage content and verify sources.”
> 

## **1.3 Project Goals (Version 1 Focus)**

### **Questions**

- **What is the single most important outcome?**
    
    A basic modern website that provides a working list of natural ingredients with detailed information, including:
    
    - Proven Benefits
    - Risks & Warnings
    - “Excellent For”
    - “Caution If”
    - Nutrition Facts
    - How to Eat (Dosage/Portion)
    - Pro Tips
    - Calorie
- **What must the system do *perfectly*?**
    
    Display a comprehensive and accurate list of natural ingredients, clearly showing their Proven Benefits and Nutrition Facts.
    
- **What can be ignored for now?**
    
    Recipe suggestions for each ingredient can be postponed to future versions.
    

---

### **Suggested Answer Guide**

> “Version 1 succeeds if users can easily view and search a list of natural ingredients, with accurate benefits and nutrition information, even if recipe suggestions are not yet available.”
> 

---

## **1.4 Competition & Market Scan — Sample Answer**

- **Existing solutions:**
    
    Websites and apps like **Healthline, WebMD, MyFitnessPal, Yazio**, and **Eat This Much** provide nutrition facts, health benefits of foods, and meal plans.
    
- **Features they offer:**
    - Lists of natural ingredients
    - Health benefits
    - Recipes and meal plans
    - Nutrition calculators
    - Search and filter options
- **User complaints:**
    - Some information is not backed by credible research
    - Recipes are generic or not customizable
    - Warnings or cautions are missing
    - Navigation can be confusing, especially for beginners
- **Features missing or poorly done:**
    - Clear, research-backed risk and caution information for each ingredient
    - Personalized or location-based meal plans
    - “Ask a Doctor” consultation or guidance
    - Easy-to-read, beginner-friendly interface with trusted sources

---

### **Suggested Answer Summary**

> “Competitors provide ingredient lists, recipes, and general health information but often fail to give accurate, research-backed health details, clear warnings, and personalized recommendations. My project focuses on delivering trustworthy, detailed natural food information, nutrition facts, and expert guidance in a simple, user-friendly website.”
> 

---

## **1.5 Feature Definition & Scope Control**

### **Questions**

- **What are MUST-HAVE features?**
    - Functional website with user authentication
    - Display a comprehensive list of natural ingredients with:
        - Proven Benefits
        - Risks & Warnings
        - Nutrition Facts
        - “Excellent For” / “Caution If”
        - How to Eat (Dosage/Portion)
        - Pro Tips
    - Search and filter functionality for ingredients
- **What are NICE-TO-HAVE features?**
    - Bot consultation for general questions, escalating to a doctor if needed
    - Weight management features (loss/gain tracking)
    - Users can add or modify ingredients; system calculates risks or safety (Personal Chef + Doctor approval)
    - Users can locate nearby doctors or nutritionists (online or in-person)
    - Machine learning suggestions for natural recipes based on user preferences
    - Users can share customized recipes; submissions are reviewed by doctors before saving
- **What features are explicitly excluded?**
    - Full AI-powered meal planning (Version 1)
    - Mobile app version
    - Advanced social sharing (forums, chat between users)
    - Real-time video consultations

---

### **Suggested Answer Guide**

> MUST: Authentication, core workflow, ingredient list with essential info
> 
> 
> **NICE:** Bot consultation, weight management, ML-based recipe suggestions, location-based doctor search
> 
> **OUT:** AI meal planning, mobile app, advanced social features (Version 1)
> 

---

## **1.6 Platform & Project Type**

### **Questions**

- **Is this a website by default?**
    
    Yes, Version 1 will be a web application.
    
- **Will it expand to mobile, AI, or robotics?**
    
    Mobile app support is planned for future versions if traffic and user demand justify it. AI features like recipe suggestions may also be added later. No robotics integration is planned.
    
- **Does it require real-time processing?**
    
    No, real-time processing is not required for Version 1. Most features are read-heavy (viewing ingredient info) and some interactive (search/filter), but do not require live updates or low-latency streaming.
    
- **Does it integrate with hardware?**
    
    No hardware integration is needed.
    

---

### **Suggested Answer Guide**

> “Version 1 is a web application with planned mobile expansion in future versions. Real-time processing and hardware integration are not required at this stage.”
> 

---

## **1.7 User Requirements**

### **Questions**

- **What actions can users perform?**
    
    Users can search for natural ingredients and view detailed information such as benefits, nutrition facts, calories, risks, and usage recommendations.
    
- **What actions are restricted?**
    
    Users are not allowed to edit or modify ingredient information. Content editing is restricted to admins or verified professionals.
    
- **What errors must be user-friendly?**
    - Invalid or empty search queries
    - No search results found
    - Login or authentication errors
    - Network or server errors
        
        Error messages should be clear, non-technical, and provide guidance on what the user can do next (e.g., “Try a different keyword” or “Please check your internet connection”).
        
- **Accessibility needs?**
    - Responsive design for mobile, tablet, and desktop
    - Readable font sizes and sufficient color contrast
    - Keyboard navigation support
    - Clear labels for buttons and forms
    - Basic compliance with web accessibility guidelines (e.g., WCAG(**Your website should be usable by people with disabilities**, not just “normal” users.))

---

### **Suggested Answer Guide**

> “Users can search and view ingredient information, while editing is restricted to authorized roles. The system must display clear, user-friendly error messages and support accessible design across devices.”
> 

---

## **1.8 System Requirements**

### **Questions**

- **Expected number of users?**
    
    Version 1 is in the prototype stage, so the initial number of users is expected to be low. However, the system should be designed to scale and handle up to **1,000 concurrent users per minute** smoothly in future versions without performance issues.
    
- **Response time expectations?**
    - Search results should be returned within **1 second** under normal conditions.
    - Full page loads should complete within **2 seconds**.
- **Availability requirements?**
    
    The system should maintain approximately **99% uptime** for Version 1. Planned maintenance can occur during off-peak hours, and occasional downtime is acceptable during early development.
    
- **Storage needs?**
    
    The system must store ingredient data, nutrition facts, calories, research references, and user authentication data. Initial storage requirements are estimated at **1–5 GB**, with additional capacity reserved for logs and future feature expansion.
    

---

### **Suggested Answer Guide**

> “The system should support up to 1,000 concurrent users with search responses under 1 second, page load times under 2 seconds, and approximately 99% availability.”
> 

---

## **1.9 Software Evolution Roadmap**

### **Questions & Suggested Roadmap**

- **What is Version 1? (Foundation — Make it Work)**
    - Responsive web application
    - User authentication
    - Searchable list of natural ingredients
    - Ingredient details including:
        - Proven benefits
        - Nutrition facts (including calories)
        - Risks & warnings
        - “Excellent for” / “Caution if”
        - Dosage/portion guidance
    - Trusted research sources linked
    - Basic error handling and accessibility
    - Deployed on AWS with basic monitoring

---

- **What improves in Version 2? (Refinement — Make it Better)**
    - Improved UI/UX and faster performance
    - Advanced search and filtering
    - User preferences (diet type, goals)
    - Basic meal planning (non-AI, rule-based)
    - Doctor/nutritionist directory (view-only)
    - Content moderation tools for admins

---

- **When does AI appear? (Version 3 — Make it Smart)**
    - AI-assisted ingredient and recipe suggestions
    - Bot consultation for general health questions
    - Risk/safety analysis based on user input
    - Personalized recommendations using usage patterns
    - Optional escalation to verified professionals

---

- **When does mobile appear? (Version 4 — Make it Accessible Everywhere)**
    - Mobile app (React Native or similar)
    - Sync with web accounts
    - Push notifications (tips, reminders)
    - Offline viewing for saved ingredients

---

### **Suggested Answer Guide**

> Version 1: Core web platform with trusted ingredient data
> 
> 
> **Version 2:** UX improvements and structured meal planning
> 
> **Version 3:** AI-driven personalization and consultation
> 
> **Version 4:** Mobile app expansion
> 

---

## **1.10 Monetization Strategy (Suggested & Improved)**

### **Questions**

- **Does this web/app have premium features?**
    
    Yes. Premium features are planned for advanced and value-added functionality, including:
    
    - Editing and sharing personalized recipes
    - Advanced meal planning tools
    - Consultation with doctors or nutritionists
    - Priority or extended AI-based recommendations

---

- **Is it free?**
    
    Yes. Core features will remain free, including:
    
    - Viewing natural food and ingredient information
    - Access to verified research sources
    - Basic search and filtering
    - Basic AI or rule-based recipe suggestions (limited usage)

This ensures accessibility and encourages user growth.

---

- **Does it run ads?**
    
    Yes, but **only for free users**. Premium users will have an **ad-free experience**.
    

---

### **Suggested Answer Guide**

> “The application follows a freemium model. Core features are free and ad-supported, while premium features include advanced meal planning, recipe editing and sharing, AI-powered personalization, and professional consultations. Premium users experience no ads.”
> 

---

# **PHASE 2 — Software Requirements Specification (SRS)**

---

## **2.1 Functional Requirements**

### **Core Functions (Version 1)**

1. **Guest Access (No Mandatory Login)**
    - **Trigger:** User visits the website
    - **Output:** User can browse ingredient information without signing in
    
    > The system shall allow users to browse ingredient lists and view ingredient details without requiring authentication.
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

# **PHASE 3 — Software Design**

## 3.1 High-Level Design (HLD)

**Questions**

- What architecture style?
- What are major modules?
- How does data flow?

---

## 3.2 Low-Level Design (LLD)

**Questions**

- Class structures?
- Database schema?
- API endpoints?
- Core algorithms?
- Pseudocode for logic?

---

# **PHASE 4 — System Modeling (UML)**

## 4.1 Context Model

Use Case Diagram

**Question:** Who interacts with what?

## 4.2 Interaction Model

Sequence Diagram

**Question:** What happens step-by-step?

## 4.3 Structural Model

Class Diagram / ER Diagram

**Question:** How is data structured?

## 4.4 Behavioral Model

State Machine Diagram

**Question:** How does state change over time?

---

# **PHASE 5 — SDLC Strategy**

## 5.1 SDLC Selection

**Questions**

- Is the scope stable?
- Is feedback frequent?
- Is risk high?

**Suggested Guide**

> Solo Dev Default:
> 
> 
> Waterfall planning + Agile development + Incremental releases
> 

---

# **PHASE 6 — Deployment, Operations & Cost**

## 6.1 Deployment Strategy

**Questions**

- Manual or automated?
- Environments?
- Rollback strategy?

---

## 6.2 CI/CD Pipeline

**Questions**

- When do builds trigger?
- Automated tests?
- Deployment automation?

**Suggested Guide**

> GitHub Actions → AWS ECS / EC2
> 

---

## 6.3 Monitoring & Logging

**Questions**

- What metrics matter?
- Error tracking?
- Alerting rules?

**Suggested Guide**

> CloudWatch + logs + alarms
> 

---

## 6.4 Cost Estimation (AWS)

**Questions**

- Monthly cost?
- Cost per user?
- Budget alerts?

**Suggested Guide**

> Set AWS Budget alerts early
> 

---

# **PHASE 7 — Maintenance & Sustainability**

## 7.1 Technical Debt Plan

**Questions**

- What shortcuts exist?
- When will they be fixed?

---

## 7.2 Documentation Strategy

**Questions**

- README completeness?
- API docs?
- Architecture docs?
- Setup instructions?

---

## 7.3 Exit or Handover Plan

**Questions**

- Can another dev run this?
- Are credentials transferable?
- Is infra reproducible?
- Can project be paused or sold?

---

# **PHASE 8 — Final Review Checklist**

- Problem is clear
- Scope is controlled
- Version 1 is minimal
- Costs are known
- Security is planned
- Future is mapped

---

## **Dann Framework Law**

> Code is cheap. Clarity is expensive. Pay for clarity first.
> 

---

## **1.3 Project Goals (Version 1 Focus)**

### **Questions**

- **What is the single most important outcome?**
    
    A basic modern website that provides a working list of natural ingredients with detailed information, including:
    
    - Proven Benefits
    - Risks & Warnings
    - “Excellent For”
    - “Caution If”
    - Nutrition Facts
    - How to Eat (Dosage/Portion)
    - Pro Tips
- **What must the system do *perfectly*?**
    
    Display a comprehensive and accurate list of natural ingredients, clearly showing their Proven Benefits and Nutrition Facts.
    
- **What can be ignored for now?**
    
    Recipe suggestions for each ingredient can be postponed to future versions.
    

---

### **Suggested Answer Guide**

> “Version 1 succeeds if users can easily view and search a list of natural ingredients, with accurate benefits and nutrition information, even if recipe suggestions are not yet available.”
