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
      icon: <Layers className="w-5 h-5 text-[#dae7de]" />,
      title: "100% IP & Code Ownership",
      description:
        "Upon milestone completion, all source code, database architectures, CI/CD scripts, and credentials transfer directly to your company. Zero vendor lock-in.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#94a49a]" />,
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
      icon: <GitBranch className="w-5 h-5 text-[#94a49a]" />,
      title: "Transparent Milestone Governance",
      description:
        "No hidden surprise fees. Project roadmaps are broken into discrete functional sprints verified on private staging servers before sign-off.",
    },
  ];

  return (
    <section className="py-12 border-y border-[#1a342e] bg-[#091615]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[12px] font-mono uppercase tracking-[0.72px] text-[#94a49a]">
            Engineering Standards & Integrity
          </span>
          <h2 className="text-xl sm:text-2xl font-normal text-[#dae7de] tracking-[-1.08px] mt-1">
            How We Partner With Ambitious Businesses
          </h2>
          <p className="text-xs sm:text-sm text-[#94a49a] mt-2">
            We operate with engineering rigor, clear communication, and transparent accountability—not hollow agency superlatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-[#0d1f1c] border border-[#1a342e] hover:border-[#43634f] transition-colors space-y-3 group shadow-md shadow-black/20"
            >
              <div className="w-10 h-10 rounded-lg bg-[#132b27] border border-[#1a342e] flex items-center justify-center group-hover:border-[#dae7de]/40 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-sm font-medium text-[#dae7de]">
                {item.title}
              </h3>
              <p className="text-xs text-[#94a49a] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
