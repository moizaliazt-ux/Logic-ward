export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategoryKey;
  categoryName: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  clientProblem: {
    title: string;
    description: string;
    painPoints: string[];
  };
  ourSolution: {
    title: string;
    description: string;
    pillars: { title: string; detail: string }[];
  };
  deliverables: string[];
  suitableFor: string[];
  businessBenefits: { title: string; detail: string }[];
  process: { step: number; title: string; summary: string }[];
  faqs: { question: string; answer: string }[];
  relatedServiceSlugs: string[];
}

export type ServiceCategoryKey =
  | "digital-marketing"
  | "web-ecommerce"
  | "mobile-development"
  | "software-systems"
  | "ai-automation"
  | "it-infrastructure"
  | "content-creative";

export interface ServiceCategory {
  id: ServiceCategoryKey;
  slug: string;
  title: string;
  shortSummary: string;
  description: string;
  badge: string;
  serviceCount: number;
  featuredSlug: string;
  services: {
    title: string;
    slug: string;
    description: string;
  }[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "software-systems",
    slug: "software-business-management-systems",
    title: "Software & Management Systems",
    shortSummary: "Tailored ERP, CRM, inventory, POS, and custom software systems designed around your real operational workflows.",
    description: "Off-the-shelf software rarely fits intricate operating models. We engineer modular, reliable business platforms that unify data, automate manual bottlenecks, and give leadership clear visibility.",
    badge: "Core Enterprise",
    serviceCount: 11,
    featuredSlug: "custom-software-development",
    services: [
      { title: "Custom Software Development", slug: "custom-software-development", description: "Bespoke software tailored to your specific organizational operations and data models." },
      { title: "CRM Systems", slug: "crm-systems", description: "Lead tracking, pipeline automation, and customer lifecycle management." },
      { title: "ERP Solutions", slug: "erp-solutions", description: "Integrated enterprise resource planning for supply chain, finance, and operations." },
      { title: "School & College Management Systems", slug: "school-college-management-systems", description: "Student admissions, fee billing, grading, attendance, and parent portals." },
      { title: "HRM & Payroll Systems", slug: "hrm-payroll-systems", description: "Employee records, attendance, leave approvals, and tax-compliant payroll processing." },
      { title: "Inventory & Stock Management", slug: "inventory-stock-management", description: "Multi-warehouse tracking, low-stock alerts, barcoding, and supplier purchase orders." },
      { title: "POS & Billing Systems", slug: "pos-billing-systems", description: "Retail and restaurant checkout workflows, barcode scanning, thermal printing, and fiscal integration." },
      { title: "Gym & Membership Management", slug: "gym-membership-management", description: "Member check-ins, subscription recurring billing, trainer scheduling, and access control." },
      { title: "Agriculture / Business Management Systems", slug: "agriculture-business-management-systems", description: "Crop yield tracking, inventory, distributor distribution, and farm procurement." },
      { title: "Booking, Appointment & Workflow Systems", slug: "booking-workflow-systems", description: "Multi-staff calendar scheduling, automated SMS/email reminders, and customer bookings." },
      { title: "Dashboards, Reporting & Business Intelligence", slug: "dashboards-business-intelligence", description: "Consolidated executive dashboards, custom metrics, KPI scorecards, and exportable reports." },
    ],
  },
  {
    id: "ai-automation",
    slug: "ai-business-automation",
    title: "AI & Business Automation",
    shortSummary: "Practical AI workflows, conversational website assistants, and back-office process automation scoped to real business ROI.",
    description: "We scope AI assistants, document processors, and multi-app automations around approved data handling, existing systems, and defined workflows.",
    badge: "High Growth",
    serviceCount: 7,
    featuredSlug: "ai-workflow-automation",
    services: [
      { title: "AI Workflow Automation", slug: "ai-workflow-automation", description: "Multi-step automated workflows connecting internal systems with modern AI agents." },
      { title: "AI Chatbots & Website Assistants", slug: "ai-chatbots-website-assistants", description: "Configured around an approved knowledge base to help qualify inquiries and answer common questions." },
      { title: "Customer Support Automation", slug: "customer-support-automation", description: "Automated ticket categorization, intelligent draft replies, and escalation routing." },
      { title: "Lead Capture & Follow-up Automation", slug: "lead-capture-followup-automation", description: "CRM contact creation, follow-up sequencing, and lead qualification based on agreed rules." },
      { title: "Document & Data Processing Automation", slug: "document-data-processing-automation", description: "Automated invoice parsing, contract data extraction, and structured database syncing." },
      { title: "CRM & Third-Party App Integrations", slug: "crm-third-party-integrations", description: "Robust webhooks and API pipelines connecting Zoho, HubSpot, Google Workspace, and ERPs." },
      { title: "AI-Assisted Business Workflows", slug: "ai-assisted-business-workflows", description: "Scoped decision-support workflows tailored to internal compliance and operating teams." },
    ],
  },
  {
    id: "web-ecommerce",
    slug: "website-ecommerce-development",
    title: "Web & E-Commerce Development",
    shortSummary: "Corporate websites, custom web apps, and e-commerce platforms designed around business and user needs.",
    description: "Your digital storefront should present your value clearly and help visitors complete useful tasks across supported devices.",
    badge: "Core Engineering",
    serviceCount: 8,
    featuredSlug: "business-websites-ecommerce",
    services: [
      { title: "Business Websites", slug: "business-websites-ecommerce", description: "Clean, professional corporate presence built for credibility and lead capture." },
      { title: "Corporate Websites", slug: "corporate-websites", description: "Multi-division corporate platforms with stakeholder investor relations and governance pages." },
      { title: "High-Converting Landing Pages", slug: "landing-pages", description: "Dedicated campaign pages designed for PPC traffic, A/B testing, and direct lead generation." },
      { title: "E-Commerce Websites", slug: "ecommerce-websites", description: "Secure Shopify, WooCommerce, and headless commerce platforms with localized payment gateways." },
      { title: "Custom Web Applications", slug: "custom-web-applications", description: "Interactive client portals, SaaS interfaces, and complex authenticated web software." },
      { title: "Website Redesign & Maintenance", slug: "website-redesign-maintenance", description: "Modernizing outdated legacy websites with improved speed, mobile layouts, and security." },
      { title: "CMS Development & Integrations", slug: "cms-development-integrations", description: "Headless CMS setups (Sanity, Strapi, WordPress API) allowing seamless client editing." },
      { title: "Speed, Security & Performance Optimization", slug: "performance-optimization", description: "Core Web Vitals remediation, caching layers, asset compression, and security hardening." },
    ],
  },
  {
    id: "mobile-development",
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    shortSummary: "Native and cross-platform iOS & Android mobile applications engineered for fluid UX, offline resilience, and scale.",
    description: "From consumer products to field-agent workforce apps, we build responsive, battery-efficient mobile applications with rock-solid backends and smooth release cycles.",
    badge: "Engineering",
    serviceCount: 6,
    featuredSlug: "mobile-app-development",
    services: [
      { title: "Android App Development", slug: "android-app-development", description: "Native Kotlin / modern Android applications optimized for diverse hardware ecosystems." },
      { title: "iOS App Development", slug: "ios-app-development", description: "Swift & modern iOS applications conforming strictly to Apple HIG and App Store guidelines." },
      { title: "Cross-Platform App Development", slug: "mobile-app-development", description: "Flutter and React Native builds sharing unified business logic across iOS and Android." },
      { title: "App UI/UX & Interactive Prototyping", slug: "app-ui-ux-prototyping", description: "Wireframes, user journey mapping, clickable Figma prototypes, and design tokens." },
      { title: "API & Backend Integration", slug: "api-backend-integration", description: "Secure REST/GraphQL integrations, authentication, push notification engines, and payment SDKs." },
      { title: "App Maintenance & Publishing Support", slug: "app-maintenance-publishing", description: "App Store & Google Play Store submission, compliance review, and ongoing OS updates." },
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing-growth",
    title: "Digital Marketing & Growth",
    shortSummary: "Search engine optimization, Answer Engine Optimization (AEO), Google/Meta ads, and full-funnel lead generation.",
    description: "Data-led marketing campaigns without speculative promises. We focus on search intent, conversion rate optimization, transparent attribution, and qualified pipeline growth.",
    badge: "Growth & Visibility",
    serviceCount: 9,
    featuredSlug: "seo-growth-strategy",
    services: [
      { title: "Digital Marketing Strategy", slug: "digital-marketing-strategy", description: "Audience segmentation, competitor positioning, channel mapping, and tactical growth plans." },
      { title: "Search Engine Optimization (SEO)", slug: "seo-growth-strategy", description: "Technical SEO audits, on-page architecture, content optimization, and clean link earning." },
      { title: "Answer Engine Optimization (AEO)", slug: "answer-engine-optimization", description: "Structuring content for AI discovery, Perplexity, ChatGPT citations, and voice queries." },
      { title: "Google Ads / PPC Campaign Management", slug: "google-ads-ppc", description: "Search, Display, and Performance Max campaigns with strict negative keyword management." },
      { title: "Meta Ads (Facebook & Instagram)", slug: "meta-ads-campaigns", description: "Targeted creative campaigns, custom audience lookalikes, and retargeting funnels." },
      { title: "Social Media Management", slug: "social-media-management", description: "Consistent brand messaging, visual design, scheduling, and community engagement." },
      { title: "Lead Generation & Conversion Optimization", slug: "lead-generation-cro", description: "Conversion rate audits, form friction reduction, landing page testing, and pipeline tracking." },
      { title: "Marketing Analytics & Reporting", slug: "marketing-analytics-reporting", description: "GA4 setup, custom Looker Studio dashboards, goal attribution, and transparent monthly reviews." },
      { title: "Local SEO & Google Business Profile", slug: "local-seo", description: "Local citation cleanup, review acquisition workflows, and regional map pack ranking." },
    ],
  },
  {
    id: "it-infrastructure",
    slug: "it-infrastructure-networking",
    title: "IT Infrastructure & Networking",
    shortSummary: "Enterprise network setup, office IT infrastructure, firewall configuration, troubleshooting, and cybersecurity fundamentals.",
    description: "Reliable physical and cloud infrastructure keeps your company operating without costly downtime. We plan, implement, and maintain secure business networks and computing environments.",
    badge: "Infrastructure",
    serviceCount: 9,
    featuredSlug: "it-infrastructure-networking",
    services: [
      { title: "IT Consulting & Technical Support", slug: "it-infrastructure-networking", description: "Strategic technology planning, hardware procurement advisory, and on-call troubleshooting." },
      { title: "Network Planning & Setup", slug: "network-planning-setup", description: "Structured cabling, rack installation, subnets, and commercial network design." },
      { title: "LAN / Wi-Fi Configuration", slug: "lan-wifi-configuration", description: "Enterprise mesh Wi-Fi, VLAN segmenting, guest portal access, and seamless roaming." },
      { title: "Router, Switch & Firewall Configuration", slug: "router-switch-firewall", description: "MikroTik, Cisco, Fortinet, and pfSense setup with strict firewall rules and VPN access." },
      { title: "Office IT Setup", slug: "office-it-setup", description: "Workstation deployment, printer network integration, audio-visual conference room setup." },
      { title: "Hardware & Software Troubleshooting", slug: "hardware-software-troubleshooting", description: "Diagnosing OS corruption, server drive failures, software licensing, and memory upgrades." },
      { title: "System Installation & Maintenance", slug: "system-installation-maintenance", description: "Windows Server / Linux server installs, routine patching, and performance monitoring." },
      { title: "Network Monitoring & Documentation", slug: "network-monitoring-documentation", description: "Topology diagrams, IP assignment registries, uptime monitoring, and SLA tracking." },
      { title: "Cybersecurity & Backup Planning", slug: "cybersecurity-backup-planning", description: "Automated cloud backup routines, endpoint antivirus protection, and disaster recovery plans." },
    ],
  },
  {
    id: "content-creative",
    slug: "content-creative-services",
    title: "Content & Creative Services",
    shortSummary: "High-clarity technical copywriting, SEO blog articles, website copy, product narratives, and brand content strategy.",
    description: "Technology needs articulate translation. We craft compelling, accurate copy that explains complex services in language that decision-makers understand and act on.",
    badge: "Brand & Copy",
    serviceCount: 7,
    featuredSlug: "content-creative-services",
    services: [
      { title: "Website Content Writing", slug: "content-creative-services", description: "Clear, authoritative copy for corporate websites, service pages, and value propositions." },
      { title: "SEO Blog & Article Writing", slug: "seo-blog-writing", description: "In-depth, researched articles targeting high-intent industry queries and thought leadership." },
      { title: "Technical Content Writing", slug: "technical-content-writing", description: "Developer documentation, API guides, white papers, and engineering case studies." },
      { title: "Product Descriptions & Catalogs", slug: "product-descriptions", description: "Compelling e-commerce copy highlighting specs, user benefits, and clear checkout incentives." },
      { title: "Website Copywriting & Positioning", slug: "website-copywriting", description: "High-impact headlines, hero sections, value messaging, and persuasive call-to-actions." },
      { title: "Social Media Content Creation", slug: "social-media-content", description: "Executive LinkedIn posts, carousel explainers, and engaging tech infographics." },
      { title: "Content Strategy & Editorial Optimization", slug: "content-strategy-optimization", description: "Keyword clustering, content calendar planning, and ongoing search optimization audits." },
    ],
  },
];

export const detailedServices: ServiceItem[] = [
  {
    id: "custom-software",
    slug: "custom-software-development",
    title: "Custom Software Development",
    category: "software-systems",
    categoryName: "Software & Management Systems",
    shortDescription: "Bespoke software platforms engineered around your company's proprietary operating logic, data structures, and compliance rules.",
    heroHeadline: "Engineered Software Tailored to Your Real Business Operations",
    heroSubheadline: "Plan software around your organization's workflows, data, and integration requirements.",
    clientProblem: {
      title: "The Limits of Generic Off-the-Shelf Tools",
      description: "Growing companies frequently find themselves trapped between clunky legacy systems and rigid modern subscription software that forces team workflows into unnatural boxes.",
      painPoints: [
        "Data siloed across multiple disconnected tools, spreadsheets, and manual exports",
        "Costly recurring per-user SaaS licenses that escalate rapidly as teams grow",
        "Inability to customize critical business logic, approval chains, or custom reports",
        "Security, compliance, and data ownership concerns with multi-tenant generic platforms",
      ],
    },
    ourSolution: {
      title: "Modular, Secure, and Maintainable Software Engineering",
      description: "We design and build full-stack web and backend software around agreed data models and workflows, with maintainability and ownership terms defined for the project.",
      pillars: [
        {
          title: "Architecture Built for Durability",
          detail: "Use clear service boundaries, typed domain models, and data constraints appropriate to the agreed requirements.",
        },
        {
          title: "Complete Intellectual Property Ownership",
          detail: "Ownership, repository access, and handover terms are recorded in the written project agreement.",
        },
        {
          title: "Role-Based Security & Audit Logs",
          detail: "Define permission tiers, authentication, and activity logging according to the project's security and compliance requirements.",
        },
        {
          title: "API-First Interoperability",
          detail: "Assess API and webhook options for payment gateways, accounting software, legacy databases, and other selected systems.",
        },
      ],
    },
    deliverables: [
      "Technical architecture documentation & schema definitions",
      "Interactive Figma UX/UI wireframes and validated user flows",
      "Production-ready backend API with automated integration tests",
      "Modern, responsive web frontend with role-based access control",
      "Containerized deployment scripts (Docker / Kubernetes / Cloud)",
      "Source code repository handoff and admin user training manuals",
    ],
    suitableFor: [
      "Growing mid-market businesses outgrowing manual spreadsheets",
      "Enterprises replacing costly or unmaintained legacy systems",
      "Organizations with unique compliance, billing, or operational workflows",
      "Founders building proprietary B2B SaaS platforms",
    ],
    businessBenefits: [
      { title: "Workflow Support", detail: "Identify repetitive tasks and assess whether automation or integration fits the agreed workflow." },
      { title: "Shared Reporting", detail: "Bring selected data sources into a reporting view with refresh behavior based on the integrations." },
      { title: "Licensing Considerations", detail: "Compare custom development and ongoing maintenance costs with relevant third-party licensing options." },
      { title: "Capacity Planning", detail: "Document expected usage and evaluate architecture against agreed functional and performance requirements." },
    ],
    process: [
      { step: 1, title: "Discovery & Workflow Mapping", summary: "We interview your key stakeholders, map input/output requirements, and document every operational edge case." },
      { step: 2, title: "Architecture & Data Modeling", summary: "We design the relational database schema, security boundaries, and API contracts before touching code." },
      { step: 3, title: "UX/UI Prototyping", summary: "We create interactive screen mockups for every user role, validating workflows with your team." },
      { step: 4, title: "Iterative Sprint Development", summary: "Development and review cadence, including any staging access, are agreed during scoping." },
      { step: 5, title: "Quality Assurance & Migration", summary: "Testing, security checks, and historical data migration follow the agreed acceptance criteria and plan." },
      { step: 6, title: "Deployment & Team Handover", summary: "Deployment, staff onboarding, documentation, and any ongoing support are defined in the project agreement." },
    ],
    faqs: [
      {
        question: "How long does a typical custom software project take?",
        answer: "Delivery schedules depend on requirements, integrations, data migration, and review cycles. A realistic schedule is agreed after discovery and scope definition.",
      },
      {
        question: "Do we own the intellectual property and code?",
        answer: "Ownership, repository access, documentation, and handover terms are agreed in writing for each engagement, including any treatment of third-party or pre-existing materials.",
      },
      {
        question: "Can this system integrate with our existing accounting or POS software?",
        answer: "We can assess the available APIs, data formats, access requirements, and project scope before confirming integrations with accounting platforms, payment gateways, or existing databases.",
      },
      {
        question: "What happens if we need changes after launch?",
        answer: "Warranty coverage and duration, defect handling, maintenance, and any response targets must be stated in the written project or support agreement.",
      },
    ],
    relatedServiceSlugs: ["crm-systems", "erp-solutions", "ai-workflow-automation", "custom-web-applications"],
  },
  {
    id: "ai-workflow",
    slug: "ai-workflow-automation",
    title: "AI & Business Automation",
    category: "ai-automation",
    categoryName: "AI & Business Automation",
    shortDescription: "AI workflows, document extraction, and cross-application pipelines scoped to defined operational needs.",
    heroHeadline: "AI Workflows Scoped to Measurable Goals",
    heroSubheadline: "Assess automation opportunities against a defined baseline, workflow requirements, and appropriate human review.",
    clientProblem: {
      title: "Valuable Time Lost to Repetitive Manual Operations",
      description: "Some teams rely on manual steps to copy information across systems, triage inquiries, parse documents, and send routine follow-ups.",
      painPoints: [
        "Inbound leads requiring manual review and routing",
        "Staff extracting data from invoices and forms",
        "Customer support teams answering identical routine questions repeatedly",
        "Disjointed systems that require manual copying and pasting between apps",
      ],
    },
    ourSolution: {
      title: "Engineered Automation Scoped to Real Business ROI",
      description: "We assess workflow requirements and data handling, then scope automation that may combine language-model processing, business rules, and API triggers.",
      pillars: [
        {
          title: "Discovery-First Scoping",
          detail: "Assess recurring, rule-governed workflows and establish a baseline before evaluating potential time savings.",
        },
        {
          title: "Private & Secure Architecture",
          detail: "Review provider retention and model-training policies, data sensitivity, and approved configurations before selecting an AI service.",
        },
        {
          title: "Human-in-the-Loop Controls",
          detail: "Automated pipelines route low-confidence edge cases or sensitive decisions to human managers for quick approval.",
        },
        {
          title: "Full Auditability",
          detail: "Every automated execution logs input, reasoning, output, and execution timestamp for total accountability.",
        },
      ],
    },
    deliverables: [
      "Operational workflow audit and ROI feasibility evaluation",
      "AI assistants grounded in approved source material, with behavior and review requirements defined in scope",
      "Automated document processing pipelines (invoices, receipts, customer intake)",
      "Cross-platform webhook integrations (CRM, WhatsApp, Gmail, Slack, Sheets)",
      "Human-in-the-loop review dashboards for exception handling",
      "Monitoring alerts and fail-safe fallback logging",
    ],
    suitableFor: [
      "B2B service firms receiving high volumes of repetitive inquiries",
      "E-commerce teams planning customer support triage",
      "Logistics and accounting teams processing thousands of invoices monthly",
      "Agencies wanting automated client reporting and onboarding pipelines",
    ],
    businessBenefits: [
      { title: "Inquiry Routing", detail: "Route inquiries from supported channels according to configured qualification rules and review steps." },
      { title: "Reduced Administrative Overhead", detail: "Reallocate skilled team members toward high-value client work rather than data entry." },
      { title: "Validation & Review", detail: "Use field validation and human review to catch issues in extracted customer, billing, or order data." },
      { title: "Capacity Planning", detail: "Evaluate expected transaction or inquiry volume and operational review needs during scoping." },
    ],
    process: [
      { step: 1, title: "Workflow Audit & Feasibility", summary: "We analyze your recurring manual tasks, calculate potential time savings, and verify API feasibility." },
      { step: 2, title: "Data Preparation & Prompt Engineering", summary: "We structure your source documentation, define prompt guardrails, and establish security boundaries." },
      { step: 3, title: "Pipeline Integration & Test Harness", summary: "We connect systems via secure webhooks and test against historical sample datasets." },
      { step: 4, title: "Human Review Interface", summary: "We establish review thresholds so edge cases automatically notify your designated team lead." },
      { step: 5, title: "Staged Rollout & Telemetry", summary: "Rollout, monitoring, logging, and usage tracking are defined according to the integrations and project scope." },
      { step: 6, title: "Ongoing Tuning & Refinement", summary: "Post-launch evaluation and further changes can be scoped based on observed behavior and operational needs." },
    ],
    faqs: [
      {
        question: "Can every business workflow be automated with AI?",
        answer: "No. High-judgment creative strategy, highly sensitive negotiations, and subjective human empathy cannot and should not be fully automated. We only recommend automation where inputs, business rules, and outputs can be clearly scoped and monitored.",
      },
      {
        question: "Will our proprietary business data be shared with public AI models?",
        answer: "Provider retention and model-training policies vary by service and plan. Data handling requirements should be reviewed before selecting a provider, and sensitive information should not be sent without an approved configuration.",
      },
      {
        question: "What happens when the AI chatbot doesn't know an answer?",
        answer: "We configure strict confidence thresholds. If a query falls outside verified knowledge or has low certainty, the assistant politely defers and routes the lead or ticket directly to your human staff via email, WhatsApp, or CRM.",
      },
      {
        question: "How are automation tools connected to our existing CRM?",
        answer: "Integration options depend on the CRM's APIs, access model, and data requirements. Synchronization behavior and any manual review steps are defined during scoping.",
      },
    ],
    relatedServiceSlugs: ["custom-software-development", "crm-systems", "business-websites-ecommerce", "lead-capture-followup-automation"],
  },
  {
    id: "web-ecommerce-detail",
    slug: "business-websites-ecommerce",
    title: "Business Websites & E-Commerce",
    category: "web-ecommerce",
    categoryName: "Web & E-Commerce Development",
    shortDescription: "Corporate websites and e-commerce platforms planned around content, accessibility, search, and integration needs.",
    heroHeadline: "Websites Engineered to Convert Visitors Into Qualified Inquiries",
    heroSubheadline: "Shape your online presence around clear information, useful journeys, and the needs of your customers.",
    clientProblem: {
      title: "Websites That Look Decent but Fail to Generate Business",
      description: "Most company websites suffer from slow load times, bloated page builders, confusing user journeys, and generic messaging that leaves visitors indifferent.",
      painPoints: [
        "Poor mobile performance creating friction for visitors on slower networks",
        "Visitors leaving without taking action due to hidden or unclear value propositions",
        "Rigid CMS templates that break whenever marketing wants to publish new landing pages",
        "Poor technical SEO foundations that render the site invisible to search engines and AI assistants",
      ],
    },
    ourSolution: {
      title: "Clean Code, Lightning Performance, and Conversion Architecture",
      description: "We build responsive Next.js and headless websites with clear editorial structure, evidence-backed content, and straightforward inquiry paths.",
      pillars: [
        {
          title: "Core Web Vitals & Performance",
          detail: "Built on clean Next.js architecture with optimized image delivery, static generation, and near-zero layout shift.",
        },
        {
          title: "AEO & Technical SEO Native",
          detail: "Engineered with semantic HTML5, Schema.org microdata, and structured content ready for Google and AI answer engines.",
        },
        {
          title: "Intuitive Content Management",
          detail: "Tailored CMS editing environments that allow marketing teams to publish without writing code or breaking layout grids.",
        },
        {
          title: "Conversion-Focused UX",
          detail: "Strategic placement of consultation triggers, WhatsApp action links, and validated enquiry forms.",
        },
      ],
    },
    deliverables: [
      "Custom responsive visual designs (Figma desktop + tablet + mobile)",
      "Next.js App Router frontend with Tailwind CSS styling",
      "Accessible navigation mega-menus and mobile navigation drawers",
      "Lead generation contact forms with spam protection and webhook notifications",
      "Complete Technical SEO setup (sitemap.xml, robots.txt, metadata, OpenGraph)",
      "Analytics and event tracking setup (GA4 / conversion goals)",
    ],
    suitableFor: [
      "B2B service providers and consultancies upgrading their credibility",
      "Exporters and manufacturers serving international buyers",
      "High-growth startups launching a new product line or funding round",
      "Retailers expanding into omnichannel direct-to-consumer e-commerce",
    ],
    businessBenefits: [
      { title: "Clear Positioning", detail: "Present the organization's verified capabilities, useful evidence, and project approach in a clear format." },
      { title: "Clear Inquiry Paths", detail: "Use navigation and calls to action that make relevant next steps easy to find and evaluate." },
      { title: "Delivery Options", detail: "Choose hosting and content delivery approaches that fit the audience, application, and operational requirements." },
      { title: "Total Design Control", detail: "Freedom from restrictive theme templates with a bespoke design system aligned to your brand identity." },
    ],
    process: [
      { step: 1, title: "Positioning & Information Architecture", summary: "We audit your audience, clarify your value proposition, and map the sitemap and user conversion paths." },
      { step: 2, title: "Wireframes & Editorial Copy", summary: "We structure page hierarchy and collaborate on business copy that speaks directly to client pain points." },
      { step: 3, title: "High-Fidelity Visual Design", summary: "We create interactive Figma designs adhering to your brand guidelines, typography, and color palette." },
      { step: 4, title: "Frontend Engineering", summary: "We develop responsive interfaces with semantic markup, accessible interactions, and maintainable styling." },
      { step: 5, title: "Content Loading & Testing", summary: "Browser, accessibility, mobile, and Core Web Vitals checks are performed against agreed test conditions." },
      { step: 6, title: "Deployment & DNS Launch", summary: "Plan deployment, DNS configuration, SSL, search-console setup, and analytics handover for the agreed hosting environment." },
    ],
    faqs: [
      {
        question: "How long does it take to design and launch a new business website?",
        answer: "Delivery schedules depend on content readiness, design needs, integrations, and acceptance criteria. The timeline is estimated after scope and dependencies are reviewed.",
      },
      {
        question: "Can our internal marketing team update text and blog posts easily?",
        answer: "Yes. We configure clean headless CMS backends or markdown-driven systems with visual editing fields so your team can publish without technical assistance.",
      },
      {
        question: "Will the website be optimized for mobile and local networks?",
        answer: "Mobile layouts and performance should be tested against agreed devices, networks, and user needs. Results depend on content, implementation, hosting, and network conditions.",
      },
      {
        question: "Do you guarantee #1 ranking on Google?",
        answer: "No agency can guarantee a #1 search ranking. Technical work can improve crawlability, structured data, and measured page experience, but rankings depend on many factors outside a site's implementation.",
      },
    ],
    relatedServiceSlugs: ["seo-growth-strategy", "custom-software-development", "mobile-app-development", "content-creative-services"],
  },
  {
    id: "mobile-app-detail",
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    category: "mobile-development",
    categoryName: "Mobile Application Development",
    shortDescription: "Native iOS and Android, and cross-platform Flutter or React Native applications scoped to product and device requirements.",
    heroHeadline: "Engaging Mobile Apps Engineered for Performance and Real Usability",
    heroSubheadline: "From field workforce utilities to customer-facing mobile platforms, we build intuitive apps that users love opening.",
    clientProblem: {
      title: "Why Most Mobile App Projects Fail to Gain Traction",
      description: "Buggy user interfaces, battery drain, poor offline handling, and frustrating App Store review rejections often derail mobile development initiatives.",
      painPoints: [
        "Unresponsive cross-platform apps that feel like wrapped websites rather than native tools",
        "Frequent crashes and slow data synchronization when internet connectivity drops",
        "Endless delays during Apple App Store and Google Play compliance review cycles",
        "Disjointed backend APIs that struggle under concurrent user traffic",
      ],
    },
    ourSolution: {
      title: "Fluid Design, Resilient Architecture, and End-to-End Delivery",
      description: "We engineer native and cross-platform mobile apps with optimized state management, offline-first local caching, and battle-tested API backends that scale gracefully.",
      pillars: [
        {
          title: "Native Performance & Touch Feel",
          detail: "Platform-appropriate rendering, native gestures, and interaction patterns for iOS and Android.",
        },
        {
          title: "Offline-First Synchronization",
          detail: "Local SQLite/Hive data storage allows users to continue working without an active internet connection, syncing seamlessly when reconnected.",
        },
        {
          title: "Strict Store Compliance",
          detail: "Full alignment with Apple App Store Review Guidelines and Google Play Developer Policies to ensure first-time approval.",
        },
        {
          title: "Observability & Crash Analytics",
          detail: "Crash reporting and user-journey telemetry can help teams investigate issues and prioritize fixes.",
        },
      ],
    },
    deliverables: [
      "Clickable interactive mobile prototype in Figma with complete design tokens",
      "Cross-platform or native source codebase with clean architectural separation",
      "Authenticated backend API with push notification service integration (FCM/APNS)",
      "Comprehensive test builds on TestFlight (iOS) and Google Play Internal Testing",
      "App Store & Google Play metadata, screenshots, and submission management",
      "Post-launch monitoring, OS compatibility patching, and release documentation",
    ],
    suitableFor: [
      "Startups building their core digital product or consumer MVP",
      "Retail brands seeking direct mobile loyalty and push notification channels",
      "Enterprises deploying specialized apps for field technicians, inspectors, or drivers",
      "Healthcare, fitness, or booking services wanting on-the-go customer access",
    ],
    businessBenefits: [
      { title: "Direct Customer Channel", detail: "Use push notifications for order updates, reminders, and other agreed customer messages." },
      { title: "Field Workforce Efficiency", detail: "Empower staff to capture signatures, photos, and inspection data directly on site." },
      { title: "Unified Codebase Economics", detail: "Cross-platform technology cuts initial engineering and ongoing maintenance costs in half." },
      { title: "Long-Term Compatibility", detail: "Structured architecture keeps pace with yearly iOS and Android major version updates." },
    ],
    process: [
      { step: 1, title: "Product Requirements & User Flows", summary: "We map out user personas, primary task funnels, and hardware requirements (camera, GPS, biometrics)." },
      { step: 2, title: "UX Wireframing & Clickable Prototyping", summary: "We test the complete navigation flow on physical devices before committing to code." },
      { step: 3, title: "Backend & API Specification", summary: "We define authenticated endpoints, token refresh routines, and database models." },
      { step: 4, title: "Mobile Engineering Sprints", summary: "Feature development in two-week cycles with regular TestFlight/Play Store test builds." },
      { step: 5, title: "Quality Assurance & Device Matrix", summary: "Testing across various screen sizes, OS versions, dark mode, and low-network conditions." },
      { step: 6, title: "Store Submission & Launch", summary: "Managing store listings, privacy declarations, compliance review, and live release monitoring." },
    ],
    faqs: [
      {
        question: "Should we build cross-platform (Flutter / React Native) or native (Swift / Kotlin)?",
        answer: "Cross-platform frameworks such as Flutter or React Native can reduce duplicated implementation work for some products. The right choice depends on device capabilities, performance needs, platform conventions, and the product team's constraints; native development may be appropriate for specialized hardware integrations.",
      },
      {
        question: "Do you handle the App Store and Google Play submission process?",
        answer: "Yes. We prepare all developer account configurations, privacy manifests, screenshots, app descriptions, and manage the complete review submission until production approval.",
      },
      {
        question: "Can the mobile app work when the user has no internet connection?",
        answer: "Yes. We architect offline-first data caching so users can view previously loaded content and perform local actions that automatically queue and synchronize once connection resumes.",
      },
      {
        question: "What are the ongoing costs after the app is published?",
        answer: "Ongoing costs typically include your Apple Developer ($99/year) and Google Play ($25 one-time) fees, backend cloud hosting/database costs, and optional monthly maintenance for annual iOS/Android OS compatibility updates.",
      },
    ],
    relatedServiceSlugs: ["custom-software-development", "business-websites-ecommerce", "ai-workflow-automation"],
  },
  {
    id: "seo-growth-detail",
    slug: "seo-growth-strategy",
    title: "SEO & Growth Strategy",
    category: "digital-marketing",
    categoryName: "Digital Marketing & Growth",
    shortDescription: "Technical SEO audits, search intent mapping, Answer Engine Optimization (AEO), and transparent lead attribution.",
    heroHeadline: "Data-Driven Search Visibility Engineered for Qualified Inquiries",
    heroSubheadline: "Build sustainable organic search authority that attracts decision-makers actively searching for your solutions.",
    clientProblem: {
      title: "Trapped in the Cycle of Expensive, Ineffective Ads",
      description: "Rising cost-per-click rates and generic keyword stuffing strategies often produce vanity traffic that never turns into genuine business pipeline.",
      painPoints: [
        "High ad spend on low-intent search terms that burn marketing budgets with minimal ROI",
        "Websites failing to rank for competitive commercial queries due to unresolved technical debt",
        "Disappearing visibility in modern AI-generated search summaries (ChatGPT, Perplexity, Gemini)",
        "Marketing reports full of vanity impressions rather than verified qualified leads",
      ],
    },
    ourSolution: {
      title: "Technical Rigor, High-Intent Content, and AI-Ready Structure",
      description: "We approach SEO as an engineering discipline. We fix crawling architecture, structure authoritative entity data, and build content clusters designed around high-intent business inquiries.",
      pillars: [
        {
          title: "Technical Infrastructure Health",
          detail: "Remediating indexation blockers, schema microdata errors, slow render trees, and canonical ambiguities.",
        },
        {
          title: "High-Intent Commercial Keyword Mapping",
          detail: "Focusing on problem-aware search queries that indicate genuine purchasing intent rather than broad informational noise.",
        },
        {
          title: "Answer Engine Optimization (AEO)",
          detail: "Formatting content with structured definitions, tables, and entity relationships cited by generative search engines.",
        },
        {
          title: "Transparent Lead Attribution",
          detail: "Clear conversion tracking connecting organic search landing pages directly to qualified form submissions and phone inquiries.",
        },
      ],
    },
    deliverables: [
      "Comprehensive technical SEO health audit and prioritized fix list",
      "Commercial competitor keyword landscape and search gap analysis",
      "On-page optimization roadmap (H1-H3 hierarchy, meta tags, schema markup)",
      "Editorial content briefs targeting high-value transactional search queries",
      "GA4 and Google Search Console goal conversion tracking configuration",
      "Monthly transparent performance review focusing on lead pipeline and ranking trajectory",
    ],
    suitableFor: [
      "B2B service companies wanting steady inbound inquiries without relying solely on ads",
      "SaaS and software companies seeking sustainable customer acquisition channels",
      "Professional service firms establishing regional or international market authority",
      "E-commerce stores wanting to capture high-intent category search volume",
    ],
    businessBenefits: [
      { title: "Compounding ROI", detail: "Unlike paid advertising that stops the moment you pause spend, high organic rankings continue delivering leads month after month." },
      { title: "Higher Trust & Conversion", detail: "Organic searchers perceive top organic results as more credible and authoritative than sponsored ads." },
      { title: "Lower Customer Acquisition Cost", detail: "Over time, organic inbound volume decreases your blended acquisition cost across all marketing channels." },
      { title: "Future-Proofed for AI Search", detail: "Structured entity schemas ensure your company is accurately understood and cited by AI answer engines." },
    ],
    process: [
      { step: 1, title: "Deep Technical & Crawl Audit", summary: "We inspect your website with enterprise crawlers to identify indexing, rendering, and schema deficiencies." },
      { step: 2, title: "Keyword & Competitor Intelligence", summary: "We map out high-intent commercial keywords and identify queries where competitors are vulnerable." },
      { step: 3, title: "On-Page & Architecture Remediation", summary: "We resolve internal linking, meta structures, URL canonicals, and entity schema markup." },
      { step: 4, title: "Content Gap Strategy & Briefs", summary: "We create in-depth content blueprints that answer customer questions better than competing search results." },
      { step: 5, title: "Authority Building & Citations", summary: "Ethical, white-hat digital PR and high-authority industry directory placements." },
      { step: 6, title: "Conversion Tracking & Optimization", summary: "Continuous analysis of search queries, bounce rates, and lead form conversions." },
    ],
    faqs: [
      {
        question: "How long before we see tangible organic search results?",
        answer: "SEO outcomes and timing depend on the site's current condition, competition, content, and search-engine changes. We can assess technical issues and define measurable work, but cannot guarantee rankings or traffic.",
      },
      {
        question: "What is Answer Engine Optimization (AEO)?",
        answer: "AEO is the practice of optimizing content so AI platforms (such as Perplexity, ChatGPT, and Google AI Overviews) can easily parse, cite, and recommend your business when users ask complex natural language questions.",
      },
      {
        question: "Do you guarantee #1 ranking on Google?",
        answer: "No. Search rankings depend on many factors outside a site's implementation. Technical and content work can address identifiable issues, but no ranking or traffic result is promised.",
      },
      {
        question: "How do you measure SEO success?",
        answer: "While we track keyword rankings and impressions, our primary measure of success is qualified organic conversions: form inquiries, consultation bookings, and phone/WhatsApp contacts from target customers.",
      },
    ],
    relatedServiceSlugs: ["business-websites-ecommerce", "content-creative-services", "digital-marketing-strategy"],
  },
  {
    id: "it-infra-detail",
    slug: "it-infrastructure-networking",
    title: "IT Infrastructure & Networking",
    category: "it-infrastructure",
    categoryName: "IT Infrastructure & Networking",
    shortDescription: "Enterprise network design, secure firewall configuration, commercial Wi-Fi, server maintenance, and IT consulting.",
    heroHeadline: "Dependable IT Infrastructure Engineered for Zero Business Downtime",
    heroSubheadline: "Protect your daily business operations with resilient networking, enterprise firewalls, and reliable technical support.",
    clientProblem: {
      title: "Costly Downtime and Fragile Office Technology",
      description: "Spotty Wi-Fi, unmanaged routers, absent data backup routines, and unorganized network wiring disrupt employee productivity and expose businesses to security risks.",
      painPoints: [
        "Frequent network drops interrupting high-stakes client video calls and database connections",
        "Consumer-grade Wi-Fi routers failing to meet office capacity and coverage needs",
        "Zero firewall protection or guest isolation, creating critical security vulnerabilities",
        "No documented disaster recovery or automated backup procedures in the event of hardware failure",
      ],
    },
    ourSolution: {
      title: "Structured, Secure, and Documented Network Engineering",
      description: "We design, deploy, and maintain commercial-grade networking setups and IT infrastructure tailored to physical offices, corporate facilities, and hybrid distributed teams.",
      pillars: [
        {
          title: "Commercial-Grade Hardware",
          detail: "Deploying enterprise MikroTik, Ubiquiti UniFi, Cisco, and Fortinet hardware engineered for heavy concurrent load.",
        },
        {
          title: "Network Segmentation & Security",
          detail: "Configuring isolated VLANs for corporate devices, guest Wi-Fi, VoIP phones, and surveillance systems.",
        },
        {
          title: "Automated Redundancy & Failover",
          detail: "Dual-WAN configurations can route traffic across providers according to agreed failover rules and network requirements.",
        },
        {
          title: "Complete Documentation",
          detail: "We provide detailed network topology diagrams, port mapping, and IP registries for effortless maintenance.",
        },
      ],
    },
    deliverables: [
      "Physical and wireless network site survey and capacity planning",
      "Structured CAT6/fiber cabling patch panel termination and rack organization",
      "Managed switch, VLAN segmentation, and enterprise Wi-Fi configuration",
      "Firewall security rules, site-to-site VPNs, and secure remote worker access",
      "Automated local and offsite encrypted backup routines (3-2-1 strategy)",
      "Comprehensive network topology documentation and incident response protocols",
    ],
    suitableFor: [
      "Corporate offices setting up or expanding physical workspaces",
      "Manufacturing facilities, logistics hubs, and warehouses requiring reliable coverage",
      "Financial, legal, and healthcare firms with strict data security requirements",
      "Schools, colleges, and shared working spaces managing high concurrent users",
    ],
    businessBenefits: [
      { title: "Network Resilience", detail: "Assess coverage, equipment, and connectivity needs to plan for common network interruptions." },
      { title: "Secure Company Data", detail: "Isolate sensitive internal servers and financial workstations from guest traffic and unauthorized devices." },
      { title: "Remote Team Connectivity", detail: "Provide secure encrypted VPN tunnels for management and remote staff without exposing open ports." },
      { title: "Disaster Preparedness", detail: "Define backup frequency, storage, and restoration objectives based on business continuity requirements." },
    ],
    process: [
      { step: 1, title: "Site Assessment & Bandwidth Audit", summary: "We evaluate your physical layout, device density, ISP lines, and coverage dead zones." },
      { step: 2, title: "Topology & Hardware Specification", summary: "We engineer a comprehensive network plan recommending proven commercial equipment." },
      { step: 3, title: "Cabling & Equipment Rack Installation", summary: "Clean, professional patch panel cabling, rack mounting, and uninterrupted power supply (UPS) integration." },
      { step: 4, title: "Configuration & VLAN Hardening", summary: "Router setup, firewall rule enforcement, bandwidth shaping, and guest portal isolation." },
      { step: 5, title: "Stress Testing & Wi-Fi Heatmapping", summary: "Signal validation, roaming handover checks, and throughput testing under peak concurrent load." },
      { step: 6, title: "Documentation & Support Handover", summary: "Complete network diagram handoff, staff orientation, and scheduled maintenance monitoring." },
    ],
    faqs: [
      {
        question: "Can you configure dual-internet failover for our office?",
        answer: "Multi-WAN failover can be scoped around available providers and network equipment. Failover timing and the effect on active sessions depend on the circuits, configuration, and applications, and should be tested against agreed requirements.",
      },
      {
        question: "Do you supply the physical hardware (routers, switches, access points)?",
        answer: "We provide transparent hardware specifications and procurement advisory. We can procure enterprise-grade equipment on your behalf or configure hardware purchased directly by your organization.",
      },
      {
        question: "Can our remote employees securely connect to the office server?",
        answer: "Yes. We set up encrypted WireGuard or IPsec VPN tunnels with multi-factor authentication, allowing authorized staff to securely access internal file servers or software from anywhere in the world.",
      },
      {
        question: "Do you offer emergency on-site and remote IT support?",
        answer: "Project-based implementation and ongoing support can be scoped separately. Any response targets, coverage windows, and escalation terms should be documented in the agreed service level.",
      },
    ],
    relatedServiceSlugs: ["custom-software-development", "ai-workflow-automation"],
  },
  {
    id: "content-creative-detail",
    slug: "content-creative-services",
    title: "Content & Creative Services",
    category: "content-creative",
    categoryName: "Content & Creative Services",
    shortDescription: "Authoritative technical copywriting, conversion-focused website copy, SEO articles, and brand positioning narratives.",
    heroHeadline: "Clear, High-Impact Technical Copy That Resonates With Decision-Makers",
    heroSubheadline: "Translate complex technology offerings into concise, persuasive narratives that accelerate sales conversations.",
    clientProblem: {
      title: "Technical Expertise Lost in Confusing Jargon",
      description: "Many technology companies struggle to articulate what they actually do in language that business executives and procurement managers understand.",
      painPoints: [
        "Website copy dense with buzzwords that confuses prospective buyers",
        "Blog posts written for search robots that fail to build genuine authority with human readers",
        "Generic marketing copy that could belong to any competitor in your industry",
        "Case studies lacking business context, measurable challenges, and verifiable outcomes",
      ],
    },
    ourSolution: {
      title: "Clarity, Strategic Messaging, and Technical Fluency",
      description: "Our writers possess real technology background. We interview your engineers and product managers, distill complex concepts, and write compelling copy designed to establish authority and drive action.",
      pillars: [
        {
          title: "Fluent Technical Understanding",
          detail: "We understand APIs, databases, cloud architecture, and business metrics—no embarrassing rookie errors in your technical copy.",
        },
        {
          title: "Executive Tone & Clarity",
          detail: "Concise, confident prose that respects the limited attention span of busy founders, directors, and technology buyers.",
        },
        {
          title: "SEO & Reader Harmony",
          detail: "Articles structured for organic search engine visibility while delivering genuine value and practical takeaways for human readers.",
        },
        {
          title: "Clear Call-to-Actions",
          detail: "Every page and article guides readers naturally toward the next logical step in your sales cycle.",
        },
      ],
    },
    deliverables: [
      "Brand messaging guide and corporate tone-of-voice handbook",
      "Full website copy across all service, about, and landing pages",
      "Researched, long-form technical SEO thought leadership articles",
      "Detailed project case studies highlighting real business challenges and solutions",
      "Executive LinkedIn post series and technical infographic copy",
      "Comprehensive product descriptions and downloadable service briefs",
    ],
    suitableFor: [
      "B2B tech companies and software agencies updating their positioning",
      "SaaS founders launching a new product into competitive international markets",
      "IT consultants needing authoritative case studies and white papers",
      "Companies launching major website redesigns requiring complete copy overhauls",
    ],
    businessBenefits: [
      { title: "Shorter Sales Cycles", detail: "Clear, authoritative copy answers prospect questions upfront before your first sales call." },
      { title: "Distinct Market Positioning", detail: "Differentiate your agency with clear points of distinction rather than clichés like 'we are the best'." },
      { title: "Higher Form Conversion", detail: "Benefit-driven headlines and clear friction-free microcopy motivate visitors to submit inquiries." },
      { title: "Thought Leadership Authority", detail: "Original, insightful technical articles position your leadership as genuine industry experts." },
    ],
    process: [
      { step: 1, title: "Audience & Competitor Copy Audit", summary: "We review your current messaging and analyze competitor positioning to identify white space." },
      { step: 2, title: "Stakeholder Interviews", summary: "Structured conversations with leadership and technical staff capture operational needs and constraints." },
      { step: 3, title: "Messaging Framework & Outline", summary: "We define core value propositions, tone guardrails, and structural page outlines for approval." },
      { step: 4, title: "Drafting & Collaborative Revisions", summary: "We draft complete copy with headline variations and collaborate via shared comment docs." },
      { step: 5, title: "SEO Optimization & Proofreading", summary: "Rigorous verification of reading flow, fact-checking, meta tags, and internal link anchors." },
      { step: 6, title: "Final Polish & Formatting", summary: "Handoff in clean markdown or CMS-ready layout with microcopy guidance for designers." },
    ],
    faqs: [
      {
        question: "How do your writers understand our complex technical software?",
        answer: "Content review methods—such as reviewing product documentation or speaking with stakeholders—are selected for the project scope and available access.",
      },
      {
        question: "Do you use AI tools to generate our website copy?",
        answer: "Any use of AI assistance, human review, and fact-checking is defined for the content engagement. Technical claims should be supported by sources and approved before publication.",
      },
      {
        question: "Can you write case studies if client names must remain confidential under NDA?",
        answer: "If a client engagement and its publication are approved, a case study can omit identifying details. Any challenges or outcomes included should be supported by evidence and reviewed for permission.",
      },
      {
        question: "How many revision rounds are included?",
        answer: "Revision rounds and approval steps are defined in the written project scope; no standard number is implied here.",
      },
    ],
    relatedServiceSlugs: ["business-websites-ecommerce", "seo-growth-strategy", "custom-software-development"],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  // First check detailed services
  const found = detailedServices.find((s) => s.slug === slug);
  if (found) return found;

  // Otherwise, look for it in the serviceCategories sub-services and generate a robust fallback template
  for (const cat of serviceCategories) {
    const sub = cat.services.find((s) => s.slug === slug);
    if (sub) {
      return {
        id: sub.slug,
        slug: sub.slug,
        title: sub.title,
        category: cat.id,
        categoryName: cat.title,
        shortDescription: sub.description,
        heroHeadline: `${sub.title} for Your Business Workflows`,
        heroSubheadline: `Professional ${sub.title.toLowerCase()} tailored to your operational workflows, compliance requirements, and business goals.`,
        clientProblem: {
          title: `Requirements to Clarify for ${sub.title}`,
          description: `The needs for ${sub.title.toLowerCase()} vary by organization. Discovery should identify the current process, system constraints, required integrations, and acceptance criteria.`,
          painPoints: [
            "Existing workflows and system limitations",
            "Data exchange requirements with current tools",
            "Access control, privacy, and operational requirements",
            "Maintenance and support expectations after launch",
          ],
        },
        ourSolution: {
          title: `Disciplined Engineering for ${sub.title}`,
          description: `The implementation approach for ${sub.title.toLowerCase()} is defined after reviewing requirements, existing systems, and delivery constraints.`,
          pillars: [
            {
              title: "Architecture Based on Scope",
              detail: "Select application structure, data models, and hosting according to the agreed requirements.",
            },
            {
              title: "Integration Planning",
              detail: "Confirm supported APIs, data ownership, and failure handling with each relevant provider.",
            },
            {
              title: "Ownership & Handover",
              detail: "Code and project asset ownership and handover follow the terms agreed in the project contract.",
            },
            {
              title: "Quality & Support Planning",
              detail: "Testing coverage, release checks, warranty, and ongoing support are agreed for the project.",
            },
          ],
        },
        deliverables: [
          `Requirements and architecture documentation for ${sub.title}, as scoped`,
          "User flows or interface prototypes when required",
          "Application code and automated tests defined in the project scope",
          "API integrations selected during discovery",
          "Repository access and handover as agreed in the contract",
          "Warranty and post-launch support terms documented in the agreement",
        ],
        suitableFor: [
          "Startups and founders seeking a scoped product engineering engagement",
          "Small and mid-sized enterprises modernizing digital systems",
          "Organizations needing custom integrations and reliable tech support",
          "International companies looking for an accountable remote engineering partner",
        ],
        businessBenefits: [
          {
            title: "Workflow Fit",
            detail: "Assess whether the proposed workflow addresses the operational needs identified during discovery.",
          },
          {
            title: "Defined Scope",
            detail: "Document deliverables, assumptions, dependencies, and commercial terms in the project agreement.",
          },
          {
            title: "Security Requirements",
            detail: "Identify the relevant access, data protection, and compliance requirements before implementation.",
          },
          {
            title: "Maintenance Planning",
            detail: "Consider expected usage and future changes when choosing the initial architecture.",
          },
        ],
        process: [
          { step: 1, title: "Discovery & Requirements", summary: "We audit your requirements, interview stakeholders, and document the scope." },
          { step: 2, title: "Architecture & Blueprint", summary: "We define data models, security boundaries, and technical specifications." },
          { step: 3, title: "Design & Prototyping", summary: "We create interactive prototypes to validate workflows before coding." },
          { step: 4, title: "Sprint Development", summary: "Review cadence, staging access, and demonstration frequency are agreed during scoping." },
          { step: 5, title: "QA & Deployment", summary: "Testing and release checks follow the acceptance criteria and deployment plan." },
          { step: 6, title: "Support & Handoff", summary: "Repository access, training, warranty, and ongoing support follow the project agreement." },
        ],
        faqs: [
          {
            question: `How do you scope and price ${sub.title}?`,
            answer: `Pricing and delivery terms are set out in a proposal after the requirements and project scope are reviewed.`,
          },
          {
            question: `Do we own all the code and assets for ${sub.title}?`,
            answer: `Ownership, repository access, and handover terms for code, assets, and documentation are defined in the written project agreement.`,
          },
          {
            question: "How do you manage communication with remote international clients?",
            answer: "Communication channels, meeting cadence, staging access, and working-hour overlap are agreed during scoping and documented in the delivery plan.",
          },
        ],
        relatedServiceSlugs: cat.services.filter((s) => s.slug !== sub.slug).slice(0, 3).map((s) => s.slug),
      };
    }
  }

  return undefined;
}

export function getAllServiceSlugs(): string[] {
  const allSlugs = new Set<string>();
  detailedServices.forEach((s) => allSlugs.add(s.slug));
  serviceCategories.forEach((cat) => {
    cat.services.forEach((s) => allSlugs.add(s.slug));
  });
  return Array.from(allSlugs);
}

export function getRelatedServices(slugs: string[]): ServiceItem[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is ServiceItem => service !== undefined);
}
