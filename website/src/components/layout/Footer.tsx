"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  PaperPlaneRight, 
  InstagramLogo, 
  FacebookLogo, 
  TiktokLogo, 
  MapPin, 
  Phone
} from "@phosphor-icons/react";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export function Footer() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema)
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Newsletter subscribed:", data.email);
  };

  return (
    <footer className="bg-charcoal text-white pt-24 pb-12 rounded-t-[48px] mt-12 relative z-10" aria-label="Site Footer">
      <div className="content-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <Link href="/" className="text-3xl font-heading font-black text-white mb-8 block">
              Lumina<span className="text-primary">.</span>
            </Link>
            <p className="text-white/60 mb-10 max-w-sm leading-relaxed text-sm">
              Boutique clinical excellence meets unparalleled patient hospitality. Join our community for exclusive wellness insights.
            </p>
            
            {!isSubmitSuccessful ? (
              <form onSubmit={handleSubmit(onSubmit)} className="relative max-w-sm">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-full pl-6 pr-14 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors disabled:opacity-50"
                  aria-label="Subscribe to newsletter"
                >
                  <PaperPlaneRight size={18} weight="fill" />
                </button>
                {errors.email && (
                  <p className="absolute -bottom-6 left-4 text-[10px] font-bold text-warning tracking-widest uppercase">
                    {errors.email.message}
                  </p>
                )}
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary text-sm font-bold max-w-sm">
                Thank you for subscribing.
              </div>
            )}
          </div>

          {/* Links: Services */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">Treatments</h4>
            <ul className="space-y-4">
              {[
                { name: "Invisalign", slug: "invisalign" },
                { name: "Smile Makeover", slug: "smile-makeover" },
                { name: "Dental Implants", slug: "implants" },
                { name: "Whitening", slug: "whitening" },
                { name: "Emergency", slug: "emergency" }
              ].map(item => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Clinic */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">Clinic</h4>
            <ul className="space-y-4">
              {[
                { name: "Our Team", href: "/team" },
                { name: "The Experience", href: "/experience" },
                { name: "Results Gallery", href: "/results" },
                { name: "Reviews", href: "/reviews" },
                { name: "Contact", href: "/contact" }
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-6">Visit Us</h4>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <p>123 Wellness Ave,<br/>Suite 400<br/>Beverly Hills, CA 90210</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={18} className="text-primary shrink-0" />
                <p>(555) 123-4567</p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold tracking-widest uppercase text-white/40 text-center md:text-left">
            &copy; {new Date().getFullYear()} Lumina Dental Sanctuary. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#!" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all" aria-label="Instagram">
              <InstagramLogo size={18} weight="fill" />
            </a>
            <a href="#!" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all" aria-label="Facebook">
              <FacebookLogo size={18} weight="fill" />
            </a>
            <a href="#!" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all" aria-label="TikTok">
              <TiktokLogo size={18} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
