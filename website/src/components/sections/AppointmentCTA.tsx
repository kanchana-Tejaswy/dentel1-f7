"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  CalendarCheck, 
  WhatsappLogo, 
  PhoneCall, 
  ClockCounterClockwise, 
  ShieldCheck, 
  UserFocus, 
  WarningCircle,
  LockKey
} from "@phosphor-icons/react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Form";
import { fadeUp, revealScale } from "@/lib/motion";
import { cn } from "@/lib/utils/cn";

/**
 * APPOINTMENT CTA STRATEGY: "THE CONCIERGE DESK"
 * 
 * Objective: Convert trust into action with zero friction.
 * 
 * Logic Flow:
 * 1. Reassurance: Final validation of comfort and personalized care.
 * 2. Trust Indicators: Same-day appointments, modern tech, experienced doctors.
 * 3. Urgent Pathway: Distinct emergency block for immediate needs.
 * 4. Frictionless Form: Ultra-simple 4-field booking request.
 */

const TRUST_REASONS = [
  { icon: ClockCounterClockwise, title: "Same-Day Appointments", desc: "Available for urgent pain relief." },
  { icon: ShieldCheck, title: "Modern Technology", desc: "For painless, precise diagnostics." },
  { icon: UserFocus, title: "Experienced Doctors", desc: "Over 15 years of clinical mastery." },
  { icon: CalendarCheck, title: "Personalized Care", desc: "We move at your exact pace." },
];

export function AppointmentCTA() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="book" className="section-gap bg-primary relative overflow-hidden" aria-label="Book Your Appointment">
      
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-secondary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[150px] mix-blend-overlay pointer-events-none" />

      <div className="content-width relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: REASSURANCE & CONTACT INFO */}
          <div className="lg:col-span-6 text-secondary">
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeUp}
             >
                <span className="label-caps text-accent mb-6 block tracking-[0.4em]">Take The Next Step</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight text-balance">
                  Your journey to absolute wellness <span className="italic font-medium text-white">begins here.</span>
                </h2>
                <p className="text-secondary/70 text-lg leading-relaxed mb-12 max-w-lg">
                  Reserve your private consultation in seconds. No pressure, no judgment—just a conversation about your goals and how we can support them.
                </p>

                {/* Secondary Contact Methods */}
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                   <a href="tel:+1234567890" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm">
                      <PhoneCall size={20} weight="fill" className="text-white group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-bold text-white tracking-widest">(555) 123-4567</span>
                   </a>
                   <a href="#" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm">
                      <WhatsappLogo size={20} weight="fill" className="text-[#25D366] group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-bold text-white tracking-widest">WhatsApp Us</span>
                   </a>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/10 pt-12 mb-12">
                   {TRUST_REASONS.map((reason) => (
                     <div key={reason.title} className="flex gap-4">
                        <div className="shrink-0 text-accent">
                          <reason.icon size={24} weight="light" />
                        </div>
                        <div>
                           <h4 className="text-sm font-bold text-white mb-1 tracking-wide">{reason.title}</h4>
                           <p className="text-xs text-secondary/50 leading-relaxed">{reason.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>

                {/* Emergency Block */}
                <div className="p-6 rounded-[24px] bg-accent/10 border border-accent/20 flex items-start gap-4 backdrop-blur-md">
                   <div className="shrink-0 text-accent mt-1">
                      <WarningCircle size={24} weight="fill" />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-widest">In Dental Pain?</h4>
                      <p className="text-xs text-secondary/70 leading-relaxed mb-3">We reserve daily priority slots for emergencies. Call us directly for immediate assistance.</p>
                      <a href="tel:+1234567890" className="text-accent text-xs font-bold uppercase tracking-widest border-b border-accent/30 hover:border-accent transition-colors pb-0.5">Call Emergency Line</a>
                   </div>
                </div>

             </motion.div>
          </div>

          {/* RIGHT: MINI BOOKING FORM */}
          <div className="lg:col-span-6">
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={revealScale}
               className="bg-white rounded-[48px] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-stone/20 relative"
             >
                {!isSuccess ? (
                  <>
                    <div className="mb-10 text-center">
                       <h3 className="text-2xl font-heading font-bold text-charcoal mb-3">Request Private Visit</h3>
                       <p className="text-sm text-charcoal/50">Our concierge will contact you shortly to confirm.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                       <Input 
                         type="text" 
                         placeholder="Your Full Name" 
                         required
                         className="h-14 bg-secondary/30 border-stone/30 focus:bg-white"
                       />
                       <Input 
                         type="tel" 
                         placeholder="Phone Number" 
                         required
                         className="h-14 bg-secondary/30 border-stone/30 focus:bg-white"
                       />
                       
                       {/* Custom Styled Selects */}
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="relative">
                             <select required className="w-full h-14 pl-4 pr-10 rounded-2xl bg-secondary/30 border border-stone/30 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-charcoal/70 text-sm font-medium appearance-none">
                                <option value="" disabled selected>Preferred Time</option>
                                <option value="morning">Morning (8am - 12pm)</option>
                                <option value="afternoon">Afternoon (12pm - 4pm)</option>
                                <option value="evening">Evening (4pm - 7pm)</option>
                                <option value="emergency">As soon as possible</option>
                             </select>
                             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/40">
                                <CalendarCheck size={20} weight="light" />
                             </div>
                          </div>
                          <div className="relative">
                             <select required className="w-full h-14 pl-4 pr-10 rounded-2xl bg-secondary/30 border border-stone/30 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all text-charcoal/70 text-sm font-medium appearance-none">
                                <option value="" disabled selected>Treatment Interest</option>
                                <option value="general">General Checkup / Pain</option>
                                <option value="cosmetic">Cosmetic / Veneers</option>
                                <option value="implants">Implants / Restoration</option>
                                <option value="invisalign">Invisalign / Braces</option>
                             </select>
                             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/40">
                                <span className="text-[10px] uppercase font-bold tracking-widest">Select</span>
                             </div>
                          </div>
                       </div>

                       <div className="pt-4">
                          <Button 
                            type="submit" 
                            size="lg" 
                            disabled={isSubmitting}
                            className={cn(
                              "w-full h-16 shadow-premium transition-all duration-500",
                              isSubmitting ? "bg-stone text-charcoal/40" : "bg-primary hover:bg-charcoal"
                            )}
                          >
                             {isSubmitting ? "Processing Request..." : "Request Appointment"}
                          </Button>
                       </div>

                       <div className="flex items-center justify-center gap-2 mt-6">
                          <LockKey size={14} className="text-charcoal/30" />
                          <p className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40">Your information is secure and private.</p>
                       </div>
                    </form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8">
                       <ShieldCheck size={48} weight="fill" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-charcoal mb-4">Request Received</h3>
                    <p className="text-charcoal/60 leading-relaxed max-w-sm mx-auto mb-10">
                      Thank you for trusting Lumina. Our patient concierge will contact you shortly to finalize your appointment time.
                    </p>
                    <Button variant="outline" onClick={() => setIsSuccess(false)}>
                      Submit Another Request
                    </Button>
                  </motion.div>
                )}
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
