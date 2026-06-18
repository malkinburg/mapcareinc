export const COMPANY = {
  name: "Mapcare Inc",
  tagline: "Guiding Care, Connecting People",
  // TODO: Replace with your real Ontario staffing licence number before launch.
  // Required on the website by Ontario law (licensing in effect since July 2024).
  licenseNumber: "LICENCE #PENDING",
  phone: "(226) 606-7968",
  phoneTel: "+12266067968",
  email: "info@mapcare.ca",
  address: {
    street: "10-457 Albert Street",
    city: "Waterloo",
    province: "Ontario",
    postalCode: "N2L 5A7",
    country: "Canada",
  },
  officeHours: {
    weekdays: "Monday – Friday: 8:00 AM – 6:00 PM",
    weekends: "Saturday – Sunday: On-call support available",
    emergency: "24/7 emergency staffing support",
  },
  social: {
    linkedin: "https://linkedin.com/company/mapcare",
    facebook: "https://facebook.com/mapcareinc",
    instagram: "https://instagram.com/mapcareinc",
  },
  url: "https://mapcare.ca",
} as const;

export const NAV_LINKS: {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Foster Care Staffing", href: "/services/foster-care-staffing" },
      {
        label: "Residential Care Support",
        href: "/services/residential-care-support",
      },
      {
        label: "Youth Support Services",
        href: "/services/youth-support-services",
      },
      {
        label: "Crisis & Emergency Staffing",
        href: "/services/crisis-emergency-staffing",
      },
      { label: "Respite Care", href: "/services/respite-care" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 350, suffix: "+", label: "Care Professionals Placed" },
  { value: 10, suffix: "+", label: "Communities Served" },
  { value: 24, suffix: "/7", label: "Emergency Support" },
] as const;

export const LAND_ACKNOWLEDGMENT =
  "Mapcare Inc acknowledges that we operate on the traditional territories of many Indigenous Nations. We recognize the enduring presence of Indigenous peoples and are committed to moving forward in the spirit of reconciliation and respect.";
