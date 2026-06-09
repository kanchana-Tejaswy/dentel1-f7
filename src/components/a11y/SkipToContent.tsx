"use client";

import * as React from "react";

/**
 * Skip To Content Link
 * Essential for WCAG AA+ Keyboard Accessibility.
 * Remains hidden until focused by the keyboard.
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:font-bold focus:rounded-full focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
    >
      Skip to main content
    </a>
  );
}
