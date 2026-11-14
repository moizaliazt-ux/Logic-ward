import React from "react";
import {
  Search,
  Compass,
  Palette,
  Code2,
  Rocket,
  RefreshCw,
} from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      step: "01",
      icon: <Search className="w-5 h-5 text-[#dae7de]" />,
      title: "Discover",
      subtitle: "Workflow & Technical Audit",
      description:
        "We interview your team leads, analyze existing operational bottlenecks, inspect legacy databases, and clarify business objectives before writing a line of code.",
    },
    {
      step: "02",
      icon: <Compass className="w-5 h-5 text-[#94a49a]" />,
      title: "Plan",
      subtitle: "Architecture & Schema Design",
      description:
        "We map relational schemas, API contracts, security models, and deployment infrastructure. We establish realistic milestones and a fixed timeline.",
    },
    {
      step: "03",
      icon: <Palette className="w-5 h-5 text-[#dae7de]" />,
      title: "Design",
      subtitle: "Interactive Figma Prototypes",
      description:
        "We create clickable desktop and mobile prototypes with accessible typography, design tokens, and validated user journey funnels for client approval.",
    },
    {
      step: "04",
      icon: <Code2 className="w-5 h-5 text-[#94a49a]" />,
      title: "Build",
      subtitle: "Sprint-Based Engineering",
      description:
        "Bi-weekly development sprints with continuous integration. You review progress directly on private staging servers and provide feedback early.",
    },
    {
      step: "05",
      icon: <Rocket className="w-5 h-5 text-[#dae7de]" />,
      title: "Launch",
      subtitle: "Zero-Downtime Deployment",
      description:
        "Rigorous performance testing, security audits, database migration from legacy files, SSL configuration, and zero-downtime production deployment.",
    },
    {
      step: "06",
      icon: <RefreshCw className="w-5 h-5 text-[#94a49a]" />,
      title: "Improve",
      subtitle: "Telemetry & Ongoing Support",
      description:
        "Real-time error tracking, automated daily backups, scheduled OS/security patching, and continuous feature iterations backed by guaranteed SLAs.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#091615] border-t border-[#1a342e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[12px] font-mono uppercase tracking-[0.72px] text-[#94a49a]">
            Delivery Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#dae7de] tracking-[-1.08px]">
            Our 6-Step Engineering Process
          </h2>
          <p className="text-sm sm:text-base text-[#94a49a] leading-relaxed">
            Every project follows a disciplined, predictable lifecycle designed to eliminate technical surprises, avoid scope creep, and ensure timely production delivery.
          </p>
        </div>

        {/* 6 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#0d1f1c] border border-[#1a342e] hover:border-[#43634f] transition-all space-y-4 relative group shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#132b27] border border-[#1a342e] flex items-center justify-center group-hover:border-[#dae7de]/40 transition-colors">
                  {item.icon}
                </div>
                <span className="text-2xl font-mono font-bold text-[#1a342e] group-hover:text-[#dae7de]/60 transition-colors">
                  {item.step}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-normal text-[#dae7de] tracking-[-0.5px] group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-[0.72px] text-[#94a49a]">
                  {item.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#94a49a] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
