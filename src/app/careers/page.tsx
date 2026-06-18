import type { Metadata } from "next";
import {
  Heart,
  Clock,
  GraduationCap,
  TrendingUp,
  Users,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/shared/page-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { ApplicationForm } from "@/components/careers/application-form";
import { positions } from "@/data/positions";

export const metadata: Metadata = {
  title: "Careers — Join Our Team",
  description:
    "Make a meaningful difference. Join Mapcare's team of dedicated care professionals supporting foster care and vulnerable populations across Ontario.",
};

const benefits = [
  {
    icon: Heart,
    title: "Meaningful Impact",
    description:
      "Every shift matters. You'll directly improve the lives of children, youth, and families who need compassionate care.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Choose shifts that work for your life. We offer days, evenings, overnights, and weekend opportunities across Ontario.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description:
      "Access ongoing training in trauma-informed care, crisis intervention, and specialized certifications at no cost to you.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "We invest in your growth with mentorship, advancement opportunities, and pathways to leadership roles.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description:
      "Join a team that genuinely cares about your well-being. Our 24/7 support line means you're never alone on the job.",
  },
];

const typeColors = {
  "Full-time": "bg-teal/10 text-teal",
  "Part-time": "bg-amber/10 text-amber",
  Contract: "bg-sky-teal/10 text-sky-teal",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Join Our Team"
        subtitle="A rewarding career means more than a paycheque. At Mapcare, you'll make a real difference in the lives of Ontario's most vulnerable populations."
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* Why Join */}
      <SectionWrapper>
        <SectionHeading
          label="Why Mapcare"
          title="More Than a Job — A Calling"
          subtitle="We believe that the best care comes from professionals who feel valued, supported, and inspired."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="shadow-card rounded-xl border-0"
            >
              <CardContent className="p-6">
                <div className="inline-flex p-2.5 rounded-lg bg-teal/5 mb-4">
                  <benefit.icon className="h-5 w-5 text-teal" />
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-brand leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Open Positions */}
      <SectionWrapper background="warm-white">
        <SectionHeading
          label="Open Positions"
          title="Current Opportunities"
          subtitle="Explore our current openings and find the role that's right for you."
        />
        <div className="space-y-4 max-w-3xl mx-auto">
          {positions.map((position) => (
            <Card
              key={position.id}
              className="shadow-card rounded-xl border-0 hover:shadow-card-hover transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-navy">
                      {position.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-teal">
                      <MapPin className="h-3.5 w-3.5" />
                      {position.location}
                    </div>
                  </div>
                  <Badge
                    className={`${typeColors[position.type]} border-0 font-medium text-xs flex-shrink-0`}
                  >
                    {position.type}
                  </Badge>
                </div>
                <p className="text-sm text-slate-brand leading-relaxed mb-4">
                  {position.description}
                </p>
                <div>
                  <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">
                    Requirements
                  </p>
                  <ul className="space-y-1">
                    {position.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-brand flex items-start gap-2"
                      >
                        <span className="text-teal mt-0.5">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Application Form */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            label="Apply Now"
            title="Start Your Application"
            subtitle="Fill out the form below and our team will be in touch within 5 business days."
          />
          <ApplicationForm />
        </div>
      </SectionWrapper>
    </>
  );
}
