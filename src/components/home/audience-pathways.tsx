"use client";

import Link from "next/link";
import { Heart, Users, Building2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";

const pathways = [
  {
    icon: Heart,
    title: "For Families & Guardians",
    description:
      "Find compassionate, vetted care professionals for the people you love. We understand the unique needs of foster and kinship families.",
    href: "/services",
    color: "text-teal",
    borderColor: "border-t-teal",
    bgColor: "bg-teal/5",
  },
  {
    icon: Users,
    title: "For Care Professionals",
    description:
      "Join a team that values your skills and supports your growth. Make a meaningful difference in the lives of children and youth across Ontario.",
    href: "/careers",
    color: "text-amber",
    borderColor: "border-t-amber",
    bgColor: "bg-amber/5",
  },
  {
    icon: Building2,
    title: "For Partners & Agencies",
    description:
      "Reliable staffing solutions for residential care and community organizations. We deliver consistent, qualified care professionals when you need them.",
    href: "/contact",
    color: "text-terracotta",
    borderColor: "border-t-terracotta",
    bgColor: "bg-terracotta/5",
  },
];

export function AudiencePathways() {
  return (
    <SectionWrapper>
      <SectionHeading
        label="How We Help"
        title="Care Solutions for Every Need"
        subtitle="Whether you're seeking care, looking to make a difference as a professional, or need staffing support for your organization — we're here for you."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {pathways.map((path, index) => (
          <MotionWrapper key={path.title} delay={index * 0.1}>
            <Link href={path.href} className="group block h-full">
              <Card
                className={`h-full border-t-4 ${path.borderColor} border-x-0 border-b-0 shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-1 rounded-xl`}
              >
                <CardContent className="p-7">
                  <div
                    className={`inline-flex p-3 rounded-xl ${path.bgColor} mb-5`}
                  >
                    <path.icon className={`h-6 w-6 ${path.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-3">
                    {path.title}
                  </h3>
                  <p className="text-sm text-slate-brand leading-relaxed mb-4">
                    {path.description}
                  </p>
                  <span
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${path.color} group-hover:gap-2.5 transition-all duration-200`}
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </MotionWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}
