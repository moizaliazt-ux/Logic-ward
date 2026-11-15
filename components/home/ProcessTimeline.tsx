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
        "We interview your stakeholders, audit existing operational bottlenecks, inspect legacy databases, and clarify core business objectives before writing any code.",
    },
    {
      step: "02",
      icon: <FileText className="w-5 h-5 text-brand-accent" />,
      title: "Define",
      subtitle: "Scope & Acceptance Criteria",
      description:
        "We document detailed technical requirements (TRD), database schema normalizations, API contracts, milestone roadmaps, and agreed acceptance criteria.",
    },
    {
      step: "03",
      icon: <Palette className="w-5 h-5 text-brand-accent" />,
      title: "Design",
      subtitle: "Flows & Prototypes",
      description:
        "We create clickable desktop and mobile Figma prototypes, establishing design tokens, typography hierarchy, and validated user journeys for client approval.",
    },
    {
      step: "04",
      icon: <Code2 className="w-5 h-5 text-brand-accent" />,
      title: "Build",
      subtitle: "Iterative Sprints & Demos",
      description:
        "Bi-weekly development sprints with continuous integration. You test working software increments directly on private staging servers and provide feedback early.",
    },
    {
      step: "05",
      icon: <CheckCheck className="w-5 h-5 text-brand-accent" />,
      title: "Validate & Launch",
      subtitle: "QA, Security & Handover",
      description:
        "Quality assurance, agreed security checks, data migration, deployment planning, and source-code and IP handover.",
    },
    {
      step: "06",
      icon: <RefreshCw className="w-5 h-5 text-brand-accent" />,
      title: "Improve",
      subtitle: "Support & Enhancements",
      description:
        "Monitoring, backups, security updates, and enhancements can be scoped under a defined post-launch support agreement.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-surface border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
            PREDICTABLE ENGINEERING LIFECYCLE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight">
            Our 6-Stage Delivery Process
          </h2>
          <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
            A documented delivery approach helps surface risks, manage scope, and coordinate work against the schedule agreed for each project.
          </p>
        </div>

        {/* 6 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 hover:shadow-sm transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center group-hover:border-brand-accent transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-bold font-mono text-brand-secondary group-hover:text-brand-accent/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border text-[11px] font-mono text-brand-muted">
                Stage {item.step} Deliverables Signed Off Prior to Next Phase
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
