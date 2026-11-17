import React from "react";
import { Code, Workflow, Database, Network } from "lucide-react";

export function TechStackMatrix() {
  const stackCategories = [
    {
      title: "Product interfaces",
      icon: <Code className="w-5 h-5 text-brand-accent" />,
      items: [
        { name: "User journeys", detail: "Define the tasks and decisions the interface needs to support." },
        { name: "Responsive behavior", detail: "Consider supported devices, accessibility, and content hierarchy." },
      ],
    },
    {
      title: "Systems & data",
      icon: <Database className="w-5 h-5 text-brand-accent" />,
      items: [
        { name: "Data boundaries", detail: "Clarify records, access needs, ownership, and retention requirements." },
        { name: "Migration planning", detail: "Assess source quality, mapping, validation, and cutover constraints." },
      ],
    },
    {
      title: "Integrations & automation",
      icon: <Workflow className="w-5 h-5 text-brand-accent" />,
      items: [
        { name: "Provider capabilities", detail: "Confirm API access, limits, and dependencies with each system owner." },
        { name: "Human review", detail: "Set validation and escalation boundaries where automation is considered." },
      ],
    },
    {
      title: "Operations & handover",
      icon: <Network className="w-5 h-5 text-brand-accent" />,
      items: [
        { name: "Release and hosting", detail: "Choose an approach based on project, security, and operational needs." },
        { name: "Support boundaries", detail: "Document access, training, maintenance, and support in the agreement." },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-surface  text-brand-text border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
            ENGINEERING CONSIDERATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-text">
            Technical choices follow the requirements
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            These are planning areas, not a fixed technology stack or a promise that every option is included in every engagement.
          </p>
        </div>

        <div className="divide-y divide-brand-border border-y border-brand-border">
          {stackCategories.map((cat, index) => (
            <div
              key={cat.title}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-4 py-6 sm:grid-cols-[3rem_minmax(12rem,0.8fr)_2fr] sm:gap-6"
            >
              <span className="pt-1 font-mono text-xs text-brand-muted">
                0{index + 1}
              </span>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-brand-border bg-brand-card">
                  {cat.icon}
                </span>
                <h3 className="pt-1 text-base font-semibold text-brand-text">
                  {cat.title}
                </h3>
              </div>
              <div className="col-start-2 grid gap-4 sm:col-start-auto sm:grid-cols-2">
                {cat.items.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <span className="block text-xs font-mono font-semibold text-brand-secondary">
                      {item.name}
                    </span>
                    <span className="block text-sm leading-relaxed text-brand-muted">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
