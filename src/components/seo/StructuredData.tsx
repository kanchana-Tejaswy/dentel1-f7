"use client";

import { Dentist, FAQPage, WithContext } from "schema-dts";

/**
 * Global Structured Data Component
 * Injects LocalBusiness (MedicalClinic/Dentist) and FAQ schemas for Local SEO dominance.
 */
export function StructuredData() {
  const clinicSchema: WithContext<Dentist> = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Lumina Dental Sanctuary",
    url: "https://luminadental.com",
    logo: "https://luminadental.com/logo.png",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
    description: "Premium, anxiety-free dental care in Beverly Hills. Specializing in cosmetic dentistry, Invisalign, implants, and restorative treatments.",
    telephone: "+1-555-123-4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Wellness Ave, Suite 400",
      addressLocality: "Beverly Hills",
      addressRegion: "CA",
      postalCode: "90210",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0736,
      longitude: -118.4004,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$$",
    isAcceptingNewPatients: true,
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does dental treatment hurt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We specialize in 'anxiety-free' dentistry. Through the use of topical numbing gels, computer-controlled anesthesia (The Wand), and optional gentle sedation, 98% of our patients report a completely pain-free experience."
        }
      },
      {
        "@type": "Question",
        name: "How much does premium dental care cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While we provide high-end boutique care, our pricing is transparent and competitive. We provide a full written investment breakdown during your consultation, with no hidden laboratory or facility fees."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
