import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Lock,
  Workflow,
  FileCheck2,
  ChevronRight,
} from "lucide-react";
import {
  getSolutionBySlug,
  getAllSolutionSlugs,
} from "@/lib/data/solutions";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import { ConversionCTA } from "@/components/home/ConversionCTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const instant = false;

export async function generateStaticParams() {
  const slugs = getAllSolutionSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: `${solution.title} | Enterprise Software Architecture`,
    description: solution.shortSummary,
    alternates: {
      canonical: `${siteConfig.url}/solutions/${solution.slug}`,
    },
    openGraph: {
      title: `${solution.title} | ${siteConfig.name}`,
      description: solution.shortSummary,
      url: `${siteConfig.url}/solutions/${solution.slug}`,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const whatsAppUrl = getWhatsAppUrl(
    `Hello Logicward, I would like to discuss a tailored ${solution.title}.`,
  );
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Solutions", url: `${siteConfig.url}/solutions` },
    { name: solution.title, url: `${siteConfig.url}/solutions/${solution.slug}` },
  ];

  return (
    <div className="flex flex-col w-full bg-brand-surface  text-brand-text">
      <BreadcrumbJsonLd items={breadcrumbs} />
      {/* Hero Header */}
      <section className="page-hero relative py-16 md:py-24 bg-brand-surface text-brand-text border-b border-brand-border">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-brand-muted flex-wrap">
            <Link href="/" className="hover:text-brand-text transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-brand-secondary" />
            <Link href="/solutions" className="hover:text-brand-text transition-colors">Solutions</Link>
            <ChevronRight className="w-3 h-3 text-brand-secondary" />
            <span className="text-brand-text font-medium">{solution.title}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-brand-card border border-brand-border  text-brand-accent">
              <span>{solution.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
              {solution.title}
            </h1>
            <p className="text-lg text-brand-accent font-medium">
              {solution.tagline}
            </p>
            <p className="text-base sm:text-lg text-brand-secondary leading-relaxed">
              {solution.shortSummary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg text-sm font-semibold text-brand-background bg-brand-accent hover:bg-brand-accent-hover transition-colors inline-flex items-center gap-2 shadow-sm shadow-brand-background/20"
            >
              <span>Request Scoping for this System</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            {whatsAppUrl && (
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg text-sm font-semibold text-brand-secondary hover:text-brand-text bg-brand-card border border-brand-border hover:bg-brand-elevated transition-colors inline-flex items-center gap-2"
              >
                <span>Direct WhatsApp Inquiry</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Scope Disclaimer Notice (PRD § 7) */}
      <div className="bg-brand-card border-b border-brand-border py-3.5 px-4 text-center">
        <p className="text-xs text-brand-muted max-w-4xl mx-auto">
          <strong className="text-brand-text">Scope note:</strong> Modules, integrations, controls, and workflows below are planning examples. Feasibility, security, delivery, ownership, and support terms are confirmed in the written project scope.
        </p>
      </div>

      {/* Main Solution Architecture Body */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* User Roles & Permissions and Core Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Core Modules */}
            <div className="lg:col-span-7 bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                  FUNCTIONAL DECOMPOSITION
                </span>
                <h2 className="text-2xl font-bold text-brand-text mt-1">
                  Core Modules & Feature Breakdown
                </h2>
                <p className="text-sm text-brand-secondary mt-1">
                  Example building blocks to consider during requirements discovery:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {solution.coreModules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-brand-surface border border-brand-border flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-brand-text">{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* User Roles & Permissions */}
            <div className="lg:col-span-5 bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                  GOVERNANCE & ACCESS CONTROL
                </span>
                <h2 className="text-2xl font-bold text-brand-text mt-1">
                  User Roles & Permissions
                </h2>
                <p className="text-sm text-brand-secondary mt-1">
                  Example roles and access boundaries that may be considered:
                </p>
              </div>

              <div className="space-y-3">
                {solution.userRoles.map((role, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-brand-surface border border-brand-border space-y-1"
                  >
                    <span className="text-xs font-bold text-brand-text block">
                      {role.role}
                    </span>
                    <span className="text-xs text-brand-secondary leading-relaxed block">
                      {role.permissions}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Operational Workflows */}
          <div className="bg-brand-card rounded-2xl border border-brand-border p-8 sm:p-10 shadow-sm space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                SYSTEM WORKFLOWS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
                Main Operational Workflows
              </h2>
              <p className="text-sm text-brand-secondary leading-relaxed">
                Example process flows for requirements planning:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solution.mainWorkflows.map((wf, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-brand-surface border border-brand-border space-y-4"
                >
                  <div className="flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-brand-accent" />
                    <h3 className="text-base font-bold text-brand-text">
                      {wf.title}
                    </h3>
                  </div>
                  <ol className="space-y-2 text-xs sm:text-sm text-brand-secondary">
                    {wf.steps.map((st, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-brand-card border border-brand-border flex items-center justify-center font-mono text-[11px] font-bold text-brand-accent flex-shrink-0">
                          {sIdx + 1}
                        </span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          {/* Reporting, Dashboards & Integrations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Reporting & Dashboards */}
            <div className="lg:col-span-6 bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                  EXECUTIVE VISIBILITY
                </span>
                <h3 className="text-2xl font-bold text-brand-text mt-1">
                  Reporting & Dashboards
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-brand-secondary">
                {solution.reportingDashboards.map((rep, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-surface border border-brand-border">
                    <BarChart3 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                    <span>{rep}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Integrations & Data Migration */}
            <div className="lg:col-span-6 bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                  DATA INTEROPERABILITY
                </span>
                <h3 className="text-2xl font-bold text-brand-text mt-1">
                  Integrations & Migration Strategy
                </h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-text block">
                    Potential Integrations (subject to access and feasibility):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {solution.integrationsDataMigration.integrations.map((integ, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-brand-surface border border-brand-border  text-brand-secondary"
                      >
                        {integ}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-1.5">
                  <span className="text-xs font-bold text-brand-text block">
                    Migration Approach:
                  </span>
                  <p className="text-xs text-brand-secondary leading-relaxed">
                    {solution.integrationsDataMigration.migrationApproach}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security, Backups, Customization & Implementation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Security & Audit */}
            <div className="lg:col-span-6 bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-brand-accent" />
                <h3 className="text-xl font-bold text-brand-text">
                  Security, Operations & Audit Planning
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-brand-secondary">
                <p>
                  <strong className="text-brand-text">Access Control:</strong> {solution.securityAuditBackups.accessControl}
                </p>
                <p>
                  <strong className="text-brand-text">Backup Strategy:</strong> {solution.securityAuditBackups.backupStrategy}
                </p>
                <p>
                  <strong className="text-brand-text">Audit Logging:</strong> {solution.securityAuditBackups.auditLogging}
                </p>
              </div>
            </div>

            {/* Customization Boundaries & Timeline */}
            <div className="lg:col-span-6 bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-brand-accent" />
                <h3 className="text-xl font-bold text-brand-text">
                  Implementation & Training Considerations
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-brand-secondary">
                <p>
                  <strong className="text-brand-text">Delivery schedule:</strong> {solution.implementationTraining.deliverySchedule}
                </p>
                <p>
                  <strong className="text-brand-text">Phased Delivery:</strong> {solution.implementationTraining.phases.join(" → ")}
                </p>
                <p>
                  <strong className="text-brand-text">Training Support:</strong> {solution.implementationTraining.trainingProvided}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ConversionCTA />
    </div>
  );
}
