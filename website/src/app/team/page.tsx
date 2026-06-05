import type { Metadata } from "next";
import { Doctors } from "@/components/sections/Doctors";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Our Dental Team | Premium Dental Clinic",
  description: "Meet our team of experienced, compassionate dental professionals dedicated to providing you with world-class care and beautiful results.",
};

export default function TeamPage() {
  return (
    <main>
      <header className="content-width section-gap pt-32 lg:pt-48 pb-0">
        <div className="max-w-3xl">
          <h1 className="h1 text-charcoal mb-6">Meet The Experts</h1>
          <p className="body-l text-charcoal/60">
            Our specialists combine decades of experience with a passion for continuous education, ensuring you receive the most advanced and refined dental care available.
          </p>
        </div>
      </header>

      <Doctors />
      <AppointmentCTA />
    </main>
  );
}
