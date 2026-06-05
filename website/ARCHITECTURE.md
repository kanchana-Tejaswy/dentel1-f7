# Platform Architecture: Premium Dental Brand

**Version:** 1.0.0
**Target:** Enterprise-Grade Healthcare Frontend
**Authors:** Principal Frontend Architect & Design System Engineering

This document outlines the foundational architecture required to scale a premium dental brand from a single clinic to a multi-location, multi-language healthcare platform.

---

## 1. Technology Stack Recommendation

To achieve a balance of premium aesthetics, SEO dominance, and enterprise scalability, we utilize the following stack:

*   **Core Framework:** **Next.js (App Router)**. Chosen for hybrid rendering (RSC + SSR/SSG), out-of-the-box SEO optimizations, and seamless API route integration.
*   **UI Library:** **React 19**. Taking advantage of concurrent rendering, server components, and modern hooks.
*   **Language:** **TypeScript (Strict Mode)**. Essential for maintainability and preventing runtime errors in medical data forms and booking flows.
*   **Styling:** **Tailwind CSS v4**. Utility-first, highly performant, with CSS-variable based theme tokens natively supported in v4.
*   **Motion/Animation:** **Framer Motion**. Industry standard for orchestrating premium, physics-based UI animations.
*   **CMS Strategy:** **Sanity.io**. The headless CMS of choice for structured, portable text, real-time preview, and scaling across multiple locations/doctors natively.
*   **Form Solutions:** **React Hook Form + Zod + Server Actions**. Maximum performance (uncontrolled inputs), strict schema validation, and secure server-side execution.

---

## 2. Project Structure

We utilize a hybrid Feature-Sliced / Component-Driven architecture for long-term maintainability.

```text
src/
├── app/                  # Next.js App Router (Pages, Layouts, API routes)
│   ├── (marketing)/      # Route group for standard pages
│   ├── (booking)/        # Isolated route group for high-conversion booking flows
│   └── api/              # Serverless functions / Webhooks
├── components/
│   ├── ui/               # Pure, stateless UI atoms (Button, Card, Input)
│   ├── layout/           # Structural components (Navbar, Footer, Grid)
│   ├── sections/         # Page blocks (Hero, Services, Testimonials)
│   └── templates/        # Reusable page layouts (ServiceTemplate, DoctorProfile)
├── features/             # Domain-specific logic (e.g., /features/booking, /features/doctors)
├── lib/                  # Utility functions (motion.ts, cn.ts, formatters)
├── styles/               # Global CSS and Tailwind v4 theme tokens
├── types/                # Global TypeScript definitions
└── sanity/               # CMS schema definitions and API clients
```

---

## 3. Component Architecture

We strictly enforce **Atomic Design** boundaries tailored for Next.js Server Components:

1.  **UI Primitives (Atoms):** Located in `components/ui`. Must be purely presentational, deeply accessible (built on Radix UI where needed), and highly polymorphic via `cva` (clsx + tailwind-merge).
2.  **Sections (Organisms):** Located in `components/sections`. These are the "building blocks" of pages (e.g., `BeforeAfterGallery`, `Hero`). They accept data props and handle their own responsive layouts.
3.  **Client vs. Server Components:**
    *   **Default to Server:** All layouts, pages, and content-heavy sections are React Server Components (RSC) to ship zero JS.
    *   **Isolate Client Logic:** Use the `"use client"` directive *only* at the leaves of the tree (e.g., `MobileMenuTrigger.tsx`, `CarouselSlider.tsx`, `FramerMotionWrapper.tsx`).

---

## 4. Design Token System

Scalability in design relies on strict tokenization. Tailwind CSS v4 utilizes CSS variables in `globals.css` to manage this.

*   **Color Tokens:** Semantic naming over literal naming.
    *   `--color-primary`: Brand signature (e.g., Deep Navy / Gold).
    *   `--color-surface-base`: Main backgrounds (e.g., Off-white).
    *   `--color-surface-elevated`: Cards and modals.
*   **Typography Tokens:** Fluid typography using clamp.
    *   `--font-sans`: Primary readability font (e.g., Inter / Geist).
    *   `--font-display`: Premium editorial headers (e.g., Playfair Display / Custom Serif).
*   **Spacing & Radius:** Standardized increments (`--spacing-4`, `--radius-lg`) to ensure consistent rhythm.
*   **Animation Tokens:** Standardized durational and easing curves defined in `lib/motion.ts` (e.g., `EASING.premium_spring`).

---

## 5. State Management Strategy

Avoid global state bloat. Keep state as close to where it's needed as possible.

*   **Server State (CMS/API):** Handled natively by Next.js `fetch` with Next.js Cache/Tags. No Redux or Apollo needed.
*   **Local UI State:** Standard React `useState` / `useReducer` for accordions, modals, and tabs.
*   **Global UI State:** React Context (e.g., `NavigationContext` for mobile menu overlay state) to avoid prop drilling.
*   **Form State:** React Hook Form. Keeps forms performant by avoiding unnecessary re-renders on every keystroke.
*   **Complex Client Flows (Booking):** If a multi-step patient portal or booking flow emerges, use **Zustand** for lightweight, predictable global state.

---

## 6. Performance Architecture

Target: **Lighthouse 95+, Core Web Vitals (CWV) Excellent.**

*   **Image Optimization:**
    *   Strict use of `next/image` for WebP/AVIF conversion.
    *   `sizes` attribute explicitly defined for responsive delivery.
    *   `priority` flag on LCP (Largest Contentful Paint) images like the Hero section.
*   **Font Optimization:**
    *   `next/font/google` or `next/font/local` to host fonts on the same domain, preventing layout shifts (CLS) and blocking render.
*   **Lazy Loading:**
    *   Use `next/dynamic` to lazy-load heavy client components (e.g., complex 3D tooth models, heavy interactive maps, third-party chat widgets) below the fold.
*   **Bundle Optimization:**
    *   Strict separation of Client and Server components.
    *   Analyze bundles using `@next/bundle-analyzer` in CI/CD.

---

## 7. Accessibility (a11y) Architecture

Target: **WCAG AA+ Compliance.** A healthcare site must be usable by everyone.

*   **Semantic HTML:** Strict use of `<main>`, `<article>`, `<nav>`, `<section>`.
*   **Primitive Foundation:** Use headless UI libraries (like Radix UI) for complex interactive components (Select, Dialog, Accordion) to guarantee keyboard navigation and focus management out-of-the-box.
*   **Screen Readers:**
    *   Logical heading hierarchy (`h1` -> `h2` -> `h3`). No skipped levels.
    *   Descriptive `aria-label` attributes on icon-only buttons.
    *   `sr-only` utility classes for visually hidden context.
*   **Motion:** Respect user OS preferences via `@media (prefers-reduced-motion)` and Framer Motion's `useReducedMotion` hook.

---

## 8. SEO Architecture

Healthcare SEO is highly competitive. The architecture must support local and programmatic SEO.

*   **Metadata System:** Centralized `generateMetadata` functions in Next.js to dynamically generate Titles, Meta Descriptions, and Canonical URLs per page/service.
*   **Structured Data (JSON-LD):**
    *   Implement `schema-dts`.
    *   Schemas: `MedicalClinic`, `Physician` (for doctor profiles), `FAQPage` (for treatments), `BreadcrumbList`.
*   **Open Graph & Twitter Cards:** Dynamic `opengraph-image.tsx` via Next.js Image Response for automated social sharing images.
*   **Local SEO:** Programmatic routing (`app/[location]/page.tsx`) mapped to specific geographic keywords and localized structured data.

---

## 9. CMS Strategy: Sanity.io

**Recommendation: Sanity**
*Why?* Sanity treats content as data. It provides real-time collaboration for clinic staff and scales effortlessly to multi-location logic.

*   **Schema Design:**
    *   `Location`: Address, hours, specific doctors, local SEO metadata.
    *   `Doctor`: Bio, credentials, associated locations, treatments offered.
    *   `Service`: Deep dive into treatments (Invisalign, Implants) with Portable Text for rich media integration.
    *   `Testimonial`: Text and video reviews linked to specific services and doctors.
*   **DX:** Next.js Sanity Toolkit allows for Visual Editing (staff can click on the live website and edit text directly).

---

## 10. Forms Architecture

Forms are the primary conversion mechanism.

*   **Stack:** React Hook Form + Zod.
*   **Architecture:**
    1.  **Lead Capture (Micro):** Newsletter/Simple contact in the footer.
    2.  **Contact (Standard):** Dedicated contact page with inquiry routing.
    3.  **Booking (Complex):** Multi-step wizard. Select Location -> Select Service -> Select Doctor -> Pick Time.
*   **Validation:** Zod schemas shared between the client (instant feedback) and Next.js Server Actions (security).
*   **Error Handling:** Inline, accessible error messages. Global toast notifications for success/failure states.
*   **Security:** Cloudflare Turnstile or reCAPTCHA v3 (invisible) to prevent spam.

---

## 11. Deployment Architecture

*   **Hosting:** **Vercel**. Provides zero-config edge caching, instant rollbacks, and native Next.js image optimization.
*   **CDN:** Vercel Edge Network.
*   **CI/CD:** GitHub Actions -> Vercel. Mandatory checks on PRs: ESLint, Prettier, TypeScript compilation, and Lighthouse CI thresholds.
*   **Analytics:**
    *   Vercel Web Vitals (real-user performance monitoring).
    *   Google Tag Manager (loaded via `@next/third-parties/google`) for HIPAA-compliant conversion tracking.

---

## 12. Future Scalability

The architecture is built to evolve:

*   **Multi-Location:** The Sanity schema and Next.js dynamic routing (`/[city]/[clinic-slug]`) are designed to dynamically generate thousands of highly-optimized local landing pages.
*   **Multi-Language (i18n):** Next.js Middleware can be implemented later to route `/[lang]/path` based on user headers or explicit selection.
*   **Patient Portal:** By maintaining strict separation of marketing and application logic, an authenticated `/dashboard` route group can be added later, integrating with OAuth (Auth0/Clerk) and practice management APIs (Eaglesoft/Dentrix) without rebuilding the marketing site.
*   **Payments:** Stripe integrations can securely attach to Server Actions in the `(booking)` route group.
