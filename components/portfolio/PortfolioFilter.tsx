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
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#1a342e]">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
                isActive
                  ? "bg-[#dae7de] border-[#dae7de] text-[#091615] font-semibold"
                  : "bg-[#0d1f1c] border-[#1a342e] text-[#94a49a] hover:text-[#dae7de] hover:border-[#2d584d]"
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
            className="rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] hover:border-[#2d584d] transition-all p-6 sm:p-8 flex flex-col justify-between space-y-6 group shadow-xl shadow-black/40"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#091615] text-[#dae7de] border border-[#1a342e]">
                  {project.projectBadge}
                </span>
                <span className="text-xs text-[#94a49a] font-medium font-mono">
                  {project.industry}
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#dae7de] transition-colors tracking-tight">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#94a49a] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Roles */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-[0.72px] text-[#dae7de] block">
                  Engineering Scope:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.agencyRole.map((role, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] bg-[#091615] border border-[#1a342e] text-[#94a49a]"
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
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#091615] border border-[#1a342e] text-[#dae7de]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Outcomes Highlight */}
              <div className="pt-2 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.72px] text-[#dae7de] block">
                  Key Metrics Achieved:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.projectOutcomes.slice(0, 2).map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#091615] border border-[#1a342e] text-xs text-[#dae7de] flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#dae7de] flex-shrink-0" />
                      <span className="font-mono text-[11px] truncate">{outcome.metricsLabel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1a342e] flex items-center justify-between">
              <span className="text-xs font-mono text-[#94a49a]">
                Prerendered Case Study
              </span>
              <Link
                href={`/portfolio/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#dae7de] group-hover:underline"
              >
                <span>Read Full Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
