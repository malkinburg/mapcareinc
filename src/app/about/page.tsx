import type { Metadata } from "next";
import { Heart, Shield, Briefcase, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { CTABanner } from "@/components/shared/cta-banner";
import { LAND_ACKNOWLEDGMENT } from "@/lib/constants";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mapcare Inc — our mission, values, and the dedicated team behind Ontario's trusted non-medical care staffing provider.",
};

const values = [
  {
    icon: Shield,
    title: "Trustworthy",
    description:
      "We speak with clarity and honesty. Our staffing placements are reliable and vetted.",
    color: "text-teal",
    bg: "bg-teal/5",
  },
  {
    icon: Heart,
    title: "Compassionate",
    description:
      "Warmth in every interaction. We see the people behind every placement.",
    color: "text-amber",
    bg: "bg-amber/5",
  },
  {
    icon: Briefcase,
    title: "Professional",
    description:
      "Efficient, organized, and dependable. We match the right people to the right roles.",
    color: "text-sky-teal",
    bg: "bg-sky-teal/5",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description:
      "Our work strengthens families and support systems for vulnerable populations.",
    color: "text-terracotta",
    bg: "bg-terracotta/5",
  },
];

const accentColors = ["bg-teal", "bg-amber", "bg-sky-teal", "bg-terracotta"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Mapcare"
        subtitle="We exist to bridge the gap between compassionate care professionals and the communities that need them most."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Mission */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              label="Our Mission"
              title="Mapping the Way to Better Care"
              align="left"
            />
            <div className="space-y-4 text-slate-brand leading-relaxed">
              <p>
                Mapcare Inc was founded with a clear purpose: to ensure that
                every child, youth, and vulnerable person in Ontario has access
                to compassionate, qualified care professionals who are truly
                committed to their well-being.
              </p>
              <p>
                We recognized that the foster care and residential care sectors
                face persistent staffing challenges. Families need reliable
                support. Facilities need consistent, trained team members.
                And dedicated care professionals need an employer that values
                their work and invests in their growth.
              </p>
              <p>
                Mapcare bridges these gaps. Through careful matching,
                comprehensive training, and ongoing support, we build
                staffing relationships that last — because stability matters
                for everyone involved, especially the people we support.
              </p>
            </div>
          </div>
          <div className="relative" aria-hidden="true">
            <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-teal/10 to-sky-teal/5 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-48 h-48 opacity-80">
                <defs>
                  <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2E7D8C" />
                    <stop offset="100%" stopColor="#4AABB8" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="48" fill="#1B3A4B" />
                <path d="M 20 60 Q 12 40, 35 28 Q 43 23, 50 26" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                <path d="M 80 60 Q 88 40, 65 28 Q 57 23, 50 26" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                <path d="M 50 24 C 40 10, 18 18, 30 36 C 36 46, 50 62, 50 62 C 50 62, 64 46, 70 36 C 82 18, 60 10, 50 24 Z" fill="url(#aboutGrad)" />
                <circle cx="50" cy="35" r="7" fill="white" opacity="0.85" />
                <circle cx="38" cy="74" r="4" fill="#F4A261" />
                <line x1="38" y1="78" x2="38" y2="90" stroke="#F4A261" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="62" cy="77" r="3.5" fill="#E07A5F" />
                <line x1="62" y1="80.5" x2="62" y2="90" stroke="#E07A5F" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper background="warm-white">
        <SectionHeading
          label="Our Values"
          title="What Guides Everything We Do"
          subtitle="Our values aren't just words — they're the standards we hold ourselves to in every placement, every interaction, and every decision."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value) => (
            <Card key={value.title} className="shadow-card rounded-xl border-0">
              <CardContent className="p-7">
                <div className={`inline-flex p-3 rounded-xl ${value.bg} mb-4`}>
                  <value.icon className={`h-6 w-6 ${value.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-brand leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper>
        <SectionHeading
          label="Our Team"
          title="The People Behind Mapcare"
          subtitle="A dedicated leadership team with decades of combined experience in child welfare, staffing, and community services."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={member.name} className="shadow-card rounded-xl border-0 text-center">
              <CardContent className="p-6">
                <div
                  className={`w-20 h-20 rounded-full ${accentColors[index % accentColors.length]} flex items-center justify-center text-2xl font-bold text-warm-white mx-auto mb-4`}
                >
                  {member.initials}
                </div>
                <h3 className="text-base font-semibold text-navy">
                  {member.name}
                </h3>
                <p className="text-sm text-teal font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-slate-brand leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Land Acknowledgment */}
      <SectionWrapper background="warm-white" compact>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg font-semibold text-navy mb-4">
            Land Acknowledgment
          </h2>
          <p className="text-sm text-slate-brand leading-relaxed">
            {LAND_ACKNOWLEDGMENT}
          </p>
        </div>
      </SectionWrapper>

      <CTABanner
        title="Join Us in Making a Difference"
        subtitle="Whether you're looking for care support or a meaningful career, we'd love to connect."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Careers"
        secondaryHref="/careers"
      />
    </>
  );
}
