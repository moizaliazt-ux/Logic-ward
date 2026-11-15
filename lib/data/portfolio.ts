export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  industry: string;
  projectBadge: "Concept Architecture" | "Demonstration Project" | "Reference Implementation";
  category: "Web & E-Commerce" | "Custom Software" | "Mobile Applications" | "AI & Automation";
  summary: string;
  agencyRole: string[];
  techStack: string[];
  challenge: {
    overview: string;
    keyIssues: string[];
  };
  approach: {
    strategy: string;
    steps: string[];
  };
  solution: {
    overview: string;
    architectureHighlights: string[];
  };
  keyFeatures: { title: string; description: string }[];
  designNotes: {
    title: string;
    details: string;
  }[];
}

export const portfolioProjects: CaseStudy[] = [
  {
    id: "logiflow-erp",
    slug: "logiflow-enterprise-erp",
    title: "LogiFlow: Distributed Supply Chain & Multi-Warehouse ERP",
    clientType: "Reference Architecture (Concept Case Study)",
    industry: "Logistics & Supply Chain",
    projectBadge: "Reference Implementation",
    category: "Custom Software",
    summary: "A reference architecture exploring cross-border freight tracking, multi-warehouse inventory, and invoicing workflows for regional distribution hubs.",
    agencyRole: ["Full-Stack Engineering", "Relational Database Design", "API Integrations", "DevOps & Cloud Architecture"],
    techStack: ["Next.js (App Router)", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS", "Redis"],
    challenge: {
      overview: "Growing distribution networks struggle when inventory, dispatch manifests, and financial billing exist across disconnected legacy software and manual spreadsheet exports.",
      keyIssues: [
        "Inventory reconciliation discrepancies between central depot and regional fulfillment centers",
        "Delayed client billing due to paperwork bottlenecks at remote shipping terminals",
        "High server latency and concurrent lock timeouts when multiple warehouses logged shipments simultaneously",
        "Lack of real-time shipment visibility for commercial enterprise clients",
      ],
    },
    approach: {
      strategy: "The reference design explores an event-driven ERP foundation with transaction isolation, localized barcode scanning, and an auditable inventory ledger.",
      steps: [
        "Mapped the end-to-end container intake, warehousing, and customs clearance journey",
        "Consider an append-only relational ledger to support stock-movement reconciliation",
        "Design mobile intake screens for intermittent connectivity at yards and docks",
        "Define webhook integration points with freight and transport providers",
      ],
    },
    solution: {
      overview: "The proposed architecture brings multi-warehouse operations, customer shipping portals, and invoicing workflows into one web console.",
      architectureHighlights: [
        "PostgreSQL row-level security and partitioned tables, subject to workload and access-pattern review",
        "Redis task queues handling background PDF generation and client dispatch alerts",
        "Barcode lookup interface designed for mobile use, with performance to be tested on target devices and networks",
        "Comprehensive audit logging recording every stock movement and price override",
      ],
    },
    keyFeatures: [
      { title: "Multi-Warehouse Ledger", description: "A proposed model for recording stock valuation and transfers across hubs and transit fleets." },
      { title: "Invoicing Workflow", description: "A proposed workflow links freight manifests and invoice preparation to container events." },
      { title: "Customer Tracking Portal", description: "A concept portal for viewing shipment milestones, documents, and proof of delivery." },
      { title: "Role Governance", description: "A permissions model for separating accounting, warehouse intake, and dispatch responsibilities." },
    ],
    designNotes: [
      { title: "Inventory traceability", details: "A single ledger and recorded transfers provide a basis for reconciling stock movements. No production outcome or reconciliation rate is claimed." },
      { title: "Billing workflow", details: "The concept connects dispatch records to invoice preparation. No billing-time improvement has been measured." },
      { title: "Search and scale", details: "Indexing, query plans, and representative load testing would need to be defined and measured for a real deployment." },
    ],
  },
  {
    id: "healthpulse-mobile",
    slug: "healthpulse-telehealth-platform",
    title: "HealthPulse: Cross-Platform Telehealth & Patient Care Mobile App",
    clientType: "Demonstration Project (Concept Case Study)",
    industry: "Digital Health & Clinical Care",
    projectBadge: "Demonstration Project",
    category: "Mobile Applications",
    summary: "A telehealth concept exploring appointment booking, video consultation, and patient-record workflows. It is not a deployed clinical product.",
    agencyRole: ["Mobile App Development", "UI/UX Design & Prototyping", "Healthcare Data & Security Architecture", "WebRTC Video Integration"],
    techStack: ["React Native", "TypeScript", "Node.js", "WebRTC", "PostgreSQL", "Tailwind CSS"],
    challenge: {
      overview: "Patients face frustrating friction when booking medical appointments, while clinicians waste valuable consultation minutes navigating clunky desktop software.",
      keyIssues: [
        "High patient drop-off rates caused by complex account registration flows",
        "Unreliable video and audio quality on varying 3G/4G cellular connections",
        "Security concerns regarding patient medical records and chat privacy",
        "Difficulty for doctors in managing calendar buffers and digital prescription generation",
      ],
    },
    approach: {
      strategy: "The concept explores a patient-focused mobile flow with adaptive video, secure sign-in options, and prescription workflows. Clinical and security requirements would need review for a real deployment.",
      steps: [
        "Document clinician workflow requirements with relevant clinical stakeholders",
        "Prototype an appointment-booking flow for testing with representative users",
        "Assess WebRTC encryption, connectivity, and fallback requirements for the intended deployment",
        "Define prescription data and review workflows with qualified stakeholders",
      ],
    },
    solution: {
      overview: "The proposed experience connects specialist discovery, appointment booking, video consultation, and prescription workflows.",
      architectureHighlights: [
        "Messaging, video, and data-protection requirements to be assessed for the intended jurisdiction and deployment",
        "Offline access to sensitive records would require explicit privacy, security, and clinical review",
        "Configurable notification workflows for appointment reminders and medication schedules",
        "Digital-signature workflows to be defined with the applicable clinical and legal requirements",
      ],
    },
    keyFeatures: [
      { title: "Video Consultation Concept", description: "A proposed video appointment flow with in-call communication options." },
      { title: "Digital Prescription Workflow", description: "A proposed interface for clinicians to prepare and review digital prescriptions." },
      { title: "Health Record Workflow", description: "A concept for viewing lab results, clinical records, and appointment information with access requirements to be assessed." },
      { title: "Availability Workflow", description: "A proposed schedule view that accounts for time zones and appointment buffers." },
    ],
    designNotes: [
      { title: "Booking flow", details: "The concept keeps appointment selection and confirmation in a focused sequence. No completion-rate study is available." },
      { title: "Connectivity", details: "Network adaptation and fallback behavior are design considerations; no connection benchmark is claimed." },
      { title: "Usability", details: "Accessibility and usability would need validation with representative users before any outcome could be reported." },
    ],
  },
  {
    id: "retailsync-commerce",
    slug: "retailsync-omnichannel-commerce",
    title: "RetailSync: Headless Omnichannel E-Commerce & POS Sync Engine",
    clientType: "Reference Architecture (Concept Case Study)",
    industry: "Retail & Consumer Goods",
    projectBadge: "Reference Implementation",
    category: "Web & E-Commerce",
    summary: "A reference architecture exploring a headless storefront, inventory synchronization, payment integrations, and checkout.",
    agencyRole: ["Headless E-Commerce Engineering", "Next.js Frontend", "POS Inventory Bridge", "Performance Optimization"],
    techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Stripe API", "GraphQL", "Redis Caching"],
    challenge: {
      overview: "Retailers with physical stores frequently struggle with out-of-stock cancellations when online shoppers purchase items already sold off physical store shelves.",
      keyIssues: [
        "Delayed inventory updates causing overselling during high-volume flash sale events",
        "Slow mobile storefronts creating friction during product discovery and checkout",
        "Complex checkout flows with high cart abandonment on mobile devices",
        "Inability to support localized payment methods alongside international credit cards",
      ],
    },
    approach: {
      strategy: "The reference design separates the storefront from inventory services and considers synchronization, stock reservation, and checkout consistency.",
      steps: [
        "Separate the public frontend from backend services and measure the resulting page performance",
        "Designed a temporary cart inventory reservation flow to coordinate stock across sales channels",
        "Design a focused checkout for mobile entry and selected local payment methods",
        "Evaluate caching and image delivery against agreed performance requirements",
      ],
    },
    solution: {
      overview: "The proposed storefront focuses on mobile usability, clear stock availability, and a concise checkout flow; no performance or conversion results are claimed.",
      architectureHighlights: [
        "A proposed headless Next.js App Router frontend with a hosting approach selected for the deployment",
        "An inventory integration between physical POS systems and online catalogs, subject to provider capabilities",
        "Optimistic UI updates with reconciliation behavior defined for network delays",
        "Automated structured schema for Google Shopping and merchant product listings",
      ],
    },
    keyFeatures: [
      { title: "Cross-Channel Stock View", description: "A proposed view of branch and warehouse availability, dependent on source-system data quality and synchronization." },
      { title: "Checkout Flow", description: "A concept checkout with address entry and payment options selected for the intended market." },
      { title: "Product Search", description: "Search with typo tolerance, category facets, and price filtering, with performance to be validated against deployment needs." },
      { title: "Concurrency Considerations", description: "Inventory reservation and transaction handling would be load-tested against agreed traffic patterns." },
    ],
    designNotes: [
      { title: "Performance", details: "Page performance would need to be measured against an agreed test setup and representative devices; no speed score or timing is claimed." },
      { title: "Stock consistency", details: "A reservation workflow is one option for coordinating inventory across channels; its behavior would need validation against the chosen POS and order systems." },
      { title: "Checkout usability", details: "The concept favors a focused checkout, but no conversion or abandonment study is available." },
    ],
  },
  {
    id: "automateiq-ai",
    slug: "automateiq-lead-triage-ai",
    title: "AutomateIQ: Intelligent Inbound Lead Triage & Support Automation",
    clientType: "Demonstration Project (Concept Case Study)",
    industry: "B2B Professional Services",
    projectBadge: "Demonstration Project",
    category: "AI & Automation",
    summary: "An AI workflow concept exploring inquiry classification, optional company-data enrichment, and human-reviewed CRM summaries.",
    agencyRole: ["AI Pipeline Engineering", "Webhook & API Integration", "Prompt Architecture", "Dashboard Development"],
    techStack: ["Next.js", "Python / FastAPI", "LangChain / LLM APIs", "PostgreSQL", "Tailwind CSS"],
    challenge: {
      overview: "B2B agencies and consultancies may need to triage inquiries and research company context before routing work to account executives.",
      keyIssues: [
        "Delayed inquiry triage that can leave sales teams without timely context",
        "Manual copying of lead details into CRM fields",
        "Lack of standardized qualification criteria leading to unqualified discovery calls",
        "Generic automated email responses that feel robotic and turn off sophisticated buyers",
      ],
    },
    approach: {
      strategy: "The concept uses an event-driven workflow to classify incoming inquiries against client-defined criteria and route a draft summary for human review.",
      steps: [
        "Defined explicit Ideal Customer Profile (ICP) parameters and scoring rubrics",
        "Connected inbound form submissions and WhatsApp Business webhooks to an asynchronous queue",
        "Implemented structured LLM reasoning to classify project scope, budget feasibility, and urgency",
        "Built a sales rep Slack / WhatsApp dispatch alert with one-click pre-drafted personalized replies",
      ],
    },
    solution: {
      overview: "The proposed workflow separates classification, optional enrichment, and human approval before any follow-up is sent.",
      architectureHighlights: [
        "An asynchronous FastAPI queue, with retry and failure behavior defined for the chosen integrations",
        "Prompt constraints and human review to reduce the risk of unsupported or off-brand drafts",
        "Provider data-retention and privacy requirements to be reviewed before selecting an integration",
        "Potential CRM integration points to be validated against the selected platform APIs",
      ],
    },
    keyFeatures: [
      { title: "Lead Classification", description: "Inquiries can be organized against agreed criteria and routed for sales-team review." },
      { title: "Contextual Brief Drafting", description: "A proposed draft summary of inquiry scope and open questions for staff review." },
      { title: "Omnichannel Inquiry Routing", description: "A possible integration to route inquiries from supported messaging channels to a human reviewer." },
      { title: "Human Review", description: "Outbound messages should require an explicit review step before sending." },
    ],
    designNotes: [
      { title: "Response handling", details: "The workflow can prepare a structured draft for review; response-time improvements have not been measured." },
      { title: "Administrative effort", details: "CRM field mapping and approval steps are part of the concept. No hours-saved estimate is claimed." },
      { title: "Classification quality", details: "A production workflow would require an agreed evaluation dataset, confidence thresholds, and human review; no accuracy score is available." },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

