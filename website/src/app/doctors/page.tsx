import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Doctors as DoctorsSection } from "@/components/sections/Doctors";
import { Button } from "@/components/ui/Button";

export default function DoctorsPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-40 pb-20 bg-secondary">
        <div className="content-width">
          <div className="max-w-3xl">
            <h1 className="display-medium font-bold text-charcoal mb-6">Expertise with a <span className="italic text-primary">gentle touch.</span></h1>
            <p className="text-xl text-charcoal/60 leading-relaxed">
              Our team of specialists combines decades of clinical experience with a deep understanding of patient psychology to deliver care that is as comfortable as it is precise.
            </p>
          </div>
        </div>
      </section>
      
      <DoctorsSection />

      <section className="section-gap bg-white border-t border-black/5">
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold text-charcoal">Global Training</h2>
              <p className="mt-4 text-charcoal/60">Our doctors are certified by world-leading institutions in cosmetic and restorative dentistry.</p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 gap-8">
              {[
                "Harvard Dental Alumni",
                "AACD Accredited",
                "ICOI Diplomate",
                "ITI Member",
                "Advanced Sedation Certified",
                "Lumineers Authorized",
              ].map((cert) => (
                <div key={cert} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="font-bold text-charcoal/80 uppercase tracking-widest text-[10px]">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap bg-primary/5">
        <div className="content-width text-center">
          <h2 className="display-medium font-bold text-charcoal mb-8">Ready to meet your new smile?</h2>
          <Button size="lg">Book Your Consultation</Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
