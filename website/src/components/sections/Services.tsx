"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../ui/Card";
import { 
  Sparkle, 
  Smiley, 
  ShieldPlus, 
  UsersThree, 
  WarningCircle, 
  ArrowRight,
  FirstAid,
  HandHeart,
  MagicWand,
  DotsNine,
  Target,
  Icon
} from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { fadeUp, transitions } from "@/lib/motion";
import { cn } from "@/lib/utils/cn";

/**
 * SERVICES STRATEGY: "THE TREATMENT COMPASS"
 * 
 * Objective: Help patients identify their specific problem and find a solution instantly.
 * 
 * Architecture:
 * 1. Goal-Based Categories (Tabs) - "What is your goal today?"
 * 2. Solution-Focused Cards - Benefit-first language.
 * 3. Clinical Pathways - Clear logical flow from problem to treatment.
 */

interface Service {
  title: string;
  benefit: string;
  desc: string;
  icon: Icon;
  href: string;
}

interface Category {
  id: string;
  goal: string;
  label: string;
  icon: Icon;
  color: string;
  services: Service[];
}

const SERVICE_CATEGORIES: Category[] = [
  {
    id: "emergency",
    goal: "I need immediate relief",
    label: "Pain & Emergency",
    icon: WarningCircle,
    color: "text-accent bg-accent/5 border-accent/20",
    services: [
      {
        title: "Emergency Visit",
        benefit: "Same-day relief",
        desc: "Immediate priority for trauma, acute pain, or broken teeth.",
        icon: FirstAid,
        href: "/services/emergency",
      },
      {
        title: "Root Canal Therapy",
        benefit: "Save your natural tooth",
        desc: "Gentle, microscopic precision to eliminate infection and pain.",
        icon: Target,
        href: "/services/root-canal",
      }
    ]
  },
  {
    id: "restore",
    goal: "I need to fix or replace a tooth",
    label: "Restore & Repair",
    icon: ShieldPlus,
    color: "text-primary bg-primary/5 border-primary/20",
    services: [
      {
        title: "Dental Implants",
        benefit: "The gold standard",
        desc: "Permanent, secure, and natural-feeling tooth replacement.",
        icon: ShieldPlus,
        href: "/services/implants",
      },
      {
        title: "Crowns & Bridges",
        benefit: "Restore function",
        desc: "Custom porcelain restorations designed for strength and beauty.",
        icon: HandHeart,
        href: "/services/implants",
      }
    ]
  },
  {
    id: "cosmetic",
    goal: "I want a more beautiful smile",
    label: "Cosmetic Dentistry",
    icon: Sparkle,
    color: "text-primary bg-primary/5 border-primary/20",
    services: [
      {
        title: "Smile Design & Veneers",
        benefit: "Total transformation",
        desc: "Clinical artistry to create your most confident, natural look.",
        icon: MagicWand,
        href: "/services/smile-makeover",
      },
      {
        title: "Professional Whitening",
        benefit: "Instant radiance",
        desc: "Safe, medical-grade whitening for a brilliant, long-lasting glow.",
        icon: Smiley,
        href: "/services/whitening",
      }
    ]
  },
  {
    id: "ortho",
    goal: "I want straighter teeth",
    label: "Orthodontics",
    icon: Target,
    color: "text-primary bg-primary/5 border-primary/20",
    services: [
      {
        title: "Invisalign®",
        benefit: "The discreet choice",
        desc: "Clear aligner system to align your teeth without metal braces.",
        icon: Smiley,
        href: "/services/invisalign",
      },
      {
        title: "Modern Braces",
        benefit: "Precise alignment",
        desc: "Advanced ceramic or traditional systems for complex cases.",
        icon: Target,
        href: "/services/invisalign",
      }
    ]
  },
  {
    id: "preventive",
    goal: "I want to maintain my health",
    label: "Family & Preventive",
    icon: UsersThree,
    color: "text-primary bg-primary/5 border-primary/20",
    services: [
      {
        title: "Routine Hygiene",
        benefit: "Preventative wellness",
        desc: "Proactive care to protect your oral and systemic health.",
        icon: ShieldPlus,
        href: "/services/whitening",
      },
      {
        title: "Pediatric Care",
        benefit: "A lifetime of trust",
        desc: "Creating positive dental experiences for our youngest guests.",
        icon: UsersThree,
        href: "/services/pediatric",
      }
    ]
  }
];

export function Services() {
  const [activeTab, setActiveTab] = React.useState(SERVICE_CATEGORIES[0].id);

  const activeCategory = SERVICE_CATEGORIES.find(c => c.id === activeTab)!;

  return (
    <section id="services" className="section-gap bg-white relative overflow-hidden">
      <div className="content-width relative z-10">
        
        {/* Header: Setting the Stage */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mb-16 lg:mb-24"
        >
          <span className="label-caps text-accent mb-4 block">Treatment Compass</span>
          <h2 className="h2 font-bold text-charcoal mb-8 text-balance">
            Clinical mastery, <span className="text-primary italic font-medium">tailored to your journey.</span>
          </h2>
          <p className="body-l text-charcoal/60 leading-relaxed max-w-2xl">
            Choose your primary dental goal below to discover how our specialized team can help you achieve clinical excellence.
          </p>
        </motion.div>

        {/* Tab Navigation: Goal Identification */}
        <div className="flex flex-wrap gap-3 mb-16">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 border",
                  isActive 
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                    : "bg-secondary/40 text-charcoal/40 border-stone/50 hover:bg-white hover:text-charcoal hover:border-stone"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Discovery Area: Solution Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Active Goal Description */}
          <div className="lg:col-span-4">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: 20 }}
                 transition={transitions.standard}
               >
                 <div className={cn("h-16 w-16 rounded-[24px] flex items-center justify-center mb-8 border", activeCategory.color)}>
                    <activeCategory.icon size={32} weight="light" />
                 </div>
                 <h3 className="text-3xl font-heading font-bold text-charcoal mb-6 leading-tight">
                   {activeCategory.goal}
                 </h3>
                 <p className="text-charcoal/50 leading-relaxed mb-10">
                   Our specialized team uses advanced diagnostics and gentle techniques to address this specific path with 100% focused attention.
                 </p>
                 <Button variant="outline" className="w-full lg:w-auto h-14">
                    View Pathway Details
                 </Button>
               </motion.div>
             </AnimatePresence>
          </div>

          {/* Service Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {activeCategory.services.map((service, i) => (
                <motion.div
                  key={service.title + activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ ...transitions.standard, delay: i * 0.1 }}
                >
                  <Link href={service.href} className="group block h-full">
                    <Card className="h-full p-10 bg-secondary/20 hover:bg-white transition-all duration-700 hover:shadow-premium group-hover:border-primary/20">
                      <div className="flex justify-between items-start mb-8">
                        <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                          <service.icon size={24} weight="light" />
                        </div>
                        <span className="label-caps text-[9px] text-accent font-black tracking-widest">{service.benefit}</span>
                      </div>
                      <h4 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors tracking-tight">
                        {service.title}
                      </h4>
                      <p className="text-sm text-charcoal/50 leading-relaxed mb-10">
                        {service.desc}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary mt-auto">
                        Learn More <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Decorative Branding */}
      <div className="absolute bottom-[-5%] left-[-2%] opacity-[0.03] select-none pointer-events-none">
         <DotsNine size={400} weight="fill" />
      </div>
    </section>
  );
}
