import { Metadata } from "next";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

export const metadata: Metadata = {
  title: "Pediatric Dentistry | Gentle Care for Children",
  description: "Setting the foundation for a lifetime of healthy smiles. Our pediatric dentistry provides a warm, engaging, and fear-free environment for your child's dental development.",
};

export default function PediatricPage() {
  return (
    <ServiceTemplate
      title="Pediatric Dentistry"
      description="A lifetime of oral health begins with a positive first experience. We provide exceptionally gentle, engaging care tailored specifically to the unique developmental needs of children."
      heroImage="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2000&auto=format&fit=crop"
      benefits={[
        "Warm, welcoming, and anxiety-free environment",
        "Specialized care for developing primary and permanent teeth",
        "Preventative treatments including sealants and fluoride",
        "Engaging education on proper brushing and diet",
        "Early orthodontic evaluation to guide facial growth",
        "Patience and compassion tailored to your child's pace"
      ]}
    >
      <section className="section-gap bg-secondary/20">
        <div className="content-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
              Building Trust from the First Visit
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
              A child&apos;s early experiences at the dentist shape their attitude toward oral health for the rest of their life. We understand that clinical environments can be intimidating for young patients, which is why we&apos;ve designed our pediatric approach around empathy, patience, and transparent communication—often using &quot;tell-show-do&quot; techniques to replace fear with curiosity.
            </p>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Our comprehensive pediatric care goes beyond simply checking for cavities. We closely monitor the eruption of permanent teeth, assess airway development, and provide essential preventative treatments to fortify enamel. By partnering with parents, we establish strong, healthy habits that protect your child&apos;s smile as they grow.
            </p>
          </div>
        </div>
      </section>
    </ServiceTemplate>
  );
}
