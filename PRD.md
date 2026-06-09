# Product Requirements Document (PRD): Premium Dental Clinic Platform

**Version:** 1.0.0
**Target:** Enterprise-Grade Healthcare Frontend
**Role:** Principal Product Manager, UX Architect, & Lead Engineer

This Product Requirements Document (PRD) serves as the definitive single source of truth for designers, developers, and AI Coding Agents building the Premium Dental Clinic Platform.

---

## 1. Project Vision
The primary objective is to build a patient acquisition and trust-building platform that redefines the digital dental experience. This is not a traditional medical website; it is the clinic's digital front door. It must function as a seamless extension of a luxury wellness clinic or high-end hospitality brand. 

The website must evoke emotional safety, trust, and calm confidence. Visitors should intuitively feel: *"I feel safe here. I trust these doctors. They understand my concerns. I want to book an appointment."*

## 2. Business Goals
Every design decision, interaction, and content element must support the following measurable outcomes:
*   **Increase Conversions:** Drive higher appointment bookings, phone calls, and WhatsApp inquiries.
*   **Elevate Brand Perception:** Establish a premium, authoritative, and human-first brand presence in the local market.
*   **Reduce Support Load:** Pre-emptively answer patient questions (via FAQ and clear service pages) to reduce hesitation and lower basic phone inquiries.
*   **Build Trust & Reduce Anxiety:** Actively combat dental anxiety before the patient ever steps foot in the clinic.
*   **Showcase Expertise:** Highlight high-ticket procedures (Invisalign, Implants, Smile Makeovers) with undeniable visual proof.

## 3. User Personas
Our platform serves three distinct patient groups, each requiring tailored messaging and pathways:

1.  **The Aesthetic Seeker:**
    *   **Focus:** Invisalign, Veneers, Teeth Whitening, Smile Makeovers.
    *   **Goals:** Better appearance, improved confidence, professional smile.
    *   **Needs:** High-quality Before/After galleries, treatment breakdowns, financing options, premium presentation.
2.  **The Anxious Patient:**
    *   **Focus:** Sedation dentistry, general checkups, pain-free procedures.
    *   **Goals:** Avoiding pain, overcoming fear, seeking a non-judgmental environment.
    *   **Needs:** Reassurance, friendly/calm language, step-by-step process explanations, environment of safety.
3.  **The Emergency Patient:**
    *   **Focus:** Tooth pain, infections, broken teeth, dental trauma.
    *   **Goals:** Immediate relief, fast booking.
    *   **Needs:** Frictionless contact, clear "Call Now" or "WhatsApp" pathways, emergency instructions.

## 4. User Journeys
The platform must seamlessly guide users through the following emotional and functional journey:
1.  **Discovery (Arrival):** Feels welcomed and safe immediately upon page load.
2.  **Evaluation (Understanding):** Understands the services offered in simple, non-technical language.
3.  **Validation (Trust):** Sees proof via real clinic photography, Google Reviews, doctor credentials, and Before/After results.
4.  **Action (Conversion):** Feels confident and clicks a frictionless "Book Appointment" or "WhatsApp" CTA.

## 5. Information Architecture
A flat, logical architecture designed to distribute page rank effectively and ensure a seamless user journey.
*   `/` (Homepage)
*   `/about/` (Story, Mission, Clinic Tour, Team)
    *   `/about/our-team/`
    *   `/about/technology/`
    *   `/about/first-visit/`
*   `/services/` (Hub Page)
    *   `/services/general-dentistry/`
    *   `/services/cosmetic-dentistry/` (Veneers, Teeth Whitening)
    *   `/services/implants/` (All-on-4)
    *   `/services/invisalign/`
    *   `/services/emergency/`
*   `/results/` (Before & After Gallery)
*   `/patient-info/`
    *   `/patient-info/financing/`
    *   `/patient-info/faq/`
*   `/blog/` (SEO Content Hub)
*   `/contact/` (Address, Maps, Hours, Form)

## 6. Design Principles
*   **Human First:** Prioritize emotional safety and warmth over cold medical technology.
*   **Trust Before Technology:** Emphasize real doctors, real patients, and real reviews over stock photography or complex jargon.
*   **Luxury Without Looking Expensive:** Achieve a premium feel through minimalism, strict typography, and deliberate spacing, avoiding flashy "tech startup" aesthetics.
*   **Apple/Linear Aesthetic (Adapted for Wellness):** Clean, crisp, monochromatic base with soft, calming accents. No dark mode.

## 7. UI Rules
*   **Colors:**
    *   **Primary:** Sage Green (`#5E7A6D`) - Trust, healing, safety.
    *   **Background:** Warm Ivory (`#F8F5F0`) - Comfort (avoid pure white).
    *   **Accent:** Terracotta (`#C97B63`) - CTAs (Book Appointment, Contact).
    *   **Text:** Charcoal (`#2D2D2D`) - Readability (avoid pure black).
    *   **Supporting:** Soft Blue (`#A8C1C9`) - Highlights and trust elements.
*   **Typography:**
    *   **Headings:** Playfair Display or Cormorant Garamond (Premium authority). Hero (64-72px), Section (40-48px).
    *   **Body:** Inter or Manrope (Maximum readability). Cards (18-22px), Body (16-18px).
*   **Buttons:** Fully rounded (`border-radius: 999px`). Desktop (52-56px height), Mobile (48-52px height). Never sharp, square, or neon.
*   **Cards:** 24px border radius. Very soft shadow, low blur. Hover states feature a 4px lift and 1.01 scale. No glassmorphism.
*   **Spacing:** Section Gap: 120px. Card Gap: 24px. Content Width: 1280px max.
*   **Imagery:** Only real doctors, clinics, and patients. Zero stock photography or 3D cartoon teeth.

## 8. UX Rules
*   **Frictionless Booking:** Forms must be simple, asking only necessary information. The primary CTA must be omnipresent.
*   **Immediate Answers:** Every screen must instantly answer: *Can I trust them? Can they solve my problem? How do I contact them? How do I book?*
*   **Anxiety Reduction:** Use calm, compassionate language. Avoid fear-based marketing or graphic medical illustrations.
*   **Progressive Disclosure:** Present high-level benefits first, allowing users to dive deeper into procedure details if desired (e.g., Accordion FAQs).

## 9. Mobile Rules
*   **Mobile-First Priority:** The mobile experience is the primary experience, as most traffic originates from smartphones.
*   **Sticky Bottom Bar:** A persistent bar containing "Book Appointment", "Call Now", and "WhatsApp" must always be visible.
*   **Touch Targets:** Minimum 48px × 48px for all interactive elements to ensure thumb-friendliness.
*   **Navigation:** Simplified, easily reachable hamburger menus. Avoid complex multi-level dropdowns on mobile.

## 10. Motion Rules
*   **Philosophy:** Animations must feel invisible, slow, smooth, and premium. The user should *feel* the motion, not *notice* it.
*   **Engine:** Framer Motion (or GSAP). Target: Guarenteed 60fps.
*   **Duration:** Between 300ms, 500ms, and 800ms with smooth premium spring easing.
*   **Allowed Effects:** Fade Up, Fade In, Reveal Mask, Gentle Scale.
*   **Banned Effects:** Bounce, Rotate, Flip, Spin, Flying elements, or anything exceeding 1.5s.
*   **Scroll Animations:** Sections reveal with `Opacity 0 → 100` and `TranslateY 20 → 0` over 800ms.

## 11. Component Inventory
*   **Floating Navbar:** Subtle glass effect, 80px height, shrinks on scroll, persistent CTA.
*   **Hero Section:** Left (Headline, Description, Reviews, CTA), Right (Real Doctor or Clinic Image).
*   **Service Cards:** Bento grid style, soft shadows, clear iconography (outline/minimal only).
*   **Doctor Profiles:** High-res headshots, qualifications, personal introduction.
*   **Testimonials Carousel:** Large cards (Photo, Name, Review, Stars), slow auto-slide, pause on hover.
*   **Before & After Slider:** Smooth drag comparison, no fancy/distracting effects.
*   **Forms:** 56px input height, 16px radius, always visible labels (no placeholder-only).

## 12. SEO Requirements
*   **Local Dominance:** Architecture tailored for "[Service] in [City]" keyword clusters.
*   **Schema Markup (JSON-LD):** Extensive use of `LocalBusiness`, `Dentist`, `Service`, `FAQPage`, `Review`, and `Person` (E-E-A-T) schemas.
*   **Metadata:** Centralized `generateMetadata` in Next.js for dynamic, high-intent Title Tags and Meta Descriptions.
*   **Content:** Support for a robust blog and deep-dive service pages. Internal linking strategy mandatory (e.g., Blogs link to Service pages).
*   **Indexability:** Dynamic XML sitemaps, semantic HTML5, and SSR/SSG rendering for immediate crawler access.

## 13. Accessibility Requirements
*   **Compliance Target:** WCAG 2.1 AA+.
*   **Semantics:** Strict use of `<main>`, `<article>`, `<nav>`, `<section>`. Logical heading hierarchy (`h1` -> `h2` -> `h3`).
*   **Interactive Elements:** Use Radix UI primitives for complex components to guarantee keyboard navigation and focus management.
*   **Screen Readers:** Descriptive `aria-label` attributes on icon-only buttons; `sr-only` classes for visual context.
*   **Motion:** Respect `@media (prefers-reduced-motion)` using Framer Motion's `useReducedMotion` hook.

## 14. Performance Requirements
*   **Lighthouse Target:** 95+ across all metrics.
*   **Core Web Vitals:** Excellent rating (LCP < 2.5s, INP < 100ms, CLS < 0.1).
*   **Media:** Strict use of `next/image` for WebP/AVIF formatting, responsive `sizes`, and `priority` loading for LCP images.
*   **Fonts:** `next/font` optimization to prevent layout shifts (CLS).
*   **Bundle Size:** Lazy-load heavy client components (`next/dynamic`) below the fold.

## 15. Technical Requirements
*   **Core Framework:** Next.js 15 (App Router) for hybrid rendering (RSC + SSR).
*   **Language:** TypeScript (Strict Mode) to ensure type safety, especially in booking flows.
*   **Styling:** Tailwind CSS v4 using CSS-variable based theme tokens.
*   **CMS:** Sanity.io (Headless) for structured, portable text and real-time editing.
*   **Form Management:** React Hook Form + Zod + Server Actions for secure, performant lead capture.
*   **Architecture Pattern:** Feature-Sliced / Component-Driven. Strict isolation of Server Components vs Client Components (leaf nodes only).

## 16. Conversion Requirements
*   **CTA Hierarchy:** Primary ("Book Appointment") must visually dominate. Secondary ("WhatsApp", "Call") support the primary without competing.
*   **Omnipresence:** The user must never ask, "What should I do next?" A conversion pathway must be visible in every viewport (Header, Sticky Mobile Bar, Footer).
*   **Trust Proximity:** Place trust markers (Google Reviews, Badges, Awards) immediately adjacent to conversion forms and buttons to reduce last-second friction.

## 17. Analytics Requirements
*   **Tracking Engine:** Google Tag Manager (GTM) loaded via `@next/third-parties/google`.
*   **HIPAA Compliance:** Ensure no Protected Health Information (PHI) is passed to analytics platforms (e.g., anonymize form submission events).
*   **Event Tracking:** Track specific micro-conversions (e.g., WhatsApp clicks, Phone Number clicks, Form steps initiated, Before/After slider interactions, Video plays).
*   **Performance Monitoring:** Vercel Web Vitals for real-user performance data.

## 18. Future Scalability Requirements
*   **Multi-Location Expansion:** Sanity schema and Next.js dynamic routing (`/[city]/[clinic-slug]`) must support dynamic generation of localized landing pages.
*   **Multi-Language (i18n):** Architecture must accommodate Next.js Middleware routing for `/[lang]/path` in future phases.
*   **Patient Portal:** Strict separation of marketing and app logic allows for a future authenticated `/dashboard` integrating with OAuth and Practice Management APIs (e.g., Dentrix, Eaglesoft).
*   **E-Commerce/Payments:** Capability to attach Stripe integrations to Server Actions for future booking deposits or product sales without refactoring the core site.