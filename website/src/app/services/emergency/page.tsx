import { Metadata } from "next";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

export const metadata: Metadata = {
  title: "Emergency Dental Care | Fast Pain Relief",
  description: "Immediate, compassionate emergency dental care. We reserve time daily to treat severe pain, broken teeth, and dental trauma when you need it most.",
};

export default function EmergencyPage() {
  return (
    <ServiceTemplate
      title="Emergency Dental Care"
      description="When dental pain strikes, you need immediate expertise. We reserve dedicated time in our schedule every day to address severe discomfort, trauma, and urgent dental needs with swift, compassionate care."
      heroImage="https://images.unsplash.com/photo-1590625695022-77299a917bd9?q=80&w=2000&auto=format&fit=crop"
      benefits={[
        "Same-day appointments available for severe emergencies",
        "Immediate pain relief and stabilization protocols",
        "Expert handling of chipped, broken, or knocked-out teeth",
        "Advanced diagnostics to quickly identify the root cause",
        "Calm, soothing environment to reduce stress and anxiety",
        "Clear guidance on the next steps for permanent restoration"
      ]}
    >
      <section className="section-gap bg-secondary/20">
        <div className="content-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
              Swift Resolution for Urgent Needs
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
              Dental emergencies are incredibly stressful. Whether you are experiencing severe, throbbing pain, have suffered a physical injury to your teeth, or are dealing with a sudden infection, waiting is simply not an option. Our priority is your immediate comfort and safety.
            </p>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              From the moment you contact our clinic, our concierge team works to get you into a treatment room as quickly as possible. We utilize digital X-rays to instantly assess the damage and provide profound local anesthesia to stop the pain immediately. We then stabilize the tooth and discuss a definitive, long-term solution so you can leave our office completely comfortable and fully informed.
            </p>
          </div>
        </div>
      </section>
    </ServiceTemplate>
  );
}
