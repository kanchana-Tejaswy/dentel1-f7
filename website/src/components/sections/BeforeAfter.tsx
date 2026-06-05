"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ArrowsLeftRight, 
  ArrowRight, 
  Clock, 
  Smiley, 
  SealCheck,
  Quotes
} from "@phosphor-icons/react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { cn } from "@/lib/utils/cn";
import { fadeUp, transitions } from "@/lib/motion";

/**
 * RESULTS STRATEGY: "THE ART OF TRANSFORMATION"
 * 
 * Objective: Provide undeniable visual proof of clinical mastery.
 * 
 * Logic Flow:
 * 1. Category Filtering - Allow patients to find results that match their goal.
 * 2. High-Trust Interaction - Interactive sliders prove images aren't edited/faked.
 * 3. Human Narrative - Connect clinical data with real emotional outcomes.
 * 4. Success Reinforcement - Scale proof through aggregate statistics.
 */

interface CaseStudy {
  id: string;
  category: string;
  patient: string;
  treatment: string;
  duration: string;
  story: string;
  outcome: string;
  before: string;
  after: string;
  featured?: boolean;
}

const CASES: CaseStudy[] = [
  {
    id: "smile-1",
    category: "Smile Makeover",
    patient: "Julianne R.",
    treatment: "Full Arch Porcelain Veneers",
    duration: "3 Visits",
    story: "Julianne wanted to regain her confidence before her wedding day.",
    outcome: "Achieved a natural, luminous aesthetic while preserving original bite integrity.",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
    featured: true
  },
  {
    id: "invisalign-1",
    category: "Invisalign",
    patient: "Mark T.",
    treatment: "Invisalign Platinum Elite",
    duration: "14 Months",
    story: "Correcting complex crowding and bite misalignment discreetly.",
    outcome: "Perfectly aligned smile with zero impact on professional lifestyle.",
    before: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "implants-1",
    category: "Dental Implants",
    patient: "Robert H.",
    treatment: "Full Mouth Reconstruction",
    duration: "6 Months",
    story: "Restoring function and aesthetics after significant tooth loss.",
    outcome: "Permanent, secure implant-supported bridges that feel like natural teeth.",
    before: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2083&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1445510491599-c391e8046a68?q=80&w=2070&auto=format&fit=crop",
  }
];

const CATEGORIES = ["All Cases", "Invisalign", "Smile Makeover", "Dental Implants", "Veneers"];

const STATS = [
  { label: "Successful Cases", value: "8,500+" },
  { label: "Patient Satisfaction", value: "99.8%" },
  { label: "Clinical Precision", value: "100%" },
];

function ComparisonSlider({ before, after, className }: { before: string, after: string, className?: string }) {
  const [isResizing, setIsResizing] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(50);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const clipPath = useTransform(springX, (pos) => `inset(0 ${100 - pos}% 0 0)`);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    mouseX.set(Math.max(0, Math.min(100, pos)));
  };

  return (
    <div 
      ref={containerRef}
      className={cn("relative aspect-[4/3] w-full rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-white cursor-ew-resize select-none", className)}
      onMouseMove={(e) => isResizing && handleMove(e)}
      onTouchMove={(e) => isResizing && handleMove(e)}
      onMouseDown={() => setIsResizing(true)}
      onMouseUp={() => setIsResizing(false)}
      onMouseLeave={() => setIsResizing(false)}
      onTouchStart={() => setIsResizing(true)}
      onTouchEnd={() => setIsResizing(false)}
    >
      {/* After Image */}
      <Image src={after} alt="After treatment" fill className="object-cover" priority />
      <div className="absolute bottom-8 right-8 bg-primary text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl z-10 backdrop-blur-md">
        After
      </div>

      {/* Before Image (Clipped) */}
      <motion.div 
        style={{ clipPath }}
        className="absolute inset-0 z-20"
      >
        <Image src={before} alt="Before treatment" fill className="object-cover grayscale brightness-90" />
        <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-xl border border-white/20 text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest z-10">
          Before
        </div>
      </motion.div>

      {/* Slider Handle */}
      <motion.div
        style={{ left: useTransform(springX, (pos) => `${pos}%`) }}
        className="absolute inset-y-0 w-1 bg-white/80 z-30 shadow-2xl backdrop-blur-sm"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white shadow-2xl flex items-center justify-center text-primary border border-primary/10 transition-transform active:scale-90">
          <ArrowsLeftRight size={28} weight="bold" />
        </div>
      </motion.div>
    </div>
  );
}

export function BeforeAfter() {
  const [filter, setFilter] = React.useState("All Cases");
  
  const filteredCases = filter === "All Cases" 
    ? CASES 
    : CASES.filter(c => c.category === filter);

  return (
    <section id="results" className="section-gap bg-secondary/10 relative overflow-hidden" aria-label="Transformation Results Gallery">
      <div className="content-width relative z-10">
        
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end mb-20 lg:mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <span className="label-caps text-accent mb-4 block">Proven Excellence</span>
            <h2 className="h2 font-bold text-charcoal text-balance">
              The anatomy of a <br /> <span className="text-primary italic font-medium">perfect transformation.</span>
            </h2>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
            className="lg:col-span-5 lg:pb-2"
          >
            <p className="body-l text-charcoal/60 leading-relaxed">
              Real patients. Undeniable results. Explore our curated gallery of life-changing dental artistry.
            </p>
          </motion.div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-3 mb-20">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 border",
                filter === cat 
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                  : "bg-white text-charcoal/40 border-stone/50 hover:border-stone hover:text-charcoal"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FEATURED CASE */}
        <div className="mb-32">
          <AnimatePresence mode="wait">
            {filteredCases.filter(c => c.featured).map((featured) => (
              <motion.div
                key={featured.id}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
              >
                <div className="lg:col-span-7 order-2 lg:order-1">
                   <ComparisonSlider before={featured.before} after={featured.after} />
                </div>
                <div className="lg:col-span-5 order-1 lg:order-2">
                   <div className="mb-8 flex items-center gap-4">
                      <div className="h-1px w-12 bg-accent/30" />
                      <span className="label-caps text-accent font-black tracking-[0.4em]">Featured Story</span>
                   </div>
                   <h3 className="text-4xl font-heading font-bold text-charcoal mb-6">{featured.patient}</h3>
                   <div className="p-8 bg-white rounded-[32px] border border-stone/20 shadow-premium mb-10 relative">
                      <Quotes size={32} weight="fill" className="text-primary/10 absolute -top-4 -left-4" />
                      <p className="text-sm font-medium italic text-charcoal/70 leading-relaxed mb-4">&quot;{featured.story}&quot;</p>
                      <p className="text-xs text-primary font-bold uppercase tracking-widest">{featured.outcome}</p>
                   </div>
                   <div className="grid grid-cols-2 gap-8 mb-12">
                      <div className="flex items-center gap-4">
                         <div className="h-10 w-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                            <Clock size={20} weight="light" />
                         </div>
                         <div>
                            <p className="text-[10px] label-caps text-charcoal/40 leading-none mb-1">Duration</p>
                            <p className="text-sm font-bold text-charcoal leading-none">{featured.duration}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="h-10 w-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                            <Smiley size={20} weight="light" />
                         </div>
                         <div>
                            <p className="text-[10px] label-caps text-charcoal/40 leading-none mb-1">Treatment</p>
                            <p className="text-sm font-bold text-charcoal leading-none">{featured.category}</p>
                         </div>
                      </div>
                   </div>
                   <Button className="w-full sm:w-auto h-16 px-12 group">
                      Consult Similar Case <ArrowRight size={18} weight="bold" className="ml-3 group-hover:translate-x-1 transition-transform" />
                   </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* SECONDARY CASES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
           <AnimatePresence mode="popLayout">
              {filteredCases.filter(c => !c.featured).map((c) => (
                <motion.div
                  key={c.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={transitions.standard}
                >
                  <Card className="p-0 border-none overflow-hidden group">
                     <ComparisonSlider before={c.before} after={c.after} className="rounded-b-none border-none aspect-video" />
                     <div className="p-10 bg-white border border-t-0 border-stone/20 rounded-b-[48px]">
                        <p className="label-caps text-[10px] text-primary mb-4 font-black">{c.category}</p>
                        <h4 className="text-2xl font-heading font-bold text-charcoal mb-4">{c.patient}</h4>
                        <p className="text-sm text-charcoal/50 leading-relaxed line-clamp-2">{c.outcome}</p>
                     </div>
                  </Card>
                </motion.div>
              ))}
           </AnimatePresence>
        </div>

        {/* SUCCESS STATS REINFORCEMENT */}
        <div className="border-t border-stone/20 pt-24">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
              <div className="col-span-2 lg:col-span-1">
                 <p className="label-caps text-[10px] text-charcoal/40 tracking-[0.3em] mb-4">Quality Score</p>
                 <div className="flex items-center gap-2">
                    <SealCheck size={32} weight="fill" className="text-accent" />
                    <span className="text-2xl font-heading font-bold text-charcoal italic">Clinical Gold</span>
                 </div>
              </div>
              {STATS.map(stat => (
                <div key={stat.label}>
                   <p className="text-3xl font-heading font-bold text-charcoal mb-1">{stat.value}</p>
                   <p className="label-caps text-[9px] text-primary font-bold tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>

      </div>

      {/* Atmospheric Background Text */}
      <div className="absolute bottom-[5%] right-[-5%] text-[25vw] font-heading font-black text-primary/[0.02] select-none pointer-events-none whitespace-nowrap leading-none z-0">
        RESULTS
      </div>
    </section>
  );
}
