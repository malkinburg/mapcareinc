import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { ServicePageContent } from "@/components/services/service-page-content";
import { services } from "@/data/services";
import { COMPANY } from "@/lib/constants";

export function createServicePage(slug: string) {
  const service = services.find((s) => s.slug === slug)!;

  const metadata: Metadata = {
    title: service.title,
    description: service.excerpt,
  };

  function Page() {
    const svc = services.find((s) => s.slug === slug);
    if (!svc) return notFound();

    return (
      <>
        <PageHero
          title={svc.title}
          subtitle={svc.excerpt}
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: svc.shortTitle },
          ]}
        />
        <ServicePageContent service={svc} />

        {/* JSON-LD Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: svc.title,
              description: svc.description,
              provider: {
                "@type": "Organization",
                name: COMPANY.name,
                url: COMPANY.url,
              },
              areaServed: "Ontario, Canada",
            }),
          }}
        />
      </>
    );
  }

  return { metadata, Page };
}
