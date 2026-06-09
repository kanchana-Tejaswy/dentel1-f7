import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Contact & Locations | Premium Dental Clinic",
  description: "Get in touch with our team. View our clinic locations, operating hours, and contact information to schedule your premium dental experience.",
};

export default function ContactPage() {
  return (
    <main>
      <header className="content-width section-gap pt-32 lg:pt-48 pb-0">
        <div className="max-w-3xl">
          <h1 className="h1 text-charcoal mb-6">Let&apos;s Connect</h1>
          <p className="body-l text-charcoal/60">
            Whether you&apos;re ready to schedule your first visit or have questions about our premium services, our concierge team is here to assist you.
          </p>
        </div>
      </header>

      <Contact />
      <FAQ />
      <AppointmentCTA />
    </main>
  );
}
