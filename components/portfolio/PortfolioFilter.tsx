"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioProjects } from "@/lib/data/portfolio";

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
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-brand-border">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
                isActive
                  ? "bg-brand-background border-brand-border  text-brand-text font-semibold"
                  : "bg-brand-card border-brand-border  text-brand-secondary hover:text-brand-text hover:border-brand-border"
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
            className="rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 hover:shadow-md transition-all p-7 sm:p-8 flex flex-col justify-between space-y-6 group shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md text-[11px] font-mono font-semibold bg-brand-surface  text-brand-accent border border-brand-border">
                  {project.projectBadge}
                </span>
                <span className="text-xs text-brand-muted font-mono">
                  {project.industry}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-brand-text group-hover:text-brand-accent transition-colors leading-snug">
                  {project.title}
                </h2>
                <p className="text-xs text-brand-muted font-mono mt-0.5">
                  {project.clientType}
                </p>
              </div>

              <p className="text-sm text-brand-secondary leading-relaxed">
                {project.summary}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-[11px] font-mono bg-brand-surface border border-brand-border  text-brand-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Concept disclosure */}
              <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-1.5">
                <span className="text-[11px] font-semibold text-brand-text uppercase tracking-wider block">
                  Illustrative Design Note:
                </span>
                <div className="text-xs text-brand-secondary">
                  <strong className="text-brand-accent">
                    {project.designNotes[0]?.title}:
                  </strong>{" "}
                  {project.designNotes[0]?.details}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border flex items-center justify-between">
              <Link
                href={`/work/${project.slug}`}
                className="text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-brand-accent inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-xs text-brand-muted font-mono">
                {project.projectBadge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
