"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Star, 
  UsersThree, 
  Medal, 
  SealCheck, 
  ShieldCheck, 
  Microscope, 
  CheckCircle,
  GoogleLogo,
  ArrowRight
} from "@phosphor-icons/react";
import { fadeUp, revealScale } from "@/lib/motion";

/**
 * TRUST SECTION STRATEGY: "THE ASSURANCE GRID"
 * 
 * Objective: Convert uncertainty into trust within 5-10 seconds.
 * 
 * Information Hierarchy:
 * 1. Authority (Stats) - Proves experience and scale.
 * 2. Credibility (Certifications) - Proves professional standards.
 * 3. Validation (Google Reviews) - Proves real patient satisfaction.
 * 4. Safety (Modern Tech) - Proves physical security and comfort.
 */

const TRUST_STATS = [
  { 
    label: "Years of Excellence", 
    value: "15+", 
    desc: "Dedicated clinical artistry",
    icon: Medal 
  },
  { 
    label: "Patients Treated", 
    value: "12,400+", 
    desc: "Transforming local smiles",
    icon: UsersThree 
  },
  { 
    label: "Procedures Completed", 
    value: "45k+", 
    desc: "From hygiene to surgery",
    icon: CheckCircle 
  },
  { 
    label: "Clinical Success", 
    value: "99.8%", 
    desc: "Unwavering precision",
    icon: SealCheck 
  },
];

const CERTIFICATIONS = [
  { name: "ADA Member", src: "https://cdn.simpleicons.org/heart/5E7A6D" },
  { name: "Invisalign Platinum", src: "https://cdn.simpleicons.org/star/5E7A6D" },
  { name: "AACD Accredited", src: "https://cdn.simpleicons.org/shield/5E7A6D" },
  { name: "Straumann Partner", src: "https://cdn.simpleicons.org/plus/5E7A6D" },
  { name: "ADA Certified", src: "https://cdn.simpleicons.org/checkmarx/5E7A6D" },
];

const SAFETY_PILLARS = [
  { 
    title: "Surgical Grade Sterilization", 
    desc: "Exceeding hospital-level hygiene standards for your peace of mind.",
    icon: ShieldCheck 
  },
  { 
    title: "AI-Driven Diagnostics", 
    desc: "Using ultra-low radiation 3D scanning for 100% diagnostic accuracy.",
    icon: Microscope 
  }
];

export function SocialProof() {
  return (
    <section 
      className="bg-white py-24 lg:py-32 border-b border-stone/30 relative overflow-hidden"
      aria-label="Trust and Clinical Authority"
    >
      <div className="content-width">
        
        {/* TOP ROW: AUTHORITATIVE STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24">
          {TRUST_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={i * 0.1}
              className="group"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <stat.icon size={24} weight="duotone" />
              </div>
              <p className="text-3xl lg:text-4xl font-heading font-bold text-charcoal mb-1">{stat.value}</p>
              <p className="label-caps text-[10px] text-primary font-bold tracking-widest mb-2">{stat.label}</p>
              <p className="text-xs text-charcoal/40 font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* MIDDLE GRID: REVIEWS AND CREDENTIALS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-t border-stone/20 pt-24">
          
          {/* Google Reviews Snapshot */}
          <div className="lg:col-span-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealScale}
              className="bg-secondary/40 rounded-[40px] p-10 border border-stone/40 relative group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <GoogleLogo size={28} weight="fill" className="text-[#4285F4]" />
                </div>
                <div className="flex text-[#FBBC05] gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} weight="fill" size={16} />
                  ))}
                </div>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">
                Loved by our local community.
              </h3>
              
              <p className="text-charcoal/60 text-sm leading-relaxed mb-8">
                With over <span className="font-bold text-charcoal">800+ five-star reviews</span>, our patients consistently highlight our gentle approach and life-changing results.
              </p>

              <div className="flex items-center justify-between group/link cursor-pointer pt-6 border-t border-stone/20">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Read All Reviews</span>
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover/link:bg-primary group-hover/link:text-white transition-all">
                  <ArrowRight size={16} weight="bold" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Credentials and Safety */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Certifications Row */}
            <div>
              <p className="label-caps text-[10px] text-charcoal/40 tracking-[0.3em] mb-8">Professional Memberships</p>
              <div className="flex flex-wrap gap-x-12 gap-y-8 items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                {CERTIFICATIONS.map((logo) => (
                  <div key={logo.name} className="relative h-8 w-24">
                    <Image 
                      src={logo.src} 
                      alt={logo.name} 
                      fill 
                      className="object-contain"
                      unoptimized 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {SAFETY_PILLARS.map((pillar, i) => (
                 <motion.div 
                   key={pillar.title}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   variants={fadeUp}
                   custom={i * 0.1 + 0.3}
                   className="flex gap-5"
                 >
                    <div className="h-10 w-10 rounded-full bg-primary/5 text-primary flex items-center justify-center shrink-0 border border-primary/10">
                      <pillar.icon size={20} weight="light" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-charcoal mb-2 uppercase tracking-wide">{pillar.title}</h4>
                      <p className="text-xs text-charcoal/50 leading-relaxed">{pillar.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>

          </div>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
    </section>
  );
}
