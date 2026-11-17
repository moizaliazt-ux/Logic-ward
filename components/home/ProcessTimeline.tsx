import React from "react";
import {
  Search,
  FileText,
  Palette,
  Code2,
  CheckCheck,
  RefreshCw,
} from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      step: "01",
      icon: <Search className="w-5 h-5 text-brand-accent" />,
      title: "Discover",
      subtitle: "Users, Goals & Constraints",
      description:
        "Understand the people, current workflows, systems, constraints, and outcomes the project needs to address.",
    },
    {
      step: "02",
      icon: <FileText className="w-5 h-5 text-brand-accent" />,
      title: "Define",
      subtitle: "Scope & Acceptance Criteria",
      description:
        "Agree the requirements, boundaries, dependencies, deliverables, and acceptance criteria that belong in the project scope.",
    },
    {
      step: "03",
      icon: <Palette className="w-5 h-5 text-brand-accent" />,
      title: "Design",
      subtitle: "Flows & Prototypes",
      description:
        "Map user journeys, data flows, and interface structure; create prototypes when they help resolve important decisions.",
    },
    {
      step: "04",
      icon: <Code2 className="w-5 h-5 text-brand-accent" />,
      title: "Build",
      subtitle: "Iterative Sprints & Demos",
      description:
        "Implement against the agreed scope. The review cadence, release approach, and any staging environment are confirmed for the engagement.",
    },
    {
      step: "05",
      icon: <CheckCheck className="w-5 h-5 text-brand-accent" />,
      title: "Validate & Launch",
      subtitle: "QA, Security & Handover",
      description:
        "Test against agreed acceptance criteria and plan release, data migration, and handover where they are included in scope.",
    },
    {
      step: "06",
      icon: <RefreshCw className="w-5 h-5 text-brand-accent" />,
      title: "Improve",
      subtitle: "Support & Enhancements",
      description:
        "Maintenance, monitoring, backups, and enhancements can be discussed separately and provided only under agreed support terms.",
    },
  ];

  return (
    <section className="border-b border-brand-border bg-brand-surface py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
            PROJECT DELIVERY APPROACH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight">
            A clear path from discovery to handover
          </h2>
          <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
            The sequence is a planning framework. Activities, deliverables, timing, and review points depend on the written project scope.
          </p>
        </div>

        <ol className="divide-y divide-brand-border border-y border-brand-border">
          {steps.map((item) => (
            <li
              key={item.step}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-3 py-5 sm:grid-cols-[3rem_minmax(11rem,0.8fr)_2fr] sm:items-start sm:gap-6 sm:py-6"
            >
              <span className="pt-1 font-mono text-sm text-brand-accent">
                {item.step}
              </span>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-brand-border bg-brand-card">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-brand-text">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-mono uppercase tracking-wide text-brand-muted">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <p className="col-start-2 text-sm leading-6 text-brand-secondary sm:col-start-auto">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
