import { Metadata } from "next";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

export const metadata: Metadata = {
  title: "Invisalign Clear Aligners | Invisible Orthodontics",
  description: "Achieve a perfectly straight smile discreetly with Invisalign. Custom-molded clear aligners designed for comfort, speed, and absolute invisibility.",
};

export default function InvisalignPage() {
  return (
    <ServiceTemplate
      title="Invisalign Therapy"
      description="The elegant, invisible path to a perfectly aligned smile. Using advanced 3D modeling, we systematically guide your teeth into their ideal position without the friction of traditional braces."
      heroImage="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2000&auto=format&fit=crop"
      benefits={[
        "Virtually invisible clear aligners",
        "Removable for effortless eating and brushing",
        "Significantly more comfortable than metal brackets",
        "Fewer in-office visits required",
        "Precise, predictable results using 3D mapping",
        "Faster treatment times for many cases"
      ]}
    >
      <section className="section-gap bg-secondary/20">
        <div className="content-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
              Orthodontics Without Compromise
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
              A straight smile is a healthy smile, but many adults avoid orthodontic treatment due to the aesthetic constraints of metal braces. Invisalign eliminates this barrier entirely. Made from proprietary SmartTrack® material, these bespoke aligners apply gentle, continuous force to move your teeth seamlessly.
            </p>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Your Invisalign journey begins with a comprehensive digital scan—no messy impressions required. We then design a complete digital roadmap of your transformation, allowing you to see your future smile before you even wear your first aligner. It is sophisticated orthodontics designed for the modern lifestyle.
            </p>
          </div>
        </div>
      </section>
    </ServiceTemplate>
  );
}
