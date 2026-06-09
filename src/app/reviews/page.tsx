import type { Metadata } from "next";
import { Testimonials } from "@/components/sections/Testimonials";
import { SocialProof } from "@/components/sections/SocialProof";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Patient Reviews | Premium Dental Clinic",
  description: "Read real stories from our patients. Discover how our meticulous approach to dental aesthetics and wellness has transformed their lives.",
};

export default function ReviewsPage() {
  return (
    <main>
      <header className="content-width section-gap pt-32 lg:pt-48 pb-0">
        <div className="max-w-3xl">
          <h1 className="h1 text-charcoal mb-6">Patient Stories</h1>
          <p className="body-l text-charcoal/60">
            The truest reflection of our work is the confidence radiating from our patients. Read firsthand accounts of their experiences with our clinic.
          </p>
        </div>
      </header>

      <Testimonials />
      <SocialProof />
      <AppointmentCTA />
    </main>
  );
}
