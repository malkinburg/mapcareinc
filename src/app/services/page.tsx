import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ServiceCard } from "@/components/services/service-card";
import { CTABanner } from "@/components/shared/cta-banner";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive non-medical care staffing services including foster care, residential care, youth support, crisis staffing, and respite care across Ontario.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive care staffing solutions tailored to the unique needs of foster care, residential programs, and vulnerable populations across Ontario."
        breadcrumbs={[{ label: "Services" }]}
      />
      <SectionWrapper>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </SectionWrapper>
      <CTABanner
        title="Not Sure Which Service Fits?"
        subtitle="Contact us for a free consultation. We'll help you find the right staffing solution."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
      />
    </>
  );
}
