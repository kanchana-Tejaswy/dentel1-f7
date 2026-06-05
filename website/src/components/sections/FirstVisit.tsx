"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CalendarCheck, 
  Coffee, 
  Stethoscope, 
  ListChecks, 
  Sparkle,
  IdentificationCard,
  FileText,
  CreditCard,
  SealCheck,
  CaretDown,
  ArrowRight,
  Clock,
  HandHeart
} from "@phosphor-icons/react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils/cn";
import { fadeUp, revealScale, transitions } from "@/lib/motion";

/**
 * FIRST VISIT STRATEGY: "THE ARRIVAL JOURNEY"
 * 
 * Objective: Remove the "Fear of the Unknown" by mapping the visit like a concierge experience.
 * 
 * Logic Flow:
 * 1. Sequential Timeline: Step-by-step clarity reduces information-gap anxiety.
 * 2. Anxiety-Reducing Cues: Highlighting "Warm Welcomes" and "Personalized Planning" over "Clinical Drilling".
 * 3. Pre-Visit Readiness: Providing a physical checklist (What to bring) to lower cognitive load.
 * 4. The Promise: A high-trust commitment to comfort to seal the decision.
 */

const JOURNEY_STEPS = [
  {
    id: "step-1",
    title: "Seamless Booking",
    time: "2 Mins",
    description: "Select your preferred time online or via WhatsApp. Our concierge will reach out to confirm your specific goals and any comfort preferences.",
    anxietyNote: "Zero-pressure initial contact.",
    icon: CalendarCheck
  },
  {
    id: "step-2",
    title: "The Warm Welcome",
    time: "5 Mins",
    description: "Step into our sanctuary. Enjoy a curated beverage while our guest coordinator handles your check-in. No crowded waiting rooms; just calm.",
    anxietyNote: "A spa-like reception experience.",
    icon: Coffee
  },
  {
    id: "step-3",
    title: "Clinical Discovery",
    time: "30 Mins",
    description: "Meet your specialist for a deep-dive conversation and high-definition 3D digital examination. We listen first, look second.",
    anxietyNote: "Non-invasive, painless diagnostics.",
    icon: Stethoscope
  },
  {
    id: "step-4",
    title: "Artistic Blueprint",
    time: "15 Mins",
    description: "Review your personalized treatment plan on a large display. We discuss goals, timelines, and transparent investment options together.",
    anxietyNote: "Total transparency, no surprises.",
    icon: ListChecks
  },
  {
    id: "step-5",
    title: "Begin Your Path",
    time: "Optional",
    description: "If you're ready, we can often begin your treatment on the same day, or simply schedule your next visit at your convenience.",
    anxietyNote: "You control the pace at all times.",
    icon: Sparkle
  }
];

const PRE_VISIT_CHECKLIST = [
  { label: "Valid ID or Passport", icon: IdentificationCard },
  { label: "Previous Dental Records", icon: FileText },
  { label: "Insurance (if applicable)", icon: CreditCard },
];

export function FirstVisit() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <section id="first-visit" className="section-gap bg-secondary/20 relative overflow-hidden" aria-label="Your First Visit Experience">
      <div className="content-width relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mb-24 lg:mb-32"
        >
          <span className="label-caps text-accent mb-4 block">The Arrival Journey</span>
          <h2 className="h2 font-bold text-charcoal mb-8 text-balance">
            Reimagining your first <span className="text-primary italic font-medium">moment of care.</span>
          </h2>
          <p className="body-l text-charcoal/60 leading-relaxed max-w-2xl">
            We have replaced clinical coldness with boutique hospitality. From the first click to the final reveal, your experience is engineered for absolute comfort.
          </p>
        </motion.div>

        {/* JOURNEY TIMELINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          <div className="lg:col-span-8 space-y-8 relative">
            {/* Vertical Line Line (Desktop) */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

            {JOURNEY_STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                custom={i * 0.1}
                className="relative flex flex-col md:flex-row gap-8 md:gap-12 group"
              >
                {/* Step Circle */}
                <div className="h-14 w-14 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary shadow-sm relative z-10 shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                   <step.icon size={28} weight="light" />
                </div>

                <div className="flex-1 pb-12 border-b border-stone/20 last:border-0 last:pb-0">
                   <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-heading font-bold text-charcoal flex items-center gap-3">
                         <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Step 0{i+1}</span>
                         {step.title}
                      </h3>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                         <Clock size={14} weight="bold" className="text-primary/60" />
                         <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">{step.time}</span>
                      </div>
                   </div>
                   <p className="body-s text-charcoal/50 leading-relaxed mb-6 max-w-2xl">{step.description}</p>
                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/[0.03] border border-accent/10">
                      <HandHeart size={16} weight="fill" className="text-accent" />
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{step.anxietyNote}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SIDEBAR BLOCKS */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* What to Bring */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealScale}
              className="bg-white rounded-[40px] p-10 shadow-premium border border-stone/30"
            >
               <h4 className="text-xl font-heading font-bold text-charcoal mb-8">What To Bring</h4>
               <ul className="space-y-6">
                  {PRE_VISIT_CHECKLIST.map((item) => (
                    <li key={item.label} className="flex gap-5 items-center">
                       <div className="h-10 w-10 rounded-2xl bg-secondary flex items-center justify-center text-primary border border-stone/30">
                          <item.icon size={20} weight="light" />
                       </div>
                       <span className="text-sm font-bold text-charcoal/80 uppercase tracking-wider">{item.label}</span>
                    </li>
                  ))}
               </ul>
            </motion.div>

            {/* Comfort Promise */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealScale}
              custom={0.2}
              className="bg-primary text-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden group"
            >
               <SealCheck size={80} weight="fill" className="text-accent/20 absolute -top-4 -right-4 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
               <h4 className="text-2xl font-heading font-bold italic mb-6 relative z-10">Our Comfort Promise.</h4>
               <p className="text-sm text-white/70 leading-relaxed mb-10 relative z-10">
                 &quot;If you feel any discomfort or anxiety during your visit, we will stop immediately and adjust to your needs. You are always in control of your journey.&quot;
               </p>
               <div className="flex items-center gap-4 relative z-10">
                  <div className="h-12 w-12 rounded-full border-2 border-accent p-1">
                     <Image src="https://images.unsplash.com/photo-1559839734-2b71f1e3c7e0?q=80&w=100&h=100&auto=format&fit=crop" alt="Dr. Rossi" width={40} height={40} className="rounded-full object-cover" />
                  </div>
                  <div>
                     <p className="text-xs font-bold uppercase tracking-widest">Dr. Elena Rossi</p>
                     <p className="text-[10px] text-white/40 font-medium">Clinical Director</p>
                  </div>
               </div>
            </motion.div>

            {/* Quick CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.4}
              className="pt-8"
            >
               <Button className="w-full h-16 group" size="lg">
                  Start Your Journey <ArrowRight size={20} weight="bold" className="ml-3 group-hover:translate-x-1 transition-transform" />
               </Button>
            </motion.div>

          </div>
        </div>

        {/* FIRST VISIT FAQ */}
        <div className="max-w-4xl mx-auto border-t border-stone/20 pt-24">
           <div className="text-center mb-16">
              <span className="label-caps text-accent mb-4 block">Common Concerns</span>
              <h3 className="h3 font-bold text-charcoal">New Patient Questions</h3>
           </div>
           
           <div className="space-y-4">
              {[
                { q: "Is the first visit covered by insurance?", a: "We work with most major PPO providers and will perform a complimentary benefit check before you even arrive." },
                { q: "What if I haven't been to a dentist in years?", a: "There is zero judgment here. Many of our favorite success stories began with a decade-long gap in care." },
                { q: "Will I have to have treatment on the first day?", a: "The first visit is about discovery and planning. You decide if and when you want to proceed with treatment." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white rounded-[24px] border border-stone/30 overflow-hidden">
                   <button 
                     onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                     className="w-full p-8 flex items-center justify-between text-left hover:bg-secondary/10 transition-colors"
                   >
                      <span className="text-sm font-bold text-charcoal uppercase tracking-widest">{faq.q}</span>
                      <CaretDown size={20} weight="bold" className={cn("text-primary transition-transform duration-500", openFaq === idx ? "rotate-180" : "")} />
                   </button>
                   <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={transitions.standard}
                        >
                           <div className="px-8 pb-8">
                              <p className="text-sm text-charcoal/50 leading-relaxed">{faq.a}</p>
                           </div>
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>
              ))}
           </div>
        </div>

      </div>

      {/* Decorative Architectural Element */}
      <div className="absolute top-[20%] right-[-5%] text-[25vw] font-heading font-black text-primary/[0.01] select-none pointer-events-none rotate-12">
        WELCOME
      </div>
    </section>
  );
}
