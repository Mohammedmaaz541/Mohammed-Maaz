# Build a Premium Dynamic Developer Portfolio for Mohammed Maaz

You are an expert senior frontend engineer, UI/UX designer, and full-stack architect.

Build a **production-quality, modern, highly interactive personal portfolio website** for:

**Mohammed Maaz**

Primary positioning:

> Full-Stack Developer | AI & Automation Engineer | Cloud & DevOps Engineer

The website must feel like the portfolio of a serious software engineer and product builder — **not a generic template portfolio**.

The design should communicate:

* Full-stack development
* AI-powered application development
* AI agents and automation
* Cloud architecture
* DevOps
* DevSecOps
* Infrastructure as Code
* Scalable architecture
* Real-world projects
* Continuous learning

---

# 1. Core Objective

Create a personal developer portfolio that showcases Mohammed Maaz's:

* About/profile
* Technical skills
* Professional experience
* Projects
* Certifications
* Achievements
* Education
* Blogs/articles
* GitHub/open-source work
* Resume
* Contact information

The website must be **dynamic**.

I should be able to add, edit, remove, and update:

* Projects
* Skills
* Certifications
* Achievements
* Blog posts
* Experience
* Education

WITHOUT modifying the UI components.

Use a centralized data architecture.

---

# 2. Recommended Technology Stack

Use:

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Framer Motion
* Lucide React icons

### Backend / Data

Prefer a simple architecture initially:

* Next.js API routes / Server Actions
* PostgreSQL
* Prisma ORM

Structure the application so that the database can easily be replaced or expanded later.

### Authentication

Create an admin authentication system.

Only the authenticated administrator can:

* Create projects
* Edit projects
* Delete projects
* Create certifications
* Edit certifications
* Delete certifications
* Create achievements
* Edit achievements
* Delete achievements
* Create blog posts
* Edit blog posts
* Delete blog posts
* Manage skills
* Manage experience
* Manage education

Public visitors must have read-only access.

---

# 3. Visual Design

Create a premium developer-focused visual identity.

Style:

* Modern
* Minimal
* Professional
* Futuristic
* Technical
* Elegant
* Dark-first
* Excellent typography
* Subtle animations
* Lots of whitespace
* Strong visual hierarchy

Avoid:

* Generic portfolio templates
* Excessive gradients
* Excessive glassmorphism
* Huge unnecessary animations
* Cartoon-style developer illustrations
* Overloaded UI
* Random stock images

Use subtle visual elements inspired by:

* Code editors
* Cloud architecture
* Terminal interfaces
* Git commits
* Infrastructure diagrams
* AI systems
* Developer tooling

The design should feel similar in quality to a premium SaaS/product website.

---

# 4. Theme

Implement:

### Dark mode

Primary background:

Very dark navy / near-black.

Use subtle surfaces for cards.

Accent colors can include:

* Electric blue
* Cyan
* Violet

Do not overuse accent colors.

### Light mode

Also support a polished light theme.

Add a theme switcher.

Persist the user's theme preference.

---

# 5. Navigation

Create a sticky responsive navigation bar.

Desktop:

Logo:

> Mohammed Maaz

Navigation:

* Home
* About
* Skills
* Experience
* Projects
* Certifications
* Achievements
* Blog
* Contact

Right side:

* GitHub icon
* LinkedIn icon
* Resume button
* Theme toggle

Mobile:

Use a clean hamburger navigation.

Navigation should smoothly scroll to sections.

---

# 6. HERO SECTION

Create a strong hero section.

Headline:

> Hi, I'm Mohammed Maaz.

Main title:

> Full-Stack Developer
> AI & Automation Engineer
> Cloud & DevOps Engineer

Supporting paragraph:

> I build scalable web applications, AI-powered solutions, automated workflows, and secure cloud infrastructure that solve real business problems.

Use animated text or subtle typing animation for:

* Full-Stack Developer
* AI Engineer
* Cloud & DevOps Engineer
* DevSecOps Engineer

Add CTA buttons:

### Primary

> View My Work

### Secondary

> Let's Connect

Additional button:

> Download Resume

Show GitHub and LinkedIn links.

Add a subtle animated technical background.

Possible background elements:

```text
React
Next.js
Node.js
Python
AI
Azure
Terraform
Docker
Kubernetes
CI/CD
```

Keep the background subtle.

---

# 7. HERO VISUAL

Create a unique developer visual instead of a generic profile illustration.

Possible design:

A floating terminal/code window containing:

```bash
$ whoami

Mohammed Maaz

$ skills

Full-Stack
AI
Automation
Azure
Terraform
DevOps
DevSecOps

$ approach

Understand
   ↓
Design
   ↓
Build
   ↓
Automate
   ↓
Secure
   ↓
Deploy
   ↓
Scale
```

Animate the terminal subtly.

---

# 8. ABOUT SECTION

Title:

> About Me

Content should communicate that Mohammed combines software development, AI, automation, and cloud engineering.

Use:

> I'm passionate about building technology that solves real business problems.

Explain that he works across the complete lifecycle:

```text
Idea
 ↓
Architecture
 ↓
Development
 ↓
AI Integration
 ↓
Automation
 ↓
Security
 ↓
Cloud Infrastructure
 ↓
CI/CD
 ↓
Deployment
 ↓
Monitoring
```

Include a professional profile card.

Highlight:

* Full-Stack Development
* AI & Generative AI
* Automation
* Cloud & DevOps
* DevSecOps

---

# 9. ENGINEERING APPROACH

Create a visually impressive section called:

> How I Build

Show a 7-step process:

1. Understand
2. Design
3. Build
4. Automate
5. Secure
6. Deploy
7. Scale

Each step should have:

* Icon
* Short description
* Hover animation

---

# 10. SKILLS SECTION

Create a dynamic skills section.

Categories:

### Languages

* JavaScript
* Python
* HTML5
* CSS3

### Frontend

* React.js
* Next.js
* Redux
* React Router
* Tailwind CSS
* PrimeReact

### Backend

* Node.js
* Express.js
* REST APIs
* JWT
* RBAC

### AI & Generative AI

* Generative AI
* LLMs
* Prompt Engineering
* RAG
* LangChain
* LangGraph
* AI API Integration
* AI-powered Applications

### Database

* MongoDB
* MySQL
* Prisma ORM

### Cloud & DevOps

* Azure
* Terraform
* Docker
* Kubernetes
* AKS
* Git
* GitHub
* GitHub Actions
* Azure DevOps
* CI/CD

### DevSecOps

* CodeQL
* Snyk
* GitLeaks
* Checkov
* TFLint
* tfsec
* Terratest
* Infracost

### Monitoring

* Azure Monitor
* Log Analytics
* Application Insights
* Prometheus
* Grafana

Make skills dynamic.

Each skill should have:

```typescript
{
  name,
  category,
  icon,
  level,
  yearsOfExperience,
  featured
}
```

Allow the admin to add/edit/delete skills.

---

# 11. EXPERIENCE SECTION

Create a timeline-style experience section.

Experience:

## DevOps Insider

### DevOps & Infrastructure Engineer Intern

February 2026 – August 2026

Highlight:

* Azure infrastructure
* Terraform
* Terraform modules
* Azure DevOps
* GitHub Actions
* CI/CD
* IAM
* Azure RBAC
* Managed Identity
* Azure Key Vault
* Azure Policy
* Microsoft Defender for Cloud
* Azure Monitor
* Prometheus
* Grafana

Also show:

## DevOps Insider

### Backend Developer Intern

February 2026 – August 2026

Highlight:

* Node.js
* Express.js
* REST APIs
* MongoDB
* Mongoose
* JWT
* RBAC
* API testing
* MVC architecture
* Git/GitHub

Also show:

## Innomatics Research Labs

### Full-Stack Development Intern

September 2024 – November 2024

Highlight:

* MERN stack
* React
* Tailwind CSS
* REST APIs
* Axios
* CRUD
* MVC
* Responsive UI

Use expandable experience cards.

---

# 12. PROJECTS SECTION

This must be one of the most impressive parts of the website.

Create a project grid with filters.

Filters:

* All
* Full Stack
* AI
* Cloud
* DevOps
* DevSecOps
* Kubernetes
* SaaS

Each project card contains:

* Project image/architecture visual
* Project name
* Short description
* Technology tags
* Category
* GitHub link
* Live demo link
* Case study link

Hover animation should reveal additional information.

---

# 13. PROJECT DATA

Initially populate the portfolio with these projects.

## Project 1

### Automobile Roadside Service Platform

Tech:

* Next.js
* Node.js
* MongoDB
* Prisma ORM
* DigitalOcean Spaces
* PrimeReact

Description:

A full-stack platform connecting customers with mechanics for on-demand roadside assistance and vehicle repair.

Features:

* Service requests
* Vehicle information
* Breakdown description
* Location
* Mechanic matching
* Real-time notifications
* Mechanic onboarding
* Profile management
* Service catalog
* Booking management
* Service history
* RBAC
* REST APIs

---

# 14. PROJECT 2

### Travel & Visa Services Platform

Subtitle:

> Multi-Tenant B2B SaaS

Technology:

* Next.js
* MongoDB
* Prisma
* DigitalOcean Spaces
* PrimeReact

Features:

* Marketplace
* CRM
* Enquiry management
* Draft packages
* Booking management
* Order management
* Wallet
* Escrow
* Document management
* Billing
* Invoicing
* WhatsApp notifications

Roles:

* Super Admin
* Admin
* Vendor
* Agency Owner
* Agency Staff

Highlight:

> Multi-tenant architecture and secure role-based access control.

---

# 15. PROJECT 3

### Brain Stroke Detection System

Subtitle:

> AI Healthcare Application

Technology:

* React.js
* Flask
* SQLite
* Python
* CNN
* Deep Learning

Features:

* Brain scan upload
* AI prediction
* Result visualization
* React frontend
* Flask backend

Add a badge:

> Research Project

Also mention:

> Research paper published.

---

# 16. PROJECT 4

### Enterprise Azure Landing Zone

Subtitle:

> Production-Grade Cloud Infrastructure Automation

Technology:

* Azure
* Terraform
* Azure Front Door
* Application Gateway
* WAF
* Azure Load Balancer
* Azure Bastion
* VNet
* NSG
* Route Tables
* Private Endpoints
* Private DNS
* Azure Key Vault
* Azure Monitor
* Log Analytics
* Application Insights
* Recovery Services Vault

Highlight architecture:

```text
Users
  ↓
Azure Front Door
  ↓
Application Gateway + WAF
  ↓
Web Tier
  ↓
Application Tier
  ↓
Database Tier
```

Show an architecture diagram.

Also highlight:

* Terraform modules
* Remote state
* High availability
* Governance
* RBAC
* Managed Identity
* Disaster recovery
* Monitoring

---

# 17. PROJECT 5

### Enterprise CI/CD & DevSecOps Pipeline

Technology:

* GitHub Actions
* Azure DevOps
* Terraform
* TFLint
* tfsec
* Checkov
* Infracost
* GitLeaks
* Terratest
* SonarQube
* Docker
* Azure Container Registry

Pipeline visualization:

```text
Developer
   ↓
Feature Branch
   ↓
Pull Request
   ↓
CI
   ↓
Code Quality
   ↓
Security Scan
   ↓
Terraform Validation
   ↓
Terraform Plan
   ↓
Approval
   ↓
Deployment
   ↓
Monitoring
```

Make this an interactive pipeline visualization.

---

# 18. PROJECT 6

### Enterprise E-Commerce Platform

Subtitle:

> Azure Cloud-Native Microservices & DevOps

Technology:

* Azure
* AKS
* Docker
* Kubernetes
* Terraform
* ACR
* Helm
* Prometheus
* Grafana
* Azure Monitor
* Log Analytics

Highlight:

* Microservices
* Kubernetes
* Horizontal Pod Autoscaler
* ReplicaSets
* Liveness probes
* Readiness probes
* Rolling deployments
* Zero-downtime deployments
* PV/PVC
* Storage Classes
* Kubernetes RBAC
* Azure RBAC
* Managed Identity
* Key Vault

---

# 19. PROJECT CASE STUDY PAGE

Every project should have a dedicated dynamic route:

```text
/projects/[slug]
```

The case study page should contain:

1. Overview
2. Problem
3. Solution
4. Architecture
5. Technologies
6. Key Features
7. Challenges
8. Engineering Decisions
9. Security
10. Scalability
11. Deployment
12. Monitoring
13. Results
14. GitHub
15. Live Demo

Use diagrams and code snippets where appropriate.

---

# 20. CERTIFICATIONS

Create a dynamic certification section.

Initial certificates:

* Azure Fundamentals (AZ-900)
* Terraform for Infrastructure as Code
* Cloud & DevOps Fundamentals
* Web Development / MERN Stack Development
* MERN Full Stack and Mobile App Development
* AI-Powered Web and Mobile App Development

Each certification should support:

```typescript
{
  title,
  issuer,
  issueDate,
  credentialId,
  credentialUrl,
  image,
  skills
}
```

Display them as elegant certification cards.

Allow admin CRUD.

---

# 21. ACHIEVEMENTS

Create a dynamic achievements section.

Initial achievements:

### HackPrix

Participated in HackPrix.

### Agentathon

Participated in Agentathon.

### Spark Hackathon

Participated in Spark Hackathon.

### Research Publication

Published research paper on:

> Brain Stroke Detection Using Deep Learning

Each achievement supports:

```typescript
{
  title,
  description,
  date,
  organization,
  image,
  link,
  featured
}
```

---

# 22. BLOG SECTION

Create a complete dynamic blog system.

Route:

```text
/blog
/blog/[slug]
```

Admin can:

* Create article
* Edit article
* Delete article
* Publish/unpublish
* Add tags
* Add cover image
* Add SEO metadata

Blog fields:

```typescript
{
  title,
  slug,
  excerpt,
  content,
  coverImage,
  tags,
  published,
  publishedAt,
  readingTime,
  author
}
```

Blog categories:

* Full Stack
* React
* Next.js
* Node.js
* AI
* Generative AI
* AI Agents
* Azure
* Terraform
* DevOps
* DevSecOps
* Kubernetes
* CI/CD

Create an excellent Markdown/MDX-style reading experience.

---

# 23. BLOG ADMIN EDITOR

Create a beautiful admin editor.

Support:

* Markdown
* Headings
* Code blocks
* Syntax highlighting
* Images
* Lists
* Links
* Tables
* Quotes

Add:

* Draft
* Preview
* Publish

---

# 24. GITHUB SECTION

Create a GitHub section.

Show:

* GitHub profile
* Repository cards
* Languages
* Stars
* Forks
* Recent repositories

Use GitHub API when possible.

Profile:

```text
github.com/Mohammedmaaz541
```

Make GitHub integration configurable through environment variables.

Do not hardcode API secrets.

---

# 25. RESUME SECTION

Add a dedicated resume section.

Buttons:

> Download Resume

> View Resume

Use the uploaded resume information as the initial portfolio content.

Create a clean resume preview.

---

# 26. CONTACT SECTION

Create a premium contact section.

Title:

> Let's Build Something Impactful

Description:

> Whether you need a web application, SaaS platform, AI agent, automated workflow, API integration, or cloud infrastructure, let's build a reliable solution together.

Contact form:

* Name
* Email
* Subject
* Message

Add:

* Email
* LinkedIn
* GitHub

Implement proper validation.

Add spam protection.

---

# 27. ADMIN DASHBOARD

Create:

```text
/admin
```

Dashboard sections:

* Overview
* Projects
* Skills
* Certifications
* Achievements
* Experience
* Education
* Blog
* Messages
* Settings

Dashboard should show statistics:

```text
Projects
Skills
Certificates
Achievements
Blog Posts
Messages
```

Create CRUD interfaces.

Example:

```text
Projects

[ + Add Project ]

Project Name     Status     Category      Actions

Roadside Service Published Full Stack    Edit | Delete
Travel SaaS      Published SaaS          Edit | Delete
Stroke AI        Published AI            Edit | Delete
Azure Landing    Published Cloud         Edit | Delete
```

---

# 28. DATABASE SCHEMA

Create Prisma models for:

```text
Admin
Project
ProjectTechnology
Skill
SkillCategory
Experience
Certification
Achievement
BlogPost
BlogTag
Education
ContactMessage
```

Use proper relationships.

Add timestamps:

```text
createdAt
updatedAt
```

Use slugs for projects and blogs.

---

# 29. API ARCHITECTURE

Create clean APIs.

Examples:

```text
GET    /api/projects
POST   /api/projects
GET    /api/projects/:id
PUT    /api/projects/:id
DELETE /api/projects/:id

GET    /api/skills
POST   /api/skills
PUT    /api/skills/:id
DELETE /api/skills/:id

GET    /api/certifications
POST   /api/certifications
PUT    /api/certifications/:id
DELETE /api/certifications/:id

GET    /api/achievements
POST   /api/achievements
PUT    /api/achievements/:id
DELETE /api/achievements/:id

GET    /api/blog
POST   /api/blog
PUT    /api/blog/:id
DELETE /api/blog/:id

POST   /api/contact
```

Secure admin APIs.

Never expose admin operations publicly.

---

# 30. RESPONSIVE DESIGN

The website must work perfectly on:

* Desktop
* Laptop
* Tablet
* Mobile

Pay special attention to:

* Navigation
* Project cards
* Timeline
* Architecture diagrams
* Skills
* Blog
* Admin dashboard

No horizontal scrolling.

---

# 31. ANIMATIONS

Use Framer Motion.

Animations should be subtle and professional.

Include:

* Fade-in
* Slide-up
* Staggered cards
* Hover effects
* Project card transitions
* Timeline animations
* Terminal animation
* Skill animations
* Page transitions

Do NOT over-animate the site.

Respect:

```text
prefers-reduced-motion
```

---

# 32. SEO

Implement complete SEO.

For the homepage:

Title:

> Mohammed Maaz | Full-Stack Developer | AI & Cloud DevOps Engineer

Description:

> Mohammed Maaz is a Full-Stack Developer, AI & Automation Engineer, and Cloud DevOps Engineer building scalable web applications, AI-powered solutions, automation workflows, and secure Azure infrastructure.

Implement:

* Open Graph
* Twitter metadata
* Canonical URLs
* Sitemap
* Robots.txt
* Structured data
* Project metadata
* Blog metadata

---

# 33. PERFORMANCE

Optimize for:

* Lighthouse
* Core Web Vitals
* SEO
* Accessibility
* Performance

Use:

* Next.js Image
* Lazy loading
* Code splitting
* Server components where appropriate
* Dynamic imports
* Optimized fonts

Target:

```text
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

---

# 34. ACCESSIBILITY

Follow WCAG best practices.

Include:

* Semantic HTML
* Keyboard navigation
* Focus states
* ARIA labels
* Good contrast
* Accessible forms
* Accessible navigation
* Reduced motion support

---

# 35. SECURITY

Because this portfolio has an admin dashboard, implement:

* Secure authentication
* Password hashing
* Session management
* Input validation
* API authorization
* Rate limiting
* CSRF protection where applicable
* Secure HTTP headers
* Environment variables
* No secrets in source code
* Sanitization for blog content

---

# 36. PROJECT ARCHITECTURE

Use a clean scalable folder structure.

Example:

```text
src/
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   ├── certifications/
│   ├── achievements/
│   ├── contact/
│   └── admin/
│
├── components/
│   ├── layout/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── experience/
│   ├── projects/
│   ├── certifications/
│   ├── achievements/
│   ├── blog/
│   ├── contact/
│   └── ui/
│
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── github.ts
│   └── validations/
│
├── server/
│   ├── actions/
│   └── services/
│
├── prisma/
│   └── schema.prisma
│
└── types/
```

---

# 37. CONTENT MANAGEMENT PRINCIPLE

VERY IMPORTANT:

Do not hardcode portfolio content directly into UI components.

For example, DO NOT do:

```tsx
<h2>Automobile Roadside Service Platform</h2>
```

inside the component.

Instead:

```tsx
projects.map(project => ...)
```

All content should come from:

```text
Database
     ↓
API / Server Actions
     ↓
Typed data
     ↓
Reusable components
```

This allows the portfolio to evolve without modifying the frontend.

---

# 38. DESIGN SYSTEM

Create reusable components:

```text
Button
Card
Badge
SectionHeading
Container
Modal
Dialog
Input
Textarea
Select
Tabs
Timeline
ProjectCard
SkillCard
CertificationCard
AchievementCard
BlogCard
ExperienceCard
```

Maintain consistent spacing and typography.

---

# 39. FOOTER

Footer should contain:

```text
Mohammed Maaz

Full-Stack Developer
AI & Automation Engineer
Cloud & DevOps Engineer

GitHub
LinkedIn
Email

© 2026 Mohammed Maaz
```

Add:

> Built with Next.js, React, TypeScript and ❤️

---

# 40. IMPORTANT CONTENT RULE

Do not invent:

* Companies
* Certifications
* Job titles
* Degrees
* Technologies
* Project results
* Client names
* Revenue numbers
* Performance percentages
* Fake testimonials

Use only information provided in the supplied resumes and portfolio content.

If information is missing, create an editable placeholder in the admin system rather than inventing information.

---

# 41. PERSONAL BRANDING

The overall positioning should communicate:

```text
I don't just write code.

I build complete systems.
```

The portfolio should show that Mohammed can work across:

```text
Frontend
   ↓
Backend
   ↓
AI
   ↓
Automation
   ↓
Cloud
   ↓
Infrastructure
   ↓
Security
   ↓
CI/CD
   ↓
Monitoring
```

This is the core differentiator.

---

# 42. FINAL EXPERIENCE

When a visitor lands on the website, the experience should communicate within the first 5–10 seconds:

> Mohammed Maaz is a developer who can build the application AND engineer the infrastructure required to run it reliably.

The portfolio should feel like:

**Developer Portfolio + Engineering Portfolio + Technical Case Study Platform**

rather than simply:

**Resume Website.**

---

# 43. DEVELOPMENT REQUIREMENTS

Build the application completely.

Do not stop after creating the homepage.

Implement:

* Public portfolio
* Dynamic content
* Database
* Admin dashboard
* Authentication
* CRUD
* Projects
* Skills
* Certifications
* Achievements
* Experience
* Education
* Blog
* Contact
* GitHub integration
* SEO
* Responsive UI
* Dark/light mode
* Animations
* Validation
* Error states
* Loading states
* Empty states

Seed the database with the portfolio information provided above.

Make the code clean, modular, typed, maintainable, and production-ready.

Before finishing:

1. Run javaScript checks.
2. Run ESLint.
3. Run build.
4. Fix all errors.
5. Test all CRUD operations.
6. Test mobile responsiveness.
7. Test authentication.
8. Test public/private routes.
9. Test forms.
10. Verify SEO metadata.

Do not leave TODO placeholders for core functionality.

The final result should look like a **premium 2026 software engineer portfolio**, suitable for recruiters, engineering managers, clients, and potential collaborators.
