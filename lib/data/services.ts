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
      { title: "POS & Billing Systems", slug: "pos-billing-systems", description: "Fast retail/restaurant checkout, barcode scanning, thermal printing, and fiscal integration." },
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
    description: "Move past hype to practical automation. We integrate secure AI assistants, document processors, and multi-app automations that eliminate repetitive data entry and accelerate customer inquiries.",
    badge: "High Growth",
    serviceCount: 7,
    featuredSlug: "ai-workflow-automation",
    services: [
      { title: "AI Workflow Automation", slug: "ai-workflow-automation", description: "Multi-step automated workflows connecting internal systems with modern AI agents." },
      { title: "AI Chatbots & Website Assistants", slug: "ai-chatbots-website-assistants", description: "Trained on your knowledge base to qualify inbound leads and answer customer inquiries 24/7." },
      { title: "Customer Support Automation", slug: "customer-support-automation", description: "Automated ticket categorization, intelligent draft replies, and escalation routing." },
      { title: "Lead Capture & Follow-up Automation", slug: "lead-capture-followup-automation", description: "Instant CRM contact creation, WhatsApp/email nurture sequencing, and score qualification." },
      { title: "Document & Data Processing Automation", slug: "document-data-processing-automation", description: "Automated invoice parsing, contract data extraction, and structured database syncing." },
      { title: "CRM & Third-Party App Integrations", slug: "crm-third-party-integrations", description: "Robust webhooks and API pipelines connecting Zoho, HubSpot, Google Workspace, and ERPs." },
      { title: "AI-Assisted Business Workflows", slug: "ai-assisted-business-workflows", description: "Scoped decision-support workflows tailored to internal compliance and operating teams." },
    ],
  },
  {
    id: "web-ecommerce",
    slug: "website-ecommerce-development",
    title: "Web & E-Commerce Development",
    shortSummary: "Fast, conversion-focused corporate websites, custom web apps, and high-performance e-commerce platforms.",
    description: "Your digital storefront must load in milliseconds, articulate your value proposition clearly, and guide visitors toward high-intent conversion actions with zero friction.",
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
    heroSubheadline: "Eliminate spreadsheet chaos and rigid SaaS limitations with software purpose-built for how your organization works.",
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
      description: "We design and build full-stack web and backend software tailored specifically to your data models and operational workflows, ensuring long-term maintainability and complete code ownership.",
      pillars: [
        {
          title: "Architecture Built for Durability",
          detail: "Clean service layers, typed domain models, and relational database integrity that won't require a total rewrite in two years.",
        },
        {
          title: "Complete Intellectual Property Ownership",
          detail: "You own 100% of the source code, database schemas, and infrastructure configs upon project completion.",
        },
        {
          title: "Role-Based Security & Audit Logs",
          detail: "Granular permission tiers, multi-factor authentication, and immutable activity logs for enterprise compliance.",
        },
        {
          title: "API-First Interoperability",
          detail: "Seamless connection to existing payment gateways, accounting software, legacy databases, or third-party webhooks.",
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
      { title: "Operational Velocity", detail: "Automate repetitive daily tasks and eliminate double-entry between disparate departments." },
      { title: "Data Certainty", detail: "A single source of operational truth with real-time reporting instead of stale monthly reconciliations." },
      { title: "No Per-Seat Penalty", detail: "Expand your workforce without paying software vendors higher monthly licensing fees for every hire." },
      { title: "Enterprise Scalability", detail: "Systems designed to handle hundreds of thousands of transactions without performance degradation." },
    ],
    process: [
      { step: 1, title: "Discovery & Workflow Mapping", summary: "We interview your key stakeholders, map input/output requirements, and document every operational edge case." },
      { step: 2, title: "Architecture & Data Modeling", summary: "We design the relational database schema, security boundaries, and API contracts before touching code." },
      { step: 3, title: "UX/UI Prototyping", summary: "We create interactive screen mockups for every user role, validating workflows with your team." },
      { step: 4, title: "Iterative Sprint Development", summary: "Bi-weekly demo builds where you test real functionality on a secure staging server." },
      { step: 5, title: "Quality Assurance & Migration", summary: "Rigorous load testing, security audits, and safe historical data migration from legacy files." },
      { step: 6, title: "Deployment & Team Handover", summary: "Production launch, staff onboarding, comprehensive documentation, and scheduled SLA support." },
    ],
    faqs: [
      {
        question: "How long does a typical custom software project take?",
        answer: "Development timelines depend entirely on system complexity. Focused operational modules or MVPs typically take 6 to 10 weeks, while full enterprise ERP or multi-department platforms range from 3 to 6 months in phased milestones.",
      },
      {
        question: "Do we own the intellectual property and code?",
        answer: "Yes, 100%. Upon final milestone delivery, all source code, database architectures, documentation, and deployment assets are fully transferred to your company without proprietary lock-in.",
      },
      {
        question: "Can this system integrate with our existing accounting or POS software?",
        answer: "Yes. We build modern RESTful and webhook APIs that securely exchange data with popular accounting platforms, payment gateways, and existing databases.",
      },
      {
        question: "What happens if we need changes after launch?",
        answer: "We provide warranty coverage post-launch for bug fixes and offer flexible monthly maintenance SLAs or dedicated development retainers for continuous feature iterations.",
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
    shortDescription: "Practical AI workflows, intelligent document extraction, and cross-application pipelines that eliminate operational friction.",
    heroHeadline: "Practical AI Workflows That Deliver Measurable Hours Saved",
    heroSubheadline: "Move beyond speculative generative AI experiments to dependable automated pipelines that handle repetitive back-office work.",
    clientProblem: {
      title: "Valuable Time Lost to Repetitive Manual Operations",
      description: "Knowledge workers spend hours each day copying information across systems, triaging incoming inquiries, parsing PDFs, and sending routine follow-ups.",
      painPoints: [
        "Inbound leads languishing for hours before an initial human response",
        "Employees spending 10+ hours weekly manually extracting data from invoices and forms",
        "Customer support teams answering identical routine questions repeatedly",
        "Disjointed systems that require manual copying and pasting between apps",
      ],
    },
    ourSolution: {
      title: "Engineered Automation Scoped to Real Business ROI",
      description: "We audit your operational bottlenecks and implement secure, deterministic automation workflows that blend intelligent LLM processing with rock-solid logic rules and API triggers.",
      pillars: [
        {
          title: "Discovery-First Scoping",
          detail: "We never promise magic. We identify high-frequency, rule-governed workflows where automation delivers proven time savings.",
        },
        {
          title: "Private & Secure Architecture",
          detail: "Your proprietary customer data and internal documents are never used for public model training; enterprise API standards apply.",
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
      "Custom AI assistants trained strictly on your verified knowledge base",
      "Automated document processing pipelines (invoices, receipts, customer intake)",
      "Cross-platform webhook integrations (CRM, WhatsApp, Gmail, Slack, Sheets)",
      "Human-in-the-loop review dashboards for exception handling",
      "Monitoring alerts and fail-safe fallback logging",
    ],
    suitableFor: [
      "B2B service firms receiving high volumes of repetitive inquiries",
      "E-commerce brands needing 24/7 customer support triage",
      "Logistics and accounting teams processing thousands of invoices monthly",
      "Agencies wanting automated client reporting and onboarding pipelines",
    ],
    businessBenefits: [
      { title: "Immediate Response Times", detail: "Qualify inbound prospects within seconds on WhatsApp or website chat instead of next-day follow-ups." },
      { title: "Reduced Administrative Overhead", detail: "Reallocate skilled team members toward high-value client work rather than data entry." },
      { title: "Standardized Execution", detail: "Eliminate human transcription errors across customer files, billing data, and order tickets." },
      { title: "Predictable Scaling", detail: "Handle double the transaction or inquiry volume without immediately having to double back-office headcount." },
    ],
    process: [
      { step: 1, title: "Workflow Audit & Feasibility", summary: "We analyze your recurring manual tasks, calculate potential time savings, and verify API feasibility." },
      { step: 2, title: "Data Preparation & Prompt Engineering", summary: "We structure your source documentation, define prompt guardrails, and establish security boundaries." },
      { step: 3, title: "Pipeline Integration & Test Harness", summary: "We connect systems via secure webhooks and test against historical sample datasets." },
      { step: 4, title: "Human Review Interface", summary: "We establish review thresholds so edge cases automatically notify your designated team lead." },
      { step: 5, title: "Staged Rollout & Telemetry", summary: "Gradual deployment with real-time error monitoring, logging, and token usage tracking." },
      { step: 6, title: "Ongoing Tuning & Refinement", summary: "Continuous optimization based on actual edge cases and expanding operational needs." },
    ],
    faqs: [
      {
        question: "Can every business workflow be automated with AI?",
        answer: "No. High-judgment creative strategy, highly sensitive negotiations, and subjective human empathy cannot and should not be fully automated. We only recommend automation where inputs, business rules, and outputs can be clearly scoped and monitored.",
      },
      {
        question: "Will our proprietary business data be shared with public AI models?",
        answer: "No. We utilize commercial enterprise API tiers with strict contractual zero-data-retention guarantees, ensuring your confidential internal files and customer records are never used for model training.",
      },
      {
        question: "What happens when the AI chatbot doesn't know an answer?",
        answer: "We configure strict confidence thresholds. If a query falls outside verified knowledge or has low certainty, the assistant politely defers and routes the lead or ticket directly to your human staff via email, WhatsApp, or CRM.",
      },
      {
        question: "How are automation tools connected to our existing CRM?",
        answer: "We build secure webhooks and API connectors directly to your CRM (HubSpot, Zoho, Salesforce, or custom DB), ensuring data syncs in real time without manual intervention.",
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
    shortDescription: "High-performance, conversion-engineered corporate websites and modern e-commerce platforms built for speed and search authority.",
    heroHeadline: "Websites Engineered to Convert Visitors Into Qualified Inquiries",
    heroSubheadline: "Transform your online presence from a passive digital brochure into a fast, authoritative customer acquisition engine.",
    clientProblem: {
      title: "Websites That Look Decent but Fail to Generate Business",
      description: "Most company websites suffer from slow load times, bloated page builders, confusing user journeys, and generic messaging that leaves visitors indifferent.",
      painPoints: [
        "Bounce rates over 60% caused by sluggish performance on mobile networks",
        "Visitors leaving without taking action due to hidden or unclear value propositions",
        "Rigid CMS templates that break whenever marketing wants to publish new landing pages",
        "Poor technical SEO foundations that render the site invisible to search engines and AI assistants",
      ],
    },
    ourSolution: {
      title: "Clean Code, Lightning Performance, and Conversion Architecture",
      description: "We build fast, secure Next.js and headless websites designed around the psychology of business buyers—combining strong editorial typography, clear proof points, and friction-free inquiry flows.",
      pillars: [
        {
          title: "Sub-Second Core Web Vitals",
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
      { title: "Immediate Credibility", detail: "Project an established, high-capability image that commands executive trust and premium project pricing." },
      { title: "Higher Conversion Rates", detail: "Frictionless navigation and clear CTAs turn a higher percentage of ad and search traffic into inquiries." },
      { title: "Global Speed", detail: "Edge CDN distribution ensures visitors in New York, London, Dubai, or Lahore experience instantaneous page loads." },
      { title: "Total Design Control", detail: "Freedom from restrictive theme templates with a bespoke design system aligned to your brand identity." },
    ],
    process: [
      { step: 1, title: "Positioning & Information Architecture", summary: "We audit your audience, clarify your value proposition, and map the sitemap and user conversion paths." },
      { step: 2, title: "Wireframes & Editorial Copy", summary: "We structure page hierarchy and collaborate on business copy that speaks directly to client pain points." },
      { step: 3, title: "High-Fidelity Visual Design", summary: "We create interactive Figma designs adhering to your brand guidelines, typography, and color palette." },
      { step: 4, title: "Frontend Engineering", summary: "We develop responsive, accessible code with semantic markup, fast CSS, and interactive components." },
      { step: 5, title: "Content Loading & Testing", summary: "Complete cross-browser, mobile responsiveness, and Core Web Vitals speed verification." },
      { step: 6, title: "Deployment & DNS Launch", summary: "Smooth zero-downtime deployment, SSL configuration, search console indexing, and analytics handover." },
    ],
    faqs: [
      {
        question: "How long does it take to design and launch a new business website?",
        answer: "A standard 5 to 10-page custom corporate website typically takes 3 to 5 weeks from discovery to production launch. Larger e-commerce portals or extensive multi-service directories take 6 to 8 weeks.",
      },
      {
        question: "Can our internal marketing team update text and blog posts easily?",
        answer: "Yes. We configure clean headless CMS backends or markdown-driven systems with visual editing fields so your team can publish without technical assistance.",
      },
      {
        question: "Will the website be optimized for mobile and local networks?",
        answer: "Every site we build is mobile-first. We rigorously test assets, lazy loading, and script budgets to ensure fast browsing even on average 3G/4G cellular connections.",
      },
      {
        question: "Do you guarantee #1 ranking on Google?",
        answer: "No legitimate agency can guarantee a #1 search ranking. We build according to Google's strictest technical quality guidelines, structured schema standards, and fast Core Web Vitals to give your site the strongest possible organic foundation.",
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
    shortDescription: "Native iOS & Android and high-performance cross-platform Flutter/React Native mobile applications built for retention and speed.",
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
          detail: "60 FPS rendering, platform-native gestures, and smooth micro-interactions that feel natural on both iOS and Android.",
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
          detail: "Integrated Sentry crash reporting and user journey telemetry to identify and resolve edge-case bugs immediately.",
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
      { title: "Direct Customer Channel", detail: "Harness push notifications for real-time order updates, reminders, and engagement." },
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
        answer: "For over 85% of commercial business apps, modern cross-platform frameworks like Flutter or React Native provide native 60fps performance while saving up to 40% in development and ongoing maintenance costs. We only recommend pure native when an app requires heavy low-level Bluetooth/AR hardware integration.",
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
        answer: "SEO is a medium-to-long-term strategic investment. Technical fixes and indexation improvements often show initial ranking movements within 6 to 8 weeks, with substantial qualified traffic and lead generation typically compounding between months 3 and 6.",
      },
      {
        question: "What is Answer Engine Optimization (AEO)?",
        answer: "AEO is the practice of optimizing content so AI platforms (such as Perplexity, ChatGPT, and Google AI Overviews) can easily parse, cite, and recommend your business when users ask complex natural language questions.",
      },
      {
        question: "Do you guarantee #1 ranking on Google?",
        answer: "No. We explicitly do not make false guarantees. Google's search algorithms use hundreds of proprietary signals. We provide rigorous, data-backed optimization according to Google's published Search Quality Guidelines to maximize your visibility ethically and sustainably.",
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
        "Consumer-grade Wi-Fi routers failing under the load of 30+ office devices",
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
          detail: "Dual-WAN multi-ISP setup ensures instant automatic failover so your office never loses internet during provider outages.",
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
      { title: "Continuous Productivity", detail: "Eliminate costly midday work stoppages caused by consumer router crashes and bandwidth bottlenecks." },
      { title: "Secure Company Data", detail: "Isolate sensitive internal servers and financial workstations from guest traffic and unauthorized devices." },
      { title: "Remote Team Connectivity", detail: "Provide secure encrypted VPN tunnels for management and remote staff without exposing open ports." },
      { title: "Disaster Preparedness", detail: "Rest easy knowing operational data is automatically backed up offsite and restorable within hours." },
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
        question: "Can you configure dual-internet failover so our office never goes offline?",
        answer: "Yes. We configure multi-WAN routers (e.g., MikroTik or UniFi Gateway) connected to two separate internet providers. If primary line drops, traffic automatically routes through the backup line within seconds without interrupting ongoing calls.",
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
        answer: "Yes. We offer both project-based implementation and monthly IT support retainers with guaranteed SLA response times for critical network emergencies.",
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
      { step: 2, title: "Stakeholder Interviews", summary: "We conduct 30-minute interviews with your leadership and technical staff to capture authentic insights." },
      { step: 3, title: "Messaging Framework & Outline", summary: "We define core value propositions, tone guardrails, and structural page outlines for approval." },
      { step: 4, title: "Drafting & Collaborative Revisions", summary: "We draft complete copy with headline variations and collaborate via shared comment docs." },
      { step: 5, title: "SEO Optimization & Proofreading", summary: "Rigorous verification of reading flow, fact-checking, meta tags, and internal link anchors." },
      { step: 6, title: "Final Polish & Formatting", summary: "Handoff in clean markdown or CMS-ready layout with microcopy guidance for designers." },
    ],
    faqs: [
      {
        question: "How do your writers understand our complex technical software?",
        answer: "We assign writers with technical backgrounds who review your product documentation, conduct focused stakeholder interviews, and test your software firsthand before drafting copy.",
      },
      {
        question: "Do you use AI tools to generate our website copy?",
        answer: "We do not produce unedited, generic AI copy. While we may use assistive tools for research synthesis or keyword clustering, all final copy is strategically written, fact-checked, and polished by human writers with domain expertise.",
      },
      {
        question: "Can you write case studies if client names must remain confidential under NDA?",
        answer: "Yes. We frequently craft anonymous, high-impact case studies using industry labels (e.g. 'Leading Regional Logistics Provider' or 'FinTech Scale-up') while detailing the real architectural challenge and verified technical outcomes.",
      },
      {
        question: "How many revision rounds are included?",
        answer: "All copy projects include two comprehensive rounds of revisions to ensure voice, technical precision, and positioning align seamlessly with your vision.",
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
        heroHeadline: `${sub.title} Engineered for High Performance & Scale`,
        heroSubheadline: `Professional ${sub.title.toLowerCase()} tailored to your operational workflows, compliance requirements, and business goals.`,
        clientProblem: {
          title: `Overcoming Common Challenges in ${sub.title}`,
          description: `Companies engaging in ${sub.title.toLowerCase()} frequently encounter technical debt, inconsistent delivery timelines, poor integration between systems, and escalating maintenance overhead.`,
          painPoints: [
            "Lack of clean architectural standards and documented code patterns",
            "Disjointed integrations with existing databases and legacy software",
            "Slow turnaround times and unpredictable agency communication",
            "Absence of ongoing monitoring, security patching, and telemetry",
          ],
        },
        ourSolution: {
          title: `Disciplined Engineering for ${sub.title}`,
          description: `We deliver modular, well-tested implementations designed around your real operational requirements, backed by full source code ownership and direct developer communication.`,
          pillars: [
            {
              title: "Modern, Maintainable Architecture",
              detail: "Built on battle-tested frameworks with clean code practices, typed models, and comprehensive documentation.",
            },
            {
              title: "Seamless API & Workflow Integration",
              detail: "Connecting cleanly with your existing systems, webhooks, and third-party tools with zero friction.",
            },
            {
              title: "100% Intellectual Property Handoff",
              detail: "You retain total ownership of all repositories, configurations, and deployment assets upon delivery.",
            },
            {
              title: "Dedicated Quality Assurance & Support",
              detail: "Rigorous testing across browsers and environments with guaranteed post-launch warranty support.",
            },
          ],
        },
        deliverables: [
          `Technical specifications and architecture documentation for ${sub.title}`,
          "Interactive Figma mockups and validated user workflows",
          "Production-ready codebase with automated tests and CI/CD setup",
          "Comprehensive API integration and third-party connectors",
          "Complete source code repository transfer and administrative handover",
          "Post-launch technical warranty coverage and SLA support options",
        ],
        suitableFor: [
          "Startups and founders seeking reliable, fast execution",
          "Small and mid-sized enterprises modernizing digital systems",
          "Organizations needing custom integrations and reliable tech support",
          "International companies looking for an accountable remote engineering partner",
        ],
        businessBenefits: [
          {
            title: "Operational Efficiency",
            detail: "Eliminate manual friction and speed up your day-to-day business operations.",
          },
          {
            title: "Clear Cost Predictability",
            detail: "Transparent milestone billing with no surprise hidden fees or proprietary vendor lock-in.",
          },
          {
            title: "Robust Security & Compliance",
            detail: "Engineered according to modern cybersecurity best practices and data privacy standards.",
          },
          {
            title: "Long-Term Scalability",
            detail: "Built to handle expanding transaction volumes without requiring a total rebuild.",
          },
        ],
        process: [
          { step: 1, title: "Discovery & Requirements", summary: "We audit your requirements, interview stakeholders, and document the scope." },
          { step: 2, title: "Architecture & Blueprint", summary: "We define data models, security boundaries, and technical specifications." },
          { step: 3, title: "Design & Prototyping", summary: "We create interactive prototypes to validate workflows before coding." },
          { step: 4, title: "Sprint Development", summary: "Bi-weekly sprints with live demo builds on private staging servers." },
          { step: 5, title: "QA & Deployment", summary: "End-to-end testing, security validation, and smooth zero-downtime launch." },
          { step: 6, title: "Support & Handoff", summary: "Complete repository handover, staff training, and scheduled SLA maintenance." },
        ],
        faqs: [
          {
            question: `How do you scope and price ${sub.title}?`,
            answer: `We provide clear fixed-milestone pricing for well-defined deliverables and flexible sprint retainers for evolving scopes. Every quote includes an itemized breakdown with zero hidden fees.`,
          },
          {
            question: `Do we own all the code and assets for ${sub.title}?`,
            answer: `Yes, 100%. Upon final project sign-off, all source code, assets, and documentation are transferred fully to your organization with zero proprietary licensing restrictions.`,
          },
          {
            question: "How do you manage communication with remote international clients?",
            answer: "We provide dedicated Slack / Teams / WhatsApp channels, weekly video calls, and access to private staging URLs where you can verify progress in real time across overlapping time zones.",
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
