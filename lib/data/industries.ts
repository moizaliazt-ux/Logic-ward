export interface Industry {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  heroHeadline: string;
  overview: string;
  operationalChallenges: string[];
  keyWorkflows: { title: string; description: string }[];
  applicableServices: string[];
  relatedSolutions: { title: string; href: string }[];
  referenceConcept: {
    title: string;
    description: string;
    label: string;
  };
  complianceNotice?: string;
}

export const industriesData: Industry[] = [
  {
    id: "education",
    slug: "education",
    name: "Education & E-Learning",
    shortDescription:
      "Automated campus administration, student information systems, fee billing, and learning portals for schools, colleges, and training institutes.",
    heroHeadline: "Scalable Software Systems for Educational Institutions",
    overview:
      "Modern educational organizations require unified administration to replace fragmented spreadsheets, manual fee receipts, and disconnected attendance registers. We engineer robust campus management architectures.",
    operationalChallenges: [
      "Manual fee collection leading to accounting discrepancies and late reconciliation.",
      "Fragmented student records across admissions, exams, and grading.",
      "Disconnected communication channels between administration, teachers, and parents.",
      "Difficulties in generating institutional compliance and board examination reports.",
    ],
    keyWorkflows: [
      {
        title: "Digital Admissions & Enrollment",
        description: "Online application intake, document verification, merit list generation, and roll number allocation.",
      },
      {
        title: "Automated Fee & Challan Engine",
        description: "Scheduled challan generation, bank API reconciliation, installment plans, and automated SMS alerts.",
      },
      {
        title: "Examination & Grading Analytics",
        description: "GPA/grading calculation, transcript generation, and historical performance tracking across academic terms.",
      },
      {
        title: "Parent & Student Mobile Portals",
        description: "Attendance records, timetable access, assignment submission, and administrative notices with access based on user roles.",
      },
    ],
    applicableServices: [
      "Custom Software Development",
      "School & College Management Systems",
      "Mobile App Development",
      "Cloud & Database Engineering",
    ],
    relatedSolutions: [
      { title: "School & College Management Platform", href: "/solutions#school-college-management" },
      { title: "Executive Dashboards & BI", href: "/solutions#dashboards-business-intelligence" },
    ],
    referenceConcept: {
      title: "EduCore Institutional Portal",
      description: "Concept architecture for a multi-campus college featuring fee workflows and parent portals.",
      label: "Reference Implementation",
    },
  },
  {
    id: "healthcare",
    slug: "healthcare",
    name: "Healthcare & Wellness",
    shortDescription:
      "Clinical workflow automation, doctor appointment scheduling, telemedicine portals, and patient record management architectures.",
    heroHeadline: "Patient-Centered Clinical & Telehealth Software Architecture",
    overview:
      "Healthcare facilities and diagnostic centers need software that respects patient confidentiality and supports appointment scheduling and clinic billing workflows.",
    operationalChallenges: [
      "Long patient wait times caused by inefficient manual token and appointment scheduling.",
      "Fragmented patient medical history and lab diagnostic report archives.",
      "Pharmacy and medical consumable stock wastage due to unlinked clinic billing.",
      "Patient data security and access control compliance.",
    ],
    keyWorkflows: [
      {
        title: "Smart Appointment & Token Queuing",
        description: "Online doctor scheduling, SMS reminders, and digital waiting-room queue displays.",
      },
      {
        title: "Electronic Health Records (EHR) Module",
        description: "Role-based clinical encounter notes, diagnostic attachment storage, and prescription history.",
      },
      {
        title: "Clinic & Pharmacy POS Integration",
        description: "Direct prescription-to-pharmacy dispensing, batch expiry tracking, and integrated invoice settlement.",
      },
      {
        title: "Teleconsultation Mobile Apps",
        description: "Secure WebRTC video consultations, integrated payment gateway, and digital prescription download.",
      },
    ],
    applicableServices: [
      "Custom Software Development",
      "Telehealth & Mobile App Engineering",
      "Booking & Appointment Systems",
      "Secure Cloud Infrastructure",
    ],
    relatedSolutions: [
      { title: "Booking & Workflow Systems", href: "/solutions#booking-workflow-systems" },
      { title: "HealthPulse Telehealth Architecture", href: "/work/healthpulse-telehealth-platform" },
    ],
    referenceConcept: {
      title: "HealthPulse Care Suite",
      description: "End-to-end reference implementation for outpatient clinics with doctor scheduling, WebRTC video consultations, and digital prescription dispensing.",
      label: "Concept Project",
    },
    complianceNotice:
      "All healthcare architectures are scoped and customized to client requirements. Actual regulatory compliance (such as HIPAA or local healthcare authority mandates) depends on specific operational deployments.",
  },
  {
    id: "retail-ecommerce",
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    shortDescription:
      "Omnichannel retail POS, multi-branch stock reconciliation, headless commerce storefronts, and automated order fulfillment.",
    heroHeadline: "Omnichannel Retail & E-Commerce Platforms",
    overview:
      "Retail teams need reliable coordination between physical stores, warehouse inventory, and online sales channels to manage stock availability.",
    operationalChallenges: [
      "Desynchronized inventory between physical stores and online e-commerce websites.",
      "Slow point-of-sale checkout speeds during peak festive rush periods.",
      "Manual multi-warehouse stock transfer approvals delaying order fulfillment.",
      "High shopping cart abandonment and slow page load speeds on mobile networks.",
    ],
    keyWorkflows: [
      {
        title: "Multi-Branch POS",
        description: "Barcode scanning, thermal receipt printing, split payment tenders, and offline transaction buffering.",
      },
      {
        title: "Inventory Reservation",
        description: "Plan transaction and reservation behavior to coordinate online and physical retail inventory across selected systems.",
      },
      {
        title: "Headless E-Commerce Storefronts",
        description: "Next.js App Router storefronts designed with Core Web Vitals in mind and evaluated against agreed devices and test conditions.",
      },
      {
        title: "Courier & Logistics API Automation",
        description: "Automated consignment booking, airway bill (AWB) generation, and order-tracking updates through supported webhooks.",
      },
    ],
    applicableServices: [
      "E-Commerce Development",
      "POS & Billing Systems",
      "Inventory & Multi-Warehouse Software",
      "Web Applications & E-Commerce",
    ],
    relatedSolutions: [
      { title: "POS & Billing Systems", href: "/solutions#pos-billing-systems" },
      { title: "Multi-Warehouse Inventory Control", href: "/solutions#inventory-warehouse-management" },
    ],
    referenceConcept: {
      title: "RetailSync Omnichannel Platform",
      description: "Architectural blueprint demonstrating live synchronization between high-volume retail POS and a headless Next.js online store.",
      label: "Reference Implementation",
    },
  },
  {
    id: "logistics-transport",
    slug: "logistics-transport",
    name: "Logistics & Transportation",
    shortDescription:
      "Consignment tracking, fleet dispatch management, multi-warehouse hub routing, and electronic proof of delivery (ePOD).",
    heroHeadline: "Resilient Software Systems for Supply Chain & Logistics",
    overview:
      "Freight operators, courier companies, and delivery fleets require continuous visibility across transit checkpoints, driver dispatches, and warehouse cross-docking hubs.",
    operationalChallenges: [
      "Limited package milestone visibility that can increase customer support requests.",
      "Inefficient manual dispatch schedules and driver route allocation.",
      "Disputed deliveries due to missing paper-based proof of delivery notes.",
      "Inaccurate multi-hub cargo manifests during intercity transit.",
    ],
    keyWorkflows: [
      {
        title: "Dispatch & Manifest Management",
        description: "Automated route grouping, vehicle load capacity calculation, and driver trip sheet generation.",
      },
      {
        title: "Driver Mobile App & Digital ePOD",
        description: "Turn-by-turn route updates, digital recipient signature capture, and photo proof-of-delivery upload.",
      },
      {
        title: "Barcode Checkpoint Tracking",
        description: "Rapid warehouse scanner integration tracking package ingestion, sorting, and dispatch events.",
      },
      {
        title: "Automated Customer Notifications",
        description: "Milestone alerts via configured messaging channels can give customers clearer shipment updates.",
      },
    ],
    applicableServices: [
      "Custom Software Development",
      "Mobile App Development",
      "ERP & Supply Chain Systems",
      "Cloud & API Integrations",
    ],
    relatedSolutions: [
      { title: "Enterprise ERP & Supply Chain", href: "/solutions#erp-solutions" },
      { title: "LogiFlow Case Study", href: "/work/logiflow-enterprise-erp" },
    ],
    referenceConcept: {
      title: "LogiFlow Distribution Engine",
      description: "Demonstration architecture for a 4-warehouse logistics network processing barcode checkpoints and mobile driver signatures.",
      label: "Reference Implementation",
    },
  },
  {
    id: "finance-services",
    slug: "finance-services",
    name: "Finance & Professional Services",
    shortDescription:
      "Client onboarding workflows, double-entry general ledger software, invoice management, and secure document vaults.",
    heroHeadline: "Disciplined Software Architecture for Financial & Advisory Firms",
    overview:
      "Consulting firms, legal practices, and accounting services require bulletproof audit trails, time billing accuracy, and secure client collaboration portals.",
    operationalChallenges: [
      "Unbilled client hours caused by disconnected manual timesheet tracking.",
      "Security vulnerabilities when exchanging confidential client financial records over email.",
      "Double-entry bookkeeping errors in customized legacy accounting spreadsheets.",
      "Slow client onboarding and compliance KYC document verification.",
    ],
    keyWorkflows: [
      {
        title: "Strict Double-Entry General Ledger",
        description: "ACID-compliant relational database transactions with immutable audit logs for every journal voucher.",
      },
      {
        title: "Secure Client Document Portal",
        description: "End-to-end encrypted file exchange with role-based access, watermarking, and download auditing.",
      },
      {
        title: "Project Milestone Invoicing",
        description: "Automated invoice generation tied to approved deliverable stages, tax calculations, and payment tracking.",
      },
      {
        title: "Executive Profitability Dashboards",
        description: "Gross-margin reporting by practice area, engagement, and consultant utilization, using data from selected systems.",
      },
    ],
    applicableServices: [
      "Custom Software Development",
      "Executive Dashboards & BI",
      "CRM & Pipeline Engineering",
      "Cybersecurity & Data Protection",
    ],
    relatedSolutions: [
      { title: "Executive Dashboards & BI", href: "/solutions#dashboards-business-intelligence" },
      { title: "Custom CRM Pipelines", href: "/solutions#crm-systems" },
    ],
    referenceConcept: {
      title: "LedgerVault Advisory Architecture",
      description: "Architecture prototype showcasing strict double-entry ledger bookkeeping and encrypted client document vaults.",
      label: "Concept Project",
    },
  },
  {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate & Property",
    shortDescription:
      "Property inventory directories, lease agreement tracking, tenant billing portals, and maintenance ticket dispatch.",
    heroHeadline: "Property Management & Real Estate Portfolio Software",
    overview:
      "Developers, commercial leasing agencies, and property management firms require centralized platforms to track property inventory, rent collections, and maintenance requests.",
    operationalChallenges: [
      "Delayed rental payments and manual follow-up across multi-unit commercial buildings.",
      "Untracked tenant maintenance complaints resulting in tenant dissatisfaction.",
      "Disorganized lease renewal dates and escalated rental rate revisions.",
      "Double-booking of property units across sales agents and external brokers.",
    ],
    keyWorkflows: [
      {
        title: "Interactive Unit Inventory Map",
        description: "Floor-plan views showing unit availability states based on the selected property and lease data sources.",
      },
      {
        title: "Automated Lease & Rent Invoicing",
        description: "Scheduled recurring rental bills, late fee computations, and direct bank transfer receipt matching.",
      },
      {
        title: "Tenant Service Desk & Work Orders",
        description: "Mobile ticketing for plumbing, electrical, and HVAC repairs with vendor assignment and photo sign-off.",
      },
      {
        title: "Broker & Commission Portal",
        description: "External broker lead registration, contract tracking, and commission payout calculation.",
      },
    ],
    applicableServices: [
      "Custom Software Development",
      "Web Application Development",
      "CRM & Sales Pipelines",
      "Mobile App Development",
    ],
    relatedSolutions: [
      { title: "Custom CRM Pipelines", href: "/solutions#crm-systems" },
      { title: "Booking & Workflow Systems", href: "/solutions#booking-workflow-systems" },
    ],
    referenceConcept: {
      title: "EstatePulse Property OS",
      description: "Concept architecture for commercial office management tracking multi-tenant lease agreements and maintenance ticketing.",
      label: "Concept Project",
    },
  },
  {
    id: "manufacturing-distribution",
    slug: "manufacturing-distribution",
    name: "Manufacturing & Distribution",
    shortDescription:
      "Bill of Materials (BOM) management, production job card tracking, raw material procurement, and batch traceability.",
    heroHeadline: "Production Planning & Factory Floor Software Systems",
    overview:
      "Manufacturing facilities and wholesale distributors require precise tracking of raw materials, production line capacity, scrap rates, and finished goods warehouse dispatch.",
    operationalChallenges: [
      "Material shortages halting assembly lines due to untracked procurement lead times.",
      "Inaccurate manufacturing cost estimations due to unrecorded machine downtime and scrap waste.",
      "Difficulty tracing specific batch lots during customer quality investigations.",
      "Disconnected paper job cards on the production floor causing inventory discrepancies.",
    ],
    keyWorkflows: [
      {
        title: "Multi-Level Bill of Materials (BOM)",
        description: "Detailed raw material formulas, sub-assembly component hierarchies, and automated stock reserve locks.",
      },
      {
        title: "Production Job Card Tracking",
        description: "Tablet-based recording of machine runs, operator shifts, production counts, and defects.",
      },
      {
        title: "Batch & Expiry Traceability",
        description: "End-to-end lot number tracking from raw vendor intake to final customer dispatch.",
      },
      {
        title: "Preventative Maintenance Scheduler",
        description: "Machine runtime hour counters triggering automated oil changes, belt inspections, and calibration orders.",
      },
    ],
    applicableServices: [
      "Enterprise ERP & Supply Chain",
      "Inventory & Multi-Warehouse Software",
      "IT Infrastructure & Networking",
      "AI & Data Extraction Automation",
    ],
    relatedSolutions: [
      { title: "Enterprise ERP Solutions", href: "/solutions#erp-solutions" },
      { title: "Multi-Warehouse Inventory Control", href: "/solutions#inventory-warehouse-management" },
    ],
    referenceConcept: {
      title: "FabriFlow Manufacturing Suite",
      description: "Reference architecture for discrete manufacturing featuring multi-tier BOM calculations and production terminal tracking.",
      label: "Reference Implementation",
    },
  },
  {
    id: "fitness-wellness",
    slug: "fitness-wellness",
    name: "Fitness & Wellness Clubs",
    shortDescription:
      "Member subscription renewals, turnstile biometric gate access integration, personal trainer scheduling, and supplement POS.",
    heroHeadline: "Automated Club Management & Member Access Software",
    overview:
      "Gymnasiums, wellness clubs, and sports complexes need automated membership billing and biometric access control to prevent unauthorized facility entry and streamline trainer bookings.",
    operationalChallenges: [
      "Members accessing facilities with expired memberships due to manual front-desk checks.",
      "Lost revenue from untracked personal trainer session packages.",
      "Disorganized member check-in queues during morning and evening rush hours.",
      "Supplement and shake bar revenue shrinkage without integrated billing.",
    ],
    keyWorkflows: [
      {
        title: "Biometric & Turnstile Gate Control",
        description: "Integration with supported fingerprint, RFID, or facial-recognition devices to check membership status at entry.",
      },
      {
        title: "Automated Recurring Membership Billing",
        description: "Monthly, quarterly, and annual subscription renewals with automated grace-period notifications.",
      },
      {
        title: "Trainer Scheduling & Workout Logs",
        description: "Member mobile app for booking personal training slots, class spots, and tracking body composition metrics.",
      },
      {
        title: "Integrated Supplement Store POS",
        description: "Quick-scan retail checkout for workout beverages, protein supplements, and branded apparel.",
      },
    ],
    applicableServices: [
      "Custom Software Development",
      "Mobile App Development",
      "POS & Billing Systems",
      "IT Infrastructure & Hardware Integration",
    ],
    relatedSolutions: [
      { title: "Gym & Fitness Club Management", href: "/solutions#gym-fitness-club-management" },
      { title: "POS & Billing Systems", href: "/solutions#pos-billing-systems" },
    ],
    referenceConcept: {
      title: "FitPulse Club OS",
      description: "Operational demonstration for multi-branch fitness centers combining turnstile biometric sync with recurring membership billing.",
      label: "Reference Implementation",
    },
  },
  {
    id: "agriculture-commodities",
    slug: "agriculture-commodities",
    name: "Agriculture & Commodities",
    shortDescription:
      "Weighbridge scale integration, crop procurement recording, cold storage batch management, and commission agent accounting.",
    heroHeadline: "Agricultural Commodity Procurement & Cold Storage Systems",
    overview:
      "Grain traders, commercial farms, cold storage operators, and commodity commission agents require reliable weighing scale integrations and lot accounting suited for rural connectivity conditions.",
    operationalChallenges: [
      "Weighbridge scale tampering and manual ticket manipulation during grain intake.",
      "Spoilage losses in cold storage due to poor batch temperature and duration tracking.",
      "Complex grower advances, interest deductions, and commission agent calculations.",
      "Poor cellular connectivity at rural storage yards leading to system downtime.",
    ],
    keyWorkflows: [
      {
        title: "Digital Weighbridge Hardware Integration",
        description: "Direct RS232/Ethernet serial scale reading eliminating manual weight entry tampering at grain silos.",
      },
      {
        title: "Cold Storage Lot & Room Allocation",
        description: "Rack-level bag tracking, temperature threshold alerts, and rental duration billing.",
      },
      {
        title: "Grower Ledger & Settlement Engine",
        description: "Comprehensive purchase bills deducting seed advances, transport deductions, moisture dockage, and net payment.",
      },
      {
        title: "Offline-First Sync Architecture",
        description: "Local SQLite caching ensuring uninterrupted weighbridge operations during rural internet outages.",
      },
    ],
    applicableServices: [
      "Custom Software Development",
      "ERP & Commodity Systems",
      "IT Infrastructure & Networking",
      "Cloud & Data Engineering",
    ],
    relatedSolutions: [
      { title: "Agriculture & Commodity Management", href: "/solutions#agriculture-commodity-management" },
      { title: "Enterprise ERP Solutions", href: "/solutions#erp-solutions" },
    ],
    referenceConcept: {
      title: "AgriScale Commodity Management",
      description: "Demonstration architecture for agricultural grain depots with digital weighbridge scale integration and farmer settlement vouchers.",
      label: "Reference Implementation",
    },
  },
];
