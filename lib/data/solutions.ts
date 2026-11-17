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
  userRoles: { role: string; permissions: string }[];
  mainWorkflows: { title: string; steps: string[] }[];
  reportingDashboards: string[];
  integrationsDataMigration: {
    integrations: string[];
    migrationApproach: string;
  };
  securityAuditBackups: {
    accessControl: string;
    backupStrategy: string;
    auditLogging: string;
  };
  customizationBoundaries: string;
  implementationTraining: {
    deliverySchedule: string;
    phases: string[];
    trainingProvided: string;
  };
}

export const solutionsData: SolutionItem[] = [
  {
    id: "erp-enterprise",
    slug: "erp-solutions",
    title: "Enterprise ERP Solutions",
    tagline: "Unified Financials, Inventory, Supply Chain, and Operations",
    category: "Enterprise Software",
    shortSummary: "An integrated enterprise platform planned around your business structure, data sources, and operational workflows.",
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
        title: "Operational Reporting",
        detail: "Bring financial, inventory, and cash-flow data into reports with refresh behavior defined by source-system integrations.",
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
        detail: "Connect with banks, logistics couriers, e-commerce storefronts, and customs brokers.",
      },
    ],
    technicalHighlights: ["PostgreSQL / SQL Server", "Next.js Admin Console", "Docker Microservices", "Row-Level Multi-Tenancy"],
    workflowAdaptation: "No two businesses operate identically. We adapt workflow states, approval thresholds, custom chart of accounts, and reporting hierarchies to match your exact management structure.",
    userRoles: [
      { role: "Executive & CFO", permissions: "Full fiscal reporting, cash-flow visibility, approval of high-value POs." },
      { role: "Department Head", permissions: "Budget management, requisition authoring, team approval gates." },
      { role: "Warehouse Supervisor", permissions: "Goods receipt notes (GRN), inter-depot transfers, stock adjustment requests." },
      { role: "Procurement Officer", permissions: "Vendor quote comparison, purchase order creation, vendor ledger review." },
      { role: "Billing Clerk", permissions: "Sales order intake, invoice generation, payment receipt logging." },
    ],
    mainWorkflows: [
      {
        title: "Procure-to-Pay Lifecycle",
        steps: ["Department Requisition", "Multi-Tier Approval", "Purchase Order Dispatch", "Warehouse GRN Verification", "Accounts Payable Settlement"],
      },
      {
        title: "Order-to-Cash Lifecycle",
        steps: ["Customer Quotation", "Sales Order Confirmation", "Warehouse Stock Allocation", "Dispatch Manifest & Gate Pass", "Invoice & General Ledger Posting"],
      },
    ],
    reportingDashboards: [
      "Executive Balance Sheet and Profit & Loss views with data refresh behavior defined during design",
      "Aged Receivables and Payables with DSO tracking",
      "Slow-Moving and Critical Stock Reorder Alerts",
      "Departmental Expense versus Budget Variance",
    ],
    integrationsDataMigration: {
      integrations: ["Direct Bank Statement API / MT940", "Courier Airway Bill (AWB) APIs", "Fiscal Printer / FBR POS Sandbox", "Third-Party E-Commerce (Shopify/WooCommerce)"],
      migrationApproach: "Phased data migration: Chart of accounts and opening balances cleaned via staging scripts; historical vendor/customer directories sanitized and reconciled prior to cutover.",
    },
    securityAuditBackups: {
      accessControl: "Granular Role-Based Access Control (RBAC) with row-level tenant isolation.",
      backupStrategy: "Automated daily encrypted database dumps with 3-2-1 backup rotation across cold cloud storage.",
      auditLogging: "Immutable append-only transaction log recording user ID, IP address, and previous state for all ledger updates.",
    },
    customizationBoundaries: "Core financial double-entry ledger enforces standard accounting invariants. Workflow approval tiers, custom document print templates, and reporting dashboards are fully customizable.",
    implementationTraining: {
      deliverySchedule: "Set after discovery, requirements review, and data-migration assessment.",
      phases: ["Discovery & Chart of Accounts Alignment", "System Configuration & Sandboxing", "Historical Data Migration", "User Acceptance Testing (UAT)", "Cutover & On-Site Go-Live Support"],
      trainingProvided: "Role-specific training sessions with recorded video walkthroughs and administrator technical documentation.",
    },
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
        detail: "Automatically capture incoming inquiries from web forms, WhatsApp, phone, and ad campaigns.",
      },
      {
        title: "Accelerated Proposal Delivery",
        detail: "Generate itemized estimates and proposals with pre-approved price lists and digital signatures.",
      },
      {
        title: "Deal Stage Governance",
        detail: "Enforce required qualification fields before reps advance opportunities across funnel stages.",
      },
      {
        title: "Executive Revenue Forecasting",
        detail: "Weighted pipeline forecasting based on historical deal velocities and realistic closing probabilities.",
      },
    ],
    technicalHighlights: ["TypeScript & Next.js", "PostgreSQL", "WhatsApp Webhooks", "OAuth Email Sync"],
    workflowAdaptation: "Customized around your exact lead qualification criteria, quotation approval limits, salesperson commission rules, and communication channels.",
    userRoles: [
      { role: "VP of Sales / Commercial Director", permissions: "Complete pipeline oversight, quota allocation, discounting overrides, commission approvals." },
      { role: "Sales Manager", permissions: "Team deal reassignment, stage progression review, team activity monitoring." },
      { role: "Account Executive / Rep", permissions: "Assigned deal management, quotation authoring, activity logging, client contact updates." },
      { role: "Customer Success Lead", permissions: "Post-close onboarding handover, support ticket review, account health score tracking." },
    ],
    mainWorkflows: [
      {
        title: "Inbound Lead Qualification & Handoff",
        steps: ["Channel Ingestion", "Automated Deduplication", "BANT Scoring & Assignment", "Discovery Call Booking", "Opportunity Creation"],
      },
      {
        title: "Quotation & Deal Closure",
        steps: ["Scope Requirement Intake", "Itemized Proposal Drafting", "Manager Discount Approval", "Digital Client Review", "Won Contract Handoff to Operations"],
      },
    ],
    reportingDashboards: [
      "Weighted Pipeline Value by Stage and Quarter",
      "Sales Rep Conversion Rates and Stalled Deal Warnings",
      "Lead Channel Attribution and Customer Acquisition Cost (CAC) Estimates",
      "Average Sales Cycle Length and Velocity by Deal Size",
    ],
    integrationsDataMigration: {
      integrations: ["WhatsApp Cloud API", "Google Workspace & Office 365 Email/Calendar", "Meta Lead Ads Webhook", "ERP Billing Trigger"],
      migrationApproach: "CSV/Excel contact and opportunity data cleansing, mapping custom fields and deduplicating account records before importing to relational tables.",
    },
    securityAuditBackups: {
      accessControl: "Departmental and territory-based record ownership boundaries.",
      backupStrategy: "Nightly automated cloud snapshots with 30-day point-in-time recovery.",
      auditLogging: "Full change-history tracking for deal values, stage transitions, and client contact information.",
    },
    customizationBoundaries: "Tailored to your sales cycle. Custom deal stages, qualification rules, and document layouts are adapted to your business model.",
    implementationTraining: {
      deliverySchedule: "Set after discovery, requirements review, and integration assessment.",
      phases: ["Sales Process Mapping", "Pipeline & Quotation Template Setup", "Historical Contact Import", "Sales Team Training & Role-play", "Go-Live"],
      trainingProvided: "Hands-on sales rep coaching, manager pipeline review workflows, and standard operating procedure (SOP) documentation.",
    },
  },
  {
    id: "school-college",
    slug: "school-college-management",
    title: "School & College Management Systems",
    tagline: "Admissions, Fee Billing, Examinations, and Campus Administration",
    category: "Education Software",
    shortSummary: "Comprehensive academic platform unifying student records, fee collection, teacher timetables, attendance, and parent communication.",
    badge: "Campus Administration",
    targetIndustry: "K-12 Schools, Colleges, Higher Education, Training Institutes",
    coreModules: [
      "Student Information System (SIS) & Enrollment",
      "Automated Fee Challan Generation & Bank Reconciliation",
      "Attendance Tracking (Biometric, RFID & Mobile)",
      "Examination, Grading & Report Card Engine",
      "Teacher Workload & Timetable Scheduling",
      "Parent & Student Mobile Communication Portal",
    ],
    keyCapabilities: [
      {
        title: "Automated Fee Reconciliation",
        detail: "Generate term fee challans with one click. Reconcile bank payments automatically via bank API or file imports.",
      },
      {
        title: "Effortless Report Cards",
        detail: "Calculate GPAs, percentage distributions, class ranks, and teacher remarks automatically.",
      },
      {
        title: "Parent Notifications",
        detail: "Configure SMS and WhatsApp notices for attendance, fee reminders, and school announcements, subject to provider support.",
      },
      {
        title: "Multi-Campus Administration",
        detail: "Consolidate multiple branches under a single central administration view with branch-level operational autonomy.",
      },
    ],
    technicalHighlights: ["Next.js Multi-Tenant", "PostgreSQL", "SMS Gateway Integration", "PDF Generation Engine"],
    workflowAdaptation: "Configured around your school's academic calendar, term structure, fee breakdown (tuition, transport, lab fees), and grading conventions.",
    userRoles: [
      { role: "Campus Principal / Director", permissions: "Institutional analytics, fee collection overview, staff evaluations, policy broadcast." },
      { role: "Academic Coordinator", permissions: "Timetable allocation, curriculum tracking, exam syllabus management, grade verification." },
      { role: "Class Teacher", permissions: "Daily attendance marking, gradebook entry, student disciplinary and behavioral notes." },
      { role: "Accounts Office", permissions: "Challan generation, scholarship/discount authoring, bank statement reconciliation, fine waivers." },
      { role: "Parent / Student", permissions: "Fee status review, online card/challan payment, report card download, attendance calendar." },
    ],
    mainWorkflows: [
      {
        title: "Term Fee Collection & Reconciliation",
        steps: ["Fee Structure Configuration", "Batch Challan Generation", "Bank Branch Intake / Online Settlement", "Auto-Reconciliation", "Late Fee Notification Dispatch"],
      },
      {
        title: "Exam & Result Declaration",
        steps: ["Exam Schedule Mapping", "Teacher Gradebook Submission", "Coordinator Verification", "Report Card PDF Generation", "Parent Portal Publishing"],
      },
    ],
    reportingDashboards: [
      "Daily Campus Attendance Statistics by Class and Section",
      "Term Fee Collection Efficiency and Outstanding Arrears by Family",
      "Historical Subject Performance and GPA Trends",
      "Teacher Workload and Classroom Utilization Rates",
    ],
    integrationsDataMigration: {
      integrations: ["1Link / Bank APIs for Fee Challan Payments", "Biometric Fingerprint / Facial Scanners", "Bulk SMS / WhatsApp Notification Gateways"],
      migrationApproach: "Batch intake of student demographic records, family linkage structures, and historical transcript archives from Excel or legacy systems.",
    },
    securityAuditBackups: {
      accessControl: "Family-level and classroom-level security boundaries shielding student personal records.",
      backupStrategy: "Continuous transaction archiving with scheduled weekly disaster recovery verification.",
      auditLogging: "Traceable change records for all fee adjustments, grade modifications, and attendance overrides.",
    },
    customizationBoundaries: "Grading formulas, fee challan templates, fee categories, and parent notification rules are fully tailored.",
    implementationTraining: {
      deliverySchedule: "Set after discovery, requirements review, and data-migration assessment.",
      phases: ["Academic Structure & Fee Policy Setup", "Staff Data Ingestion", "Teacher & Admin Workshops", "Parent Communication Launch", "Go-Live"],
      trainingProvided: "Dedicated workshops for accounts and teaching staff, with quick-reference guides for parents and guardians.",
    },
  },
  {
    id: "hrm-payroll",
    slug: "hrm-payroll-platforms",
    title: "HRM, Attendance & Payroll Platforms",
    tagline: "Employee Lifecycle, Biometric Time-Tracking, and Compliance",
    category: "Human Capital Software",
    shortSummary: "Integrated HR software combining biometric attendance, leave policies, automated salary sheets, tax deductions, and employee self-service.",
    badge: "Workforce Operations",
    targetIndustry: "Corporate Enterprises, Factories, Retail Chains, Software Houses",
    coreModules: [
      "Employee Directory & Digital Document Repository",
      "Biometric Machine Integration (ZKTeco, Realtime, Face Recognition)",
      "Multi-Tier Leave Approval Engine",
      "Automated Monthly Payroll & Payslip Generation",
      "Tax, EOBI, Provident Fund & Advance Deductions",
      "Employee Self-Service (ESS) Mobile Portal",
    ],
    keyCapabilities: [
      {
        title: "One-Click Payroll Processing",
        detail: "Calculate net salaries in seconds, incorporating biometric hours, approved leaves, overtime, and statutory deductions.",
      },
      {
        title: "Multi-Shift & Overtime Rules",
        detail: "Configured for complex industrial shifts, night allowances, grace periods, and holiday compensation policies.",
      },
      {
        title: "Salary Advance & Loan Tracking",
        detail: "Track employee loan balances and automatically deduct monthly installments directly from payroll.",
      },
      {
        title: "Digital Payslip Distribution",
        detail: "Employees receive password-protected PDF payslips via email or employee portal automatically upon approval.",
      },
    ],
    technicalHighlights: ["ZKLib Biometric Protocol", "PostgreSQL", "Automated Payroll Calc Engine", "Encrypted PDF Delivery"],
    workflowAdaptation: "Configured to your organization's exact shift schedules, leave types (annual, sick, casual), tax slabs, and statutory deductions.",
    userRoles: [
      { role: "Head of HR", permissions: "Policy configuration, salary band management, disciplinary records, final payroll approval." },
      { role: "HR Executive", permissions: "Employee onboarding, document verification, biometric device pairing, attendance reconciliation." },
      { role: "Line Manager", permissions: "Team leave review, overtime approvals, performance milestone appraisals." },
      { role: "Finance Officer", permissions: "Payroll bank transfer dispatch, tax deduction ledger review, EOBI/PF compliance filing." },
      { role: "Employee", permissions: "Self-service leave requests, attendance history view, monthly payslip download." },
    ],
    mainWorkflows: [
      {
        title: "Monthly Payroll Processing",
        steps: ["Biometric Sync & Cutoff", "Leave & Overtime Reconciliation", "Deductions & Advance Calculation", "Finance Audit Review", "Bank File Generation & Payslip Dispatch"],
      },
      {
        title: "Leave Application & Approval",
        steps: ["Employee ESS Submission", "Line Manager Review", "HR Balance Check", "Automated Attendance Adjustment"],
      },
    ],
    reportingDashboards: [
      "Departmental Headcount, Turnover, and Retention Metrics",
      "Monthly Overtime Costs and Absenteeism Rates",
      "Salary Sheet Breakdown by Department and Pay Grade",
      "Provident Fund and Tax Deduction Summary Reports",
    ],
    integrationsDataMigration: {
      integrations: ["Biometric Device Ethernet/IP Sync", "Commercial Bank Bulk Salary Payment Files", "Corporate Active Directory / LDAP"],
      migrationApproach: "Importing active staff directories, employment agreements, opening leave quotas, and historical salary structures.",
    },
    securityAuditBackups: {
      accessControl: "Role-based confidentiality guards preventing unauthorized visibility of executive compensation.",
      backupStrategy: "Encrypted off-site storage of all employee identity files and payroll ledgers.",
      auditLogging: "Comprehensive logging of all salary edits, attendance adjustments, and tax recalculations.",
    },
    customizationBoundaries: "Salary structures, shift rules, allowance categories, and approval hierarchies are fully tailored.",
    implementationTraining: {
      deliverySchedule: "Set after discovery, requirements review, and integration assessment.",
      phases: ["HR Policy & Salary Rule Definition", "Biometric Network Configuration", "Employee Record Migration", "HR & Finance Dry-Run", "Go-Live"],
      trainingProvided: "Complete training for HR administrators and short explainer videos for employee self-service features.",
    },
  },
  {
    id: "inventory-stock",
    slug: "inventory-warehouse-management",
    title: "Multi-Warehouse Inventory Control",
    tagline: "Stock Tracking, Batch Expiry, and Inter-Branch Transfers",
    category: "Supply Chain & Logistics",
    shortSummary: "Plan multi-depot stock records, barcode workflows, reorder rules, and batch tracking around operational requirements.",
    badge: "Supply Chain",
    targetIndustry: "Wholesale Distributors, FMCG, Electronics, Retail Chains",
    coreModules: [
      "Multi-Depot & Bin-Level Stock Management",
      "Barcode & QR Code Printing / Scanner Support",
      "Inter-Warehouse Transfer Orders & Dispatch Manifests",
      "Batch, Lot & Expiry Date Management",
      "Automated Reorder Alerts & Minimum Stock Thresholds",
      "Physical Stock Audit & Discrepancy Adjustment Logs",
    ],
    keyCapabilities: [
      {
        title: "Inventory Records Across Locations",
        detail: "Track stock across warehouses, transit hubs, and retail outlets with synchronization behavior based on the selected integrations.",
      },
      {
        title: "Inventory Audit Trail",
        detail: "Record inventory changes with authorization and transaction history to support reconciliation and review.",
      },
      {
        title: "Batch & FIFO Management",
        detail: "Prioritize dispatch of oldest stock (First-In, First-Out) and track batch lot numbers for regulatory compliance.",
      },
      {
        title: "Smart Procurement Reorders",
        detail: "Automated alerts when stock drops below threshold, factoring in vendor lead times.",
      },
    ],
    technicalHighlights: ["PostgreSQL Transactional Locks", "Hardware Barcode Integration", "Redis Event Sync"],
    workflowAdaptation: "Adapted to your warehouse layout (aisles, racks, bins), unit-of-measure conversions (pieces, cartons, pallets), and dispatch rules.",
    userRoles: [
      { role: "Supply Chain Director", permissions: "Inventory valuation oversight, dead stock write-off authorization, master SKU management." },
      { role: "Warehouse Manager", permissions: "Dispatch scheduling, bin allocation, stock adjustment authoring, inter-depot manifests." },
      { role: "Receiving Clerk", permissions: "PO matching, physical count entry, GRN creation, barcode tag printing." },
      { role: "Dispatch Picker", permissions: "Pick-list scanning, packaging validation, gate pass verification." },
    ],
    mainWorkflows: [
      {
        title: "Stock Intake & Bin Assignment",
        steps: ["Purchase Order Verification", "Physical Goods Count", "Defect Quarantine Check", "GRN System Intake", "Bin Location Placement"],
      },
      {
        title: "Inter-Warehouse Transfer",
        steps: ["Transfer Request Auth", "Source Warehouse Pick & Pack", "Transit Manifest Dispatch", "Destination Receipt & Verification"],
      },
    ],
    reportingDashboards: [
      "Stock Aging Analysis and Dead Inventory Reports",
      "Inventory Turnover Ratio (ITR) by Category and SKU",
      "Fast-Moving Item Run-Rate and Stockout Risk Forecast",
      "Warehouse Shrinkage and Discrepancy Variance History",
    ],
    integrationsDataMigration: {
      integrations: ["Handheld Barcode & Zebra Thermal Printers", "ERP General Ledger Synchronization", "E-Commerce Stock Sync Webhooks"],
      migrationApproach: "Physical stock audit intake, SKU master normalization, barcode assignment, and opening valuation import.",
    },
    securityAuditBackups: {
      accessControl: "Location-restricted operational access ensuring personnel only modify assigned depot inventory.",
      backupStrategy: "Hourly delta transaction replication with daily complete system snapshots.",
      auditLogging: "Permanent transaction tracking for every item received, moved, adjusted, or dispatched.",
    },
    customizationBoundaries: "Warehouse bin structures, barcode symbologies, approval thresholds, and unit conversions are customized.",
    implementationTraining: {
      deliverySchedule: "Set after discovery, requirements review, and data-migration assessment.",
      phases: ["Depot Layout & SKU Taxonomy Design", "Hardware Scanner Pairing", "Initial Stock Audit Intake", "Warehouse Floor Rehearsals", "Go-Live"],
      trainingProvided: "Hands-on floor training for warehouse operators with thermal barcode setup guides.",
    },
  },
  {
    id: "pos-billing",
    slug: "pos-billing-systems",
    title: "POS & Billing Systems",
    tagline: "Retail Checkout, Fiscal Invoicing, and Stock Coordination",
    category: "Retail Operations",
    shortSummary: "Point-of-sale workflows for retail checkout, barcode scanning, thermal printing, and fiscal integration requirements.",
    badge: "Retail Operations",
    targetIndustry: "Supermarkets, Fashion Boutiques, Pharmacies, Electronics Stores",
    coreModules: [
      "Barcode Scanning & Retail Checkout",
      "Split Payment Tenders (Cash, Cards, Digital Wallets)",
      "Thermal Receipt Printing & SMS/WhatsApp Receipts",
      "Daily Cash Register Opening / Closing Reconciliations",
      "Customer Loyalty Points & Promotional Discounts",
      "Fiscal / Tax Regulatory Integration",
    ],
    keyCapabilities: [
      {
        title: "Checkout Workflow",
        detail: "Configure keyboard shortcuts, barcode readers, and tender options to fit the checkout process and selected hardware.",
      },
      {
        title: "Cash Drawer Accountability",
        detail: "Support reconciliation with shift opening float checks, mid-shift cash drops, and end-of-day counts.",
      },
      {
        title: "Offline Transaction Buffering",
        detail: "Continue ringing up sales during internet outages; transactions synchronize automatically when connection returns.",
      },
      {
        title: "Customer Loyalty & Promotions",
        detail: "Run buy-one-get-one promotions, category discounts, and loyalty point redemptions effortlessly.",
      },
    ],
    technicalHighlights: ["Offline SQLite Buffering", "Thermal Printer Protocols (ESC/POS)", "Fiscal Tax API Integration"],
    workflowAdaptation: "Tailored to your product variants (sizes, colors, expiry dates), tax rules, and receipt formatting.",
    userRoles: [
      { role: "Store Manager", permissions: "Cash drawer closing audits, price override authorizations, return approvals, shift assignments." },
      { role: "Cashier", permissions: "Item scanning, discount application (within pre-set limits), split tender processing, receipt generation." },
      { role: "Inventory Supervisor", permissions: "Shelf stock replenishment, store damaged goods write-offs, store transfer intake." },
    ],
    mainWorkflows: [
      {
        title: "Retail Counter Checkout",
        steps: ["Barcode Scan / Quick Search", "Loyalty Card Lookup", "Promotional Calculation", "Payment Tender Split", "Receipt Printing & Drawer Release"],
      },
      {
        title: "Shift Closeout & Cash Balancing",
        steps: ["Register Lockout", "Blind Cash Drawer Count", "System Tender Reconciliation", "Manager Variance Review", "Deposit Slip Export"],
      },
    ],
    reportingDashboards: [
      "Hourly Sales Velocity and Counter Traffic Breakdown",
      "Top-Selling SKUs by Revenue and Gross Margin",
      "Cashier Speed and Register Shortage/Overage History",
      "Promotional Discount Utilization and Loyalty Liability",
    ],
    integrationsDataMigration: {
      integrations: ["ESC/POS Thermal Receipt Printers", "Payment Terminal (POS EDC Machines)", "Fiscal Government Tax Gateway"],
      migrationApproach: "Product catalog mapping with barcode indexes, price tier lists, and tax bracket assignments.",
    },
    securityAuditBackups: {
      accessControl: "Manager approval locks on item voiding, returns, and manual discounts.",
      backupStrategy: "Continuous cloud synchronization of sales transactions with local failover buffering.",
      auditLogging: "Detailed records of all voided lines, drawer open events without sale, and price overrides.",
    },
    customizationBoundaries: "Receipt branding, custom tax calculation engines, and barcode scanner mappings are tailored.",
    implementationTraining: {
      deliverySchedule: "Set after discovery, requirements review, and rollout assessment.",
      phases: ["Hardware Testing & Integration", "Catalog & Barcode Import", "Cashier Training & Mock Shifts", "Pilot Branch Testing", "Full Branch Rollout"],
      trainingProvided: "Short cashier quick-reference cards and manager cash drawer balance training.",
    },
  },
  {
    id: "gym-membership",
    slug: "gym-fitness-club-management",
    title: "Gym & Fitness Club Management",
    tagline: "Biometric Turnstile Access, Memberships, and Personal Training",
    category: "Health & Fitness",
    shortSummary: "Automated club administration combining biometric turnstile gate access, membership renewals, trainer scheduling, and supplement store billing.",
    badge: "Club Administration",
    targetIndustry: "Gyms, Crossfit Boxes, Sports Complexes, Wellness Clubs",
    coreModules: [
      "Biometric Turnstile & Access Gate Integration",
      "Recurring Membership Subscription & Renewal Engine",
      "Personal Trainer Session Packages & Commission Tracking",
      "Member Mobile App (Attendance, Workouts, Payments)",
      "Shake Bar & Supplement Store POS Integration",
      "Locker Assignment & Equipment Maintenance Tracking",
    ],
    keyCapabilities: [
      {
        title: "Stop Free Entry Leakage",
        detail: "Biometric turnstiles automatically lock out expired accounts—preventing unauthorized entry.",
      },
      {
        title: "Automated Renewal Follow-ups",
        detail: "Configurable WhatsApp reminders can include payment links ahead of membership expiry.",
      },
      {
        title: "Trainer Commission Tracking",
        detail: "Automatically calculate trainer payout commissions based on completed verified sessions.",
      },
      {
        title: "Integrated Shake Bar Billing",
        detail: "Members purchase supplements or energy drinks on credit against their account or via quick POS checkout.",
      },
    ],
    technicalHighlights: ["TCP/IP Turnstile Controller Protocol", "WhatsApp Gateway Integration", "Next.js Mobile PWA"],
    workflowAdaptation: "Configured around your membership packages (monthly, annual, off-peak), trainer commission splits, and facility opening hours.",
    userRoles: [
      { role: "Club Owner / General Manager", permissions: "Financial performance overview, package pricing, staff payroll approvals." },
      { role: "Front Desk Officer", permissions: "Member check-in, package enrollment, membership fee intake, locker assignment." },
      { role: "Personal Trainer", permissions: "Session schedule view, client attendance confirmation, workout note entry." },
      { role: "Club Member", permissions: "Membership status review, workout logging, session package booking, digital payment." },
    ],
    mainWorkflows: [
      {
        title: "Member Enrollment & Gate Provisioning",
        steps: ["Profile Intake", "Package Selection", "Fee Payment & Receipt", "Biometric Fingerprint/Face Registration", "Turnstile Access Provisioning"],
      },
      {
        title: "Renewal & Access Lifecycle",
        steps: ["Automated Expiry Warning (Day -7)", "Payment Submission", "Access Expiry Extension", "Automated Turnstile Grace Period Cutoff"],
      },
    ],
    reportingDashboards: [
      "Peak Facility Attendance Hours and Utilization Heatmaps",
      "Membership Retention and Churn Rates by Cohort",
      "Personal Trainer Session Completion and Revenue Breakdown",
      "Supplement Bar Sales and Margin Contribution",
    ],
    integrationsDataMigration: {
      integrations: ["TCP/IP Biometric Turnstiles & Magnetic Door Strikes", "WhatsApp Cloud Messaging", "Credit Card / Online Payment Gateways"],
      migrationApproach: "Migrating existing member demographic profiles, active package dates, and remaining PT sessions.",
    },
    securityAuditBackups: {
      accessControl: "Strict biometric access rules preventing credential sharing across patrons.",
      backupStrategy: "Daily encrypted cloud backups of member rosters and financial registers.",
      auditLogging: "Complete historical entry timestamps for every member and visitor turnstile scan.",
    },
    customizationBoundaries: "Turnstile gate models, membership packages, family discounts, and class schedules are customized.",
    implementationTraining: {
      deliverySchedule: "Set after discovery, requirements review, and integration assessment.",
      phases: ["Hardware Gate Wiring & IP Config", "Membership Structure Setup", "Front-Desk Staff Training", "Member Intake Pilot", "Go-Live"],
      trainingProvided: "Operational manuals for reception staff and hardware troubleshooting guides.",
    },
  },
  {
    id: "agriculture-business",
    slug: "agriculture-commodity-management",
    title: "Agriculture & Commodity Management",
    tagline: "Weighbridge Scale Integration, Crop Procurement, and Grower Accounting",
    category: "Agri-Tech & Commodities",
    shortSummary: "Agricultural management system designed for grain trading, cold storage, cotton ginning, and grower advances with weighbridge integration.",
    badge: "Agri-Operations",
    targetIndustry: "Grain Traders, Flour Mills, Cotton Gins, Cold Storage, Commercial Farms",
    coreModules: [
      "Digital Weighbridge Scale Integration (RS232/Serial/Network)",
      "Grower / Farmer Procurement Invoicing & Advance Deduction",
      "Commodity Batch & Silo Quality Grading (Moisture, Impurities)",
      "Cold Storage Lot, Room & Rack Duration Billing",
      "Commission Agent (Arthi) Accounts & Commission Slips",
      "Low-Bandwidth Offline Data Caching for Rural Depots",
    ],
    keyCapabilities: [
      {
        title: "True Cost of Cultivation",
        detail: "Track operational expenses per acre on diesel, fertilizer, labor, and water to understand exact harvest margins.",
      },
      {
        title: "Weighbridge Automation",
        detail: "Connect compatible digital scale weighbridges to record weights and support review of harvest intake tickets.",
      },
      {
        title: "Grower Advance Ledgers",
        detail: "Maintain transparent balances of seed/fertilizer advances given to contract growers and settle automatically on crop delivery.",
      },
      {
        title: "Cold Storage & Silo Tracking",
        detail: "Manage commodity lot numbers, storage duration, shrinkage allowances, and release orders efficiently.",
      },
    ],
    technicalHighlights: ["Serial Port Weighbridge Integration", "Low-Bandwidth Rural Sync", "Ledger Accounting"],
    workflowAdaptation: "Customized for specific crops (wheat, cotton, rice, sugarcane, citrus) and tailored to local mandi wholesale pricing conventions.",
    userRoles: [
      { role: "Depot Director / Mill Owner", permissions: "Overall procurement volume review, daily commodity buying price approval, grower settlement auth." },
      { role: "Weighbridge Operator", permissions: "Vehicle gross weight logging, tare weight calculation, digital ticket printing." },
      { role: "Quality Inspector", permissions: "Moisture content testing, dockage/impurity percentage entry, grade classification." },
      { role: "Accounts Lead", permissions: "Farmer purchase bill generation, input advance deduction, net payment disbursement." },
    ],
    mainWorkflows: [
      {
        title: "Commodity Intake & Settlement",
        steps: ["Truck Gross Weighment", "Quality Lab Sampling", "Truck Tare Weighment", "Net Commodity Calculation", "Deductions & Farmer Voucher Issuance"],
      },
      {
        title: "Cold Storage Room Allocation",
        steps: ["Lot Tagging", "Room & Rack Placement", "Temperature Log Monitoring", "Rental Duration Invoicing", "Delivery Order Release"],
      },
    ],
    reportingDashboards: [
      "Daily Commodity Inflow by Variety and Supplier",
      "Average Moisture Dockage and Quality Grading Deductions",
      "Grower Loan and Fertilizer Advance Outstanding Balances",
      "Cold Storage Space Utilization and Stock Longevity",
    ],
    integrationsDataMigration: {
      integrations: ["RS232 / Ethernet Weighbridge Indicator Scales", "Direct Thermal Ticket Printers", "Local Mandi Accounting Ledgers"],
      migrationApproach: "Importing grower registries, supplier opening balances, and warehouse storage locations.",
    },
    securityAuditBackups: {
      accessControl: "Weighbridge scale reading is locked to hardware ports preventing manual weight overrides.",
      backupStrategy: "Local SQLite database failover with background cloud synchronization when internet restores.",
      auditLogging: "Unchangeable transaction tickets recording vehicle registration, gross weight, and inspector ID.",
    },
    customizationBoundaries: "Weighbridge protocols, crop dockage formulas, and seasonal pricing models are customized.",
    implementationTraining: {
      deliverySchedule: "Set after discovery, requirements review, and data-migration assessment.",
      phases: ["Scale Hardware Serial Interfacing", "Crop Quality Formula Configuration", "Depot Weighbridge Operator Coaching", "Go-Live"],
      trainingProvided: "Direct on-site operator training suited for rural facility staff.",
    },
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
        title: "Appointment Reminders",
        detail: "An optional appointment-confirmation and reminder workflow can be assessed for the selected messaging provider; no change in attendance is implied.",
      },
      {
        title: "Multi-Staff Calendar Sync",
        detail: "Google Calendar and Outlook two-way sync prevents double bookings across shared rooms and staff schedules.",
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
    technicalHighlights: ["CalDAV / Google Calendar Sync", "Twilio / WhatsApp Webhooks", "Payment Gateways"],
    workflowAdaptation: "Configured around your buffer times between sessions, cancellation windows, deposit policies, and intake questionnaire fields.",
    userRoles: [
      { role: "Clinic / Center Manager", permissions: "Staff availability management, service pricing, cancellation policy enforcement." },
      { role: "Practitioner / Specialist", permissions: "Personal appointment calendar view, consultation notes entry, follow-up scheduling." },
      { role: "Front Desk Coordinator", permissions: "Phone intake booking, patient arrival check-in, payment logging." },
      { role: "Client / Patient", permissions: "Self-service booking, intake form completion, digital rescheduling." },
    ],
    mainWorkflows: [
      {
        title: "Online Client Appointment Flow",
        steps: ["Service & Specialist Selection", "Available Time Slot Pick", "Digital Intake Form", "Deposit Payment", "WhatsApp Confirmation Dispatch"],
      },
      {
        title: "Repair / Job Order Status Tracking",
        steps: ["Item Drop-off & Diagnostics", "Estimate Approval", "Technician Work Order", "Quality Check", "WhatsApp Ready-for-Pickup Notification"],
      },
    ],
    reportingDashboards: [
      "Daily Specialist Utilization and Room Occupancy",
      "Appointment Cancellation and No-Show Rates",
      "Revenue Generated by Service Category and Staff Member",
      "Average Job Completion Turnaround Time",
    ],
    integrationsDataMigration: {
      integrations: ["Google Calendar / Microsoft 365 Sync", "WhatsApp Cloud Messaging", "Payment Gateways (Stripe / Local Providers)"],
      migrationApproach: "Migrating existing client rosters, historical appointments, and specialist schedule templates.",
    },
    securityAuditBackups: {
      accessControl: "Role-based confidentiality guards protecting client intake details and medical notes.",
      backupStrategy: "Continuous transaction archiving with encrypted cloud backups.",
      auditLogging: "Traceable history of all appointment bookings, reschedules, and cancellations.",
    },
    customizationBoundaries: "Intake form questionnaires, buffer time rules, and service catalog menus are tailored.",
    implementationTraining: {
      deliverySchedule: "Set after discovery, requirements review, and integration assessment.",
      phases: ["Service Catalog & Staff Roster Setup", "Calendar Sync Verification", "Front Desk Reception Training", "Go-Live"],
      trainingProvided: "Reception workflow training and client booking widget embed guides.",
    },
  },
  {
    id: "dashboards-bi",
    slug: "dashboards-business-intelligence",
    title: "Executive Dashboards & Business Intelligence",
    tagline: "Turn Fragmented Operational Data Into Clear Strategic Insight",
    category: "Analytics & Executive Intelligence",
    shortSummary: "Consolidate data from databases, accounting files, CRM, and ad platforms into KPI scorecards with refresh schedules based on source systems.",
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
        detail: "Bring selected data sources into a shared reporting repository with documented definitions and data-quality checks.",
      },
      {
        title: "Data Anomaly Alerts",
        detail: "Configure alerts for selected indicators and thresholds; detection timing depends on source data and refresh schedules.",
      },
      {
        title: "Board-Ready Visualizations",
        detail: "Clean, styled charts ready for investor presentations and monthly management meetings.",
      },
      {
        title: "Scheduled Email Digests",
        detail: "Leadership receives a concise morning executive snapshot in their inbox without needing to log in.",
      },
    ],
    technicalHighlights: ["ClickHouse / PostgreSQL", "Next.js Interactive Visualizations", "Tailored Metric Aggregators"],
    workflowAdaptation: "Customized to your proprietary financial formulas, reporting currencies, organizational structure, and operational benchmarks.",
    userRoles: [
      { role: "Chief Executive / Managing Director", permissions: "Full organization scorecards, consolidated profitability, enterprise cash flow." },
      { role: "Chief Financial Officer", permissions: "Granular P&L drill-downs, working capital metrics, bank account balances." },
      { role: "VP of Operations", permissions: "Operational throughput, fulfillment speed, supplier defect rates." },
      { role: "Department Head", permissions: "Sandboxed departmental KPIs (e.g. Sales team performance only)." },
    ],
    mainWorkflows: [
      {
        title: "Automated Data Ingestion & Transformation",
        steps: ["Scheduled API Data Pulls", "Data Cleaning & Normalization", "Metric Aggregation", "Cache Refresh", "Executive Digest Generation"],
      },
      {
        title: "Anomaly Detection & Notification",
        steps: ["Metric Continuous Monitoring", "Deviation Threshold Check", "Alert Dispatch to Leadership", "Drill-Down Incident Analysis"],
      },
    ],
    reportingDashboards: [
      "Consolidated Multi-Entity Financial Scorecard",
      "Departmental Unit Economics and Gross Margin Drill-Downs",
      "Customer Lifetime Value (LTV) vs Acquisition Cost (CAC)",
      "Inventory Holding Costs and Working Capital Utilization",
    ],
    integrationsDataMigration: {
      integrations: ["ERP Database Read-Replicas", "Google Ads & Meta Ads API", "CRM APIs", "Automated Email Digest SMTP"],
      migrationApproach: "Connecting read-only database connections, configuring historical data pipelines, and validating KPI formulas against audited reports.",
    },
    securityAuditBackups: {
      accessControl: "Departmental data isolation ensuring managers only view their designated operational boundaries.",
      backupStrategy: "Data warehouse snapshotting with daily configuration state backups.",
      auditLogging: "Access logs tracking every dashboard view and data export event.",
    },
    customizationBoundaries: "Custom financial calculation formulas, chart styles, and email schedule times are tailored.",
    implementationTraining: {
      deliverySchedule: "Set after discovery, requirements review, and data-migration assessment.",
      phases: ["Data Source Inventory & Formula Definition", "ETL Pipeline Engineering", "Dashboard Wireframing & Sign-off", "Executive Team Walkthrough", "Go-Live"],
      trainingProvided: "Executive briefing sessions explaining KPI interpretation and dashboard filter controls.",
    },
  },
];

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return solutionsData.find((s) => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutionsData.map((s) => s.slug);
}
