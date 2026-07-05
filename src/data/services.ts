export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  icon: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const services: ServiceData[] = [
  {
    slug: "foster-care-staffing",
    title: "Foster Care Staffing",
    shortTitle: "Foster Care",
    description:
      "We provide compassionate, experienced care professionals to support foster families and the children in their care. Our team members are carefully vetted, trauma-informed, and dedicated to creating safe, nurturing environments.",
    excerpt:
      "Compassionate care professionals supporting foster families and the children who need them most.",
    icon: "Heart",
    features: [
      {
        title: "Trauma-Informed Care",
        description:
          "All our care professionals receive specialized training in trauma-informed approaches, ensuring sensitive and effective support for children and youth in foster care.",
        icon: "Shield",
      },
      {
        title: "Individualized Matching",
        description:
          "We carefully match care professionals with foster families based on needs, experience, and compatibility to ensure the best outcomes for everyone involved.",
        icon: "UserCheck",
      },
      {
        title: "Ongoing Training & Development",
        description:
          "Our team members receive continuous professional development in areas including attachment theory, de-escalation, and cultural competency.",
        icon: "GraduationCap",
      },
      {
        title: "24/7 Support",
        description:
          "Our on-call team is available around the clock to provide guidance, address concerns, and arrange emergency coverage when needed.",
        icon: "Phone",
      },
    ],
    faqs: [
      {
        question: "What qualifications do your foster care professionals have?",
        answer:
          "All our care professionals hold relevant certifications in child and youth care, have completed Vulnerable Sector Checks, Child Welfare Checks, and Broad Record Checks (BRC), and are UMAB (Understanding and Managing Aggressive Behaviour) trained. They also receive ongoing training in trauma-informed care, First Aid/CPR, and crisis intervention.",
      },
      {
        question: "How quickly can you provide staffing support?",
        answer:
          "For planned placements, we typically arrange care professionals within 48-72 hours. For emergency situations, we have an on-call team available 24/7 to respond to urgent staffing needs.",
      },
      {
        question: "How do you ensure the safety of the children?",
        answer:
          "Every care professional undergoes comprehensive background checks, reference verification, and an in-person interview. We also conduct regular performance reviews and maintain open communication with foster families and placing agencies.",
      },
      {
        question: "Can you provide staff for specialized care needs?",
        answer:
          "Yes. We have care professionals experienced with a range of specialized needs, including developmental disabilities, behavioral support, medical complexities, and children with complex trauma histories.",
      },
    ],
  },
  {
    slug: "residential-care-support",
    title: "Residential Care Support",
    shortTitle: "Residential Care",
    description:
      "Our residential care support services provide qualified team members to group homes, residential treatment facilities, and supported living environments across Ontario. We understand the unique demands of residential settings and staff accordingly.",
    excerpt:
      "Qualified team members for group homes, treatment facilities, and supported living environments.",
    icon: "Home",
    features: [
      {
        title: "Flexible Scheduling",
        description:
          "We provide coverage for all shifts including days, evenings, overnights, and weekends to ensure consistent care in residential settings.",
        icon: "Clock",
      },
      {
        title: "Experienced Team Members",
        description:
          "Our residential care professionals bring experience in group dynamics, behavioral management, and creating structured, therapeutic environments.",
        icon: "Users",
      },
      {
        title: "Compliance & Documentation",
        description:
          "All team members are trained in proper documentation, incident reporting, and regulatory compliance specific to residential care facilities in Ontario.",
        icon: "ClipboardCheck",
      },
      {
        title: "Collaborative Approach",
        description:
          "We work closely with facility managers and clinical teams to ensure seamless integration of our team members into existing care plans and routines.",
        icon: "Handshake",
      },
    ],
    faqs: [
      {
        question: "What types of residential facilities do you serve?",
        answer:
          "We provide staffing for a wide range of residential settings, including children's group homes, youth treatment centres, adult supported living residences, and transitional housing programs.",
      },
      {
        question: "Can your staff work overnight shifts?",
        answer:
          "Absolutely. We have team members available for all shift types, including awake overnights and sleep-over shifts, ensuring your facility has consistent coverage around the clock.",
      },
      {
        question: "How do you handle staff transitions and shift changes?",
        answer:
          "We prioritize consistency by assigning dedicated team members to facilities wherever possible. For shift changes, we ensure proper handoff procedures including detailed shift reports and communication logs.",
      },
      {
        question: "Are your staff trained in medication administration?",
        answer:
          "Many of our team members are trained in medication administration. We match staff qualifications to your facility's specific requirements and can arrange additional training as needed.",
      },
    ],
  },
  {
    slug: "youth-support-services",
    title: "Youth Support Services",
    shortTitle: "Youth Support",
    description:
      "Our youth support services focus on empowering young people through mentorship, life-skills development, and structured programming. We provide care professionals who connect authentically with youth and support their growth toward independence.",
    excerpt:
      "Empowering young people through mentorship, life-skills development, and meaningful connection.",
    icon: "Users",
    features: [
      {
        title: "Mentorship Programs",
        description:
          "Our care professionals serve as positive role models, building trust-based relationships that support healthy development and resilience in young people.",
        icon: "HeartHandshake",
      },
      {
        title: "Life-Skills Development",
        description:
          "We support youth in developing practical skills for independent living, including financial literacy, cooking, employment readiness, and self-advocacy.",
        icon: "Sparkles",
      },
      {
        title: "Educational Support",
        description:
          "Our team members can provide tutoring, homework help, and school liaison support to help youth stay engaged in their education.",
        icon: "BookOpen",
      },
      {
        title: "Recreational Activities",
        description:
          "We facilitate structured recreational and social activities that promote physical health, social skills, and positive peer relationships.",
        icon: "Sun",
      },
    ],
    faqs: [
      {
        question: "What age range do your youth support services cover?",
        answer:
          "Our youth support services typically serve young people ages 12-24, including transition-age youth who are aging out of care and need support building independent living skills.",
      },
      {
        question: "Can you provide one-on-one support workers?",
        answer:
          "Yes. We frequently provide dedicated one-on-one support for youth who require individualized attention, whether in a residential, school, or community setting.",
      },
      {
        question: "How do your staff build rapport with youth?",
        answer:
          "Our care professionals are trained in relationship-based approaches and use strengths-based, culturally responsive methods to build authentic connections with young people.",
      },
      {
        question: "Do you offer programming for youth in schools?",
        answer:
          "Yes. We can provide support workers for in-school programs, including educational assistants, lunchtime supervisors, and after-school program facilitators.",
      },
    ],
  },
  {
    slug: "crisis-emergency-staffing",
    title: "Crisis & Emergency Staffing",
    shortTitle: "Crisis Staffing",
    description:
      "When urgent staffing needs arise, Mapcare responds. Our crisis and emergency staffing service provides trained, available care professionals on short notice to ensure continuity of care in critical situations.",
    excerpt:
      "Rapid-response staffing for urgent situations, ensuring continuity of care when it matters most.",
    icon: "AlertTriangle",
    features: [
      {
        title: "Rapid Response",
        description:
          "Our on-call team is available 24/7 and can deploy qualified care professionals within hours for emergency staffing needs.",
        icon: "Activity",
      },
      {
        title: "Crisis-Trained Professionals",
        description:
          "All emergency staff are trained in crisis intervention, de-escalation techniques, and safety planning to manage high-stress situations effectively.",
        icon: "Shield",
      },
      {
        title: "Continuity of Care",
        description:
          "We work to ensure that emergency placements transition smoothly, with thorough briefings and ongoing communication with your existing care team.",
        icon: "Handshake",
      },
      {
        title: "Post-Crisis Support",
        description:
          "Following a crisis placement, we provide debriefing support and can help develop strategies to prevent future staffing emergencies.",
        icon: "ClipboardCheck",
      },
    ],
    faqs: [
      {
        question: "How quickly can you respond to emergency staffing requests?",
        answer:
          "We maintain an on-call team available 24 hours a day, 7 days a week. In most cases, we can have a qualified care professional on-site within 2-4 hours of an emergency request.",
      },
      {
        question: "What constitutes a crisis staffing situation?",
        answer:
          "Crisis situations include unexpected staff absences, safety incidents requiring additional coverage, sudden intake of new residents, or any situation where the absence of staff could compromise the safety and well-being of people in care.",
      },
      {
        question: "Are emergency staff briefed on the specific situation before arriving?",
        answer:
          "Yes. Our coordination team provides comprehensive briefings to emergency staff before deployment, including relevant care plans, safety protocols, and any specific considerations for the placement.",
      },
      {
        question: "Can emergency placements transition to longer-term arrangements?",
        answer:
          "Absolutely. If the emergency placement is working well, we can seamlessly transition it into a longer-term staffing arrangement without disruption to care.",
      },
    ],
  },
  {
    slug: "respite-care",
    title: "Respite Care",
    shortTitle: "Respite Care",
    description:
      "Our respite care service gives foster parents, kinship caregivers, and residential care teams the breaks they need to recharge. We provide trusted, experienced care professionals who maintain the routines and care standards that children and youth depend on.",
    excerpt:
      "Giving caregivers the breaks they need while maintaining the consistency and quality of care.",
    icon: "Clock",
    features: [
      {
        title: "Planned Respite",
        description:
          "Schedule regular respite care to prevent burnout and maintain your well-being as a caregiver. We work with your schedule to ensure seamless coverage.",
        icon: "Clock",
      },
      {
        title: "Consistent Care Professionals",
        description:
          "We prioritize assigning the same care professionals for respite, so children and youth build familiarity and comfort with trusted individuals.",
        icon: "UserCheck",
      },
      {
        title: "Routine Maintenance",
        description:
          "Our care professionals follow established routines, care plans, and household expectations to ensure minimal disruption during respite periods.",
        icon: "ClipboardCheck",
      },
      {
        title: "Flexible Duration",
        description:
          "From a few hours to several days, we offer respite care arrangements that fit your needs, whether it's a regular weekly break or an extended vacation.",
        icon: "Sun",
      },
    ],
    faqs: [
      {
        question: "How far in advance should I book respite care?",
        answer:
          "We recommend booking planned respite at least one week in advance to ensure we can match you with the most suitable care professional. However, we understand that needs arise unexpectedly and will do our best to accommodate shorter-notice requests.",
      },
      {
        question: "Will the same care professional come each time?",
        answer:
          "We prioritize consistency and will assign the same care professional for your respite needs whenever possible. This helps build familiarity and trust with the children and youth in your care.",
      },
      {
        question: "Can respite care be provided in my home?",
        answer:
          "Yes. In-home respite care is our most common arrangement. The care professional comes to your home and maintains the children's regular routines and activities in their familiar environment.",
      },
      {
        question: "Is respite care available on weekends and holidays?",
        answer:
          "Yes. We offer respite care seven days a week, including holidays, because we understand that caregivers need breaks at all times of the year.",
      },
    ],
  },
];
