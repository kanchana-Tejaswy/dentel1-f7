"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { List, X, MapPin } from "@phosphor-icons/react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils/cn";

const NAV_LINKS = [
  { label: "Treatments", href: "/#services" },
  { label: "Our Team", href: "/#doctors" },
  { label: "Results", href: "/#results" },
  { label: "The Experience", href: "/#first-visit" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          isScrolled ? "bg-white/90 backdrop-blur-xl shadow-soft py-4" : "bg-transparent py-6"
        )}
      >
        <div className="content-width flex items-center justify-between">
          
          <Link 
            href="/" 
            className="text-2xl font-heading font-black text-charcoal flex items-center gap-2 group relative z-[60]"
            aria-label="Lumina Homepage"
          >
            Lumina<span className="text-primary">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.15em] transition-colors relative group py-2 text-charcoal/70 hover:text-charcoal"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="/#contact" className="text-xs font-bold text-charcoal/70 hover:text-charcoal uppercase tracking-widest flex items-center gap-2 transition-colors">
              <MapPin size={16} /> Location
            </Link>
            <Button size="sm" className="shadow-sm px-8">Book Visit</Button>
          </div>

          <button
            className="lg:hidden relative z-[60] h-12 w-12 rounded-full bg-secondary/80 flex items-center justify-center text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} weight="bold" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <List size={24} weight="bold" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-2xl lg:hidden flex flex-col pt-32 pb-8 px-6"
          >
            <nav className="flex-1 flex flex-col gap-6" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-heading font-bold block text-charcoal"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.2 }}
              className="mt-auto space-y-4"
            >
              <Button size="lg" className="w-full h-16 shadow-premium">Book Private Visit</Button>
              <Button variant="outline" size="lg" className="w-full h-16 bg-white">Call Clinic</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
