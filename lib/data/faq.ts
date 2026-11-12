export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const generalAgencyFAQs: FAQItem[] = [
  {
    id: "agency-pricing-model",
    category: "Engagements & Pricing",
    question: "How do you scope and price projects?",
    answer:
      "We operate under two transparent engagement models: Fixed-Scope Milestone Pricing (ideal for well-defined websites, management systems, and initial software versions) and Dedicated Engineering Retainers (for ongoing product development, continuous feature iterations, and monthly IT support). Every proposal includes an itemized breakdown of deliverables, technical milestones, and payment schedules with zero hidden fees.",
  },
  {
    id: "international-delivery-model",
    category: "Operations & Delivery",
    question: "How do you manage communication with international clients across time zones?",
    answer:
      "We regularly collaborate with clients across North America, the UK, Europe, the UAE, and worldwide. We establish dedicated shared communication channels (Slack / Microsoft Teams / WhatsApp), hold scheduled weekly video syncs via Google Meet, and provide access to live staging environments where you can test progress after every sprint. Our engineering team overlaps with EST, GMT, and GST business hours.",
  },
  {
    id: "ip-code-ownership",
    category: "Security & Legal",
    question: "Who owns the code and intellectual property once a project is finished?",
    answer:
      "You do—100%. Upon settlement of final milestone payments, full ownership of the source code repository, database schemas, architecture diagrams, and deployment keys is transferred to your organization. We never impose proprietary vendor lock-in or licensing penalties.",
  },
  {
    id: "ai-automation-scoping",
    category: "AI & Capabilities",
    question: "Can any manual workflow in our company be automated with AI?",
    answer:
      "No. We deliberately do not promise that every business workflow can or should be automated. AI excels at structured data extraction, lead qualification, tier-one inquiry routing, and document parsing. Workflows requiring high-stakes negotiation, subjective brand strategy, or nuanced human empathy are kept with your team. We only recommend automation after a detailed feasibility audit verifies clear ROI and security boundaries.",
  },
  {
    id: "post-launch-maintenance",
    category: "Support & Maintenance",
    question: "What level of support do you provide after launch?",
    answer:
      "Every project includes a standard post-launch warranty period (typically 30 to 60 days) during which any bugs or configuration defects are remediated at zero additional cost. Following warranty, clients can choose between flexible ad-hoc support or scheduled monthly maintenance retainers covering security updates, server monitoring, backups, and feature enhancements.",
  },
  {
    id: "getting-started-consultation",
    category: "Engagements & Pricing",
    question: "What is the process to get started on a project?",
    answer:
      "The first step is a 30-minute discovery consultation. We review your current operational challenges, timeline, and technical requirements. Within 48 hours, we deliver a concise project outline with recommended technical architecture, timeline estimates, and budget ranges—with no obligation to proceed.",
  },
];

