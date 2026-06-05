"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Medal, 
  ArrowRight,
  SealCheck,
  Quotes
} from "@phosphor-icons/react";
import { fadeUp, revealScale } from "@/lib/motion";

/**
 * DOCTOR SECTION STRATEGY: "THE ART OF CARE"
 * 
 * Objective: Transform doctors into trusted healthcare partners.
 * 
 * Trust Pillars:
 * 1. Authority: Ivy League training, 15+ years experience, clinical director status.
 * 2. Empathy: Personal philosophy quotes and patient care approach.
 * 3. Credibility: Board certifications and professional memberships.
 */

interface Doctor {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  education: string;
  certifications: string[];
  philosophy: string;
  intro: string;
  image: string;
  featured?: boolean;
}

const DOCTORS: Doctor[] = [
  {
    id: "elena-rossi",
    name: "Dr. Elena Rossi",
    role: "Clinical Director",
    specialization: "Cosmetic Artistry & Smile Design",
    experience: "15+ Years",
    education: "DDS, Harvard School of Dental Medicine",
    certifications: ["AACD Accredited Fellow", "Global Speaker on Aesthetic Harmony"],
    philosophy: "Minimal intervention, maximum clinical artistry.",
    intro: "I believe a smile is more than just anatomy; it is the physical expression of your inner confidence. My mission is to blend medical precision with your unique character.",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c7e0?q=80&w=2070&auto=format&fit=crop",
    featured: true
  },
  {
    id: "marcus-thorne",
    name: "Dr. Marcus Thorne",
    role: "Senior Associate",
    specialization: "Implantology & Oral Rehabilitation",
    experience: "12 Years",
    education: "DDS, NYU College of Dentistry",
    certifications: ["ITI Member", "Oral Surgery Certified"],
    philosophy: "Patient comfort is the foundation of clinical success.",
    intro: "My goal is to make the dental chair the most relaxing seat in your day. I specialize in restoring function to those who have lost hope in their smiles.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "sarah-chen",
    name: "Dr. Sarah Chen",
    role: "Pediatric Specialist",
    specialization: "Preventative & Family Care",
    experience: "8 Years",
    education: "DDS, UCSF School of Dentistry",
    certifications: ["Board Certified Pediatric Dentist"],
    philosophy: "Building a lifetime of trust, one gentle visit at a time.",
    intro: "Early dental experiences shape a person's lifelong relationship with health. I focus on making every child feel empowered and safe.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop",
  }
];

export function Doctors() {
  const featuredDoctor = DOCTORS.find(d => d.featured)!;
  const teamMembers = DOCTORS.filter(d => !d.featured);

  return (
    <section id="doctors" className="section-gap bg-secondary/20 relative overflow-hidden" aria-label="Our Clinical Experts">
      <div className="content-width relative z-10">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mb-20 lg:mb-32"
        >
          <span className="label-caps text-accent mb-4 block">The Art of Care</span>
          <h2 className="h2 font-bold text-charcoal mb-8 text-balance">
            Elite clinical minds. <span className="text-primary italic font-medium">Boutique patient hearts.</span>
          </h2>
          <p className="body-l text-charcoal/60 leading-relaxed">
            Our specialists are selected not only for their world-class credentials but for their unwavering commitment to gentle, patient-centered dentistry.
          </p>
        </motion.div>

        {/* LEAD DOCTOR: FEATURED LAYOUT */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* Lead Portrait */}
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealScale}
                className="relative aspect-[4/5] w-full rounded-[60px] overflow-hidden shadow-2xl border-[20px] border-white"
              >
                <Image
                  src={featuredDoctor.image}
                  alt={featuredDoctor.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-40 pointer-events-none" />
              </motion.div>
            </div>

            {/* Lead Bio & Credentials */}
            <div className="lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <span className="label-caps text-primary mb-4 block tracking-[0.4em] font-black">{featuredDoctor.role}</span>
                <h3 className="text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-8">{featuredDoctor.name}</h3>
                
                <div className="flex items-start gap-6 mb-12 relative">
                   <div className="shrink-0 mt-1">
                      <Quotes size={40} weight="fill" className="text-primary/10" />
                   </div>
                   <p className="text-2xl font-heading italic text-charcoal/80 leading-snug">
                     &quot;{featuredDoctor.intro}&quot;
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-stone/30 pt-12">
                   <div>
                      <p className="label-caps text-[10px] text-charcoal/40 mb-6">Expertise & Background</p>
                      <ul className="space-y-4">
                         <li className="flex items-center gap-3 text-sm font-bold text-charcoal/70">
                            <GraduationCap size={20} weight="light" className="text-primary" />
                            {featuredDoctor.education}
                         </li>
                         <li className="flex items-center gap-3 text-sm font-bold text-charcoal/70">
                            <Medal size={20} weight="light" className="text-primary" />
                            {featuredDoctor.experience} Excellence
                         </li>
                      </ul>
                   </div>
                   <div>
                      <p className="label-caps text-[10px] text-charcoal/40 mb-6">Fellowships & Awards</p>
                      <ul className="space-y-4">
                         {featuredDoctor.certifications.map(cert => (
                           <li key={cert} className="flex items-center gap-3 text-sm font-bold text-charcoal/70">
                              <SealCheck size={20} weight="duotone" className="text-accent" />
                              {cert}
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>

                <div className="mt-16">
                   <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-charcoal hover:text-primary transition-colors">
                      Full Clinical Background
                      <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                        <ArrowRight size={16} weight="bold" />
                      </div>
                   </button>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* TEAM MEMBERS: SUPPORTING LAYOUT */}
        <div>
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeUp}
             className="mb-16"
           >
              <p className="label-caps text-charcoal/30 border-b border-stone/30 pb-4">Specialist Associates</p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {teamMembers.map((doctor, i) => (
                <motion.div
                  key={doctor.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i * 0.1}
                  className="group"
                >
                  <div className="flex flex-col sm:flex-row gap-8 lg:gap-10">
                     <div className="sm:w-[240px] shrink-0">
                        <div className="relative aspect-[3/4] w-full rounded-[40px] overflow-hidden shadow-xl grayscale group-hover:grayscale-0 transition-all duration-1000">
                          <Image
                            src={doctor.image}
                            alt={doctor.name}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                        </div>
                     </div>
                     <div className="flex flex-col justify-center">
                        <p className="label-caps text-[10px] text-primary mb-2 font-black">{doctor.role}</p>
                        <h4 className="text-3xl font-heading font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">{doctor.name}</h4>
                        <p className="text-xs font-bold text-charcoal/40 mb-6 uppercase tracking-widest">{doctor.specialization}</p>
                        
                        <div className="p-6 bg-white/60 backdrop-blur-sm rounded-[24px] border border-stone/30 mb-8">
                           <p className="text-sm italic font-medium text-charcoal/60 leading-relaxed">
                             &quot;{doctor.philosophy}&quot;
                           </p>
                        </div>

                        <button className="text-[10px] font-black uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1 w-fit hover:border-primary transition-all">
                           Profile & Experience
                        </button>
                     </div>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

      </div>

      {/* Decorative Branding Elements */}
      <div className="absolute top-[10%] left-[-5%] text-[20vw] font-heading font-black text-primary/[0.02] select-none pointer-events-none rotate-90">
         EXPERTISE
      </div>
    </section>
  );
}
