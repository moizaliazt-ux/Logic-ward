import React from "react";
import {
  Search,
  Compass,
  Palette,
  Code2,
  Rocket,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      step: "01",
      icon: <Search className="w-5 h-5 text-cyan-400" />,
      title: "Discover",
      subtitle: "Workflow & Technical Audit",
      description:
        "We interview your team leads, analyze existing operational bottlenecks, inspect legacy databases, and clarify business objectives before writing a line of code.",
    },
    {
      step: "02",
      icon: <Compass className="w-5 h-5 text-sky-400" />,
      title: "Plan",
      subtitle: "Architecture & Schema Design",
      description:
        "We map relational schemas, API contracts, security models, and deployment infrastructure. We establish realistic milestones and a fixed timeline.",
    },
    {
      step: "03",
      icon: <Palette className="w-5 h-5 text-teal-400" />,
      title: "Design",
      subtitle: "Interactive Figma Prototypes",
      description:
        "We create clickable desktop and mobile prototypes with accessible typography, design tokens, and validated user journey funnels for client approval.",
    },
    {
      step: "04",
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      title: "Build",
      subtitle: "Sprint-Based Engineering",
      description:
        "Bi-weekly development sprints with continuous integration. You review progress directly on private staging servers and provide feedback early.",
    },
    {
      step: "05",
      icon: <Rocket className="w-5 h-5 text-indigo-400" />,
      title: "Launch",
      subtitle: "Zero-Downtime Deployment",
      description:
        "Rigorous performance testing, security audits, database migration from legacy files, SSL configuration, and zero-downtime production deployment.",
    },
    {
      step: "06",
      icon: <RefreshCw className="w-5 h-5 text-purple-400" />,
      title: "Improve",
      subtitle: "Telemetry & Ongoing Support",
      description:
        "Real-time error tracking, automated daily backups, scheduled OS/security patching, and continuous feature iterations backed by guaranteed SLAs.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#050810] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Delivery Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our 6-Step Engineering Process
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every project follows a disciplined, predictable lifecycle designed to eliminate technical surprises, avoid scope creep, and ensure timely production delivery.
          </p>
        </div>

        {/* 6 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 hover:border-slate-700 transition-all space-y-4 relative group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-800/60 transition-colors">
                  {item.icon}
                </div>
                <span className="text-2xl font-mono font-bold text-slate-700 group-hover:text-cyan-400/50 transition-colors">
                  {item.step}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-cyan-400">
                  {item.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
