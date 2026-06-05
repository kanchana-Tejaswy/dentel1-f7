"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="label-caps ml-1 text-charcoal/60">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-[60px] w-full rounded-input border border-stone bg-white px-6 py-4 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-charcoal/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-warning focus-visible:ring-warning/20",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-[12px] font-medium text-warning ml-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="label-caps ml-1 text-charcoal/60">
            {label}
          </label>
        )}
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-input border border-stone bg-white px-6 py-4 text-base ring-offset-background placeholder:text-charcoal/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all disabled:cursor-not-allowed disabled:opacity-50 resize-none",
            error && "border-warning focus-visible:ring-warning/20",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-[12px] font-medium text-warning ml-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
