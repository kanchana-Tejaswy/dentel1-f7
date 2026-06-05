import type { Metadata } from "next";
import { Doctors } from "@/components/sections/Doctors";
import { Technology } from "@/components/sections/Technology";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { SocialProof } from "@/components/sections/SocialProof";

export const metadata: Metadata = {
  title: "About Us | Premium Dental Clinic",
  description: "Learn about our commitment to premium dental care, our expert team, and the advanced technology we use to provide boutique hospitality.",
};

export default function AboutPage() {
  return (
    <main>
      <header className="content-width section-gap pt-32 lg:pt-48 pb-16">
        <div className="max-w-3xl">
          <h1 className="h1 text-charcoal mb-6">Elevating Dental Care</h1>
          <p className="body-l text-charcoal/60">
            We believe that visiting the dentist should feel less like a chore and more like a retreat. Our clinic is designed to provide exceptional care in an environment that prioritizes your comfort, peace of mind, and aesthetic goals.
          </p>
        </div>
      </header>
      
      <Doctors />
      <Technology />
      <SocialProof />
      <AppointmentCTA />
    </main>
  );
}
