"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "teal" | "amber";
}

export function CTABanner({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "teal",
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "teal"
          ? "bg-gradient-to-br from-teal to-sky-teal"
          : "bg-gradient-to-br from-amber to-terracotta"
      )}
    >
      {/* Decorative circle */}
      <div
        className={cn(
          "absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-10",
          variant === "teal" ? "bg-white" : "bg-navy"
        )}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-warm-white text-2xl lg:text-3xl font-bold">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-white/80 text-lg">{subtitle}</p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={primaryHref}
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-lg px-8 font-semibold transition-all duration-200 hover:-translate-y-0.5",
                variant === "teal"
                  ? "bg-white text-teal hover:bg-warm-white shadow-lg"
                  : "bg-navy text-warm-white hover:bg-navy/90 shadow-lg"
              )}
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-lg px-8 font-semibold bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
                )}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
