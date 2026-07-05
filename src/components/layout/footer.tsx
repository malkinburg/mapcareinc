import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, ExternalLink } from "lucide-react";
import { COMPANY, LAND_ACKNOWLEDGMENT } from "@/lib/constants";

const serviceLinks = [
  { label: "Foster Care Staffing", href: "/services/foster-care-staffing" },
  { label: "Residential Care Support", href: "/services/residential-care-support" },
  { label: "Youth Support Services", href: "/services/youth-support-services" },
  { label: "Crisis & Emergency Staffing", href: "/services/crisis-emergency-staffing" },
  { label: "Respite Care", href: "/services/respite-care" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-warm-white" role="contentinfo">
      {/* Land Acknowledgment */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-[13px] leading-relaxed text-warm-white/60 max-w-4xl">
            {LAND_ACKNOWLEDGMENT}
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Mapcare Inc home">
              <Image
                src="/images/logo.png"
                alt="Mapcare Inc"
                width={109}
                height={48}
                className="brightness-0 invert opacity-90"
              />
            </Link>
            <p className="mt-4 text-sm text-warm-white/70 leading-relaxed max-w-xs">
              {COMPANY.tagline}. Ontario&apos;s trusted non-medical care
              staffing provider serving foster care and vulnerable populations.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
              >
                <Globe className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-white/50 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white/70 hover:text-sky-teal transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-white/50 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white/70 hover:text-sky-teal transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-white/50 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="flex items-start gap-2.5 text-sm text-warm-white/70 hover:text-sky-teal transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-2.5 text-sm text-warm-white/70 hover:text-sky-teal transition-colors duration-200"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-warm-white/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.city}, {COMPANY.address.province}{" "}
                  {COMPANY.address.postalCode}
                </span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-warm-white/50">
              {COMPANY.officeHours.weekdays}
              <br />
              {COMPANY.officeHours.emergency}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-warm-white/50">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="hover:text-sky-teal transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-sky-teal transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
