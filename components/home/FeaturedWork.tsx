import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { portfolioProjects } from "@/lib/data/portfolio";

export function FeaturedWork() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-900 text-cyan-400 border border-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Reference Architectures & Engineering Demonstrations
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Selected Work & Technical Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore how we architect scalable distributed systems, cross-platform mobile apps, and automated workflows. Each project below represents our real engineering patterns and verified technical benchmarks.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 group flex-shrink-0"
          >
            <span>Browse complete portfolio directory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Explicit Disclosure Badge */}
        <div className="mb-8 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-slate-300 font-medium">Transparency Notice:</span>
            <span>
              The projects below are clearly labeled Reference Implementations and Concept Case Studies illustrating our technical standards. Client confidential work remains protected under NDA.
            </span>
          </div>
        </div>

        {/* 4 Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#090e1a] border border-slate-800 hover:border-slate-700 transition-all p-6 sm:p-8 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                    {project.projectBadge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {project.industry}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Technical Outcomes */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/70 space-y-2">
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                    Verified Technical Outcomes:
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-400">
                    {project.projectOutcomes.slice(0, 2).map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-slate-200 font-medium">
                            {outcome.metricsLabel}:{" "}
                          </span>
                          <span>{outcome.details}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  {project.category}
                </span>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-xs sm:text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 inline-flex items-center gap-1.5"
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
