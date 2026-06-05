"use client";

import * as React from "react";
import { 
  Plus, 
  Minus, 
  MagnifyingGlass, 
  WhatsappLogo, 
  ChatTeardropDots,
  Stethoscope,
  CurrencyCircleDollar,
  CalendarCheck,
  WarningCircle,
  ShieldCheck,
  ArrowRight
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, transitions } from "@/lib/motion";
import { cn } from "@/lib/utils/cn";
import { Card } from "../ui/Card";

/**
 * FAQ STRATEGY: "THE REASSURANCE ENGINE"
 * 
 * Objective: Systematically remove final objections before the booking CTA.
 * 
 * Logic Flow:
 * 1. Intent Search: Fast access for specific clinical or financial fears.
 * 2. Categorized Clarity: Grouped by Pain, Cost, Time, and Safety to address different personas.
 * 3. Humanized Answers: Using "Boutique Healthcare" tone—authoritative yet gentle.
 * 4. Handoff: Quick WhatsApp/Contact link for unaddressed bespoke concerns.
 */

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  // TREATMENT
  {
    id: "t1",
    category: "Treatment",
    question: "Does dental treatment hurt?",
    answer: "We specialize in 'anxiety-free' dentistry. Through the use of topical numbing gels, computer-controlled anesthesia (The Wand), and optional gentle sedation, 98% of our patients report a completely pain-free experience."
  },
  {
    id: "t2",
    category: "Treatment",
    question: "How long does a typical treatment take?",
    answer: "This varies by procedure. A hygiene visit is typically 60 minutes. Complex restorative work or Invisalign starts with a 45-minute digital scan and consultation. We value your time and maintain a strict schedule to ensure zero waiting."
  },
  {
    id: "t3",
    category: "Treatment",
    question: "What specific treatments do you offer?",
    answer: "Lumina is a multi-specialty clinic. We offer general preventive care, advanced implantology, cosmetic smile design (Veneers), Invisalign orthodontics, and same-day emergency relief."
  },
  // COST
  {
    id: "c1",
    category: "Cost",
    question: "How much does premium dental care cost?",
    answer: "While we provide high-end boutique care, our pricing is transparent and competitive. We provide a full written investment breakdown during your consultation, with no hidden laboratory or facility fees."
  },
  {
    id: "c2",
    category: "Cost",
    question: "Do you provide payment options or financing?",
    answer: "Absolutely. We offer 0% APR interest-free financing for up to 12 months, and flexible monthly plans for long-term treatments like Invisalign or full-mouth reconstructions."
  },
  // APPOINTMENT
  {
    id: "a1",
    category: "Appointment",
    question: "How do I book my first visit?",
    answer: "You can book directly through our online concierge system, or send us a quick message on WhatsApp. Our team will handle all the coordination, including your insurance verification."
  },
  {
    id: "a2",
    category: "Appointment",
    question: "Can I reschedule or cancel my visit?",
    answer: "We understand life happens. We request 48 hours' notice for cancellations to allow other patients in need to access that time slot. You can reschedule easily via phone or our patient portal."
  },
  // EMERGENCY
  {
    id: "e1",
    category: "Emergency",
    question: "What should I do in a dental emergency?",
    answer: "Call us immediately. We reserve daily priority slots for emergencies involving severe pain, trauma, or broken teeth. For after-hours emergencies, our on-call specialist is available via our emergency line."
  },
  {
    id: "e2",
    category: "Emergency",
    question: "Do you accept same-day emergency appointments?",
    answer: "Yes. If you are in pain, we aim to see you the same day. Priority is given to existing patients, but we always strive to accommodate new patients facing acute dental distress."
  },
  // SAFETY
  {
    id: "s1",
    category: "Safety",
    question: "How do you ensure clinical sterilization?",
    answer: "Our facility uses hospital-grade sterilization protocols. We utilize autoclave technology for all instruments and hospital-level air filtration (HEPA-13) in every treatment room to capture 99.9% of particles."
  },
  {
    id: "s2",
    category: "Safety",
    question: "What modern technology do you use?",
    answer: "We use 3D intraoral scanners (no messy molds), AI-driven diagnostic software for early cavity detection, and ultra-low radiation digital X-rays for your absolute safety."
  }
];

const CATEGORIES = [
  { label: "All Questions", value: "All", icon: ChatTeardropDots },
  { label: "Treatment", value: "Treatment", icon: Stethoscope },
  { label: "Cost & Finance", value: "Cost", icon: CurrencyCircleDollar },
  { label: "Booking", value: "Appointment", icon: CalendarCheck },
  { label: "Emergency", value: "Emergency", icon: WarningCircle },
  { label: "Safety & Tech", value: "Safety", icon: ShieldCheck },
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [openId, setOpenIndex] = React.useState<string | null>("t1");

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="section-gap bg-secondary/20 relative overflow-hidden" aria-label="Frequently Asked Questions">
      <div className="content-width relative z-10">
        
        {/* HEADER & SEARCH */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end mb-20 lg:mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <span className="label-caps text-accent mb-4 block">Clear Answers</span>
            <h2 className="h2 font-bold text-charcoal text-balance">
              Transparency at <br /> <span className="text-primary italic font-medium">every clinical step.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
            className="lg:col-span-5"
          >
             <div className="relative group">
                <MagnifyingGlass 
                  size={20} 
                  weight="bold" 
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-charcoal/30 group-focus-within:text-primary transition-colors" 
                />
                <input 
                  type="text"
                  placeholder="Search your concern..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-16 pl-14 pr-6 rounded-full bg-white border border-stone/30 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-charcoal/30 font-medium"
                />
             </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* CATEGORY FILTERS (SIDEBAR) */}
          <div className="lg:col-span-4 space-y-10">
             <div className="flex flex-col gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={cn(
                      "flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all duration-500 border text-left",
                      activeCategory === cat.value 
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 translate-x-2" 
                        : "bg-white/40 text-charcoal/40 border-stone/20 hover:bg-white hover:text-charcoal hover:border-stone"
                    )}
                  >
                    <cat.icon size={20} weight={activeCategory === cat.value ? "fill" : "light"} />
                    {cat.label}
                  </button>
                ))}
             </div>

             {/* Quick Contact CTA */}
             <Card className="bg-primary text-white p-10 rounded-[48px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                   <ChatTeardropDots size={120} weight="fill" />
                </div>
                <h4 className="text-2xl font-heading font-bold italic mb-4 relative z-10">Still unsure?</h4>
                <p className="text-sm text-white/70 leading-relaxed mb-8 relative z-10">Our patient coordinator is available for a private chat to answer any bespoke clinical questions.</p>
                <button className="flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-xl active:scale-95 relative z-10">
                   <WhatsappLogo size={20} weight="fill" className="text-[#25D366]" />
                   Chat on WhatsApp
                </button>
             </Card>
          </div>

          {/* ACCORDION AREA */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <motion.div 
                      key={faq.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ ...transitions.standard, delay: index * 0.05 }}
                      className={cn(
                        "bg-white rounded-[32px] overflow-hidden border transition-all duration-500",
                        openId === faq.id 
                          ? "border-primary shadow-premium ring-4 ring-primary/5" 
                          : "border-stone/30 hover:border-stone shadow-sm hover:shadow-md"
                      )}
                    >
                      <button
                        onClick={() => setOpenIndex(openId === faq.id ? null : faq.id)}
                        className="w-full px-8 py-8 flex items-center justify-between text-left group"
                      >
                        <span className={cn(
                          "font-bold text-lg md:text-xl pr-8 transition-colors",
                          openId === faq.id ? "text-primary" : "text-charcoal"
                        )}>
                          {faq.question}
                        </span>
                        <div className={cn(
                          "h-10 w-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500",
                          openId === faq.id 
                            ? "bg-primary border-primary text-white rotate-180" 
                            : "border-stone/30 text-charcoal/40 group-hover:border-charcoal group-hover:text-charcoal"
                        )}>
                          {openId === faq.id ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {openId === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={transitions.standard}
                          >
                            <div className="px-8 pb-10">
                               <div className="h-1px w-full bg-stone/20 mb-8" />
                               <p className="text-charcoal/60 text-lg leading-relaxed max-w-2xl">
                                 {faq.answer}
                               </p>
                               <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-accent cursor-pointer transition-colors group/link w-fit">
                                  Related Treatment <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                               </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-20 text-center bg-white/40 rounded-[48px] border border-dashed border-stone/40"
                  >
                     <ChatTeardropDots size={48} weight="light" className="text-charcoal/20 mx-auto mb-6" />
                     <p className="text-charcoal/40 font-bold uppercase tracking-widest text-sm">No matches found for &quot;{searchQuery}&quot;</p>
                     <button 
                       onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                       className="mt-6 text-primary font-black text-[10px] uppercase tracking-widest border-b border-primary/20 pb-1"
                     >
                        Clear Filters
                     </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[10%] left-[-5%] text-[20vw] font-heading font-black text-primary/[0.01] select-none pointer-events-none -rotate-12">
        QUESTIONS
      </div>
    </section>
  );
}
