import dynamic from 'next/dynamic';
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Services } from "@/components/sections/Services";

// Lazy load below-the-fold components for optimal Core Web Vitals (LCP/TTI)
const Doctors = dynamic(() => import('@/components/sections/Doctors').then(mod => mod.Doctors), { ssr: true });
const Technology = dynamic(() => import('@/components/sections/Technology').then(mod => mod.Technology), { ssr: true });
const BeforeAfter = dynamic(() => import('@/components/sections/BeforeAfter').then(mod => mod.BeforeAfter), { ssr: true });
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(mod => mod.Testimonials), { ssr: true });
const FirstVisit = dynamic(() => import('@/components/sections/FirstVisit').then(mod => mod.FirstVisit), { ssr: true });
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => mod.FAQ), { ssr: true });
const AppointmentCTA = dynamic(() => import('@/components/sections/AppointmentCTA').then(mod => mod.AppointmentCTA), { ssr: true });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SocialProof />
      <Services />
      <Doctors />
      <Technology />
      <BeforeAfter />
      <Testimonials />
      <FirstVisit />
      <FAQ />
      <AppointmentCTA />
    </div>
  );
}
