import { Metadata } from "next";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

export const metadata: Metadata = {
  title: "Premium Dental Implants | Permanent Tooth Replacement",
  description: "Restore your smile's function and aesthetics with our premium dental implants. Enjoy a permanent, natural-looking solution that feels exactly like your own teeth.",
};

export default function ImplantsPage() {
  return (
    <ServiceTemplate
      title="Dental Implants"
      description="The gold standard for tooth replacement. Our bespoke dental implants fuse seamlessly with your natural anatomy, restoring your confidence, your bite, and your complete smile."
      heroImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2000&auto=format&fit=crop"
      benefits={[
        "Functions and feels exactly like natural teeth",
        "Prevents jawbone loss and preserves facial structure",
        "A permanent, lifetime solution with proper care",
        "No slipping or clicking associated with dentures",
        "Allows you to eat all your favorite foods",
        "Custom-crafted to match your unique smile"
      ]}
    >
      <section className="section-gap bg-secondary/20">
        <div className="content-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
              A Flawless Restoration
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
              Losing a tooth impacts more than just your appearance; it affects your ability to chew, speak, and smile with confidence. Dental implants are the only restoration that mimics the entire structure of a natural tooth, from the titanium root embedded in the jaw to the pristine porcelain crown above the gumline.
            </p>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              We leverage 3D CBCT scanning and computer-guided surgery to plan every implant with micron-level accuracy. This ensures an optimal fit, minimized recovery time, and a final result that is virtually indistinguishable from the teeth you were born with. Invest in a restoration that lets you live without limitations.
            </p>
          </div>
        </div>
      </section>
    </ServiceTemplate>
  );
}
