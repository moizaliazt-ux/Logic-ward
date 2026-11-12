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
  duration: string;
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
  projectOutcomes: {
    metricsLabel: string;
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
    summary: "A unified enterprise platform managing cross-border freight tracking, multi-warehouse inventory levels, and automated invoicing across regional distribution hubs.",
    agencyRole: ["Full-Stack Engineering", "Relational Database Design", "API Integrations", "DevOps & Cloud Architecture"],
    techStack: ["Next.js (App Router)", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS", "Redis"],
    duration: "4 Months (Reference Implementation)",
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
      strategy: "We architected an event-driven, modular ERP foundation with strict transaction isolation, localized barcode scanning, and sub-second inventory decrementing.",
      steps: [
        "Mapped the end-to-end container intake, warehousing, and customs clearance journey",
        "Constructed an append-only relational ledger to eliminate stock count discrepancies",
        "Developed offline-resilient mobile web intake screens for yard and dock workers",
        "Implemented real-time webhook sync with regional freight and transport brokers",
      ],
    },
    solution: {
      overview: "LogiFlow brings multi-warehouse operations, customer shipping portals, and automated VAT/customs invoicing into a single high-security web console with real-time analytics.",
      architectureHighlights: [
        "PostgreSQL row-level security and partitioned transaction tables for rapid query performance",
        "Redis task queues handling background PDF generation and client dispatch alerts",
        "Sub-second barcode lookup interface optimized for low-bandwidth mobile browsers",
        "Comprehensive audit logging recording every stock movement and price override",
      ],
    },
    keyFeatures: [
      { title: "Live Multi-Warehouse Ledger", description: "Real-time stock valuation and transfers across central hubs and transit fleets." },
      { title: "Automated Invoicing Engine", description: "Generates compliant freight manifests and tax invoices immediately upon container discharge." },
      { title: "Customer Self-Service Tracking", description: "Shippers log into a branded portal to track container milestones, documents, and proof of delivery." },
      { title: "Granular Role Governance", description: "Strict permission matrices separating accounting records, warehouse intake, and dispatch authority." },
    ],
    projectOutcomes: [
      { metricsLabel: "Inventory Discrepancy Reduction", details: "Eliminated manual spreadsheet reconciliation errors through single-ledger tracking." },
      { metricsLabel: "Billing Turnaround Velocity", details: "Reduced invoicing delay from 7 days post-delivery to automated same-day dispatch generation." },
      { metricsLabel: "System Response Time", details: "Achieved sub-120ms API response time across 50,000+ SKU inventory searches." },
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
    summary: "Cross-platform mobile application providing HIPAA-conscious video consultations, electronic health records (EHR) sync, and digital prescription fulfillment.",
    agencyRole: ["Mobile App Development", "UI/UX Design & Prototyping", "HIPAA/Security Architecture", "WebRTC Video Integration"],
    techStack: ["React Native", "TypeScript", "Node.js", "WebRTC", "PostgreSQL", "Tailwind CSS"],
    duration: "3.5 Months (Prototype & Testing)",
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
      strategy: "We designed a lightweight, patient-first mobile experience with adaptive bitrate video calls, biometric one-touch login, and automated prescription dispatch.",
      steps: [
        "Conducted clinician workflow interviews to minimize doctor screen time during patient calls",
        "Prototyped a 3-tap appointment booking funnel in Figma and validated with patient test groups",
        "Implemented WebRTC peer-to-peer encrypted video with automatic fallbacks for poor bandwidth",
        "Built standardized prescription builder with pre-loaded generic medication databases",
      ],
    },
    solution: {
      overview: "A clean, reassuring mobile experience enabling patients to find specialists, consult via high-definition secure video, receive prescriptions, and schedule lab tests seamlessly.",
      architectureHighlights: [
        "End-to-end encrypted messaging and video signaling conforming to healthcare data privacy standards",
        "Offline caching of patient medical history, previous prescriptions, and upcoming appointment reminders",
        "Push notification engine for 15-minute appointment countdowns and medication schedules",
        "Secure digital signature capture for authorized prescription fulfillment",
      ],
    },
    keyFeatures: [
      { title: "One-Tap Video Consultations", description: "Reliable browser-free video appointments with in-call chat and screen sharing." },
      { title: "Digital Prescription Pad", description: "Clinicians generate signed, pharmacy-ready digital prescriptions in under 60 seconds." },
      { title: "Integrated Health Records", description: "Patients securely store lab results, blood work, and vaccine records on their personal device." },
      { title: "Smart Availability Engine", description: "Automatic time-zone conversion and appointment buffer management for international doctors." },
    ],
    projectOutcomes: [
      { metricsLabel: "Booking Completion Rate", details: "Streamlined 3-step scheduling flow achieved a 78% completion rate in user testing." },
      { metricsLabel: "Connection Reliability", details: "Maintained stable video/audio streams on cellular connections down to 400 kbps." },
      { metricsLabel: "Patient Satisfaction Benchmark", details: "Simulated usability tests scored 4.8/5 for interface clarity and accessibility." },
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
    summary: "A headless e-commerce storefront paired with real-time physical store inventory synchronization, local payment gateway integrations, and instant checkout.",
    agencyRole: ["Headless E-Commerce Engineering", "Next.js Frontend", "POS Inventory Bridge", "Performance Optimization"],
    techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Stripe API", "GraphQL", "Redis Caching"],
    duration: "3 Months (Reference Architecture)",
    challenge: {
      overview: "Retailers with physical stores frequently struggle with out-of-stock cancellations when online shoppers purchase items already sold off physical store shelves.",
      keyIssues: [
        "Delayed inventory updates causing overselling during high-volume flash sale events",
        "Slow mobile website loading speeds (5+ seconds) hurting Google ad campaign ROAS",
        "Complex checkout flows with high cart abandonment on mobile devices",
        "Inability to support localized payment methods alongside international credit cards",
      ],
    },
    approach: {
      strategy: "We built a headless Next.js frontend connected to a centralized inventory bridge with sub-second websocket synchronization between retail POS counters and web carts.",
      steps: [
        "Separated the public frontend from backend databases to achieve static-speed performance",
        "Constructed a temporary cart inventory reservation system (10-minute hold) to eliminate overselling",
        "Engineered a single-page checkout optimized for mobile autocompletion and localized payment methods",
        "Configured edge CDN asset caching and Next.js image optimization for instant page loads",
      ],
    },
    solution: {
      overview: "A blazing-fast, mobile-first shopping experience delivering sub-second page transitions, live in-store stock availability, and conversion-optimized checkout.",
      architectureHighlights: [
        "Headless Next.js App Router frontend deployed on global edge networks",
        "Microservice inventory bridge keeping physical POS registers and online catalogs synchronized",
        "Optimistic UI updates for immediate cart interactions without network lag",
        "Automated structured schema for Google Shopping and merchant product listings",
      ],
    },
    keyFeatures: [
      { title: "Real-Time Stock Availability", description: "Shoppers see exact aisle stock at physical branch stores alongside warehouse delivery availability." },
      { title: "Frictionless 1-Page Checkout", description: "Streamlined checkout with address autocompletion, Apple Pay, Google Pay, and localized bank rails." },
      { title: "Instant Product Search", description: "Sub-50ms search with typo-tolerance, category facets, and price filtering." },
      { title: "High-Volume Flash Sale Shield", description: "Inventory lock queue engineered to prevent database deadlocks during traffic spikes." },
    ],
    projectOutcomes: [
      { metricsLabel: "Page Load Speed", details: "Achieved 0.8s Largest Contentful Paint (LCP) and a 99/100 Google Lighthouse performance score." },
      { metricsLabel: "Zero Overselling Incidents", details: "10-minute cart reservation algorithm eliminated out-of-stock order cancellations." },
      { metricsLabel: "Mobile Cart Conversion", details: "Single-page checkout reduced simulated mobile abandonment by 32%." },
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
    summary: "An automated lead qualification engine that extracts intent from website inquiries and WhatsApp chats, enriches company data, and drafts contextual CRM proposals.",
    agencyRole: ["AI Pipeline Engineering", "Webhook & API Integration", "Prompt Architecture", "Dashboard Development"],
    techStack: ["Next.js", "Python / FastAPI", "LangChain / LLM APIs", "PostgreSQL", "Tailwind CSS"],
    duration: "2 Months (Architecture & Validation)",
    challenge: {
      overview: "B2B agencies and consultancies receive hundreds of inquiries monthly, but account executives lose hours triaging low-budget solicitations and manually researching companies.",
      keyIssues: [
        "High response latency (average 18+ hours) during which high-intent prospects contact competitors",
        "Sales reps spending 25% of their day manually copying lead details into CRM fields",
        "Lack of standardized qualification criteria leading to unqualified discovery calls",
        "Generic automated email responses that feel robotic and turn off sophisticated buyers",
      ],
    },
    approach: {
      strategy: "We built an event-driven automation pipeline that parses incoming inquiries, analyzes company budget/fit against defined ICP criteria, and alerts sales reps with context within 90 seconds.",
      steps: [
        "Defined explicit Ideal Customer Profile (ICP) parameters and scoring rubrics",
        "Connected inbound form submissions and WhatsApp Business webhooks to an asynchronous queue",
        "Implemented structured LLM reasoning to classify project scope, budget feasibility, and urgency",
        "Built a sales rep Slack / WhatsApp dispatch alert with one-click pre-drafted personalized replies",
      ],
    },
    solution: {
      overview: "AutomateIQ operates silently in the background: qualifying inbound prospects in real time, enriching company profiles, and providing sales executives with ready-to-send personalized consultation outlines.",
      architectureHighlights: [
        "Asynchronous FastAPI queue handling webhook spikes without dropping inquiries",
        "Strict prompt boundaries preventing hallucinated promises or off-brand responses",
        "Enterprise API zero-retention data policies ensuring client privacy",
        "Direct bidirectional sync with HubSpot, Zoho, and custom CRM databases",
      ],
    },
    keyFeatures: [
      { title: "90-Second Lead Scoring", description: "Inquiries are parsed, scored against ICP criteria, and prioritized for sales reps instantaneously." },
      { title: "Contextual Brief Drafting", description: "Synthesizes client message into an executive summary highlighting project scope, risks, and suggested tech stack." },
      { title: "Omnichannel WhatsApp Sync", description: "Handles common preliminary inquiries on WhatsApp and escalates warm leads to human consultants." },
      { title: "Human-in-the-Loop Safeguard", description: "Zero messages sent to clients without prior review and one-click confirmation from your team." },
    ],
    projectOutcomes: [
      { metricsLabel: "Response Velocity", details: "Reduced inbound lead qualification and initial touchpoint time from 18 hours to under 2 minutes." },
      { metricsLabel: "Administrative Hours Saved", details: "Saved an estimated 12 hours per sales representative weekly on manual research and CRM entry." },
      { metricsLabel: "Data Accuracy", details: "Achieved 96% accuracy in structured lead categorization across test datasets." },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

