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
      <div
        role="group"
        aria-label="Filter reference projects by category"
        className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-brand-border"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={isActive}
              className={`min-h-11 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
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

      <p aria-live="polite" className="text-xs font-mono text-brand-muted">
        {filteredProjects.length}{" "}
        {filteredProjects.length === 1 ? "reference project" : "reference projects"}
      </p>

      {filteredProjects.length === 0 ? (
        <p className="border-y border-brand-border py-8 text-sm text-brand-secondary">
          No reference projects are listed in this category yet.
        </p>
      ) : (
        <div className="border-y border-brand-border">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`grid grid-cols-1 gap-6 py-8 sm:py-10 lg:grid-cols-12 lg:gap-10 ${
                index > 0 ? "border-t border-brand-border" : ""
              }`}
            >
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono">
                  <span className="rounded border border-brand-border bg-brand-card px-2.5 py-1 text-brand-accent">
                    {project.projectBadge}
                  </span>
                  <span className="text-brand-muted">{project.industry}</span>
                  <span className="text-brand-muted">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(filteredProjects.length).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="mt-5 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-brand-text sm:text-3xl">
                  <Link
                    href={`/work/${project.slug}`}
                    className="transition-colors hover:text-brand-accent"
                  >
                    {project.title}
                  </Link>
                </h2>
                <p className="mt-2 text-xs font-mono text-brand-muted">
                  {project.clientType}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-secondary">
                  {project.summary}
                </p>
                <Link
                  href={`/work/${project.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-text"
                >
                  Read the reference case study
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="space-y-5 border-t border-brand-border pt-5 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-brand-muted">
                    Illustrative design note
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-secondary">
                    <strong className="font-semibold text-brand-text">
                      {project.designNotes[0]?.title}:{" "}
                    </strong>
                    {project.designNotes[0]?.details}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-brand-border px-2.5 py-1.5 text-[11px] font-mono text-brand-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
