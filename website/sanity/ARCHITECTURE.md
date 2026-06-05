# Sanity CMS Architecture: Premium Dental Clinic

## 1. Introduction & Objectives
This document outlines the enterprise-grade Sanity CMS architecture for a premium dental clinic website. The primary objective is to deliver a highly scalable, editor-friendly headless CMS that empowers clinic staff to manage content dynamically without requiring developer intervention.

## 2. Proposed Sanity Studio Directory Structure
A modular, well-organized studio structure ensures maintainability as schemas grow.

```text
website/sanity/
├── deskStructure.ts         # Custom desk structure (singleton vs list grouping)
├── sanity.config.ts         # Main studio configuration
├── sanity.cli.ts            # CLI configuration
├── schemas/
│   ├── index.ts             # Schema export barrel file
│   ├── singletons/          # Global settings (one instance only)
│   │   ├── clinicInfo.ts
│   │   ├── seoSettings.ts
│   │   └── homepage.ts
│   ├── documents/           # Repeatable entities
│   │   ├── doctor.ts
│   │   ├── service.ts
│   │   ├── testimonial.ts
│   │   ├── faq.ts
│   │   ├── caseStudy.ts     # Before & After Cases
│   │   ├── article.ts       # Blog Articles
│   │   └── location.ts      # Contact Information
│   └── objects/             # Reusable schema parts
│       ├── seo.ts           # Reusable SEO fields
│       ├── portableText.ts  # Custom rich text configuration
│       ├── socialLink.ts    # Social media platform + URL
│       └── imageAsset.ts    # Reusable image object with alt text
└── plugins/                 # Custom Sanity plugins (if any)
```

## 3. Content Modeling Strategy & Editor Experience

### Editor Experience (EX) Optimization
* **Singletons vs. Documents:** Global settings (Clinic Info, SEO, Homepage) are treated as Singletons, preventing editors from accidentally creating multiple conflicting instances.
* **Portable Text:** Used for all rich text fields (Blog bodies, Doctor bios) to ensure semantic HTML generation on the Next.js frontend while providing a clean WYSIWYG experience for staff. Custom block annotations (e.g., highlighting text, adding internal links to services) will be configured.
* **References & Relations:** Two-way references ensure data integrity. (e.g., assigning a Doctor to a specific Service, or a Testimonial to a Doctor).
* **Validation:** Strict validation rules (e.g., character limits for SEO titles, required alt text for images, specific aspect ratios) enforce content quality and prevent layout breakage on the frontend.
* **Real-time Previews:** The studio will integrate Next.js Draft Mode, allowing staff to view unpublished content side-by-side with the editor pane before making it live.

### Image Strategy
* All image fields use a custom object requiring `alt` text to ensure ADA/WCAG compliance.
* Sanity's Hotspot & Crop functionality is enabled globally to allow editors to adjust focus areas for responsive design without needing external image editing software.

## 4. Future Scalability Considerations

* **Multi-Location Expansion:** The `location` schema is designed as a document type rather than a hardcoded singleton. This allows the clinic to seamlessly add new branches with distinct operating hours, contact details, and assigned staff.
* **Multi-Doctor Growth:** The `doctor` schema is decoupled from the clinic info. Doctors can be independently added, tagged with multiple locations, and assigned specific services.
* **Multi-Lingual Support:** The schema structure is designed with localization in mind. Future implementations can utilize the `@sanity/document-internationalization` plugin to translate string fields and Portable Text without restructuring the core relationships.

## 5. Detailed Schema Architectures

---

### 5.1 Clinic Information (Global/Settings)
**Type:** Singleton  
**Purpose:** Central repository for global clinic details used in headers, footers, and global structured data.
* **Fields:**
  * `clinicName` (String): e.g., "Luxe Dental Studio". Required.
  * `brandLogo` (Image): SVG/PNG. Required. Hotspot enabled.
  * `primaryPhone` (String): Validation: Must match phone regex.
  * `primaryEmail` (String): Validation: Must be a valid email format.
  * `socialMedia` (Array of `socialLink` objects).
* **Relationships:** None.
* **SEO Fields:** Inherits global SEO settings.

### 5.2 Doctors
**Type:** Document  
**Purpose:** Profiles for practitioners, establishing authority and trust.
* **Fields:**
  * `name` (String): Full name with credentials (e.g., "Dr. Jane Doe, DMD"). Required.
  * `slug` (Slug): Generated from name. Required.
  * `title` (String): e.g., "Lead Orthodontist".
  * `profileImage` (Image): WebP/JPEG. Aspect Ratio: 1:1 or 4:5. Required. Hotspot enabled.
  * `shortBio` (Text): 150-200 characters max for listing pages.
  * `detailedBio` (Portable Text): Full biography, education, and philosophy.
* **Relationships:**
  * `specialties` (Array of References -> `service`): Links doctor to specific treatments.
  * `locations` (Array of References -> `location`): Where the doctor practices.
* **SEO Fields:** Individual SEO object (Title, Description, OpenGraph Image).

### 5.3 Services
**Type:** Document  
**Purpose:** Comprehensive details of treatments offered.
* **Fields:**
  * `title` (String): Treatment name (e.g., "Invisalign"). Required.
  * `slug` (Slug): Generated from title. Required.
  * `category` (String): Dropdown (Cosmetic, Restorative, Preventative, Surgical).
  * `heroImage` (Image): WebP. Aspect Ratio: 16:9. Required.
  * `shortSummary` (Text): 160 chars max. Used for service cards.
  * `description` (Portable Text): Detailed explanation of the procedure, benefits, and what to expect.
* **Relationships:**
  * `performingDoctors` (Array of References -> `doctor`): Staff qualified for this service.
  * `relatedFaqs` (Array of References -> `faq`): Specific FAQs for this service.
* **SEO Fields:** Individual SEO object.

### 5.4 Testimonials
**Type:** Document  
**Purpose:** Patient reviews to build social proof.
* **Fields:**
  * `patientName` (String): First name or initials for privacy. Required.
  * `rating` (Number): 1-5 scale. Validation: Min 1, Max 5.
  * `reviewText` (Text): The actual review content. Required.
  * `videoUrl` (String - URL): Optional YouTube/Vimeo link for video testimonials.
* **Relationships:**
  * `relatedService` (Reference -> `service`): The treatment they received.
  * `treatedBy` (Reference -> `doctor`): The doctor who performed the treatment.
* **SEO Fields:** N/A (Usually aggregated on a single page or embedded in service pages).

### 5.5 FAQs
**Type:** Document  
**Purpose:** Address common patient concerns.
* **Fields:**
  * `question` (String): The query. Required.
  * `answer` (Portable Text): The response. Required.
  * `category` (String): Dropdown (General, Billing, Procedures).
* **Relationships:**
  * `relatedServices` (Array of References -> `service`): Which treatments this applies to.
* **SEO Fields:** N/A (Schema markup generated programmatically on the frontend).

### 5.6 Before & After Cases (Case Studies)
**Type:** Document  
**Purpose:** Visual proof of clinical expertise.
* **Fields:**
  * `title` (String): E.g., "Complete Smile Makeover". Required.
  * `slug` (Slug): Required.
  * `beforeImage` (Image): WebP/JPEG. Aspect Ratio: 1:1 or 4:3. Required.
  * `afterImage` (Image): WebP/JPEG. Aspect Ratio: 1:1 or 4:3. Required. (Must match `beforeImage` dimensions).
  * `caseDescription` (Portable Text): Detail the patient's initial state, the procedure, and the outcome.
* **Relationships:**
  * `treatmentsUsed` (Array of References -> `service`).
  * `treatingDoctor` (Reference -> `doctor`).
* **SEO Fields:** Individual SEO object.

### 5.7 Blog Articles
**Type:** Document  
**Purpose:** Educational content for SEO and patient engagement.
* **Fields:**
  * `title` (String): Required. Validation: Max 70 characters.
  * `slug` (Slug): Required.
  * `publishedAt` (Datetime): Required.
  * `coverImage` (Image): WebP. Aspect Ratio: 16:9. Required.
  * `excerpt` (Text): 150-160 characters.
  * `body` (Portable Text): Main content with support for inline images and block quotes.
* **Relationships:**
  * `author` (Reference -> `doctor`).
  * `categories` (Array of Strings/Tags).
* **SEO Fields:** Individual SEO object.

### 5.8 Contact Information (Locations)
**Type:** Document  
**Purpose:** Manages physical clinic data, built as a document to support multi-location expansion.
* **Fields:**
  * `locationName` (String): e.g., "Downtown Clinic". Required.
  * `address` (Object):
    * `street` (String)
    * `city` (String)
    * `state` (String)
    * `zipCode` (String)
  * `googleMapsUrl` (String - URL): For easy linking.
  * `operatingHours` (Array of Objects): Days and times.
  * `phone` (String): Location-specific phone number.
  * `email` (String): Location-specific email.
* **Relationships:** None directly, but referenced by `doctor`.
* **SEO Fields:** Used for Local SEO structured data generation.

### 5.9 SEO Settings (Global)
**Type:** Singleton  
**Purpose:** Fallback metadata for the entire site.
* **Fields:**
  * `siteTitle` (String): Required. E.g., "Luxe Dental Studio".
  * `defaultMetaDescription` (Text): Fallback description. Required. Validation: Max 160 chars.
  * `defaultOpengraphImage` (Image): Used when a page doesn't have a specific OG image. Required. Aspect Ratio: 1200x630px.
  * `googleSiteVerification` (String): For Google Search Console.
* **Relationships:** None.
* **SEO Fields:** Self-contained.

### 5.10 Homepage Content
**Type:** Singleton  
**Purpose:** Dedicated schema for managing the highly dynamic index page.
* **Fields:**
  * `heroHeading` (String): H1 text. Required.
  * `heroSubheading` (Text): H2/Subtitle text.
  * `heroBackground` (Image/Video URL): Background visual asset.
  * `primaryCTA` (Object): Link text and destination URL.
  * `highlightedStats` (Array of Objects): E.g., "10+ Years Experience", "5000+ Happy Smiles".
* **Relationships:**
  * `featuredServices` (Array of References -> `service`): Handpick services to show on the homepage.
  * `featuredTestimonials` (Array of References -> `testimonial`): Handpick reviews.
  * `featuredDoctors` (Array of References -> `doctor`).
* **SEO Fields:** Individual SEO object for the homepage.
