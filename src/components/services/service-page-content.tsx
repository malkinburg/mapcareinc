"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";
import { Phone } from "lucide-react";
import { getIcon } from "@/lib/icons";
import type { ServiceData } from "@/data/services";

interface ServicePageContentProps {
  service: ServiceData;
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  return (
    <>
      {/* Overview */}
      <SectionWrapper>
        <div className="max-w-3xl">
          <p className="text-lg text-slate-brand leading-relaxed">
            {service.description}
          </p>
        </div>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper background="warm-white">
        <SectionHeading
          label="What We Offer"
          title="Key Features"
          subtitle="Our approach is built on experience, compassion, and a commitment to quality."
          align="left"
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {service.features.map((feature, index) => {
            const FeatureIcon = getIcon(feature.icon);
            return (
            <MotionWrapper key={feature.title} delay={index * 0.1}>
              <Card className="h-full shadow-card rounded-xl border-0">
                <CardContent className="p-6">
                  <div className="inline-flex p-2.5 rounded-lg bg-teal/5 mb-4">
                    <FeatureIcon className="h-5 w-5 text-teal" />
                  </div>
                  <h3 className="text-base font-semibold text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-brand leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </MotionWrapper>
            );
          })}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <SectionHeading
          label="Common Questions"
          title="Frequently Asked Questions"
          align="left"
        />
        <div className="max-w-3xl">
          <Accordion className="space-y-3">
            {service.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-xl shadow-card border-0 px-6 data-[state=open]:shadow-card-hover transition-shadow"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-navy py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-brand leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>

      {/* Service CTA */}
      <SectionWrapper background="warm-white" compact>
        <div className="bg-gradient-to-br from-teal to-sky-teal rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-warm-white text-xl lg:text-2xl font-bold mb-3">
            Ready to Learn More About {service.shortTitle}?
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Get in touch with our team to discuss how we can support your
            specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-teal hover:bg-warm-white rounded-lg px-8 font-semibold shadow-lg"
              )}
            >
              Contact Us
            </Link>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/30 text-white hover:bg-white/10 rounded-lg px-8 font-semibold"
              )}
            >
              <Phone className="h-4 w-4 mr-2" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
