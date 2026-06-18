"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mapcare-cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleChoice(accepted: boolean) {
    localStorage.setItem(
      "mapcare-cookie-consent",
      accepted ? "accepted" : "declined"
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 p-4"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-card-hover border border-soft-gray p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-slate-brand flex-1 leading-relaxed">
            We use cookies to improve your experience and analyze site traffic.
            See our{" "}
            <Link
              href="/privacy-policy"
              className="text-teal font-medium underline underline-offset-2 hover:text-navy transition-colors"
            >
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleChoice(false)}
              className="rounded-lg border-soft-gray text-slate-brand hover:text-navy"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={() => handleChoice(true)}
              className="rounded-lg bg-teal hover:bg-teal/90 text-warm-white"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
