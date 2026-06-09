import * as React from "react";
import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { AppointmentCTA } from "@/components/sections/AppointmentCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface ServiceTemplateProps {
  title: string;
  description: string;
  heroImage: string;
  benefits: string[];
  children: React.ReactNode;
}

export function ServiceTemplate({
  title,
  description,
  heroImage,
  benefits,
  children,
}: ServiceTemplateProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary">
          <div className="content-width grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-6">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed mb-8 max-w-lg">
                {description}
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src={heroImage} 
                alt={title} 
                fill 
                className="object-cover" 
                priority
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-gap bg-white">
          <div className="content-width">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-10 text-center max-w-2xl mx-auto">
              Why choose our {title} treatment?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 p-6 bg-secondary/30 rounded-2xl border border-black/5">
                  <div className="shrink-0 mt-1 text-primary">
                    <CheckCircle size={24} weight="fill" />
                  </div>
                  <p className="text-charcoal/80 font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Content from Children */}
        {children}

        {/* Global CTA */}
        <AppointmentCTA />
      </main>
      <Footer />
    </>
  );
}
