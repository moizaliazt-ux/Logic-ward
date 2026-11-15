import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldAlert,
} from "lucide-react";
import { portfolioProjects } from "@/lib/data/portfolio";

export function FeaturedWork() {
  return (
    <section className="py-20 md:py-28 relative bg-brand-card border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider bg-brand-surface  text-brand-accent border border-brand-border">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              ENGINEERING DEMONSTRATIONS & CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight leading-tight">
              Selected Work & Technical Solutions
            </h2>
            <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
              Explore reference architectures for distributed systems, mobile applications, and automated workflows. Each example is labeled and does not claim a client delivery or measured result.
            </p>
          </div>

          <Link
            href="/work"
            className="text-sm font-semibold text-brand-accent hover:text-brand-accent inline-flex items-center gap-1.5 group flex-shrink-0"
          >
            <span>Browse complete work directory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* PRD Section 5.5 Compliance Disclosure */}
        <div className="mb-10 p-4 rounded-xl bg-brand-elevated border border-brand-border text-xs text-brand-secondary flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-brand-accent flex-shrink-0" />
            <span className="text-brand-text font-semibold">Verification & Disclosure Notice:</span>
            <span>
              The projects below are clearly labeled reference architectures or concept case studies. They do not represent client engagements or measured outcomes.
            </span>
          </div>
        </div>

        {/* 4 Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 hover:bg-brand-elevated hover:shadow-md transition-all p-7 sm:p-8 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 rounded text-[11px] font-mono font-semibold bg-brand-card text-brand-accent border border-brand-border">
                    {project.projectBadge}
                  </span>
                  <span className="text-xs text-brand-muted font-mono">
                    {project.industry}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-brand-card border border-brand-border  text-brand-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Reference project disclosure */}
                <div className="p-4 rounded-xl bg-brand-card border border-brand-border space-y-1">
                  <span className="text-[11px] font-semibold text-brand-text uppercase tracking-wider block">
                    Illustrative Design Note:
                  </span>
                  <p className="text-xs text-brand-secondary leading-relaxed">
                    {project.designNotes[0]?.title} — {project.designNotes[0]?.details}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                <Link
                  href={`/work/${project.slug}`}
                  className="text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-brand-accent inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Technical Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] font-mono text-brand-muted">
                  Full Architecture Review →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
