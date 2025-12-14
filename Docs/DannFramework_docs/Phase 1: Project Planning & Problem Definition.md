# **Dann Framework** (Current Version: 0)

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
