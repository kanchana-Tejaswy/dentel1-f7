"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Cpu, 
  ShieldCheck, 
  Wind, 
  Headset, 
  Sparkle,
  HandHeart,
  Microscope,
  Leaf
} from "@phosphor-icons/react";
import { fadeUp, revealScale } from "@/lib/motion";

/**
 * COMFORT & TECHNOLOGY STRATEGY: "THE SENSORY SANCTUARY"
 * 
 * Objective: Systematically reduce patient anxiety while proving clinical modernization.
 * 
 * Logic Flow:
 * 1. Comfort First: Visual proof that the environment is designed for relaxation.
 * 2. Modern Precision: Proof that tech makes the experience faster and painless.
 * 3. Invisible Safety: Proof that the clinic exceeds hospital-level hygiene standards.
 */

const COMFORT_FEATURES = [
  {
    title: "Anxiety-Friendly Care",
    desc: "A protocol specifically designed for guests who feel nervous or overwhelmed.",
    icon: HandHeart,
  },
  {
    title: "The Comfort Suite",
    desc: "Noise-canceling headphones, weighted blankets, and your favorite cinema.",
    icon: Headset,
  },
  {
    title: "Gentle Sedation",
    desc: "Safe, calming options that ensure even complex work feels like a light nap.",
    icon: Sparkle,
  }
];

const TECH_FEATURES = [
  {
    title: "3D Digital Scanning",
    desc: "No physical molds. Accurate, instant 3D models for superior comfort and precision.",
    icon: Microscope,
  },
  {
    title: "AI Diagnostics",
    desc: "Using artificial intelligence to detect dental issues years before they cause pain.",
    icon: Cpu,
  },
  {
    title: "Pure Air Protocol",
    desc: "HEPA-13 filtration system capturing 99.9% of all airborne particles and odors.",
    icon: Wind,
  }
];

export function Technology() {
  return (
    <section 
      id="technology" 
      className="section-gap bg-secondary/40 relative overflow-hidden" 
      aria-label="Patient Comfort and Advanced Technology"
    >
      <div className="content-width relative z-10">
        
        {/* HEADER: Emotional Hook */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mb-20 lg:mb-32"
        >
          <span className="label-caps text-accent mb-4 block">Modern Wellness</span>
          <h2 className="h2 font-bold text-charcoal mb-8 text-balance">
            High-tech precision, <span className="text-primary italic font-medium">high-end comfort.</span>
          </h2>
          <p className="body-l text-charcoal/60 leading-relaxed max-w-2xl">
            We have redesigned every clinical touchpoint to eliminate the traditional fear of dentistry. Experience a sanctuary where your peace of mind is as important as your clinical outcome.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* LEFT: PATIENT COMFORT (The Human Side) */}
          <div className="space-y-16 lg:pt-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
               <div className="flex items-center gap-4 mb-10">
                  <div className="h-1px flex-1 bg-stone/50" />
                  <span className="label-caps text-[10px] text-charcoal/40 font-black tracking-[0.4em]">Patient Comfort</span>
               </div>
               
               <div className="space-y-12">
                  {COMFORT_FEATURES.map((feature, i) => (
                    <motion.div 
                      key={feature.title} 
                      variants={fadeUp}
                      custom={i * 0.1}
                      className="group flex gap-8"
                    >
                      <div className="h-14 w-14 rounded-[24px] bg-white shadow-sm flex items-center justify-center text-primary shrink-0 border border-stone/20 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                        <feature.icon size={28} weight="light" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-charcoal mb-3 tracking-tight">{feature.title}</h3>
                        <p className="text-sm text-charcoal/50 leading-relaxed max-w-sm">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </motion.div>

            {/* Safety Standards Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealScale}
              className="bg-white/60 backdrop-blur-xl p-10 rounded-[40px] border border-stone/30 shadow-premium"
            >
               <div className="flex items-center gap-4 mb-6 text-accent">
                  <ShieldCheck size={32} weight="duotone" />
                  <h4 className="text-sm font-black uppercase tracking-[0.2em]">Surgical Grade Safety</h4>
               </div>
               <p className="text-sm text-charcoal/60 leading-relaxed mb-8">
                 Our facility utilizes hospital-level sterilization protocols and touchless hygiene systems, exceeding all CDC and state regulatory standards.
               </p>
               <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-accent/10 rounded-full text-[10px] font-bold text-accent uppercase tracking-widest">CDC Compliant</span>
                  <span className="px-4 py-2 bg-accent/10 rounded-full text-[10px] font-bold text-accent uppercase tracking-widest">OSHA Verified</span>
               </div>
            </motion.div>
          </div>

          {/* RIGHT: TECHNOLOGY & ASSET (The Precision Side) */}
          <div className="relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-16"
            >
              <div className="flex items-center gap-4 mb-10">
                <span className="label-caps text-[10px] text-charcoal/40 font-black tracking-[0.4em]">Clinical Precision</span>
                <div className="h-1px flex-1 bg-stone/50" />
              </div>

              {/* Main Tech Imagery */}
              <motion.div 
                variants={revealScale}
                className="relative aspect-square lg:aspect-[5/4] w-full rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-white group"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069&auto=format&fit=crop" 
                  alt="State-of-the-art diagnostic dental technology" 
                  fill 
                  className="object-cover transition-transform duration-2000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent opacity-40 mix-blend-overlay" />
              </motion.div>

              {/* Tech Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TECH_FEATURES.slice(0, 2).map((feature, i) => (
                  <motion.div 
                    key={feature.title} 
                    variants={fadeUp}
                    custom={0.4 + (i * 0.1)}
                    className="p-8 bg-white/40 backdrop-blur-md rounded-[32px] border border-stone/20 hover:border-primary/20 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <feature.icon size={20} weight="light" />
                    </div>
                    <h4 className="text-base font-bold text-charcoal mb-3">{feature.title}</h4>
                    <p className="text-xs text-charcoal/50 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Environment Badge */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealScale}
              custom={0.8}
              className="absolute -right-8 -bottom-8 bg-primary text-white p-10 rounded-[48px] shadow-2xl max-w-[320px] hidden xl:block z-20"
            >
               <Leaf size={40} weight="fill" className="text-accent mb-6" />
               <p className="text-2xl font-heading font-bold italic leading-tight mb-4">A sensory retreat.</p>
               <p className="text-sm text-white/70 leading-relaxed font-medium">Our environment is temperature, scent, and sound-calibrated to induce a state of absolute calm.</p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Branding */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[30vw] font-heading font-black text-primary/[0.01] select-none pointer-events-none whitespace-nowrap leading-none z-0">
        WELLNESS
      </div>
    </section>
  );
}
