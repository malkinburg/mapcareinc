"use client";

import { Phone, Shield } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="bg-navy text-warm-white text-[13px]">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 h-9">
        <a
          href={`tel:${COMPANY.phoneTel}`}
          className="flex items-center gap-1.5 hover:text-sky-teal transition-colors duration-200"
          aria-label={`Call us at ${COMPANY.phone}`}
        >
          <Phone className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{COMPANY.phone}</span>
          <span className="sm:hidden">Call Us</span>
        </a>
        <div className="flex items-center gap-1.5 text-warm-white/80">
          <Shield className="h-3.5 w-3.5" />
          <span className="hidden md:inline">
            Serving Communities Across Ontario
          </span>
          <span className="md:hidden">Fully Insured</span>
        </div>
      </div>
    </div>
  );
}
