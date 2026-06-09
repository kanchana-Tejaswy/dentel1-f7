"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Quotes, 
  Star, 
  Play, 
  ArrowRight, 
  GoogleLogo, 
  CheckCircle,
  UsersThree,
  HandHeart
} from "@phosphor-icons/react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { fadeUp, revealScale } from "@/lib/motion";

/**
 * TESTIMONIALS STRATEGY: "THE VOICE OF CARE"
 * 
 * Objective: Build emotional trust through authentic peer experiences.
 * 
 * Information Hierarchy:
 * 1. Emotional Hook - Real-world patient story focusing on anxiety reduction.
 * 2. Visual Proof - High-end video testimonial presentation.
 * 3. Community Scale - Dense grid of reviews with Google integration.
 * 4. Verification - Verified rating and patient count indicators.
 */

interface PatientStory {
  id: string;
  name: string;
  treatment: string;
  problem: string;
  experience: string;
  outcome: string;
  image: string;
}

interface Review {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  text: string;
}

const FEATURED_STORY: PatientStory = {
  id: "story-1",
  name: "Julianne Rogers",
  treatment: "Invisalign & Smile Makeover",
  problem: "High Dental Anxiety",
  experience: "I had avoided the dentist for nearly a decade due to sheer panic. From the moment I stepped into Lumina, the environment felt more like a spa than a clinic. The team listened to my fears before even looking at my teeth.",
  outcome: "I now have the smile I always dreamed of, but more importantly, I finally feel safe and comfortable in the dental chair.",
  image: "https://images.unsplash.com/photo-1590642916589-592bca10dfbf?q=80&w=1974&auto=format&fit=crop"
};

const VIDEO_TESTIMONIALS = [
  { id: "v1", thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop", name: "David M.", treatment: "Full Reconstruction" },
  { id: "v2", thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop", name: "Elena S.", treatment: "Cosmetic Veneers" },
];

const REVIEWS: Review[] = [
  { id: "r1", name: "Sarah J.", treatment: "Routine Cleaning", rating: 5, text: "The most thorough and gentle cleaning I've ever had. Truly boutique service." },
  { id: "r2", name: "Michael K.", treatment: "Emergency", rating: 5, text: "They fit me in the same day for a broken tooth. Zero pain and absolute precision." },
  { id: "r3", name: "Emily L.", treatment: "Whitening", rating: 5, text: "Results are incredible. My smile is five shades brighter in just one hour." },
  { id: "r4", name: "Thomas B.", treatment: "Implants", rating: 5, text: "Dr. Rossi is a genius. The process was explained clearly and the healing was fast." },
  { id: "r5", name: "Jessica W.", treatment: "Pediatric", rating: 5, text: "My daughter actually asks when we're going back. The kids' area is amazing." },
  { id: "r6", name: "Robert P.", treatment: "Invisalign", rating: 5, text: "Transparent pricing and world-class technology. Highly recommend for adults." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-gap bg-white relative overflow-hidden" aria-label="Patient Stories and Testimonials">
      <div className="content-width relative z-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-20 lg:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="label-caps text-accent mb-4 block">The Voice of Care</span>
            <h2 className="h2 font-bold text-charcoal mb-8 text-balance">
              Trusted by patients who <br /> <span className="text-primary italic font-medium">used to fear the dentist.</span>
            </h2>
            <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-stone/20">
               <div className="flex items-center gap-3">
                  <div className="flex text-[#FBBC05]">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} weight="fill" size={16} />)}
                  </div>
                  <span className="text-sm font-bold text-charcoal/80">4.9 Overall Rating</span>
               </div>
               <div className="flex items-center gap-3">
                  <GoogleLogo size={24} weight="fill" className="text-[#4285F4]" />
                  <span className="text-sm font-bold text-charcoal/80">800+ Google Reviews</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* FEATURED PATIENT STORY */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            <div className="lg:col-span-5 relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealScale}
                className="relative aspect-[4/5] w-full rounded-[60px] overflow-hidden shadow-2xl border-[16px] border-secondary"
              >
                <Image
                  src={FEATURED_STORY.image}
                  alt={`Patient ${FEATURED_STORY.name}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-30" />
              </motion.div>
              
              {/* Outcome Badge */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealScale}
                custom={0.5}
                className="absolute -right-8 bottom-12 bg-primary text-white p-8 rounded-[40px] shadow-2xl max-w-[240px] hidden xl:block"
              >
                 <CheckCircle size={32} weight="fill" className="text-accent mb-4" />
                 <p className="text-lg font-heading font-bold leading-tight italic">
                   &quot;I finally found my clinical home.&quot;
                 </p>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
               <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={fadeUp}
               >
                 <div className="flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center text-primary">
                       <HandHeart size={28} weight="light" />
                    </div>
                    <div>
                       <p className="label-caps text-[10px] text-accent font-black tracking-widest">{FEATURED_STORY.problem}</p>
                       <h3 className="text-3xl font-heading font-bold text-charcoal">{FEATURED_STORY.name}</h3>
                    </div>
                 </div>

                 <div className="relative mb-12">
                    <Quotes size={60} weight="fill" className="text-primary/5 absolute -top-8 -left-10" />
                    <p className="text-2xl font-heading italic text-charcoal/80 leading-relaxed relative z-10">
                      &quot;{FEATURED_STORY.experience}&quot;
                    </p>
                 </div>

                 <div className="p-10 bg-secondary/30 rounded-[32px] border border-stone/20 mb-12">
                    <p className="label-caps text-[9px] text-primary mb-4 font-black">Treatment Outcome</p>
                    <p className="text-sm font-bold text-charcoal/60 leading-relaxed">
                       {FEATURED_STORY.outcome}
                    </p>
                    <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary">{FEATURED_STORY.treatment}</p>
                 </div>

                 <Button variant="outline" className="h-14 px-10 group">
                    Watch Video Story <Play size={20} weight="fill" className="ml-3 group-hover:scale-110 transition-transform" />
                 </Button>
               </motion.div>
            </div>

          </div>
        </div>

        {/* VIDEO GALLERY GRID */}
        <div className="mb-32">
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeUp}
             className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
           >
              {VIDEO_TESTIMONIALS.map((video) => (
                <div key={video.id} className="group relative aspect-video rounded-[48px] overflow-hidden shadow-xl cursor-pointer">
                   <Image src={video.thumbnail} alt={video.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                   <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[2px] opacity-60 group-hover:opacity-20 transition-opacity" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
                         <Play size={32} weight="fill" className="text-primary ml-1" />
                      </div>
                   </div>
                   <div className="absolute bottom-10 left-10 text-white">
                      <p className="text-2xl font-heading font-bold mb-1">{video.name}</p>
                      <p className="text-[10px] label-caps tracking-widest opacity-80">{video.treatment}</p>
                   </div>
                </div>
              ))}
           </motion.div>
        </div>

        {/* REVIEW MARQUEE / GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {REVIEWS.map((review, i) => (
             <motion.div
               key={review.id}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeUp}
               custom={i * 0.1}
             >
               <Card className="h-full p-10 bg-secondary/10 border-stone/20 hover:shadow-premium hover:bg-white transition-all duration-700">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex text-[#FBBC05] gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} weight="fill" size={14} />)}
                    </div>
                    <p className="label-caps text-[9px] text-primary/40 font-bold">Verified Review</p>
                  </div>
                  <p className="text-sm italic font-medium text-charcoal/70 leading-relaxed mb-8">&quot;{review.text}&quot;</p>
                  <div className="mt-auto border-t border-stone/20 pt-6 flex items-center justify-between">
                     <div>
                        <p className="text-xs font-bold text-charcoal">{review.name}</p>
                        <p className="text-[9px] label-caps text-charcoal/40 tracking-wider">{review.treatment}</p>
                     </div>
                     <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center border border-stone/30">
                        <ArrowRight size={14} className="text-primary" />
                     </div>
                  </div>
               </Card>
             </motion.div>
           ))}
        </div>

        {/* BOTTOM CTA REINFORCEMENT */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-24 pt-24 border-t border-stone/20 text-center"
        >
           <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-secondary/40 border border-stone/30 mb-8">
              <UsersThree size={24} weight="duotone" className="text-primary" />
              <span className="text-sm font-bold text-charcoal/60 italic">Join 12,000+ local patients who trust Lumina.</span>
           </div>
           <div>
              <Button size="lg" className="h-16 px-12 shadow-premium">Start Your Success Story</Button>
           </div>
        </motion.div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[10%] right-[-10%] opacity-[0.02] select-none pointer-events-none">
         <Quotes size={600} weight="fill" />
      </div>
    </section>
  );
}
