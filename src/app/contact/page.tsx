import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ContactForm } from "@/components/contact/contact-form";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mapcare Inc. Whether you need care staffing support, want to join our team, or have questions — we're here to help.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phoneTel}`,
    note: COMPANY.officeHours.emergency,
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    note: "We respond within one business day",
  },
  {
    icon: MapPin,
    label: "Office",
    value: `${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.province} ${COMPANY.address.postalCode}`,
    href: undefined,
    note: undefined,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: COMPANY.officeHours.weekdays,
    href: undefined,
    note: COMPANY.officeHours.weekends,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Whether you need care staffing support, want to join our team, or have questions about our services — we'd love to hear from you."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-semibold text-navy mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-xl font-semibold text-navy mb-6">
              Contact Information
            </h2>
            {contactInfo.map((item) => (
              <Card key={item.label} className="shadow-card rounded-xl border-0">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-teal/5 flex-shrink-0">
                    <item.icon className="h-5 w-5 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-teal mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-navy hover:text-teal transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-navy">
                        {item.value}
                      </p>
                    )}
                    {item.note && (
                      <p className="text-xs text-muted-teal mt-1">
                        {item.note}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* JSON-LD LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: COMPANY.name,
            telephone: COMPANY.phoneTel,
            email: COMPANY.email,
            url: COMPANY.url,
            address: {
              "@type": "PostalAddress",
              streetAddress: COMPANY.address.street,
              addressLocality: COMPANY.address.city,
              addressRegion: COMPANY.address.province,
              postalCode: COMPANY.address.postalCode,
              addressCountry: "CA",
            },
            openingHours: "Mo-Fr 08:00-18:00",
          }),
        }}
      />
    </>
  );
}
