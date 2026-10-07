# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, all served from the same surface:

- **Recruiters & hiring managers** scanning quickly for engineering depth, technical leadership, and impact.
- **Engineers** evaluating open-source work, architecture decisions, and code quality.
- **Freelance and consulting clients** assessing capability and reliability.

## Product Purpose

Personal portfolio and main hub of Alonso Villanueva's professional brand: **Senior Software Engineer & Team Lead** building scalable platforms, developer tools, and open-source products. A visitor should understand who Alonso is, what he has built, and where to find the work within seconds.

## Positioning

One story across every channel: a senior engineer and technical leader across backend and platform engineering, software architecture, developer tooling, cloud, open source, and AI-assisted engineering.

Preferred terms: Senior Software Engineer, Team Lead, Software Architecture, Backend Engineering, Platform Engineering, Developer Tooling, Open Source, Technical Leadership, AI-assisted Engineering.

Avoid presenting Alonso as someone learning to become an engineer or architect, as frontend-focused, or as a collection of unrelated side projects.

## Brand Hierarchy

```text
alonsovndev.com            main hub (this site)
├── github.com/Alonsovn    personal engineering identity
├── github.com/alonsovndev open-source engineering lab
├── EndToEndLabCR          open-source engineering community
└── NaranjoSolutions       freelance and consulting
```

## Operating Context

- Viewed by recruiters scanning many portfolios; depth must be clear within seconds.
- Viewed by engineers following links from GitHub and documentation.
- Permanent professional identity at `alonsovndev.com`, deployed on Cloudflare Workers (see `docs/deployment.md`).
- Static content; every claim is verifiable through linked repositories.

## Stack (as built)

Astro 7, TypeScript, static HTML at build time, small typed client scripts in `src/scripts/`, CSS design tokens with light/dark themes, Oxlint.

## Content

- `src/data/projects.json`: flagship projects first (DevWorkWire, Open Projects Hub, AI Engineer Setup, one client project), each with problem, what was built, decisions, and role.
- `src/data/organizations.json`: alonsovndev (open-source lab), EndToEndLabCR (community), NaranjoSolutions (freelance).
- `src/data/experience.json`, `src/data/skills.json`, `src/data/site.ts`: timeline, skills (backend and platform first), URLs and SEO defaults.
- `public/resume.pdf`.

**Absences (do not fabricate):** no testimonials, press mentions, or case-study metrics.

## Principles

1. **Evidence over claims**: link to real repositories and live demos.
2. **One story**: terminology matches the GitHub profile, the organization README, and LinkedIn.
3. **Serve all three audiences without diluting any.**
4. **The portfolio is proof**: performance, accessibility, and code quality back the claims.
5. **Facts are locked**: organization names, project data, and experience entries stay accurate.

## Accessibility

WCAG 2.1 AA target: skip-to-content link, visible focus ring, `prefers-reduced-motion` support, light/dark theme toggle.
