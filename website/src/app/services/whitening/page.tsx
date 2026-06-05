import { Metadata } from "next";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

export const metadata: Metadata = {
  title: "Professional Teeth Whitening | Radiant Smile Design",
  description: "Erase years of stains and discoloration in a single visit. Our professional whitening treatments deliver a radiant, naturally brilliant smile safely and effectively.",
};

export default function WhiteningPage() {
  return (
    <ServiceTemplate
      title="Professional Whitening"
      description="Unveil a brilliantly radiant smile. Our clinical-grade whitening protocols safely lift deep stains and discoloration, instantly rejuvenating your entire appearance."
      heroImage="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2000&auto=format&fit=crop"
      benefits={[
        "Noticeably whiter teeth in just one visit",
        "Safe, enamel-protecting clinical formulations",
        "Customized intensity for your desired shade",
        "Minimized sensitivity through advanced gels",
        "Lifts stubborn coffee, tea, and wine stains",
        "Long-lasting brilliance with proper maintenance"
      ]}
    >
      <section className="section-gap bg-secondary/20">
        <div className="content-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
              Instantly Rejuvenate Your Appearance
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
              Your smile is often the first thing people notice, but daily indulgences like coffee, tea, and red wine can dull its natural brilliance over time. While over-the-counter products offer minor improvements, our professional whitening treatments penetrate deep into the enamel to break apart complex molecular stains.
            </p>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              We offer both rapid in-office whitening for immediate transformations and bespoke take-home kits for gradual refinement. Every treatment is tailored to minimize sensitivity while maximizing brightness, ensuring your results look stunning, healthy, and undeniably vibrant.
            </p>
          </div>
        </div>
      </section>
    </ServiceTemplate>
  );
}
