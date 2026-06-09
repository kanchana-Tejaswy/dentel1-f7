"use client";

import * as React from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { CalendarCheck, WhatsappLogo, PhoneCall } from "@phosphor-icons/react";

export function MobileStickyBar() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling past the hero section
    setIsVisible(latest > 300);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="fixed bottom-6 inset-x-6 z-40 lg:hidden"
        >
          <div className="bg-charcoal/95 backdrop-blur-xl p-2 rounded-full shadow-2xl flex items-center justify-between border border-white/10">
            <a href="tel:+1234567890" className="flex-1 flex items-center justify-center gap-2 text-white h-12 rounded-full hover:bg-white/10 transition-colors">
              <PhoneCall size={20} weight="fill" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Call</span>
            </a>
            <div className="w-px h-6 bg-white/20 mx-1" />
            <a href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-white h-12 rounded-full hover:bg-white/10 transition-colors">
              <WhatsappLogo size={20} weight="fill" className="text-[#25D366]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Chat</span>
            </a>
            <a href="#book" className="h-12 px-6 rounded-full bg-primary text-white flex items-center justify-center gap-2 shadow-sm ml-1 hover:bg-accent transition-colors">
              <CalendarCheck size={18} weight="bold" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Book</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
