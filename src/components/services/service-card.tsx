"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { getIcon } from "@/lib/icons";
import type { ServiceData } from "@/data/services";

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = getIcon(service.icon);

  return (
    <MotionWrapper delay={index * 0.08}>
      <Link href={`/services/${service.slug}`} className="group block h-full">
        <Card className="h-full shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-1 rounded-xl border-0">
          <CardContent className="p-7">
            <div className="inline-flex p-3 rounded-xl bg-teal/5 mb-5">
              <Icon className="h-6 w-6 text-teal" />
            </div>
            <h3 className="text-lg font-semibold text-navy mb-2">
              {service.shortTitle}
            </h3>
            <p className="text-sm text-slate-brand leading-relaxed mb-4">
              {service.excerpt}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-teal group-hover:gap-2.5 transition-all duration-200">
              Learn more
              <ArrowRight className="h-4 w-4" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </MotionWrapper>
  );
}
