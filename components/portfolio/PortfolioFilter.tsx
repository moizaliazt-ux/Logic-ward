"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Layers } from "lucide-react";
import { portfolioProjects, CaseStudy } from "@/lib/data/portfolio";

export function PortfolioFilter() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Custom Software",
    "Mobile Applications",
    "Web & E-Commerce",
    "AI & Automation",
  ];

  const filteredProjects = portfolioProjects.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  return (
    <div className="space-y-10">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800/80">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
                isActive
                  ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
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
                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Roles */}
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Engineering Scope:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.agencyRole.map((role, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-cyan-400/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Verified Outcomes */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/70 space-y-2">
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                  Verified Technical Outcomes:
                </span>
                <div className="space-y-1.5 text-xs text-slate-400">
                  {project.projectOutcomes.map((outcome, idx) => (
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
              <span className="text-xs text-slate-400 font-mono">
                Duration: {project.duration}
              </span>
              <Link
                href={`/portfolio/${project.slug}`}
                className="text-xs sm:text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 inline-flex items-center gap-1.5"
              >
                <span>Read Architecture Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
