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
      icon: <Layers className="w-5 h-5 text-[#dae7de]" />,
      title: "100% IP & Code Ownership",
      description:
        "Upon milestone completion, all source code, database architectures, CI/CD scripts, and credentials transfer directly to your company. Zero vendor lock-in.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#8ea79f]" />,
      title: "Sub-Second Global Performance",
      description:
        "Engineered with clean Next.js App Router and edge caching. Optimized for instantaneous rendering across local Pakistani and international networks.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#dae7de]" />,
      title: "Pragmatic, Scoped AI Automation",
      description:
        "We reject vague generative AI hype. We build deterministic pipelines with human review thresholds that eliminate verified manual operational hours.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-[#8ea79f]" />,
      title: "Transparent Milestone Governance",
      description:
        "No hidden surprise fees. Project roadmaps are broken into discrete functional sprints verified on private staging servers before sign-off.",
    },
  ];

  return (
    <section className="py-12 border-y border-[#183832] bg-[#050e0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#dae7de]">
            Engineering Standards & Integrity
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
            How We Partner With Ambitious Businesses
          </h2>
          <p className="text-xs sm:text-sm text-[#8ea79f] mt-2">
            We operate with engineering rigor, clear communication, and transparent accountability—not hollow agency superlatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#091a17] border border-[#1a3832] hover:border-[#2d584d] transition-colors space-y-3 group shadow-md shadow-black/20"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0e2622] border border-[#1e463e] flex items-center justify-center group-hover:border-[#dae7de]/40 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-[#8ea79f] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
