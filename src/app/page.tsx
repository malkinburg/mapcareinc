import { Hero } from "@/components/home/hero";
import { AudiencePathways } from "@/components/home/audience-pathways";
import { ServicesOverview } from "@/components/home/services-overview";
import { StatsBar } from "@/components/home/stats-bar";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { TrustBadges } from "@/components/home/trust-badges";
import { CTASection } from "@/components/home/cta-section";
import { COMPANY } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudiencePathways />
      <ServicesOverview />
      <StatsBar />
      <HowItWorks />
      <Testimonials />
      <TrustBadges />
      <CTASection />

      {/* JSON-LD Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: COMPANY.name,
            description:
              "Ontario's trusted non-medical care staffing provider serving foster care and vulnerable populations.",
            url: COMPANY.url,
            logo: `${COMPANY.url}/images/logo.png`,
            telephone: COMPANY.phoneTel,
            email: COMPANY.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: COMPANY.address.street,
              addressLocality: COMPANY.address.city,
              addressRegion: COMPANY.address.province,
              postalCode: COMPANY.address.postalCode,
              addressCountry: "CA",
            },
            areaServed: {
              "@type": "Province",
              name: "Ontario",
            },
            sameAs: [
              COMPANY.social.linkedin,
              COMPANY.social.facebook,
              COMPANY.social.instagram,
            ],
          }),
        }}
      />
    </>
  );
}
