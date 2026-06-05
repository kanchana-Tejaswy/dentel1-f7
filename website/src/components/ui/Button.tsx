"use client";

import * as React from "react";
import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";
import { CircleNotch } from "@phosphor-icons/react";

import { cn } from "@/lib/utils/cn";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    const variants = {
      primary: "bg-accent text-white shadow-xl shadow-accent/10 hover:shadow-accent/20 border-transparent",
      secondary: "bg-primary text-white shadow-xl shadow-primary/10 hover:shadow-primary/20 border-transparent",
      outline: "border border-stone text-charcoal bg-transparent hover:border-primary hover:text-primary",
      ghost: "text-primary bg-transparent hover:bg-primary/5 border-transparent",
    };

    const sizes = {
      sm: "h-12 px-8 text-sm",
      md: "h-14 px-10 text-base",
      lg: "h-16 px-12 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={!isLoading && !disabled ? { scale: 1.03 } : {}}
        whileTap={!isLoading && !disabled ? { scale: 0.98 } : {}}
        disabled={disabled || isLoading}
        className={cn(
          "relative inline-flex items-center justify-center font-bold transition-all rounded-pill focus:outline-none focus:ring-2 focus:ring-support/40 disabled:opacity-50 disabled:pointer-events-none tracking-tight border whitespace-nowrap overflow-hidden",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <CircleNotch className="animate-spin" size={24} weight="bold" />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              {leftIcon && <span className="shrink-0">{leftIcon}</span>}
              <React.Fragment>{children}</React.Fragment>
              {rightIcon && <span className="shrink-0">{rightIcon}</span>}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, cn };
