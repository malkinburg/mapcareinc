"use client";

import { Phone, UserCheck, HeartHandshake } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "Reach Out",
    description:
      "Contact us with your staffing needs. We listen carefully to understand your unique situation, care requirements, and timeline.",
  },
  {
    number: "2",
    icon: UserCheck,
    title: "We Match",
    description:
      "Our team carefully selects care professionals whose skills, experience, and values align with your specific needs and environment.",
  },
  {
    number: "3",
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "We stay connected to ensure quality care, address concerns promptly, and adapt staffing as your needs evolve over time.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper>
      <SectionHeading
        label="How It Works"
        title="Simple, Transparent, Supportive"
        subtitle="We've streamlined our process so you can focus on what matters — the people in your care."
      />
      <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
        {/* Connecting line (desktop) */}
        <div
          className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-teal/20 via-teal/40 to-teal/20"
          aria-hidden="true"
        />

        {steps.map((step, index) => (
          <MotionWrapper
            key={step.title}
            delay={index * 0.15}
            className="text-center relative"
          >
            {/* Number circle */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal text-warm-white font-bold text-xl mb-5 relative z-10 shadow-lg">
              {step.number}
            </div>
            <div className="inline-flex p-3 rounded-xl bg-teal/5 mb-4">
              <step.icon className="h-6 w-6 text-teal" />
            </div>
            <h3 className="text-lg font-semibold text-navy mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-slate-brand leading-relaxed max-w-xs mx-auto">
              {step.description}
            </p>
          </MotionWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}
