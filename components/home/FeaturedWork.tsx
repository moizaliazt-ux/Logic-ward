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

        <div className="border-y border-brand-border">
        {portfolioProjects.slice(0, 1).map((project) => (
          <article
            key={project.id}
            className="grid grid-cols-1 gap-8 py-8 sm:py-10 lg:grid-cols-12 lg:gap-10"
          >
            <div className="space-y-5 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono">
                <span className="rounded border border-brand-border bg-brand-surface px-2.5 py-1 text-brand-accent">
                  {project.projectBadge}
                </span>
                <span className="text-brand-muted">{project.industry}</span>
              </div>
              <h3 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-brand-text sm:text-4xl">
                {project.title}
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-brand-secondary">
                {project.summary}
              </p>
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-text"
              >
                Explore the reference architecture
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

        {portfolioProjects.length > 1 && (
          <div className="divide-y divide-brand-border border-t border-brand-border">
            {portfolioProjects.slice(1).map((project, index) => (
              <article
                key={project.id}
                className="grid grid-cols-[2.25rem_1fr_auto] items-start gap-4 py-5 sm:grid-cols-[3rem_minmax(0,1.3fr)_minmax(12rem,1fr)_auto] sm:items-center sm:gap-6"
              >
                <span className="font-mono text-xs text-brand-muted">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <div className="space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-brand-muted">
                    {project.projectBadge} · {project.industry}
                  </p>
                  <h3 className="text-base font-semibold leading-snug text-brand-text">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-6 text-brand-secondary sm:hidden">
                    {project.summary}
                  </p>
                </div>
                <p className="hidden text-sm leading-6 text-brand-secondary sm:block">
                  {project.summary}
                </p>
                <Link
                  href={`/work/${project.slug}`}
                  aria-label={`Read reference case study: ${project.title}`}
                  className="mt-1 text-brand-accent transition-transform hover:translate-x-1 sm:mt-0"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
