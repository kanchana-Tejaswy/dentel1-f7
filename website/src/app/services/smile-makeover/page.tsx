import { Metadata } from "next";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

export const metadata: Metadata = {
  title: "Complete Smile Makeover | Cosmetic Dentistry",
  description: "Transform your appearance with a bespoke smile makeover. We combine premium veneers, whitening, and contouring for a flawless, custom-designed smile.",
};

export default function SmileMakeoverPage() {
  return (
    <ServiceTemplate
      title="Smile Makeover"
      description="A bespoke architectural redesign of your smile. We harmonize advanced cosmetic procedures to craft a flawless, confident aesthetic that complements your unique facial features."
      heroImage="https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=2000&auto=format&fit=crop"
      benefits={[
        "Comprehensive transformation tailored to your face",
        "Combines veneers, whitening, and precise contouring",
        "Corrects chips, gaps, and severe discoloration",
        "Digital preview of your final results before starting",
        "Hand-crafted porcelain for a highly natural look",
        "A dramatic boost to your personal confidence"
      ]}
    >
      <section className="section-gap bg-secondary/20">
        <div className="content-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
              The Art of Facial Harmony
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
              A true smile makeover is not a single procedure; it is a masterclass in cosmetic synergy. We evaluate the dynamic relationship between your lips, gums, and teeth to design a smile that feels completely organic yet breathtakingly perfect. 
            </p>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Using Digital Smile Design, we map out your transformation down to the millimeter. Whether your ideal result requires ultra-thin porcelain veneers, gum recontouring, or targeted alignment, we orchestrate the entire process. You aren&apos;t just getting new teeth—you are receiving a tailored work of art.
            </p>
          </div>
        </div>
      </section>
    </ServiceTemplate>
  );
}
