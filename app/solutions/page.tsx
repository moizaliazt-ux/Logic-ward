import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Users2,
  GraduationCap,
  Boxes,
  Receipt,
  BarChart3,
  Dumbbell,
  Wheat,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
} from "lucide-react";
import { solutionsData } from "@/lib/data/solutions";
import { ConversionCTA } from "@/components/home/ConversionCTA";

export const metadata: Metadata = {
  title: "Management Solutions & Custom ERP Systems",
  description:
    "Example outlines for ERP, CRM, education, HRM, inventory, POS, booking, and reporting systems. Project requirements and scope are confirmed individually.",
};

export default function SolutionsPage() {
  const getIcon = (id: string) => {
    switch (id) {
      case "erp-enterprise":
        return <Building2 className="w-5 h-5 text-brand-accent" />;
      case "crm-pipeline":
        return <Users2 className="w-5 h-5 text-brand-accent" />;
      case "school-college":
        return <GraduationCap className="w-5 h-5 text-brand-accent" />;
      case "hrm-payroll":
        return <Users2 className="w-5 h-5 text-brand-accent" />;
      case "inventory-stock":
        return <Boxes className="w-5 h-5 text-brand-accent" />;
      case "pos-billing":
        return <Receipt className="w-5 h-5 text-brand-accent" />;
      case "gym-membership":
        return <Dumbbell className="w-5 h-5 text-brand-accent" />;
      case "agriculture-business":
        return <Wheat className="w-5 h-5 text-brand-accent" />;
      case "booking-workflow":
        return <CalendarCheck className="w-5 h-5 text-brand-accent" />;
      case "dashboards-bi":
        return <BarChart3 className="w-5 h-5 text-brand-accent" />;
      default:
        return <Building2 className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <div className="flex flex-col w-full bg-brand-surface  text-brand-text">
      {/* Header Banner */}
      <section className="page-hero relative py-16 md:py-24 bg-brand-surface text-brand-text border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-brand-card  text-brand-accent border border-brand-border">
              <Layers className="w-3.5 h-3.5" />
              <span>OPERATIONAL SYSTEMS ARCHITECTURE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
              Business Management Systems & Custom ERPs
            </h1>
            <p className="text-base sm:text-lg text-brand-secondary leading-relaxed">
              Explore example system architectures for common operational needs. The modules, integrations, and delivery approach for any project depend on discovery and written scope.
            </p>
          </div>
        </div>
      </section>

      {/* Scope Disclaimer Notice (PRD § 7) */}
      <div className="bg-brand-card border-b border-brand-border py-3.5 px-4 text-center">
        <p className="text-xs text-brand-muted max-w-4xl mx-auto">
          <strong className="text-brand-text">Scope note:</strong> The modules and workflows below are planning examples, not a guarantee of implementation, compatibility, security controls, schedule, or outcome. Feasibility and terms are confirmed for each project.
        </p>
      </div>

      <section className="mx-auto w-full max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
        {solutionsData.slice(0, 1).map((solution, index) => (
          <article
            key={solution.id}
            id={solution.slug}
            className="scroll-mt-24 border-y border-brand-border py-8 sm:py-10"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="space-y-6 lg:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-border bg-brand-card">
                    {getIcon(solution.id)}
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-brand-muted">
                      Featured system / {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-xs font-mono text-brand-accent">
                      {solution.badge}
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">
                    {solution.title}
                  </h2>
                  <p className="mt-2 text-sm text-brand-accent">{solution.tagline}</p>
                  <p className="mt-4 text-sm leading-7 text-brand-secondary">
                    {solution.shortSummary}
                  </p>
                </div>
                <div className="border-l-2 border-brand-accent pl-4">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-brand-muted">
                    Workflow considerations
                  </p>
                  <p className="mt-2 text-sm leading-6 text-brand-secondary">
                    {solution.workflowAdaptation}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-brand-muted">
                    Example sectors
                  </p>
                  <p className="text-sm text-brand-secondary">{solution.targetIndustry}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-brand-muted">
                    Technical options to assess
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {solution.technicalHighlights.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-brand-border px-2.5 py-1 text-[10px] font-mono text-brand-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8 lg:col-span-7">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-brand-muted">
                    Possible system modules
                  </h3>
                  <ul className="mt-3 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                    {solution.coreModules.map((module) => (
                      <li
                        key={module}
                        className="flex gap-2 border-t border-brand-border py-3 text-sm text-brand-secondary"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent" aria-hidden="true" />
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {solution.mainWorkflows[0] && (
                  <div className="border-t border-brand-border pt-5">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-brand-muted">
                      Example workflow · {solution.mainWorkflows[0].title}
                    </h3>
                    <ol className="mt-4 flex flex-wrap items-center gap-2">
                      {solution.mainWorkflows[0].steps.map((step, stepIndex) => (
                        <li key={step} className="flex items-center gap-2">
                          <span className="rounded-lg border border-brand-border bg-brand-card px-3 py-2 text-xs text-brand-text">
                            {step}
                          </span>
                          {stepIndex < solution.mainWorkflows[0].steps.length - 1 && (
                            <ArrowRight className="h-3.5 w-3.5 text-brand-accent" aria-hidden="true" />
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                <div className="border-t border-brand-border pt-5">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-brand-muted">
                    Design considerations
                  </h3>
                  <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {solution.keyCapabilities.map((capability) => (
                      <div key={capability.title}>
                        <h4 className="text-sm font-semibold text-brand-text">
                          {capability.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-brand-secondary">
                          {capability.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3 border-t border-brand-border pt-5">
              <Link
                href={`/solutions/${solution.slug}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand-accent px-4 text-sm font-semibold text-brand-background transition-colors hover:bg-brand-accent-hover"
              >
                Explore system details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center text-sm font-medium text-brand-secondary transition-colors hover:text-brand-text"
              >
                Discuss project scope
              </Link>
            </div>
          </article>
        ))}

        <div className="divide-y divide-brand-border border-y border-brand-border">
          {solutionsData.slice(1).map((solution, index) => (
            <article
              key={solution.id}
              id={solution.slug}
              className="scroll-mt-24 py-8 sm:py-10"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="space-y-5 lg:col-span-4">
                  <div className="flex items-start gap-3">
                    <span className="pt-1 font-mono text-xs text-brand-muted">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-brand-border bg-brand-card">
                      {getIcon(solution.id)}
                    </span>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-brand-accent">
                        {solution.badge}
                      </p>
                      <h2 className="mt-1 text-xl font-semibold tracking-tight text-brand-text">
                        {solution.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-brand-secondary">
                    {solution.shortSummary}
                  </p>
                  <div className="space-y-2 border-l border-brand-border pl-3">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-brand-muted">
                      Workflow considerations
                    </p>
                    <p className="text-sm leading-6 text-brand-secondary">
                      {solution.workflowAdaptation}
                    </p>
                  </div>
                  <p className="text-xs leading-5 text-brand-muted">
                    <span className="font-semibold text-brand-secondary">Example sectors:</span>{" "}
                    {solution.targetIndustry}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-[11px] font-mono uppercase tracking-wider text-brand-muted">
                    Possible modules
                  </h3>
                  <ul className="mt-2 divide-y divide-brand-border border-y border-brand-border">
                    {solution.coreModules.map((module) => (
                      <li key={module} className="py-2.5 text-sm text-brand-secondary">
                        {module}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {solution.technicalHighlights.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-brand-border px-2 py-1 text-[10px] font-mono text-brand-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 lg:col-span-4">
                  <h3 className="text-[11px] font-mono uppercase tracking-wider text-brand-muted">
                    Design considerations
                  </h3>
                  {solution.keyCapabilities.map((capability) => (
                    <div key={capability.title} className="border-t border-brand-border pt-3">
                      <h4 className="text-sm font-semibold text-brand-text">
                        {capability.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-brand-secondary">
                        {capability.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={`/solutions/${solution.slug}`}
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-text"
              >
                Explore system details
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <ConversionCTA />
    </div>
  );
}
