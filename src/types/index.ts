import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  icon: LucideIcon;
  features: ServiceFeature[];
  faqs: FAQ[];
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
  initials: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface Position {
  id: string;
  title: string;
  type: "Full-time" | "Part-time" | "Contract";
  location: string;
  description: string;
  requirements: string[];
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}
