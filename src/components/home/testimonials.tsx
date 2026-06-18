"use client";

import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { testimonials } from "@/data/testimonials";

const accentColors = [
  "bg-teal",
  "bg-amber",
  "bg-sky-teal",
  "bg-terracotta",
  "bg-muted-teal",
];

export function Testimonials() {
  return (
    <SectionWrapper background="warm-white">
      <SectionHeading
        label="Testimonials"
        title="Trusted by Families and Professionals Across Ontario"
        subtitle="Hear from the people who work with us and the communities we serve."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <MotionWrapper key={testimonial.name} delay={index * 0.1}>
            <Card className="h-full shadow-card rounded-xl border-0">
              <CardContent className="p-7 flex flex-col h-full">
                <Quote className="h-8 w-8 text-teal/20 mb-4 flex-shrink-0" />
                <p className="text-sm text-slate-brand leading-relaxed italic flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${accentColors[index % accentColors.length]} flex items-center justify-center text-sm font-bold text-warm-white flex-shrink-0`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-teal">
                      {testimonial.role}, {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}
