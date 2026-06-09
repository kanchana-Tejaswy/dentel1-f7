import { Metadata } from "next";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

export const metadata: Metadata = {
  title: "Painless Root Canal Therapy | Premium Dental Care",
  description: "Experience pain-free root canal treatments with our advanced microscopic endodontics. We save your natural teeth with precision and comfort.",
};

export default function RootCanalPage() {
  return (
    <ServiceTemplate
      title="Root Canal Therapy"
      description="Modern endodontics designed for absolute comfort. We utilize microscopic precision to clear infection, relieve pain, and save your natural tooth in a single, relaxed visit."
      heroImage="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop"
      benefits={[
        "Completely painless procedure with modern anesthetics",
        "Microscopic precision for higher success rates",
        "Saves your natural tooth from extraction",
        "Immediate relief from severe dental pain",
        "Completed efficiently, often in a single visit",
        "Durable results that can last a lifetime"
      ]}
    >
      <section className="section-gap bg-secondary/20">
        <div className="content-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
              Advanced Endodontic Care
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
              The words &quot;root canal&quot; often carry unnecessary anxiety. In reality, modern root canal therapy is no more uncomfortable than a routine filling. It is a highly effective, deeply relieving procedure designed to eliminate infection at the source while preserving the structural integrity of your natural smile.
            </p>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              At Lumina, we approach endodontics differently. By combining state-of-the-art diagnostic imaging with microscopic treatment techniques, our specialists ensure that every nerve canal is meticulously cleaned and sealed. The result is a swift, precise treatment that restores your comfort and protects your long-term oral health.
            </p>
          </div>
        </div>
      </section>
    </ServiceTemplate>
  );
}
