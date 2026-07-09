# MY-PORTFOLIO

Modern, responsive personal portfolio built with **Next.js App Router**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Features

- Dark, recruiter-friendly UI with modern spacing and typography
- Sticky navbar with active section highlighting
- Smooth scrolling and subtle section fade-in animations
- Dynamic project detail pages at `/projects/[slug]`
- Screenshot gallery with click-to-enlarge lightbox for each project
- Fully responsive layout for mobile, tablet, and desktop
- SEO-ready metadata, `robots.txt`, and `sitemap.xml`
- Vercel-ready — no environment variables required

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Project Structure

```text
app/
  layout.tsx            # Root layout with metadata and fonts
  page.tsx              # Home page
  projects/
    [slug]/
      page.tsx          # Dynamic project detail page
components/             # All UI components
data/
  site.ts               # All content: profile, skills, timeline, projects
  projects.ts           # Re-export of project types and helpers
public/
  projects/
    thesis/             # Thesis project screenshots
    payroll/            # Payroll project screenshots
    intern/             # Intern project screenshots
    signalph/           # SignalPH project screenshots
  images/
    profile/            # Profile photo
  robots.txt
  sitemap.xml
styles/
  globals.css
```

## Project Routes

| Route | Description |
|---|---|
| `/` | Home — Hero, About, Experience, Projects, Skills, Contact |
| `/projects/thesis` | AI-Driven UAV Rice Weed Detection System |
| `/projects/payroll` | Payroll Management System |
| `/projects/intern` | Knowles Training Institute System |
| `/projects/signalph` | SignalPH — Signal Intelligence Platform |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Lint

```bash
npm run lint
npm run build
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full step-by-step Vercel deployment instructions.

No environment variables are required for this project.
