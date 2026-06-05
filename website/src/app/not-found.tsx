"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-secondary flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="display-large text-primary mb-6">404</h1>
        <h2 className="h3 font-bold text-charcoal mb-6">Page not found</h2>
        <p className="body-l text-charcoal/60 mb-10 max-w-lg mx-auto">
          We couldn&apos;t find the page you were looking for. It may have been moved, or the address might be incorrect.
        </p>
        <Link href="/">
          <Button size="lg" className="shadow-premium px-10">
            Return Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
