import React from "react";
import {
  FileCheck2,
  TerminalSquare,
  Sparkles,
  Users,
  Clock,
  Layers,
} from "lucide-react";

export function WhyChooseUs() {
  const differentiators = [
    {
      icon: <FileCheck2 className="w-5 h-5 text-brand-accent" />,
      title: "Contractual Code Ownership: Zero Vendor Lock-in",
      description:
        "Subject to the agreed project scope and contract, custom source code, schemas, and deployment configurations are delivered to your organization upon project completion and milestone settlement.",
    },
    {
      icon: <TerminalSquare className="w-5 h-5 text-brand-accent" />,
      title: "Pragmatic Engineering Over Hype",
      description:
        "We choose technology with operational needs and maintenance in mind, and explain alternatives when a simpler approach may fit better.",
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-accent" />,
      title: "Milestone-Driven SOW Transparency",
      description:
        "Project scope, milestones, and payment terms are documented in the agreement; staging access and review steps are defined for each engagement.",
    },
    {
      icon: <Users className="w-5 h-5 text-brand-accent" />,
      title: "Single Accountable Engineering Partner",
      description:
        "Coordinate web development, custom software, SEO, and office IT requirements through a single project scope when those services are part of the engagement.",
    },
    {
      icon: <Layers className="w-5 h-5 text-brand-accent" />,
      title: "Realistic Scoping Without Empty Promises",
      description:
        "We refuse to make hollow claims like '#1 on Google' or '100% automated business'. We provide data-backed feasibility studies and adhere to official search quality guidelines and software engineering best practices.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-accent" />,
      title: "Seamless Remote Delivery Across Time Zones",
      description:
        "Based in Pakistan, Logicward can define working-hour overlap, asynchronous updates, and review cadence according to each engagement's needs.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-card border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
            DELIVERY INTEGRITY & PRINCIPLES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight">
            Why Ambitious Teams Choose Logicward
          </h2>
          <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
            We operate as an extension of your leadership team: rigorous software engineering, clear business language, and predictable delivery standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-accent/40 hover:bg-brand-elevated hover:shadow-sm transition-all space-y-3 group"
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
