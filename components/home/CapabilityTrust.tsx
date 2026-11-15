import React from "react";
import {
  Layers,
  Sparkles,
  Cpu,
  GitBranch,
} from "lucide-react";

export function CapabilityTrust() {
  const capabilities = [
    {
      icon: <Layers className="w-5 h-5 text-brand-accent" />,
      title: "Contractual Code & IP Ownership",
      description:
        "Subject to agreed contract terms, custom source code, schemas, and configurations transfer to your company upon milestone completion. Zero proprietary vendor lock-in.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-brand-accent" />,
      title: "Performance-Engineered Architecture",
      description:
        "Built with Next.js App Router and caching strategies selected for the page content, hosting, and operational requirements.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-accent" />,
      title: "Pragmatic, Scoped Automation",
      description:
        "We prioritize practical workflow automation with schema validation, structured APIs, and human review thresholds where operational accuracy is essential.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-brand-accent" />,
      title: "Milestone-Driven Governance",
      description:
        "Project roadmaps are broken into discrete functional sprints demonstrated on private staging servers before milestone sign-off and payment release.",
    },
  ];

  return (
    <section className="py-14 border-b border-brand-border  bg-brand-card text-brand-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
            ENGINEERING STANDARDS & INTEGRITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-text mt-1.5">
            How We Partner With Ambitious Organizations
          </h2>
          <p className="text-xs sm:text-sm text-brand-secondary mt-2">
            We operate with engineering rigor, clear communication, and transparent accountability—grounded in verifiable delivery practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-accent/40 hover:bg-brand-elevated hover:shadow-sm transition-all space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center group-hover:border-brand-accent transition-colors shadow-2xs">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
