# PRD — TS Unique Laundry

## Original Problem Statement
Build a complete, production-ready, luxury SaaS-quality website + customer portal for **TS Unique Laundry**, a premium South African laundry subscription business. Slogan: "Rain or Not We Serve". Awwwards-quality, luxury-minimal (gold/black/white, NO blue). Feel of Apple + Stripe + Linear + Notion + Airbnb + Arc.

## User Choices
- Frontend-only with mock data (no real backend)
- Mock authentication
- Placeholder payments (Stripe/PayFast/Ozow)
- South Africa / ZAR currency

## Architecture
- React 19 (CRA + CRACO), React Router 7, Tailwind, Framer Motion, Recharts, React Hook Form + Zod, Shadcn UI, Sonner.
- `@` alias → `src`. Mock `AuthContext` persisted to localStorage. Code-split routes via `lazy`.

## User Personas
- Busy professionals, students, families, Airbnb hosts, small/corporate businesses.

## Core Requirements (static)
- Marketing site, pricing calculator, 5 subscription tiers, customer dashboard, admin dashboard, auth flow, legal + 404, SEO/accessibility.

## Implemented (2026-08-01)
- Marketing: Home (hero, trust badges, featured services, why-us, timeline, live pricing calculator, plans, dashboard preview, animated stats, testimonials, FAQ, newsletter, IG gallery, CTA, footer), Services (12) + detail pages, Pricing (calculator + rate card + commercial), Subscriptions (5 plans + comparison table), How It Works, About, Blog, FAQ, Contact (Zod form + map/WhatsApp placeholders), Privacy, Terms, 404.
- Auth: Login, Register, Forgot Password (mock, localStorage-persisted, role-gated).
- Customer dashboard: overview + Recharts, history, invoices, payments, notifications, referrals, profile.
- Admin dashboard: analytics, customers, orders, content management.
- SEO: meta/OG/Twitter, JSON-LD, robots.txt, sitemap.xml. README + .env.example + deployment notes.
- Brand logo generated; gold/black/white theme, Cormorant Garamond + Manrope.

## Verified
- Testing agent: 95% frontend pass. Fixed: auth persistence across reload (HIGH), duplicate contact toast (LOW). Reload/deep-link now retains session.

## Backlog (P1/P2)
- P1: Real backend (FastAPI + Mongo) for auth/orders/subscriptions; real Stripe/PayFast/Ozow checkout.
- P1: Blog article detail pages + CMS content.
- P2: Booking/pickup scheduling flow; live order tracking map; email notifications (Resend).

## Notes
- MOCKED: authentication, payments, contact & newsletter submits (toast only).
