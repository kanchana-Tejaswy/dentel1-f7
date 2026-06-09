"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service like Sentry or Datadog
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-secondary flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="h2 font-bold text-charcoal mb-6 text-balance">
          Something went <span className="italic text-primary font-medium">unexpectedly wrong.</span>
        </h1>
        <p className="body-l text-charcoal/60 mb-10 max-w-lg mx-auto">
          We apologize for the inconvenience. Our technical team has been notified. Please try refreshing the page.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={() => reset()} className="shadow-premium px-10">
            Try Again
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.location.href = "/"} className="bg-white">
            Return Home
          </Button>
        </div>
      </div>
    </main>
  );
}
