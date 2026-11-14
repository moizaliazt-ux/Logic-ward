import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { portfolioProjects } from "@/lib/data/portfolio";

export function FeaturedWork() {
  return (
    <section className="py-20 md:py-28 relative bg-[#071312] border-t border-[#16332d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0d221f] text-[#dae7de] border border-[#1e463e]">
              <Sparkles className="w-3.5 h-3.5 text-[#dae7de]" />
              Reference Architectures & Engineering Demonstrations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Selected Work & Technical Solutions
            </h2>
            <p className="text-sm sm:text-base text-[#b2c5bd] leading-relaxed">
              Explore how we architect scalable distributed systems, cross-platform mobile apps, and automated workflows. Each project below represents our real engineering patterns and verified technical benchmarks.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="text-sm font-semibold text-[#dae7de] hover:underline inline-flex items-center gap-1.5 group flex-shrink-0"
          >
            <span>Browse complete portfolio directory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Explicit Disclosure Badge per Brief Guidelines */}
        <div className="mb-10 p-4 rounded-2xl bg-[#061110] border border-[#183832] text-xs text-[#8ea79f] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#dae7de] flex-shrink-0" />
            <span className="text-[#dae7de] font-medium">Compliance & Verification Notice:</span>
            <span>
              The projects below are clearly labeled Reference Implementations and Concept Case Studies illustrating our technical standards. Client confidential work remains protected under bilateral NDAs.
            </span>
          </div>
        </div>

        {/* 4 Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#091a17] border border-[#1a3832] hover:border-[#2d584d] transition-all p-6 sm:p-8 flex flex-col justify-between space-y-6 group shadow-2xl shadow-black/60"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0f2824] text-[#dae7de] border border-[#1e463e]">
                    {project.projectBadge}
                  </span>
                  <span className="text-xs text-[#8ea79f] font-medium">
                    {project.industry}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#dae7de] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b2c5bd] leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#061110] border border-[#183832] text-[#8ea79f]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Technical Outcomes */}
                <div className="p-4 rounded-2xl bg-[#061110] border border-[#183832] space-y-2">
                  <span className="text-[11px] font-semibold text-[#dae7de] uppercase tracking-wider block">
                    Verified Technical Outcomes:
                  </span>
                  <div className="space-y-2 text-xs text-[#8ea79f]">
                    {project.projectOutcomes.slice(0, 2).map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#dae7de] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[#f2f7f4] font-medium">
                            {outcome.metricsLabel}:{" "}
                          </span>
                          <span>{outcome.details}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#16332d] flex items-center justify-between">
                <span className="text-xs text-[#8ea79f] font-mono">
                  {project.category}
                </span>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-xs sm:text-sm font-semibold text-[#dae7de] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Read Full Architecture Breakdown</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
