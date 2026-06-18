"use client";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { STATS } from "@/lib/constants";

export function StatsBar() {
  return (
    <SectionWrapper background="navy" compact>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-4 text-center">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl lg:text-4xl font-bold text-sky-teal mb-1">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm text-warm-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
