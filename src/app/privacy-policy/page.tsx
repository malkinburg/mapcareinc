import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Mapcare Inc's privacy policy — how we collect, use, and protect your personal information in compliance with PHIPA and PIPEDA.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy matters to us. This policy explains how we collect, use, and protect your personal information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <SectionWrapper>
        <div className="prose prose-slate max-w-3xl mx-auto">
          <p className="text-sm text-muted-teal mb-8">
            Last updated: April 1, 2026
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            Mapcare Inc (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            collects personal information when you:
          </p>
          <ul>
            <li>Submit a contact form or inquiry on our website</li>
            <li>Apply for a position through our careers page</li>
            <li>Subscribe to our communications</li>
            <li>Browse our website (through cookies and analytics)</li>
          </ul>
          <p>
            The types of information we may collect include your name, email
            address, phone number, mailing address, employment history, and
            any other information you choose to provide.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use your personal information to:</p>
          <ul>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Process employment applications</li>
            <li>
              Match care professionals with appropriate staffing opportunities
            </li>
            <li>Improve our website and services</li>
            <li>
              Comply with legal obligations under Ontario and federal law
            </li>
          </ul>

          <h2>3. Disclosure of Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information with:
          </p>
          <ul>
            <li>
              Partner organizations and care facilities for the purpose of
              staffing placements (with your consent)
            </li>
            <li>
              Service providers who assist us in operating our website and
              business
            </li>
            <li>
              Government authorities when required by law or to protect our
              legal rights
            </li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary to fulfill
            the purposes for which it was collected, or as required by law.
            Contact form submissions are retained for 24 months. Employment
            applications are retained for 12 months after the position is
            filled, unless you consent to longer retention.
          </p>

          <h2>5. Your Rights</h2>
          <p>Under PIPEDA and Ontario privacy legislation, you have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Withdraw consent for data processing</li>
            <li>Request deletion of your personal information</li>
            <li>
              File a complaint with the Office of the Privacy Commissioner of
              Canada
            </li>
          </ul>

          <h2>6. Security Measures</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. These measures include
            encrypted data transmission, secure servers, and access controls.
          </p>

          <h2>7. Cookie Policy</h2>
          <p>
            Our website uses cookies to improve your browsing experience and
            analyze site traffic. You can control cookie preferences through
            your browser settings. We use:
          </p>
          <ul>
            <li>
              <strong>Essential cookies</strong> — Required for basic website
              functionality
            </li>
            <li>
              <strong>Analytics cookies</strong> — Help us understand how
              visitors use our website (only with your consent)
            </li>
          </ul>

          <h2>8. Contact for Privacy Concerns</h2>
          <p>
            If you have questions about this privacy policy or wish to exercise
            your privacy rights, please contact our Privacy Officer:
          </p>
          <ul>
            <li>Email: {COMPANY.email}</li>
            <li>Phone: {COMPANY.phone}</li>
            <li>
              Mail: {COMPANY.address.street}, {COMPANY.address.city},{" "}
              {COMPANY.address.province} {COMPANY.address.postalCode}
            </li>
          </ul>

          <h2>9. Updates to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated revision date. We
            encourage you to review this policy periodically.
          </p>

          <h2>Notice of Information Practices</h2>
          <p>
            In accordance with the Personal Health Information Protection Act
            (PHIPA), Mapcare Inc is committed to protecting the privacy and
            confidentiality of personal health information. We collect, use,
            and disclose personal health information only with proper consent
            and in compliance with all applicable legislation. Our staff are
            trained in privacy practices and bound by confidentiality
            agreements.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
