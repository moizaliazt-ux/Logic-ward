# Logicward Agency Website

The Logicward website is a Next.js App Router application for presenting the agency's services, solutions, industries, reference work, insights, and contact information. Page content is maintained in typed modules; shared presentation and interaction components live separately from route modules.

## Technology stack

Versions below are verified against the application lockfile and installed dependencies:

- Next.js 16.4.6 with the App Router
- React and React DOM 19.3.0
- TypeScript 5.9.3
- Tailwind CSS 4.3.3 with `@tailwindcss/turbopack` 4.3.3
- Lucide React 1.72.0
- ESLint 9.39.5

Next.js 16 requires Node.js `>=20.9.0`. The project was last checked with Node.js 22.18.0 and npm 10.9.3.

## Repository structure

```text
app/                 Route pages, shared layout, metadata, robots and sitemap
components/          Shared layout, homepage, contact, SEO and content UI
lib/data/            Typed service, solution, industry, work and insight content
lib/site-config.ts   Brand, canonical URL, contact, social and navigation settings
public/              Static assets
docs/                Supplemental project notes
api/                 Express contact API and SMTP email templates
*.md                 Product, design, architecture, process and engineering docs
```

## Installation

Install the frontend dependencies from the repository root and the API dependencies from `api/`.

```bash
npm ci
cd api
npm ci
cd ..
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for local development.

## Environment variables

The website's contact form posts to the Express API and sends an email notification plus an automatic receipt confirmation through SMTP. Local, ignored environment files are used:

- Root `.env.local`: set `NEXT_PUBLIC_CONTACT_API_URL=http://127.0.0.1:3001/hcgi/api/contact`.
- `api/.env`: set `PORT`, `CORS_ORIGIN`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `MAIL_TO`.

For Gmail SMTP, use `smtp.gmail.com`, port `465`, the Gmail address as `SMTP_USER`, and a Google app password as `SMTP_PASS` (requires Google 2-Step Verification). Do not use or commit an account password. `MAIL_TO` is set to `moizali.azt@gmail.com`; the same address is published as the contact email. The checked-in `.gitignore` ignores `.env*` files. Configure these values independently in the deployment environment; never commit real credentials.

Start the API in a second terminal:

```bash
cd api
npm run dev
```

The API health endpoint is `http://127.0.0.1:3001/hcgi/api/health`. If SMTP credentials are absent, it logs that email delivery is disabled and the contact endpoint returns an explicit configuration error rather than claiming success. No database or analytics integration is configured.

## Development and validation commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Check TypeScript types |
| `npm run build` | Create a production build |
| `npm start` | Serve an existing production build |

There is no test script in `package.json`.

## Production build and deployment

```bash
npm ci
npm run build
npm start
```

Deploy the application repository root to a host that supports the Next.js App Router and the Node.js version required by Next.js 16. The project is not configured as a static export; use a compatible Next.js server or managed Next.js runtime. Select and configure a hosting provider, domain, and HTTPS setup as part of deployment. No provider-specific settings or credentials are present in this repository.

## Important implementation notes

- `/company` and `/work` are the primary company and work routes. `/about` and `/portfolio` remain compatible aliases.
- Content is drawn from `lib/data/`; canonical URLs and agency configuration are in `lib/site-config.ts`.
- The contact form sends consented inquiries by email through the Express API. The API does not write submissions to a database; SMTP and recipient mailboxes process and retain messages under their own policies.
- Reference implementations and demonstrations are not claims of client engagements or measured outcomes.
- Verify legal identity, contact channels, location, social profiles, and any public service claims before launch.
- See [Memory.md](./Memory.md) for verified route, sitemap, build, and browser-check counts. Build-generated pages, sitemap URLs, and browser-tested URLs are distinct measurements.

## Documentation governance

Resolve documentation conflicts in this order:

1. [Prd.md](./Prd.md) — product requirements and scope
2. [Design.md](./Design.md) — visual identity and design system
3. [Architecture.md](./Architecture.md) — technical architecture
4. [Rules.md](./Rules.md) — engineering, content, and integrity standards
5. [Websiteflow.md](./Websiteflow.md) — navigation and user journeys
6. [Phases.md](./Phases.md) — client delivery methodology
7. [Memory.md](./Memory.md) — verified implementation history
8. [README.md](./README.md) — developer onboarding
9. [AGENTS.md](./AGENTS.md) — framework-specific agent guidance

Verify implementation details against the source and lockfile. Preserve the Next.js-specific guidance in `AGENTS.md` unless it conflicts with verified current framework documentation.
