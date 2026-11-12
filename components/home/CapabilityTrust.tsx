import React from "react";
import {
  Shield,
  Layers,
  Sparkles,
  Cpu,
  GitBranch,
  CheckCircle,
} from "lucide-react";

export function CapabilityTrust() {
  const capabilities = [
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: "100% IP & Code Ownership",
      description:
        "Upon milestone completion, all source code, database architectures, CI/CD scripts, and credentials transfer directly to your company. Zero vendor lock-in.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: "Sub-Second Global Performance",
      description:
        "Engineered with clean Next.js App Router and edge caching. Optimized for instantaneous rendering across local Pakistani and international networks.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-teal-400" />,
      title: "Pragmatic, Scoped AI Automation",
      description:
        "We reject vague generative AI hype. We build deterministic pipelines with human review thresholds that eliminate verified manual operational hours.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-blue-400" />,
      title: "Transparent Milestone Governance",
      description:
        "No hidden surprise fees. Project roadmaps are broken into discrete functional sprints verified on private staging servers before sign-off.",
    },
  ];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Engineering Standards & Integrity
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
            How We Partner With Ambitious Businesses
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            We operate with engineering rigor, clear communication, and transparent accountability—not hollow agency superlatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-[#090e1a] border border-slate-800/90 hover:border-slate-700 transition-colors space-y-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-800/60 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
