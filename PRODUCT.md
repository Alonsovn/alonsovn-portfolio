# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three equally important audiences, all served from the same surface:

- **Recruiters & hiring managers** — scanning portfolios quickly for engineering depth, leadership evidence, and cultural fit. They look for impact metrics, team scale, and career trajectory.
- **Engineers seeking guidance** — evaluating open source contributions, educational resources, and mentorship availability. They care about real code, documentation quality, and the person's teaching ability.
- **Freelance clients** — assessing technical capability, reliability, and availability for paid projects. They need to trust that this person can deliver production-quality work.

## Product Purpose

Professional portfolio for Alonso Villanueva — full-stack software engineer, open source contributor, tech educator, and founder of EndToEndLabCR and NaranjoSolutions. The portfolio communicates capability, credibility, and availability across all three audiences simultaneously. Success means a visitor leaves with a clear, accurate understanding of who Alonso is, what he's built, and how to work with him.

## Positioning

**Founder + educator angle.** Unlike typical engineer portfolios that list skills and projects, this one tells a founder/leader story — someone who builds organizations (EndToEndLabCR, NaranjoSolutions), creates educational resources, contributes to open source, and amplifies other developers' work. The portfolio itself is proof of production engineering standards: every detail of code quality, performance, and design backs the claims.

A competitor's site couldn't truthfully copy this because the founder/educator evidence (real orgs, real projects with live metrics, real educational content) is verified through external links and living GitHub repositories.

## Operating Context

- Viewed by recruiters scanning many portfolios quickly — must communicate depth within seconds
- Viewed by engineers following links from GitHub, documentation, or community references
- Viewed by potential freelance clients who may spend more time evaluating fit
- Serves as permanent professional identity at alonsovndev.com
- Content is static but should feel alive — real metrics, working links, current information
- Deployed on Cloudflare Workers (see docs/deployment.md)

## Capabilities and Constraints

**Confirmed capabilities:**
- 7-section single-page scroll layout: Hero, About, Skills, Projects, Organizations, Timeline, Contact
- Dark/light theme toggle with system-preference detection and localStorage persistence
- Lazy-loaded sections with staggered Framer Motion animations
- Filterable project grid (All / Open Source / Freelance)
- Vertical timeline of experience entries
- Contact section with email, phone, resume download
- Full SEO: Open Graph, Twitter Cards, JSON-LD Person schema, meta keywords, canonical URL
- WCAG 2.1 AA target with skip-to-content link, focus-visible ring, reduced-motion support

**Non-negotiable constraints:**
- All factual content is locked: organization names, project data, experience entries, skills must remain accurate
- Dark/light theme toggle must remain
- Single-page scroll architecture must remain
- Domain: alonsovndev.com
- Resume: /resume.pdf

**Technical stack (as built):**
- React 19, TypeScript 6, Vite 8
- Ant Design v6 with custom ConfigProvider theme tokens
- CSS Modules for component-level styling
- Framer Motion for animations

## Brand Commitments

- **Name:** Alonso Villanueva
- **GitHub:** Alonsovn
- **Organizations:** EndToEndLabCR (tech education), NaranjoSolutions (freelance), alonsovndev (personal open source)
- **Voice:** Professional, direct, community-oriented. Not corporate — human and approachable.
- **Domain:** alonsovndev.com

## Evidence on Hand

- `src/data/experience.json` — 6 timeline entries (2 org foundations, 3 projects, 1 OSS milestone)
- `src/data/projects.json` — 5 featured projects with categories, tech stacks, real GitHub links, live metrics (stars, contributors)
- `src/data/organizations.json` — 2 organizations with roles, missions, focus areas
- `src/data/skills.json` — 26 skills across 4 categories (Frontend, Backend, DevOps, Tools)
- `public/resume.pdf` — downloadable resume
- `src/assets/hero.png` — hero section image
- Live GitHub repositories linked from all project entries

**Absences (do not fabricate):**
- No testimonials or client quotes
- No press mentions or media coverage
- No case studies with measurable outcomes
- No headshot or personal photo beyond hero graphic

## Product Principles

1. **Evidence over claims** — show real stars, contributors, live GitHub links. Every assertion is verifiable externally.
2. **Founder-first narrative** — every section reinforces the story of someone who builds organizations and communities, not just writes code.
3. **Serve all three without diluting any** — recruiters, engineers, and clients must each find what they need without the surface feeling split or compromised.
4. **The portfolio is proof** — code quality, performance, and design demonstrate the engineering standards the content describes.
5. **Content is sacred** — facts are immutable. Only presentation changes.

## Accessibility & Inclusion

- WCAG 2.1 AA target
- Skip-to-content link present
- :focus-visible ring on interactive elements
- prefers-reduced-motion support for animation
- Custom scrollbar styling for visibility
- SEO meta for screen-reader and crawler compatibility
