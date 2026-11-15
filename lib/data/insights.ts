export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Engineering" | "AI & Automation" | "Business Systems" | "Strategy & Growth";
  tags: string[];
  publishDate?: string;
  author?: {
    name: string;
    role: string;
  };
  tableOfContents: { id: string; title: string }[];
  contentSections: {
    id: string;
    heading: string;
    paragraphs: string[];
    callout?: {
      title: string;
      body: string;
    };
  }[];
  relatedArticleSlugs: string[];
}

export function getArticleReadTime(article: Article): string {
  const content = [
    article.title,
    article.excerpt,
    ...article.contentSections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...(section.callout ? [section.callout.title, section.callout.body] : []),
    ]),
  ].join(" ");
  const wordCount = content.trim().split(/\s+/).length;

  return `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
}

export const articlesData: Article[] = [
  {
    id: "custom-erp-vs-saas",
    slug: "custom-software-vs-commercial-saas-guide",
    title: "Custom Software vs. Commercial SaaS: When Does Building Make Economic Sense?",
    excerpt: "A practical framework for founders and CTOs evaluating whether to continue paying escalating per-user SaaS licenses or build bespoke business software.",
    category: "Business Systems",
    tags: ["Custom Software", "ERP", "ROI Analysis", "Enterprise Architecture"],
    tableOfContents: [
      { id: "the-saas-trap", title: "The Hidden Total Cost of Off-the-Shelf SaaS" },
      { id: "when-to-buy", title: "When Off-the-Shelf Software Still Wins" },
      { id: "when-to-build", title: "The 4 Clear Indicators It Is Time to Build" },
      { id: "data-ownership", title: "Data Sovereignty and Competitive Moats" },
      { id: "decision-matrix", title: "Executive Decision Checklist" },
    ],
    contentSections: [
      {
        id: "the-saas-trap",
        heading: "The Hidden Total Cost of Off-the-Shelf SaaS",
        paragraphs: [
          "Commercial SaaS can offer low-friction onboarding and predictable monthly fees. As an organization grows, however, its total cost and operational fit should be reviewed against changing needs.",
          "Per-seat licensing can become a significant cost when many employees need access, especially if their workflows use only part of a product's feature set.",
          "Using multiple SaaS tools that do not exchange data cleanly can also lead to shadow spreadsheets and manual exports between departments.",
        ],
        callout: {
          title: "The Licensing Penalty",
          body: "Choose a planning horizon that fits the decision, then compare recurring seat fees and integration costs against engineering, hosting, and ongoing maintenance for a custom platform.",
        },
      },
      {
        id: "when-to-buy",
        heading: "When Off-the-Shelf Software Still Wins",
        paragraphs: [
          "Building custom software is a major strategic commitment and should never be done for generic commodity functions. Never build custom software for standard email hosting, general ledger accounting rules that require annual statutory certification, or basic office word processing.",
          "Off-the-shelf software is often a sensible choice when a company's workflow is well served by a standard product and offers no proprietary competitive advantage.",
        ],
      },
      {
        id: "when-to-build",
        heading: "The 4 Clear Indicators It Is Time to Build",
        paragraphs: [
          "1. Your core business model differs materially from standard industry templates, forcing your operations team into inefficient workarounds.",
          "2. You are paying for multiple SaaS tools and spending significant developer hours maintaining fragile Zapier or Make.com bridges to connect them.",
          "3. You require specialized compliance, on-premises data isolation, or granular customer approval workflows that third-party platforms refuse to support.",
          "4. Your operational software represents your primary customer experience or unique business moat.",
        ],
      },
      {
        id: "data-ownership",
        heading: "Data Sovereignty and Competitive Moats",
        paragraphs: [
          "With multi-tenant SaaS, pricing, interfaces, and APIs can change according to a vendor's roadmap. A custom platform gives an organization more control over its data model and software roadmap, while also making it responsible for ongoing maintenance.",
          "This data sovereignty allows you to run proprietary analytics, train private internal machine learning models, and present institutional investors with a genuine technological asset rather than a bundle of vendor logins.",
        ],
      },
      {
        id: "decision-matrix",
        heading: "Executive Decision Checklist",
        paragraphs: [
          "Before approving a custom software project, conduct a thorough workflow audit. Determine whether your pain points stem from the limitations of the existing tool or simply poor team adoption.",
          "If the software supports a core workflow, compare the cost of building and maintaining it with the measurable operational value it could provide. The result depends on the specific requirements and should not be assumed in advance.",
        ],
      },
    ],
    relatedArticleSlugs: ["practical-ai-automation-scoping", "modern-nextjs-agency-architecture"],
  },
  {
    id: "ai-automation-scoping",
    slug: "practical-ai-automation-scoping",
    title: "Scoping Practical AI Workflows: Why Most Enterprise AI Initiatives Stall",
    excerpt: "How to assess AI workflow ideas, define measurable objectives, and design human review around uncertain outputs.",
    category: "AI & Automation",
    tags: ["Artificial Intelligence", "Process Automation", "Enterprise Tech", "ROI"],
    tableOfContents: [
      { id: "the-hype-cycle", title: "Beyond the Generative AI Hype Cycle" },
      { id: "scoping-rule", title: "The Rule of Deterministic Scoping" },
      { id: "high-value-use-cases", title: "3 Practical Automation Use Cases" },
      { id: "human-safeguards", title: "Why Human-in-the-Loop is Mandatory" },
      { id: "getting-started", title: "How to Scope an Automation Audit" },
    ],
    contentSections: [
      {
        id: "the-hype-cycle",
        heading: "Beyond the Generative AI Hype Cycle",
        paragraphs: [
          "Open-ended AI initiatives can produce expensive proof-of-concepts that do not fit into the day-to-day work of the organization.",
          "The most common failure pattern is treating large language models as autonomous employees rather than advanced text and data processing components inside structured software pipelines.",
        ],
      },
      {
        id: "scoping-rule",
        heading: "The Rule of Deterministic Scoping",
        paragraphs: [
          "The golden rule of enterprise automation: never automate a process with AI if the input cannot be verified and the output cannot be programmatically validated.",
          "Successful AI implementations use LLMs for narrow extraction and synthesis tasks (e.g., extracting invoice line items or classifying customer inquiry intent), while relying on standard deterministic code to execute database writes and financial calculations.",
        ],
        callout: {
          title: "Architecture Rule",
          body: "Keep reasoning modular. Use AI for perception and categorization; use typed code and relational databases for execution and calculation.",
        },
      },
      {
        id: "high-value-use-cases",
        heading: "3 Practical Automation Use Cases",
        paragraphs: [
          "1. Inbound Invoicing & Expense Extraction: Parsing unstructured PDF invoices from dozens of suppliers directly into structured ERP purchase receipts.",
          "2. Lead Qualification Support: Parsing inquiries against agreed qualification guidelines and routing a summary to an account executive for review.",
          "3. First-Response Customer Triage: Categorizing support tickets, checking order status in backend databases, and drafting accurate response templates for agent approval.",
        ],
      },
      {
        id: "human-safeguards",
        heading: "Why Human-in-the-Loop is Mandatory",
        paragraphs: [
          "AI models can make mistakes, especially with ambiguous or unusual inputs. Automation architectures should include explicit confidence thresholds and review paths.",
          "Define confidence thresholds and route uncertain or consequential decisions to a human review queue. This reduces reliance on unverified model output but does not eliminate error.",
        ],
      },
      {
        id: "getting-started",
        heading: "How to Scope an Automation Audit",
        paragraphs: [
          "Identify the three operational tasks your team spends the most cumulative hours on each week. Measure the time spent, document the inputs and outputs, and verify whether the source systems have accessible APIs.",
          "Focus on a measurable operational objective rather than novelty, then validate the workflow and its costs before committing to implementation.",
        ],
      },
    ],
    relatedArticleSlugs: ["custom-software-vs-commercial-saas-guide", "answer-engine-optimization-guide"],
  },
  {
    id: "aeo-search-evolution",
    slug: "answer-engine-optimization-guide",
    title: "Answer Engine Optimization (AEO): Structuring Your Brand for AI Search",
    excerpt: "How clear information architecture and structured content can help people and search systems interpret a brand's services.",
    category: "Strategy & Growth",
    tags: ["AEO", "SEO", "Search Strategy", "Digital Growth"],
    tableOfContents: [
      { id: "search-to-answer", title: "The Transition From Ten Blue Links to Synthesized Answers" },
      { id: "how-llms-crawl", title: "How Modern LLMs Parse and Cite Information" },
      { id: "entity-architecture", title: "Entity-Based Content Architecture" },
      { id: "schema-microdata", title: "The Critical Role of Clean Schema Microdata" },
      { id: "practical-checklist", title: "Practical AEO Optimization Checklist" },
    ],
    contentSections: [
      {
        id: "search-to-answer",
        heading: "The Transition From Ten Blue Links to Synthesized Answers",
        paragraphs: [
          "Search interfaces increasingly include synthesized answers alongside traditional search results. The impact varies by query, platform, and audience.",
          "Clear, well-structured content can help both people and automated systems interpret a page, but no formatting approach can guarantee that an answer engine will cite a brand.",
        ],
      },
      {
        id: "how-llms-crawl",
        heading: "How Modern LLMs Parse and Cite Information",
        paragraphs: [
          "Concise definitions, descriptive headings, and well-structured comparisons can make information easier to interpret.",
          "Useful, specific content is preferable to repetitive copy. No content format can guarantee visibility or citation by an answer engine.",
        ],
        callout: {
          title: "Direct Answer Standard",
          body: "Always answer the target question directly in the opening paragraph of each section before expanding into nuance, use cases, and methodology.",
        },
      },
      {
        id: "entity-architecture",
        heading: "Entity-Based Content Architecture",
        paragraphs: [
          "Rather than targeting isolated keywords, modern search architecture requires establishing clear relationships between business entities: What service do you provide? Who is it for? What are the verifiable inputs and deliverables?",
          "Structuring your website into distinct, deep service categories with explicit FAQ blocks helps crawlers build accurate knowledge graph nodes for your brand.",
        ],
      },
      {
        id: "schema-microdata",
        heading: "The Critical Role of Clean Schema Microdata",
        paragraphs: [
          "Semantic HTML and JSON-LD schema (Organization, Service, FAQPage, BreadcrumbList) provide unambiguous signals to crawlers about what each page element represents.",
          "Ensure your schema is technically valid and mirrors the visible content on the page without keyword stuffing or deceptive markup.",
        ],
      },
      {
        id: "practical-checklist",
        heading: "Practical AEO Optimization Checklist",
        paragraphs: [
          "1. Audit all primary service pages to ensure clear, single-sentence definitions at the top of each section.",
          "2. Implement comprehensive Schema.org JSON-LD structured data across all service and case study pages.",
          "3. Format common technical comparisons using structured HTML tables and bulleted deliverable lists.",
          "4. Keep FAQs accurate, direct, and focused on answering genuine customer objections.",
        ],
      },
    ],
    relatedArticleSlugs: ["practical-ai-automation-scoping", "custom-software-vs-commercial-saas-guide"],
  },
  {
    id: "modern-nextjs-architecture",
    slug: "modern-nextjs-agency-architecture",
    title: "Engineering for Speed: Why We Build Corporate Websites on Next.js App Router",
    excerpt: "How page architecture, delivery strategy, and measured performance can inform a modern corporate website built with the Next.js App Router.",
    category: "Engineering",
    tags: ["Next.js", "Performance", "Web Development", "Core Web Vitals"],
    tableOfContents: [
      { id: "the-builder-problem", title: "The Cost of Bloated Page Builders" },
      { id: "core-web-vitals", title: "Core Web Vitals and Conversion Psychology" },
      { id: "server-components", title: "Why React Server Components Change the Game" },
      { id: "global-edge", title: "Global Edge Distribution & Security" },
      { id: "maintenance-economics", title: "Long-Term Maintenance Economics" },
    ],
    contentSections: [
      {
        id: "the-builder-problem",
        heading: "The Cost of Bloated Page Builders",
        paragraphs: [
          "Page builders and large plugin collections can add code and maintenance overhead, but the impact varies by implementation. Measure the actual page and remove only the work that is unnecessary.",
          "Loading time depends on the page, network, device, and server. Use field data and repeatable tests rather than generic timing or conversion estimates.",
        ],
      },
      {
        id: "core-web-vitals",
        heading: "Core Web Vitals and Conversion Psychology",
        paragraphs: [
          "When a prospective client arrives from an ad or search result, clear content, usable navigation, and responsive page behavior shape their experience.",
          "Next.js App Router can statically generate suitable marketing pages and support caching strategies. Actual delivery speed depends on hosting, page weight, network conditions, and configuration.",
        ],
        callout: {
          title: "Performance as a Quality Attribute",
          body: "Measure page performance against agreed targets and real user needs. Faster delivery can improve usability, but business outcomes depend on more than load time alone.",
        },
      },
      {
        id: "server-components",
        heading: "Why React Server Components Change the Game",
        paragraphs: [
          "With React Server Components, eligible work can run on the server so the browser receives less client-side JavaScript for those parts of the page. The actual bundle depends on the application and its interactive components.",
          "Interactive elements (such as filter tabs, mobile navigation drawers, and validated contact forms) hydrate selectively without weighing down static text sections.",
        ],
      },
      {
        id: "global-edge",
        heading: "Global Edge Distribution & Security",
        paragraphs: [
          "Static delivery can reduce the amount of server-side functionality exposed on a marketing page, but it does not make a site immune to security issues. Hosting, integrations, dependencies, and deployment practices still require review.",
          "The architecture and hosting configuration determine which databases and services are reachable; security should be assessed for the deployed system.",
        ],
      },
      {
        id: "maintenance-economics",
        heading: "Long-Term Maintenance Economics",
        paragraphs: [
          "Custom Next.js websites require engineering and ongoing maintenance. Their long-term cost depends on the product's needs, hosting, integrations, and how the team manages updates.",
          "A custom codebase avoids some plugin and theme dependencies, but still needs dependency updates, security reviews, and planned maintenance.",
        ],
      },
    ],
    relatedArticleSlugs: ["custom-software-vs-commercial-saas-guide", "answer-engine-optimization-guide"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articlesData.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: Article): Article[] {
  return article.relatedArticleSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((related): related is Article => related !== undefined);
}

