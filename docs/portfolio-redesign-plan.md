# Portfolio Redesign Plan

## Goal

Turn `macancela.tech` into a personal software engineering portfolio for Karina Macancela: a full-stack software engineer and technical product leader in NYC with 9 years of experience.

The site should increase interview opportunities by making it easy for recruiters, hiring managers, and engineering peers to understand:

- who Karina is
- what level she operates at
- what kinds of products and systems she builds
- what her current projects show about her taste and technical ability
- how to reach her quickly

## Positioning

Primary message:

> Karina Macancela is a senior software engineer in NYC with 9 years of experience building thoughtful, performant web applications.

Resume-informed version:

> Karina Macancela is a full-stack software engineer and technical product leader in NYC with 9 years of experience building scalable SaaS products, AI-powered analytics platforms, and secure enterprise systems.

Tone:

- senior and credible
- warm and human
- visually refined, not generic developer-dark-mode
- creative without making the work hard to scan
- personal enough to be memorable

Design thesis:

> Editorial, nature-inflected engineering portfolio: soft visual atmosphere, sharp proof of seniority.

Key experience signals from resume:

- full-stack software engineering
- technical product leadership
- scalable SaaS products
- AI-powered analytics platforms
- enterprise and Fortune 500 clients
- multi-tenant architecture
- secure system design
- compliance-critical delivery
- cross-functional leadership
- measurable product and business outcomes

Target role direction:

- Senior Software Engineer
- Full-Stack Software Engineer
- Frontend-heavy product engineer
- Design/product-minded platform engineer
- Primary emphasis: full-stack and frontend-leaning software engineering roles
- Portfolio story: lead with full-stack credibility, then reinforce frontend/product taste through projects and UI craft

## Primary Calls To Action

The site should repeatedly expose these actions without feeling pushy:

- View/download resume
- Visit LinkedIn: `linkedin.com/in/kmacancela`
- Visit GitHub: `github.com/kmacancela`
- Contact Karina

Resume should be a first-class link in the hero, nav/footer, and contact section.

Use `karymacancela@gmail.com` as the public email for now. Replace or supplement it with a domain email later.

Keep phone number off the public site.

Resume source:

- source file: `/Users/karina/Documents/Job Hunt/SWE/Temp folder/Karina Macancela - Resume.pdf`
- implementation should copy this PDF into `public/` with a web-safe filename so users can download it
- suggested public path: `/Karina-Macancela-Resume.pdf`

Brand decision:

- lead the site with `Karina Macancela`, not `Macancela Tech`
- keep `macancela.tech` as the domain/signature mark
- avoid presenting `Macancela Tech` as a consultancy brand during the job-search version of the site

## Recommended Information Architecture

V1 routes:

- `/` - Home
- `/experience` - Work history and impact
- `/projects` - Current and selected projects
- `/about` - Bio, values, hobbies
- `/contact` - Email, LinkedIn, GitHub, resume

Future route:

- `/blog` - Writing and project notes

`/services` should be removed or redirected to `/projects`.

## Homepage Plan

The homepage should act as the main interview funnel.

Sections:

1. Hero
   - name
   - role
   - NYC
   - 9 years of experience
   - one clear positioning sentence
   - CTA row: Resume, LinkedIn, GitHub, Contact

2. Proof strip
   - years of experience
   - core stack: TypeScript, React, React Native, Vue.js, Node.js, PostgreSQL
   - product areas or domains: SaaS, AI analytics, secure enterprise systems, healthcare, marketing attribution
   - work style signal, such as frontend systems, UX quality, performance, accessibility, or cross-functional product work

3. Featured current projects
   - 2-4 strongest projects
   - each with status, short description, tech stack, and links

4. Selected experience preview
   - condensed timeline or recent roles
   - link to full Experience page

5. Personal signal
   - short hobbies/interests section
   - keep this warm and brief

6. Contact CTA
   - simple prompt to reach out
   - email, LinkedIn, resume

## Experience Page Plan

The Experience page should read like a stronger, more visual resume.

Each role should include:

- company
- role/title
- dates
- location or remote
- product/team context
- 3-5 impact bullets
- technologies
- leadership/collaboration scope where applicable

Impact bullets should favor evidence:

- shipped X
- improved Y
- led Z
- reduced/increased/measured something
- collaborated across product/design/backend/stakeholders

Avoid vague bullets like "worked on frontend features" unless tied to scope or impact.

Resume-derived experience entries:

1. Ai Media Group - Senior Software Engineer
   - New York, NY
   - March 2020 - August 2025
   - strongest portfolio angle: senior full-stack ownership of Atrilyx, AI-powered analytics dashboards, SaaS platform migration, multi-tenant architecture, SSO portal, Power BI embedding, plugin system
   - proof points:
     - transformed an AngularJS internal admin tool into a market-ready Vue.js SaaS product
     - led end-to-end development of Atrilyx for 300+ SaaS clients and 10M+ daily events
     - built a React SSO portal for 120+ employees and reduced onboarding time by 40%
     - architected client-scoped multi-tenant data isolation
     - engineered secure Power BI embed token auth and row-level security

2. Aetna - Technical Project Manager
   - Hartford, CT
   - March 2018 - August 2019
   - strongest portfolio angle: compliance-critical delivery, Agile leadership, stakeholder translation, HIPAA/PII audit ownership
   - proof points:
     - led concurrent Agile projects from roadmap through production launch
     - conducted HIPAA and PII compliance audits throughout delivery
     - bridged engineering, product, design, and executive stakeholders

3. Aetna - Java Developer
   - Hartford, CT
   - April 2017 - March 2018
   - strongest portfolio angle: backend modernization, secure mobile auth, microservices migration
   - proof points:
     - contributed to monolith-to-microservices migration on a 12-engineer scrum team
     - helped accelerate delivery speed by 75%
     - implemented OAuth2 for sensitive PII in Aetna's mobile app
     - proposed a structured migration plan with rollback checkpoints

4. City University of New York - IT College Assistant
   - New York, NY
   - September 2013 - November 2016
   - strongest portfolio angle: early technical foundation and support experience while completing CS/applied math degree

## Projects Page Plan

Projects should show craft, judgment, and technical range.

Each project should include:

- title
- status: Active, Shipped, Exploring, Paused
- short summary
- problem or motivation
- Karina's role
- technical highlights
- tech stack
- GitHub link
- live link, case study link, or screenshot when available

Project categories can include:

- current projects
- selected shipped work
- experiments/prototypes

Resume-derived current project:

1. Kary Waves App
   - status: Active / TestFlight beta
   - stack: React Native, TypeScript, Fastify, PostgreSQL
   - timeline: March 2026 - Present
   - summary: mobile app for a NYC-based apparel manufacturing company
   - capabilities:
     - client project progress updates
     - in-app team messaging
     - booking management
     - centralized project files
   - portfolio angle: current full-stack/mobile product work with real users, iterative beta feedback, and planned App Store launch
   - lead featured project for V1

Potential work-sample projects derived from experience:

- Atrilyx AI Analytics Platform
- Company-wide SSO Portal
- Multi-Tenant Data Isolation Architecture
- Power BI Embedded Reporting And Permissions
- Aetna Microservices Migration
- Secure OAuth2 Mobile Authentication

Potential future project:

- Fork Updated
  - source: GitHub
  - status: consider later
  - note: evaluate after V1 once we can review the repository and decide how it supports the target role story

## About Page Plan

The About page should make Karina feel real without diluting the engineering story.

Sections:

- short bio
- what kind of engineering work she enjoys
- working style and values
- NYC note
- hobbies

Hobbies to include:

- biking
- yoga
- meditation
- hiking
- birding
- painting
- fashion design
- swimming
- fencing

Keep hobbies visually expressive but compact.

## Contact Page Plan

The Contact page should be simple and direct.

Replace the current client-intake form with:

- email link
- LinkedIn link
- GitHub link
- resume link/download
- optional short message form that opens `mailto:`

Remove consulting-specific fields:

- company
- service
- brand project

Suggested form fields if keeping a form:

- name
- email
- message

## Blog Plan

Blog is future-facing and should not block V1.

For V1:

- keep route hidden from primary nav
- optionally keep a placeholder page
- do not make it look empty or abandoned

Future topics:

- project writeups
- engineering notes
- frontend systems
- accessibility and performance
- career reflections
- UI craft

## Data Model Changes

Recommended files:

- `src/data/siteConfig.ts`
- `src/data/profileLinks.ts`
- `src/data/experience.ts`
- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/hobbies.ts`
- `src/data/blogPosts.ts`

Recommended type changes:

- replace `Service` with `Project`
- replace `CaseStudy` with either `Project` or `WorkSample`
- update `ContactFormData` to remove consulting fields
- add `ProfileLink` type for LinkedIn, GitHub, resume, and email

Recommended skills taxonomy from resume:

- Languages: JavaScript, TypeScript, Python, Java, SQL
- Frontend: React, React Native, Vue.js, Angular
- Backend: Node.js, REST APIs, OAuth2, JWT, Fastify
- Databases: PostgreSQL, MySQL, MongoDB, Databricks
- Cloud and DevOps: Microsoft Azure, AWS, Docker, CI/CD, Git
- Testing and Tools: Jira, Jest, SuperTest, Selenium, Postman, Expo, GTM, Power BI, Claude, Codex

Education:

- Bachelor of Science in Computer Science and Applied Mathematics
- CUNY Queens College
- June 2016

## Visual Direction

Keep:

- earthy/watery palette
- organic imagery
- Ogg display typography
- warm, creative feel
- dark mode support

Refine:

- make the first viewport read as senior SWE, not studio/agency
- use project artifacts, logos, screenshots, or tasteful interface fragments as proof
- keep layouts scannable for recruiters
- avoid generic developer motifs like neon terminals or excessive monospace
- avoid making every section a card grid

Possible signature move:

> A quiet "field notes" motif that pairs engineering evidence with personal craft: timeline entries, project annotations, and small status markers that feel editorial rather than corporate.

## Implementation Phases

### Phase 1 - Content Foundation

- Rewrite `siteConfig`
- Add profile links
- Copy resume PDF into `public/` and add resume asset/link
- Replace service data with project data
- Update experience data with real roles
- Add hobbies data
- Add skills data based on resume taxonomy

### Phase 2 - Routing And Navigation

- Add `/experience`
- Rename `/services` to `/projects`
- Update nav links
- Update footer links
- Decide whether `/blog` stays hidden until content exists

### Phase 3 - Page Redesign

- Redesign homepage
- Build Projects page
- Build Experience page
- Rewrite About page
- Simplify Contact page

### Phase 4 - Polish And Trust Signals

- Update SEO metadata
- Replace Vite favicon
- Add resume download behavior
- Add Open Graph image later
- Clean duplicate social icon code
- Restore Motion or update docs if staying with CSS animations

### Phase 5 - Verification

- Run `npm run build`
- Run `npm run lint`
- Run `npm run lint:quality`
- Review desktop and mobile in browser
- Check dark mode
- Check resume, LinkedIn, GitHub, and email links

## Decisions

- Link the provided resume PDF.
- Copy the resume PDF into `public/` so it can be downloaded from the deployed site.
- Use `karymacancela@gmail.com` as the public email for now.
- Keep phone number hidden from the public website.
- Lead featured project: Kary Waves App.
- Consider Fork Updated later as an additional GitHub project.
- Publicly discuss Atrilyx for Ai Media Group work.
- Target full-stack and frontend-leaning SWE roles.
- Lead the site with `Karina Macancela`; keep `macancela.tech` as the domain/signature, not the primary brand.

## Remaining Open Questions

- Should the resume link text say "Resume", "Download Resume", or "View Resume"?
- Should Atrilyx screenshots/logos be used, or should the project be represented through anonymized interface fragments?
- Should the future domain email replace Gmail everywhere, or appear alongside Gmail during transition?
