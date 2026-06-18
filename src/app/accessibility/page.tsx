import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Mapcare Inc's commitment to digital accessibility under the Accessibility for Ontarians with Disabilities Act (AODA).",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        title="Accessibility"
        subtitle="Our commitment to creating an inclusive digital experience for all visitors."
        breadcrumbs={[{ label: "Accessibility" }]}
      />

      <SectionWrapper>
        <div className="prose prose-slate max-w-3xl mx-auto">
          <h2>Our Commitment to Accessibility</h2>
          <p>
            Mapcare Inc is committed to ensuring equal access and participation
            for people with disabilities. We are committed to treating people
            with disabilities in a way that allows them to maintain their
            dignity and independence.
          </p>
          <p>
            We believe in integration, and we are committed to meeting the
            needs of people with disabilities in a timely manner. We will do
            so by removing and preventing barriers to accessibility and by
            meeting our accessibility requirements under the Accessibility for
            Ontarians with Disabilities Act (AODA) and Ontario&apos;s
            accessibility laws.
          </p>

          <h2>Standards We Follow</h2>
          <p>
            This website has been designed to conform to the Web Content
            Accessibility Guidelines (WCAG) 2.0 Level AA, as required by the
            AODA. These guidelines explain how to make web content more
            accessible for people with disabilities and more user-friendly
            for everyone.
          </p>

          <h2>Features of This Website</h2>
          <ul>
            <li>
              <strong>Keyboard navigation</strong> — All interactive elements
              can be accessed and operated using a keyboard
            </li>
            <li>
              <strong>Skip to content</strong> — A skip navigation link is
              provided to bypass repetitive content
            </li>
            <li>
              <strong>Alternative text</strong> — All meaningful images include
              descriptive alternative text
            </li>
            <li>
              <strong>Colour contrast</strong> — Text and interactive elements
              meet minimum contrast ratios
            </li>
            <li>
              <strong>Resizable text</strong> — Content can be resized up to
              200% without loss of information
            </li>
            <li>
              <strong>Form labels</strong> — All form fields have associated
              labels for screen reader compatibility
            </li>
            <li>
              <strong>Semantic structure</strong> — Proper heading hierarchy
              and landmark regions are used throughout
            </li>
            <li>
              <strong>Reduced motion</strong> — Animations are disabled for
              users who prefer reduced motion
            </li>
          </ul>

          <h2>Feedback Process</h2>
          <p>
            We welcome your feedback on the accessibility of our website. If
            you encounter any accessibility barriers or have suggestions for
            improvement, please contact us:
          </p>
          <ul>
            <li>Email: {COMPANY.email}</li>
            <li>Phone: {COMPANY.phone}</li>
            <li>
              Mail: {COMPANY.address.street}, {COMPANY.address.city},{" "}
              {COMPANY.address.province} {COMPANY.address.postalCode}
            </li>
          </ul>
          <p>
            We will make every effort to respond to your feedback within 5
            business days and to address any identified barriers as quickly as
            possible.
          </p>

          <h2>Third-Party Content</h2>
          <p>
            While we strive to ensure accessibility of all content on our
            website, some third-party content may not be fully accessible.
            We are committed to working with our partners to improve
            accessibility of all linked and embedded content.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
