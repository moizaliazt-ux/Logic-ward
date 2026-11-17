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
      "The engagement model and budget depend on the requirements and delivery constraints. A written proposal should define its deliverables, assumptions, schedule, review points, and fees before work begins.",
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
      "Ownership, licensing, repository access, and handover terms are defined in the written project agreement, including any treatment of third-party or pre-existing materials.",
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

