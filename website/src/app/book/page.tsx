import type { Metadata } from "next";
import { FirstVisit } from "@/components/sections/FirstVisit";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Book an Appointment | Premium Dental Clinic",
  description: "Request your consultation online. Experience boutique hospitality and exceptional dental care.",
};

export default function BookPage() {
  return (
    <main>
      <header className="content-width section-gap pt-32 lg:pt-48 pb-0">
        <div className="max-w-3xl">
          <h1 className="h1 text-charcoal mb-6">Reserve Your Time</h1>
          <p className="body-l text-charcoal/60">
            Take the first step towards your refined smile. Fill out the request below, and our patient concierge will personally coordinate your visit.
          </p>
        </div>
      </header>

      <FirstVisit />
      <AppointmentCTA />
    </main>
  );
}
