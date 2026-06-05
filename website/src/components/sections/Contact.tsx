"use client";

import * as React from "react";
import { Phone, WhatsappLogo, MapPin, Clock, CheckCircle } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/Button";
import { Input, Textarea } from "../ui/Form";
import { fadeUp, transitions } from "@/lib/motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Please provide more details"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async () => {
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
    <section id="contact" className="section-gap bg-white overflow-hidden">
      <div className="content-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Info Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="label-caps text-accent mb-4 block">Get in touch</span>
            <h2 className="h2 font-bold text-charcoal mb-8 text-balance">
              Let&apos;s start your journey to a <span className="text-primary italic font-medium">healthier smile.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-10">
                <div className="flex gap-5 group">
                  <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Phone size={24} weight="light" />
                  </div>
                  <div>
                    <p className="label-caps text-charcoal/40 mb-1">Call Us</p>
                    <a href="tel:+15550001234" className="text-lg font-bold text-charcoal hover:text-primary transition-colors">+1 (555) 000-1234</a>
                  </div>
                </div>
                
                <div className="flex gap-5 group">
                  <div className="h-12 w-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-500">
                    <WhatsappLogo size={24} weight="light" />
                  </div>
                  <div>
                    <p className="label-caps text-charcoal/40 mb-1">WhatsApp</p>
                    <a href="#" className="text-lg font-bold text-charcoal hover:text-[#25D366] transition-colors">+1 (555) 000-5678</a>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex gap-5 group">
                  <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <MapPin size={24} weight="light" />
                  </div>
                  <div>
                    <p className="label-caps text-charcoal/40 mb-1">Location</p>
                    <p className="text-lg font-bold text-charcoal leading-snug">123 Wellness Way, Suite 100<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex gap-5 group">
                  <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Clock size={24} weight="light" />
                  </div>
                  <div>
                    <p className="label-caps text-charcoal/40 mb-1">Hours</p>
                    <p className="text-lg font-bold text-charcoal">Mon - Fri: 8am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-16 h-[340px] bg-secondary rounded-[32px] relative overflow-hidden flex items-center justify-center border border-stone/50 shadow-inner group cursor-pointer">
               <span className="text-charcoal/20 font-heading text-xl group-hover:scale-105 transition-transform duration-700">Interactive Map View</span>
               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.2}
          >
            <div className="bg-secondary/30 p-8 md:p-12 lg:p-16 rounded-[40px] border border-stone/50 shadow-premium relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitSuccessful ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={transitions.standard}
                  >
                    <h3 className="h3 font-bold text-charcoal mb-10">Send us a message</h3>
                    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                      <div className="space-y-6">
                        <Input 
                          {...register("name")}
                          label="Full Name" 
                          placeholder="e.g. Jane Doe" 
                          error={errors.name?.message}
                          className="bg-white/60 focus:bg-white"
                        />
                        <Input 
                          {...register("email")}
                          label="Email Address" 
                          type="email" 
                          placeholder="jane@example.com" 
                          error={errors.email?.message}
                          className="bg-white/60 focus:bg-white"
                        />
                        <Textarea 
                          {...register("message")}
                          label="How can we help?" 
                          placeholder="Tell us about your goals or concerns..." 
                          error={errors.message?.message}
                          className="bg-white/60 focus:bg-white min-h-[120px]"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-14 shadow-premium shadow-primary/20 transition-all" 
                      >
                        {isSubmitting ? "Sending Request..." : "Send Request"}
                      </Button>
                      
                      <p className="text-[10px] text-center text-charcoal/40 font-bold uppercase tracking-widest px-4 leading-relaxed">
                        By sending this message, you agree to our privacy policy and clinical terms of service.
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={transitions.standard}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <CheckCircle size={40} weight="fill" />
                    </div>
                    <h3 className="h3 font-bold text-charcoal mb-4">Message Sent</h3>
                    <p className="text-charcoal/60 leading-relaxed max-w-sm mb-8">
                      Thank you for reaching out to Lumina Dental Sanctuary. Our patient concierge will reply to your message shortly.
                    </p>
                    <Button variant="outline" onClick={() => window.location.reload()}>
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
