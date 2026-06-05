import type { Metadata } from "next";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = {
  title: "Smile Gallery | Premium Dental Clinic",
  description: "Explore our portfolio of smile transformations. View stunning before and after results from our cosmetic and restorative dental treatments.",
};

export default function GalleryPage() {
  return (
    <main>
      <header className="content-width section-gap pt-32 lg:pt-48 pb-0">
        <div className="max-w-3xl">
          <h1 className="h1 text-charcoal mb-6">The Gallery</h1>
          <p className="body-l text-charcoal/60">
            Browse our portfolio of meticulous smile restorations. Each transformation is a testament to the intersection of dental science and refined aesthetics.
          </p>
        </div>
      </header>

      <BeforeAfter />
      <AppointmentCTA />
    </main>
  );
}
