import React from "react";
import {
  Code,
  Smartphone,
  Database,
  Network,
} from "lucide-react";

export function TechStackMatrix() {
  const stackCategories = [
    {
      title: "Frontend & Web Engineering",
      icon: <Code className="w-5 h-5 text-brand-accent" />,
      items: [
        { name: "Next.js 16 (App Router)", detail: "React Server Components, static rendering, and caching options" },
        { name: "TypeScript", detail: "Strict type safety across domain models and API contracts" },
        { name: "React 19", detail: "Concurrent features, optimistic state transitions, Actions" },
        { name: "Tailwind CSS", detail: "Custom variable-driven design tokens and zero-runtime styles" },
      ],
    },
    {
      title: "Backend & Relational Data",
      icon: <Database className="w-5 h-5 text-brand-accent" />,
      items: [
        { name: "PostgreSQL", detail: "Partitioned tables, relational schemas, ACID-compliant transactions" },
        { name: "Node.js & FastAPI", detail: "Asynchronous RESTful and GraphQL API patterns" },
        { name: "Redis", detail: "In-memory caching, distributed rate limiting, and message brokers" },
        { name: "Docker", detail: "Reproducible containerization for multi-environment staging" },
      ],
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="w-5 h-5 text-brand-accent" />,
      items: [
        { name: "Flutter", detail: "Cross-platform UI development for supported mobile platforms" },
        { name: "React Native", detail: "Unified TypeScript mobile codebase for iOS and Android" },
        { name: "Native iOS (Swift) & Android (Kotlin)", detail: "Specialized low-level hardware integration" },
        { name: "SQLite & Offline Sync", detail: "Local caching ensuring uninterrupted field usage" },
      ],
    },
    {
      title: "Cloud, DevOps & Network IT",
      icon: <Network className="w-5 h-5 text-brand-accent" />,
      items: [
        { name: "AWS & Vercel Edge", detail: "Multi-region serverless routing and CDN asset delivery" },
        { name: "MikroTik & RouterOS", detail: "Multi-WAN routing, failover configuration, and QoS" },
        { name: "Ubiquiti UniFi & Cisco", detail: "Enterprise Wi-Fi roaming and IPSec site-to-site VPNs" },
        { name: "3-2-1 Encrypted Backups", detail: "Automated off-site database snapshots and recovery drills" },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-surface  text-brand-text border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
            TECHNOLOGY ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-text">
            Practical Stacks Engineered for Reliability
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Technology choices depend on project requirements, integrations, hosting constraints, and ongoing maintenance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="text-base font-bold text-brand-text">
                  {cat.title}
                </h3>
                <div className="space-y-3 pt-1 border-t border-brand-border">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-0.5">
                      <span className="text-xs font-bold font-mono text-brand-secondary block">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-brand-muted leading-tight block">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-brand-border text-[10px] font-mono text-brand-accent uppercase tracking-wider">
                Project-specific selection
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
