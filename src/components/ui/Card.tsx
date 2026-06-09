"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { transitions, fadeUp } from "@/lib/motion";

interface CardProps extends HTMLMotionProps<"div"> {
  hoverable?: boolean;
  delay?: number;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = true, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        custom={delay}
        whileHover={hoverable ? { y: -8, scale: 1.01 } : {}}
        transition={transitions.standard}
        className={cn(
          "bg-white rounded-card p-10 shadow-premium border border-stone/30 relative overflow-hidden",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };
