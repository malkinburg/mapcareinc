import { CTABanner } from "@/components/shared/cta-banner";

export function CTASection() {
  return (
    <CTABanner
      title="Ready to Make a Difference?"
      subtitle="Whether you need care support or want to join our team of dedicated professionals, we're here to help."
      primaryLabel="Contact Us"
      primaryHref="/contact"
      secondaryLabel="View Open Positions"
      secondaryHref="/careers"
    />
  );
}
