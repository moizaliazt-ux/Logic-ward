import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  getCaseStudyBySlug,
  portfolioProjects,
} from "@/lib/data/portfolio";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ConversionCTA } from "@/components/home/ConversionCTA";

export const instant = false;

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    alternates: {
      canonical: `${siteConfig.url}/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      url: `${siteConfig.url}/work/${project.slug}`,
      siteName: siteConfig.name,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Our Work", url: `${siteConfig.url}/work` },
    { name: project.title, url: `${siteConfig.url}/work/${project.slug}` },
  ];

  return (
    <div className="flex flex-col w-full bg-brand-surface  text-brand-text">
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Header */}
      <section className="page-hero relative py-14 md:py-20 bg-brand-surface text-brand-text border-b border-brand-border">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-brand-muted flex-wrap">
            <Link href="/" className="hover:text-brand-text transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-brand-secondary" />
            <Link href="/work" className="hover:text-brand-text transition-colors">Our Work</Link>
            <ChevronRight className="w-3 h-3 text-brand-secondary" />
            <span className="text-brand-text font-medium">{project.title}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-brand-card border border-brand-border  text-brand-accent">
                {project.projectBadge}
              </span>
              <span className="text-xs text-brand-muted font-mono">
                {project.industry}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
              {project.title}
            </h1>
            <p className="text-sm font-mono text-brand-secondary">
              {project.clientType}
            </p>
            <p className="text-base sm:text-lg text-brand-secondary leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-brand-card border border-brand-border  text-brand-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* NDA Notice */}
      <div className="bg-brand-card border-b border-brand-border py-3.5 px-4 text-center">
        <p className="text-xs text-brand-muted max-w-4xl mx-auto">
          <strong className="text-brand-text">Concept disclosure:</strong> This is a {project.projectBadge.toLowerCase()}, not a client delivery record. The architecture and design notes are illustrative; no production results or performance benchmarks are claimed.
        </p>
      </div>

      {/* Main Case Study Body */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Challenge & Proposed Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* The Operational Challenge */}
            <div className="lg:col-span-6 bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                  OPERATIONAL BOTTLENECKS
                </span>
                <h2 className="text-2xl font-bold text-brand-text mt-1">
                  The Problem & Constraints
                </h2>
                <p className="text-sm text-brand-secondary leading-relaxed mt-2">
                  {project.challenge.overview}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-brand-border">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-text block">
                  Key Technical Roadblocks:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-secondary">
                  {project.challenge.keyIssues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Architecture Strategy & Proposed Solution */}
            <div className="lg:col-span-6 bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                  REFERENCE ARCHITECTURE
                </span>
                <h2 className="text-2xl font-bold text-brand-text mt-1">
                  Proposed Approach
                </h2>
                <p className="text-sm text-brand-secondary leading-relaxed mt-2">
                  {project.approach.strategy}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-brand-border">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-text block">
                  Design Considerations:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-secondary">
                  {project.approach.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Solution Architecture Highlights & Key Modules */}
          <div className="bg-brand-card rounded-2xl border border-brand-border p-8 sm:p-10 shadow-sm space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                SYSTEM MODULES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
                Architecture Concepts & Key Features
              </h2>
              <p className="text-sm text-brand-secondary leading-relaxed">
                {project.solution.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-brand-surface border border-brand-border space-y-2"
                >
                  <h3 className="text-base font-bold text-brand-text">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Illustrative design notes; this is not a measured client outcome. */}
          <div className="bg-brand-surface text-brand-text rounded-2xl border border-brand-border p-8 sm:p-10 space-y-6 shadow-md">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-brand-accent">
                ILLUSTRATIVE DESIGN NOTES
              </span>
              <h3 className="text-2xl font-bold text-brand-text mt-1">
                What a real implementation would validate
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.designNotes.map((note) => (
                <div
                  key={note.title}
                  className="p-6 rounded-xl bg-brand-card border border-brand-border space-y-2"
                >
                  <span className="text-xs font-mono uppercase text-brand-accent block font-semibold">
                    {note.title}
                  </span>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    {note.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ConversionCTA />
    </div>
  );
}
