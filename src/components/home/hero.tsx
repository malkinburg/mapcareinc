"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-white min-h-[85vh] flex items-center">
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal/8 to-sky-teal/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-amber/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <MotionWrapper>
              <p className="text-[13px] font-medium uppercase tracking-[3px] text-muted-teal mb-4">
                Ontario&apos;s Trusted Care Staffing Partner
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <h1 className="mb-6">
                Guiding Care,{" "}
                <span className="text-teal">Connecting People</span>
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <p className="text-lg text-slate-brand leading-relaxed max-w-lg mb-8">
                We connect compassionate care professionals with foster
                families, residential programs, and communities across Ontario.
                Every placement is a step toward stability, safety, and
                belonging.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-teal hover:bg-teal/90 text-warm-white rounded-lg px-8 font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover"
                  )}
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/careers"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-amber text-amber hover:bg-amber hover:text-navy rounded-lg px-8 font-semibold transition-all duration-200"
                  )}
                >
                  Join Our Team
                </Link>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.4}>
              <div className="flex items-center gap-2 text-sm text-muted-teal">
                <Shield className="h-4 w-4 text-teal" />
                <span>
                  Fully Insured &amp; Bonded &bull; Serving 10+ Communities
                  Across Ontario
                </span>
              </div>
            </MotionWrapper>
          </div>

          {/* Decorative Visual */}
          <MotionWrapper delay={0.2} className="hidden lg:block">
            <div className="relative flex items-center justify-center">
              {/* Decorative rings */}
              <div className="absolute w-96 h-96 rounded-full border-2 border-teal/10 animate-pulse" />
              <div className="absolute w-80 h-80 rounded-full border-2 border-sky-teal/10" />
              <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-teal/5 to-sky-teal/5" />

              {/* Icon mark large */}
              <svg
                viewBox="0 0 100 100"
                className="w-48 h-48 drop-shadow-2xl"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="heroGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#2E7D8C" />
                    <stop offset="100%" stopColor="#4AABB8" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="48" fill="#1B3A4B" />
                <path
                  d="M 20 60 Q 12 40, 35 28 Q 43 23, 50 26"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M 80 60 Q 88 40, 65 28 Q 57 23, 50 26"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M 50 24 C 40 10, 18 18, 30 36 C 36 46, 50 62, 50 62 C 50 62, 64 46, 70 36 C 82 18, 60 10, 50 24 Z"
                  fill="url(#heroGrad)"
                />
                <circle cx="50" cy="35" r="7" fill="white" opacity="0.85" />
                <circle cx="38" cy="74" r="4" fill="#F4A261" />
                <line
                  x1="38"
                  y1="78"
                  x2="38"
                  y2="90"
                  stroke="#F4A261"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="62" cy="77" r="3.5" fill="#E07A5F" />
                <line
                  x1="62"
                  y1="80.5"
                  x2="62"
                  y2="90"
                  stroke="#E07A5F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              {/* Floating cards */}
              <div className="absolute top-8 right-4 bg-white rounded-xl shadow-card p-3 text-sm">
                <p className="font-semibold text-navy text-xs">350+ Placements</p>
                <p className="text-muted-teal text-xs">Across Ontario</p>
              </div>
              <div className="absolute bottom-12 left-4 bg-white rounded-xl shadow-card p-3 text-sm">
                <p className="font-semibold text-navy text-xs">24/7 Support</p>
                <p className="text-muted-teal text-xs">Always available</p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
