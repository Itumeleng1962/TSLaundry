# TS Unique Laundry — Premium Laundry & Subscription Portal

> **Rain or Not We Serve.** A luxury, SaaS-quality website and customer portal for a premium South African laundry subscription business.

Built as a **frontend-only** experience with realistic mock data (per the project brief): mock authentication, placeholder payments, and demo dashboards.

## ✨ Highlights

- **Luxury-minimal design** — gold `#C89D2A` / black / white palette, editorial Cormorant Garamond + Manrope typography, glassmorphism, floating cards, scroll-reveal & parallax motion.
- **Full marketing site** — Home, Services (12 services + detail pages), Pricing (live calculator), Subscriptions (5 plans + comparison), How It Works, About, Blog, FAQ, Contact, Privacy, Terms.
- **Auth flow** — Login, Register, Forgot Password (mock).
- **Customer dashboard** — overview with Recharts, laundry history, invoices, payments, notifications, referral rewards, profile.
- **Admin dashboard** — analytics, customers, orders, content management.
- **Accessible & SEO-ready** — semantic HTML, ARIA, meta/OG/Twitter tags, structured data, robots.txt, sitemap.xml.

## 🧱 Tech Stack

React 19 · React Router 7 · Tailwind CSS 3 · Framer Motion · Lucide React · React Hook Form · Zod · Recharts · React Query · Sonner · Shadcn UI

> The environment uses **Create React App (CRA + CRACO)** rather than Vite, but all requested libraries and patterns are used.

## 🚀 Getting Started

```bash
cd frontend
yarn install
yarn start      # dev server on http://localhost:3000
yarn build      # production build
```

## 🔑 Demo Access

- **Customer view:** register or log in with *any* email + password (min 6 chars).
- **Admin view:** log in with an email containing `admin` (e.g. `admin@ts.co.za`).

## 📁 Structure

```
frontend/src/
├── components/
│   ├── common/      # Reveal, Counter, Logo, PricingCalculator, PlanCard, ...
│   ├── dashboard/   # Dashboard widgets
│   ├── layout/      # Navbar, Footer, MarketingLayout, DashboardLayout, AuthLayout
│   └── ui/          # Shadcn UI primitives
├── context/         # AuthContext (mock)
├── data/            # services, plans, content, dashboard mock data
├── lib/             # constants, utils (cn, ZAR formatter)
├── pages/           # marketing, auth/, dashboard/
└── App.js           # routing + code splitting
```

## 💳 Integration Placeholders

Payments (Stripe / PayFast / Ozow), Firebase Auth and Supabase are intentionally stubbed as the brief specified a front-end demo. Swap the mock `AuthContext` and form submit handlers for real API calls when going live.

## 📦 Deployment

Any static host works (Vercel, Netlify, Cloudflare Pages, S3+CloudFront):

```bash
yarn build          # outputs to frontend/build
```

Serve the `build/` directory. Configure SPA fallback so all routes resolve to `index.html`.
