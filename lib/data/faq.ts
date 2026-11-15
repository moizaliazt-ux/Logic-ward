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
      "Communication channels, meeting cadence, and working-hour overlap can be agreed during project scoping. Depending on the engagement, teams may use shared messaging channels, scheduled video calls, and staging environments for reviews.",
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
      "No. Not every workflow is a suitable candidate. Structured data extraction, inquiry routing, and document parsing may be worth assessing, while high-stakes or subjective decisions often need human judgment. A feasibility review should consider expected value, error handling, and security boundaries before implementation.",
  },
  {
    id: "post-launch-maintenance",
    category: "Support & Maintenance",
    question: "What level of support do you provide after launch?",
    answer:
      "Warranty coverage and duration should be defined in the project agreement. Ongoing support can be scoped separately for maintenance, monitoring, backups, and planned enhancements.",
  },
  {
    id: "getting-started-consultation",
    category: "Engagements & Pricing",
    question: "What is the process to get started on a project?",
    answer:
      "Start by sharing your goals, current workflow, constraints, and any relevant systems. After reviewing the information, Logicward can discuss a suitable discovery and scoping process; scope, schedule, and budget depend on the requirements.",
  },
];

