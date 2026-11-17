import React from "react";
import {
  FileCheck2,
  Layers,
  ShieldCheck,
} from "lucide-react";

export function CapabilityTrust() {
  const capabilities = [
    {
      icon: <FileCheck2 className="w-5 h-5 text-brand-accent" />,
      title: "Scope before implementation",
      description:
        "Requirements, assumptions, deliverables, and acceptance criteria are defined for the engagement before work begins.",
    },
    {
      icon: <Layers className="w-5 h-5 text-brand-accent" />,
      title: "Architecture shaped by the work",
      description:
        "Technical choices account for workflows, integrations, data needs, security boundaries, and ongoing maintenance.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-accent" />,
      title: "Evidence over hype",
      description:
        "Reference work is labeled clearly. Performance and business outcomes are published only when supported by evidence.",
    },
  ];

  return (
    <section className="border-b border-brand-border bg-brand-card py-14 text-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-9 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
            HOW WE APPROACH THE WORK
          </span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">
            Clear decisions, grounded in your requirements
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-brand-secondary">
            Project scope, implementation choices, and commercial terms are confirmed for each engagement rather than assumed.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-brand-border border-y border-brand-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="py-5 md:px-6 md:py-6 first:md:pl-0 last:md:pr-0"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-brand-border bg-brand-surface">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-brand-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
