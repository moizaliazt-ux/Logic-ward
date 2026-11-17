import React from "react";
import Link from "next/link";
import {
  Building2,
  Users2,
  GraduationCap,
  Boxes,
  Receipt,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { solutionsData } from "@/lib/data/solutions";

export function SolutionsPreview() {
  const featuredSolution = solutionsData[0];

  const getIcon = (id: string) => {
    switch (id) {
      case "erp-enterprise":
        return <Building2 className="w-5 h-5 text-brand-accent" />;
      case "crm-pipeline":
        return <Users2 className="w-5 h-5 text-brand-accent" />;
      case "school-college":
        return <GraduationCap className="w-5 h-5 text-brand-accent" />;
      case "inventory-stock":
        return <Boxes className="w-5 h-5 text-brand-accent" />;
      case "pos-billing":
        return <Receipt className="w-5 h-5 text-brand-accent" />;
      case "dashboards-bi":
        return <BarChart3 className="w-5 h-5 text-brand-accent" />;
      default:
        return <Building2 className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <section className="py-20 bg-brand-card border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
              OPERATIONAL MANAGEMENT PLATFORMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight">
              Business Systems Tailored to Your Workflows
            </h2>
            <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
              Explore example ERP, CRM, institutional, and point-of-sale system outlines. Actual modules, integrations, and requirements are confirmed during project scoping.
            </p>
          </div>

          <Link
            href="/solutions"
            className="text-sm font-semibold text-brand-accent hover:text-brand-accent inline-flex items-center gap-1.5 group flex-shrink-0"
          >
            <span>Browse all {solutionsData.length} solution outlines</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-5 rounded-2xl border border-brand-border bg-brand-surface p-7 sm:p-9 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-muted">
                  Featured system / 01
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-border bg-brand-card">
                  {getIcon(featuredSolution.id)}
                </span>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
                  {featuredSolution.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-brand-text">
                  {featuredSolution.title}
                </h3>
                <p className="text-sm font-medium text-brand-secondary">
                  {featuredSolution.tagline}
                </p>
                <p className="text-sm leading-relaxed text-brand-secondary">
                  {featuredSolution.shortSummary}
                </p>
              </div>

              <ul className="space-y-3 border-t border-brand-border pt-5 text-sm text-brand-secondary">
                {featuredSolution.coreModules.slice(0, 4).map((module) => (
                  <li key={module} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent" />
                    <span>{module}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4 border-t border-brand-border pt-5">
              <Link
                href={`/solutions/${featuredSolution.slug}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand-accent px-4 text-sm font-semibold text-brand-background transition-colors hover:bg-brand-accent-hover"
              >
                View system detail
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-brand-secondary transition-colors hover:text-brand-text"
              >
                Discuss project scope
              </Link>
            </div>
          </article>

          <div className="lg:col-span-7 divide-y divide-brand-border border-y border-brand-border">
            {solutionsData.slice(1, 6).map((solution, index) => (
              <Link
                key={solution.id}
                href={`/solutions#${solution.slug}`}
                className="group flex min-h-24 items-center gap-4 py-5 transition-colors hover:bg-brand-surface/70 sm:gap-6 sm:px-4"
              >
                <span className="w-8 flex-shrink-0 font-mono text-xs text-brand-muted">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-brand-border bg-brand-card group-hover:border-brand-accent/50">
                  {getIcon(solution.id)}
                </span>
                <span className="min-w-0 flex-1 space-y-1">
                  <span className="block font-semibold text-brand-text transition-colors group-hover:text-brand-accent">
                    {solution.title}
                  </span>
                  <span className="block text-xs leading-relaxed text-brand-muted line-clamp-2">
                    {solution.shortSummary}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-brand-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-accent" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
