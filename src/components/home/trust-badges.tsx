"use client";

import { Clock, Award, CheckCircle, FileCheck } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { MotionWrapper } from "@/components/shared/motion-wrapper";

const badges = [
  {
    icon: Clock,
    label: "24/7 On-Call Support",
  },
  {
    icon: FileCheck,
    label: "Vulnerable Sector Checked",
  },
  {
    icon: Award,
    label: "Trauma-Informed Trained",
  },
  {
    icon: CheckCircle,
    label: "Fully Insured & Bonded",
  },
];

export function TrustBadges() {
  return (
    <SectionWrapper compact>
      <MotionWrapper>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2.5 text-muted-teal"
            >
              <badge.icon className="h-5 w-5 text-teal" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
