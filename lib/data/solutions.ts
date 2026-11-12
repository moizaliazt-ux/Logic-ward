export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  shortSummary: string;
  badge: string;
  targetIndustry: string;
  coreModules: string[];
  keyCapabilities: { title: string; detail: string }[];
  technicalHighlights: string[];
  workflowAdaptation: string;
}

export const solutionsData: SolutionItem[] = [
  {
    id: "erp-enterprise",
    slug: "erp-solutions",
    title: "Enterprise ERP Solutions",
    tagline: "Unified Financials, Inventory, Supply Chain, and Operations",
    category: "Enterprise Software",
    shortSummary: "Integrated enterprise platform replacing fragmented software with a single real-time operational backbone tailored to your business structure.",
    badge: "Enterprise Backbone",
    targetIndustry: "Manufacturing, Distribution, Large Retail, Construction",
    coreModules: [
      "General Ledger & Double-Entry Accounting",
      "Multi-Location Inventory & Warehouse Logistics",
      "Procurement, Vendor Management & Purchase Orders",
      "Sales Order Processing & Customer Invoicing",
      "Manufacturing BOM (Bill of Materials) & Job Costing",
      "Role-Based Approval Matrices & Audit Logs",
    ],
    keyCapabilities: [
      {
        title: "Real-Time Operational Visibility",
        detail: "Eliminate end-of-month surprises with live balance sheets, stock valuations, and cash flow tracking.",
      },
      {
        title: "Multi-Currency & Tax Compliance",
        detail: "Configured for local FBR/provincial taxes in Pakistan or international sales tax / VAT regimes.",
      },
      {
        title: "Strict Role-Based Security",
        detail: "Segment sensitive financial data with granular departmental permissions and immutable audit trails.",
      },
      {
        title: "Seamless API Integration",
        detail: "Connect effortlessly with banks, logistics couriers, e-commerce storefronts, and customs brokers.",
      },
    ],
    technicalHighlights: ["PostgreSQL / SQL Server", "Next.js Admin Console", "Docker Microservices", "Row-Level Multi-Tenancy"],
    workflowAdaptation: "No two businesses operate identically. We adapt workflow states, approval thresholds, custom chart of accounts, and reporting hierarchies to match your exact management structure.",
  },
  {
    id: "crm-pipeline",
    slug: "crm-systems",
    title: "Custom CRM & Pipeline Systems",
    tagline: "Track Inbound Leads, Accelerate Deals, and Retain Accounts",
    category: "Sales & Client Growth",
    shortSummary: "Tailored CRM architecture designed around your real deal stages, quotation workflows, client communication channels, and account renewals.",
    badge: "Revenue Operations",
    targetIndustry: "B2B Services, Real Estate, Consulting, Tech Agencies",
    coreModules: [
      "Inbound Lead Capture (Web, WhatsApp, Email, Meta Ads)",
      "Custom Kanban Deal Pipeline & Stage Progression",
      "Quotation & Proposal Generator with PDF Export",
      "Client Communication History & Shared Activity Log",
      "Automated Follow-up Reminders & Stalled Deal Alerts",
      "Sales Rep Activity Scorecards & Revenue Forecasting",
    ],
    keyCapabilities: [
      {
        title: "Omnichannel Lead Ingestion",
        detail: "Never lose an inquiry. Automatically capture incoming leads from web forms, WhatsApp, phone, and ad campaigns.",
      },
      {
        title: "Accelerated Proposal Delivery",
        detail: "Generate itemized estimates and proposals in minutes with pre-approved price lists and digital signatures.",
      },
      {
        title: "Clear Sales Accountability",
        detail: "Track sales rep activity, response velocity, and pipeline conversion rates with transparent visual dashboards.",
      },
      {
        title: "WhatsApp & Email Sync",
        detail: "Keep every customer interaction logged automatically in the contact timeline for complete institutional memory.",
      },
    ],
    technicalHighlights: ["Next.js App Router", "Tailwind CSS", "Redis Queue for Webhooks", "WhatsApp Cloud API Integration"],
    workflowAdaptation: "We customize custom fields, pipeline stages, commission calculations, and automated follow-up sequences to your sales cycle length.",
  },
  {
    id: "school-college",
    slug: "school-college-management-systems",
    title: "School & College Management Systems",
    tagline: "End-to-End Educational Administration and Student Lifecycle",
    category: "Education & Institutions",
    shortSummary: "Comprehensive campus platform covering student admissions, fee voucher generation, grading, attendance tracking, and parent communication portals.",
    badge: "Institutional Management",
    targetIndustry: "Schools, Colleges, Academies, Higher Education Institutes",
    coreModules: [
      "Online Student Admission & Document Verification",
      "Fee Voucher Generation with Bank & Mobile Wallet Integration",
      "Class Attendance Tracking with Biometric / App Check-in",
      "Exam Management, Grading Systems & Printable Report Cards",
      "Teacher Scheduling & Lesson Plan Repository",
      "Dedicated Parent Portal & Automated SMS / App Notifications",
    ],
    keyCapabilities: [
      {
        title: "Automated Fee Collection",
        detail: "Generate automated monthly challans with 1-Bill, Kuickpay, JazzCash, or bank barcode integration for instant reconciliation.",
      },
      {
        title: "Real-Time Parent Engagement",
        detail: "Keep parents updated with instant SMS or app notifications for unannounced absences, grades, and fee reminders.",
      },
      {
        title: "Exam & Report Card Generation",
        detail: "Easily compute grade point averages, class rankings, and customized report card templates with single-click printing.",
      },
      {
        title: "Paperless Campus Records",
        detail: "Maintain permanent digital student transcripts, disciplinary logs, and alumni directories securely in the cloud.",
      },
    ],
    technicalHighlights: ["Role-Based Portals (Admin, Teacher, Parent, Student)", "High-Volume PDF Generation", "SMS Gateway Integration"],
    workflowAdaptation: "Customized for semester vs annual academic calendars, grading scales, installment fee plans, and institutional scholarship structures.",
  },
  {
    id: "hrm-payroll",
    slug: "hrm-payroll-systems",
    title: "HRM & Payroll Management Systems",
    tagline: "Streamline People Operations, Attendance, and Tax-Compliant Payroll",
    category: "Workforce & Operations",
    shortSummary: "Centralized employee database with biometric attendance sync, multi-tier leave approval chains, and automated salary slip generation.",
    badge: "People & Compliance",
    targetIndustry: "Corporate Offices, Tech Companies, Retail Chains, Factories",
    coreModules: [
      "Digital Employee Profiles & Document Archiving",
      "Biometric Machine Integration & Geofenced Mobile Clock-in",
      "Leave Balance Tracking & Multi-Level Approval Chains",
      "Automated Monthly Payroll Calculation & Salary Slips",
      "Tax Deductions, EOBI, Provident Fund & Allowances",
      "Performance Review Cycles & Goal Setting",
    ],
    keyCapabilities: [
      {
        title: "Zero-Error Payroll Runs",
        detail: "Automatically calculate net salaries based on actual biometric attendance, overtime, approved leaves, and tax withholding.",
      },
      {
        title: "Biometric Hardware Sync",
        detail: "Pulls attendance logs directly from ZKTeco and IP biometric terminals across multiple branch offices into a single database.",
      },
      {
        title: "Self-Service Employee Portal",
        detail: "Staff can view salary slips, check remaining annual leave balances, and request time off from their phones.",
      },
      {
        title: "Tax & Statutory Compliance",
        detail: "Pre-configured rules for progressive income tax slabs, employee provident fund deductions, and audit reports.",
      },
    ],
    technicalHighlights: ["Biometric SDK Integration", "Encrypted Salary Data", "Scheduled Automated Payroll Batches"],
    workflowAdaptation: "Configured around your specific shift schedules, overtime policies, probation evaluation steps, and corporate allowance rules.",
  },
  {
    id: "inventory-stock",
    slug: "inventory-stock-management",
    title: "Inventory & Multi-Warehouse Systems",
    tagline: "Real-Time Stock Control, Barcoding, and Batch Tracking",
    category: "Supply Chain & Logistics",
    shortSummary: "Eliminate stockouts, shrinkage, and warehouse confusion with live inventory levels, automated purchase orders, and barcode scanning.",
    badge: "Supply Chain Control",
    targetIndustry: "Wholesalers, Distributors, Hardware Retail, Pharmaceutical",
    coreModules: [
      "Multi-Warehouse & Rack / Bin Location Tracking",
      "Barcode & QR Code Generation and Mobile Scanner App",
      "Batch Number & Expiry Date Management (FIFO / LIFO)",
      "Automated Reorder Level Alerts & Purchase Order Workflows",
      "Stock Transfer Between Warehouses & In-Transit Tracking",
      "Stock Audit Reconciliation & Damaged Goods Logging",
    ],
    keyCapabilities: [
      {
        title: "Accurate Real-Time Inventory",
        detail: "Know exactly what is in stock across every branch, warehouse, and transit vehicle at any given moment.",
      },
      {
        title: "Expiry & Batch Tracking",
        detail: "Critical for pharmaceuticals and food items: prevent losses by dispatching oldest batches first (FIFO) with expiry warnings.",
      },
      {
        title: "Rapid Mobile Barcode Scanning",
        detail: "Equip warehouse staff with Android barcode devices or phone scanners to receive, pick, and dispatch shipments with zero paper.",
      },
      {
        title: "Supplier Purchase Automation",
        detail: "Automatically trigger purchase orders to designated vendors when item inventory drops below defined safety stock thresholds.",
      },
    ],
    technicalHighlights: ["Offline-Capable Mobile Scanning", "Relational Inventory Ledger", "High-Throughput Concurrent Updates"],
    workflowAdaptation: "Tailored to your unit conversions (cases to pieces), minimum order quantities, warehouse zoning, and supplier lead times.",
  },
  {
    id: "pos-billing",
    slug: "pos-billing-systems",
    title: "POS & Billing Systems",
    tagline: "High-Speed Checkout, Fiscal Integration, and Daily Cash Auditing",
    category: "Retail & Hospitality",
    shortSummary: "Fast counter billing software engineered for retail shops, supermarkets, and restaurants with barcode scanning and thermal receipts.",
    badge: "Point of Sale",
    targetIndustry: "Supermarkets, Fashion Boutiques, Pharmacy, Cafes & Restaurants",
    coreModules: [
      "Sub-Second Barcode Cashier Checkout Interface",
      "Fiscal POS Integration (FBR POS Invoicing / Electronic Fiscal Devices)",
      "Multiple Payment Modes (Cash, Cards, Mobile QR, Store Credit)",
      "Thermal Receipt Printing & SMS / WhatsApp e-Receipts",
      "Daily Cash Drawer Opening / Closing Reconciliation",
      "Customer Loyalty Phone Lookup & Discount Campaigns",
    ],
    keyCapabilities: [
      {
        title: "Blazing Fast Checkout",
        detail: "Keep customer lines moving quickly with hotkey shortcuts, instant barcode scanning, and simple return processing.",
      },
      {
        title: "FBR POS & Fiscal Compliance",
        detail: "Direct certified fiscal integration generating compliant QR codes and real-time invoice transmission to tax authorities.",
      },
      {
        title: "Cash Drawer Governance",
        detail: "Prevent discrepancies with mandatory shift opening cash declarations, mid-day cash drops, and shift closing reports.",
      },
      {
        title: "Offline Standby Operation",
        detail: "Continue ringing up sales even if local internet disconnects; transactions cache locally and sync once internet is restored.",
      },
    ],
    technicalHighlights: ["ESC/POS Thermal Printing", "Local SQLite Cache for Zero Internet Downtime", "FBR Fiscal API Hook"],
    workflowAdaptation: "Tailored for retail scanning or restaurant table management (kitchen display systems, order tickets, and split bills).",
  },
  {
    id: "gym-membership",
    slug: "gym-membership-management",
    title: "Gym & Fitness Club Management",
    tagline: "Member Access Control, Recurring Billing, and Trainer Scheduling",
    category: "Health & Fitness",
    shortSummary: "Modern club management system with RFID / turnstile gate access, automated WhatsApp fee reminders, and trainer workout scheduling.",
    badge: "Club Operations",
    targetIndustry: "Gyms, Fitness Centers, Martial Arts Academies, Sports Clubs",
    coreModules: [
      "Member Registration & Subscription Package Customizer",
      "Turnstile & RFID Card / Biometric Gate Access Integration",
      "Automated Due Date Alerts via WhatsApp & SMS",
      "Personal Trainer Session Booking & Commission Split",
      "Locker & Asset Rental Management",
      "Daily Check-in Statistics & Peak Hour Analytics",
    ],
    keyCapabilities: [
      {
        title: "Turnstile Gate Enforcement",
        detail: "Prevent unauthorized entry. The turnstile gate automatically denies entry to members with unpaid past-due fees.",
      },
      {
        title: "Automated Renewal Follow-ups",
        detail: "Eliminate awkward manual collections. Members receive friendly WhatsApp reminders 3 days before subscription expiration.",
      },
      {
        title: "Trainer Scheduling & Payouts",
        detail: "Track personal training sessions conducted and calculate monthly trainer commission splits transparently.",
      },
      {
        title: "Digital Membership App",
        detail: "Members can view workout schedules, renew subscriptions, and check club operating hours on their mobile phones.",
      },
    ],
    technicalHighlights: ["TCP/IP Turnstile Controller Integration", "Automated SMS/WhatsApp Schedulers", "Member Portal"],
    workflowAdaptation: "Configured around your membership packages, freeze policies, personal trainer tiers, and locker assignment rules.",
  },
  {
    id: "agriculture-business",
    slug: "agriculture-business-management-systems",
    title: "Agriculture & Commodity Management",
    tagline: "Farm Procurement, Crop Yields, and Distributor Distribution",
    category: "Agri-Tech & Commodities",
    shortSummary: "Digital management software for corporate farms, commodity traders, and agrochemical distributors tracking inputs, harvests, and distribution.",
    badge: "Agri-Tech Systems",
    targetIndustry: "Commercial Farms, Commodity Traders, Fertilizer Distributors, Cold Storages",
    coreModules: [
      "Field & Crop Cycle Input Tracking (Seed, Fertilizer, Labor, Diesel)",
      "Harvest Yield Recording & Weighbridge Integration",
      "Storage & Silo / Cold Storage Temperature & Stock Logs",
      "Farmer Procurement & Advance Payment Ledgers",
      "Distributor Dispatch & Wholesale Invoicing",
      "Farm Machinery Maintenance & Fuel Consumption",
    ],
    keyCapabilities: [
      {
        title: "True Cost of Cultivation",
        detail: "Track every rupee spent per acre on diesel, fertilizer, labor, and water to understand exact profit margins per harvest.",
      },
      {
        title: "Weighbridge Automation",
        detail: "Connect digital scale weighbridges directly to the software to eliminate manual ticket tampering during harvest arrivals.",
      },
      {
        title: "Grower Advance Ledgers",
        detail: "Maintain transparent balances of seed/fertilizer advances given to contract growers and settle automatically upon crop delivery.",
      },
      {
        title: "Cold Storage & Silo Tracking",
        detail: "Manage commodity lot numbers, storage duration, shrinkage allowances, and release orders efficiently.",
      },
    ],
    technicalHighlights: ["Serial Port Weighbridge Integration", "Low-Bandwidth Rural Sync", "Ledger Accounting"],
    workflowAdaptation: "Customized for specific crops (wheat, cotton, rice, sugarcane, citrus) and tailored to local mandi wholesale pricing conventions.",
  },
  {
    id: "booking-workflow",
    slug: "booking-workflow-systems",
    title: "Booking, Appointment & Workflow Systems",
    tagline: "Multi-Staff Scheduling, Online Payments, and Smart Reminders",
    category: "Services & Healthcare",
    shortSummary: "Automated booking and scheduling engine for clinics, professional consultancies, repair services, and multi-staff appointment businesses.",
    badge: "Scheduling Engine",
    targetIndustry: "Medical Clinics, Law Practices, Salons, Car Care, Service Centers",
    coreModules: [
      "Client Self-Service Online Booking Calendar",
      "Multi-Doctor / Staff Shift Scheduling & Room Allocation",
      "Automated SMS & WhatsApp Appointment Confirmations",
      "Online Deposit & Pre-payment Gateway Integration",
      "Service Order Tracking & Job Status Updates",
      "Customer Service History & Digital Intake Forms",
    ],
    keyCapabilities: [
      {
        title: "Eliminate No-Shows",
        detail: "Reduce appointment no-shows by up to 70% with automated two-way WhatsApp confirmation and 24-hour reminder messages.",
      },
      {
        title: "Multi-Staff Calendar Sync",
        detail: "Google Calendar and Outlook two-way sync prevents double bookings across shared treatment rooms and staff schedules.",
      },
      {
        title: "Digital Intake Before Arrival",
        detail: "Patients or clients complete intake questions on their phones beforehand, saving front-desk administrative time.",
      },
      {
        title: "Job Order Status Tracking",
        detail: "For repair or custom service businesses: clients receive live status updates (Received, In-Progress, Ready for Pickup).",
      },
    ],
    technicalHighlights: ["CalDAV / Google Calendar Sync", "Twilio / WhatsApp Webhooks", "Stripe & Local Payment Gateways"],
    workflowAdaptation: "Configured around your buffer times between sessions, cancellation windows, deposit policies, and intake questionnaire fields.",
  },
  {
    id: "dashboards-bi",
    slug: "dashboards-business-intelligence",
    title: "Executive Dashboards & Business Intelligence",
    tagline: "Turn Fragmented Operational Data Into Clear Strategic Insight",
    category: "Analytics & Executive Intelligence",
    shortSummary: "Consolidate data from databases, accounting files, CRM, and ad platforms into clean, real-time KPI scorecards for executive decision-making.",
    badge: "Executive Insight",
    targetIndustry: "Holding Companies, Fast-Growing Startups, CFOs, Operations Directors",
    coreModules: [
      "Unified Data Warehouse / ETL Pipeline Setup",
      "Executive KPI Scorecard (Cash, Revenue, Margins, Burn Rate)",
      "Departmental Drill-Down Views (Sales, Operations, Inventory, Support)",
      "Automated Daily & Weekly Executive PDF Summaries via Email",
      "Role-Based Access Control & Department Data Sandboxing",
      "Custom Formula Metrics & Anomaly Detection Alerts",
    ],
    keyCapabilities: [
      {
        title: "One Version of the Truth",
        detail: "Stop debating which department's spreadsheet is accurate. Connect your core systems to a single verified reporting repository.",
      },
      {
        title: "Real-Time Anomaly Alerts",
        detail: "Get instant automated alerts when critical indicators fluctuate (e.g. unexpected spike in inventory write-offs or sudden sales drop).",
      },
      {
        title: "Board-Ready Visualizations",
        detail: "Generate beautifully styled, high-clarity charts ready for investor presentations and monthly management meetings.",
      },
      {
        title: "Scheduled Email Digests",
        detail: "Leadership receives a concise morning executive snapshot in their inbox without needing to log in to the system.",
      },
    ],
    technicalHighlights: ["ClickHouse / PostgreSQL", "Next.js Interactive Visualizations", "Tailored Metric Aggregators"],
    workflowAdaptation: "Customized to your proprietary financial formulas, reporting currencies, organizational structure, and operational benchmarks.",
  },
];

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return solutionsData.find((s) => s.slug === slug);
}
