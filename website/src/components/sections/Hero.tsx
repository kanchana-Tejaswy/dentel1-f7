"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { 
  Star, 
  WhatsappLogo, 
  CalendarCheck, 
  SealCheck, 
  UsersThree, 
  Medal,
  Quotes
} from "@phosphor-icons/react";
import { fadeUp, revealScale } from "@/lib/motion";

/**
 * HERO UX STRATEGY: "THE SANCTUARY ENTRANCE"
 * 
 * 1. Visual Hierarchy: Emotion (Headline) -> Trust (Image) -> Path (CTA) -> Logic (Stats).
 * 2. Anxiety Reduction: Soft Ivory background, Sage Green primary, human-centric photography.
 * 3. Conversion: Clear Primary CTA with high-contrast accent color; low-friction WhatsApp inquiry.
 * 4. Social Proof: Real-time "Floating" reviews and Google ratings placed near decision points.
 */

const TRUST_STATS = [
  { label: "Years Excellence", value: "15+", icon: Medal },
  { label: "Happy Patients", value: "12k+", icon: UsersThree },
  { label: "Certifications", value: "8", icon: SealCheck },
];

export function Hero() {
  return (
    <section 
      className="relative min-h-[100dvh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-secondary"
      aria-label="Welcome to Lumina Dental Sanctuary"
    >
      {/* Background Architectural Element - Soft Serif Watermark */}
      <div 
        className="absolute top-[15%] right-[-5%] text-[35vw] font-heading font-black text-primary/[0.02] select-none pointer-events-none whitespace-nowrap leading-none z-0"
        aria-hidden="true"
      >
        Lumina
      </div>

      <div className="content-width relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Content & Conversion */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col"
            >
              {/* Trust Badge: Google Rating */}
              <motion.div 
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-white/60 backdrop-blur-md border border-stone/50 shadow-sm w-fit mb-10"
              >
                <div className="flex text-[#FBBC05] gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} weight="fill" size={12} />
                  ))}
                </div>
                <span className="label-caps text-[10px] text-charcoal/60 tracking-[0.25em] font-bold">
                  4.9 Google Rating (500+ Reviews)
                </span>
              </motion.div>

              {/* Headline: Emotional & Authoritative */}
              <motion.h1 
                variants={fadeUp}
                custom={0.1}
                className="display-large text-charcoal mb-8 text-balance"
              >
                Exceptional care <br className="hidden md:block" /> 
                for <span className="italic text-primary font-medium">the whole you.</span>
              </motion.h1>
              
              {/* Supporting Copy: Reassuring & Clear */}
              <motion.p 
                variants={fadeUp}
                custom={0.2}
                className="body-l text-charcoal/60 mb-12 max-w-[620px] leading-relaxed"
              >
                Welcome to a dental experience designed to soothe. We combine clinical mastery with boutique hospitality to ensure you feel safe, comfortable, and heard.
              </motion.p>

              {/* Action Group: Conversion Focused */}
              <motion.div 
                variants={fadeUp}
                custom={0.3}
                className="flex flex-col sm:flex-row gap-5 mb-16"
              >
                <Button size="lg" className="h-[72px] px-12 shadow-premium text-lg group">
                  <CalendarCheck size={24} weight="bold" className="mr-3" />
                  Book Private Visit
                </Button>
                <Button variant="outline" size="lg" className="h-[72px] px-12 group bg-white/20 backdrop-blur-sm">
                  <WhatsappLogo size={24} weight="regular" className="mr-3 text-[#25D366] group-hover:scale-110 transition-transform" />
                  WhatsApp Inquiry
                </Button>
              </motion.div>

              {/* Review Snippet: Immediate Social Proof */}
              <motion.div 
                variants={fadeUp}
                custom={0.4}
                className="flex items-start gap-6 border-t border-stone/40 pt-12"
              >
                <div className="relative shrink-0 pt-1">
                   <Quotes size={32} weight="fill" className="text-primary/20" />
                </div>
                <div>
                   <p className="text-sm italic font-medium text-charcoal/70 mb-3 max-w-[400px] leading-relaxed">
                     &quot;I have always been terrified of the dentist, but Lumina completely changed that. The environment is so calming and the doctors are incredibly gentle.&quot;
                   </p>
                   <p className="label-caps text-[10px] text-primary font-bold tracking-widest">— Sarah Jenkins, Invisalign Patient</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Human Connection & Visual Trust */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="relative"
            >
              {/* Main Photography: Human Centric */}
              <motion.div 
                variants={revealScale}
                custom={0.2}
                className="relative aspect-[4/5] w-full rounded-[48px] overflow-hidden shadow-2xl border-[16px] border-white/80 backdrop-blur-sm -rotate-2 hover:rotate-0 transition-transform duration-1000 ease-out"
              >
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
                  alt="Doctor at Lumina Dental Sanctuary providing reassuring care"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Lighting Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Stat Cards: Trust Indicators */}
              <div className="absolute -left-8 -bottom-10 lg:-left-12 lg:bottom-12 flex flex-col gap-4">
                 {TRUST_STATS.slice(0, 2).map((stat, i) => (
                   <motion.div
                    key={stat.label}
                    variants={revealScale}
                    custom={0.5 + (i * 0.1)}
                    className="bg-white/90 backdrop-blur-xl p-6 rounded-[32px] shadow-premium border border-stone/30 flex items-center gap-4 min-w-[200px]"
                   >
                      <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <stat.icon size={24} weight="duotone" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-charcoal leading-none mb-1">{stat.value}</p>
                        <p className="text-[10px] label-caps text-charcoal/40 tracking-wider">{stat.label}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>

              {/* Certification Badge */}
              <motion.div
                variants={revealScale}
                custom={0.8}
                className="absolute -right-6 top-12 bg-accent p-8 rounded-full shadow-2xl flex items-center justify-center rotate-12 hidden xl:flex"
              >
                 <div className="text-center text-white">
                    <p className="text-2xl font-bold leading-none">#1</p>
                    <p className="text-[8px] label-caps tracking-widest text-white/80">In Patient Care</p>
                 </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Atmospheric Soft Lighting */}
      <div 
        className="absolute top-[-10%] -left-[10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[160px] opacity-40 mix-blend-multiply pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-accent/[0.05] rounded-full blur-[200px] opacity-30 pointer-events-none" 
        aria-hidden="true" 
      />
    </section>
  );
}
