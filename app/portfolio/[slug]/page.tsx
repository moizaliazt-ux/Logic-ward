import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
} from "lucide-react";
import {
  getCaseStudyBySlug,
  portfolioProjects,
} from "@/lib/data/portfolio";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ConversionCTA } from "@/components/home/ConversionCTA";

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
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      url: `${siteConfig.url}/portfolio/${project.slug}`,
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
    { name: "Portfolio", url: `${siteConfig.url}/portfolio` },
    { name: project.title, url: `${siteConfig.url}/portfolio/${project.slug}` },
  ];

  return (
    <div className="flex flex-col w-full bg-[#071312] text-[#dae7de]">
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Header */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-[#091615] via-[#0d1f1c] to-[#071312] border-b border-[#1a342e]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2d584d]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb nav */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-[#94a49a] mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-[#dae7de] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#1a342e]" />
            <Link href="/portfolio" className="hover:text-[#dae7de] transition-colors">
              Portfolio
            </Link>
            <ChevronRight className="w-3 h-3 text-[#1a342e]" />
            <span className="text-[#dae7de] font-medium truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-[#0d1f1c] text-[#dae7de] border border-[#1a342e]">
              <span className="w-2 h-2 rounded-full bg-[#dae7de] animate-pulse" />
              <span>{project.projectBadge}</span>
              <span className="text-[#1a342e]">•</span>
              <span className="text-[#94a49a]">{project.industry}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[#94a49a] leading-relaxed">
              {project.summary}
            </p>

            {/* Quick Metadata Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#091615] border border-[#1a342e] space-y-1">
                <span className="text-[#94a49a] block text-[10px] uppercase">
                  Category
                </span>
                <span className="text-white font-medium">{project.category}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#091615] border border-[#1a342e] space-y-1">
                <span className="text-[#94a49a] block text-[10px] uppercase">
                  Timeline
                </span>
                <span className="text-white font-medium">{project.duration}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#091615] border border-[#1a342e] space-y-1">
                <span className="text-[#94a49a] block text-[10px] uppercase">
                  Confidentiality
                </span>
                <span className="text-[#dae7de] font-medium">Bilateral NDA</span>
              </div>
              <div className="p-3 rounded-xl bg-[#091615] border border-[#1a342e] space-y-1">
                <span className="text-[#94a49a] block text-[10px] uppercase">
                  Status
                </span>
                <span className="text-[#dae7de] font-medium">In Production</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Breakdown Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Case Study Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* The Challenge */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.72px] text-[#b7c7bd]">
                <AlertCircle className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Architectural Bottlenecks & Operational Constraints
              </h2>
              <p className="text-sm sm:text-base text-[#94a49a] leading-relaxed">
                {project.challenge.overview}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.challenge.keyIssues.map((issue, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#091615] border border-[#1a342e] text-xs text-[#94a49a] flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dae7de] mt-1.5 flex-shrink-0" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy & Approach */}
            <div className="space-y-4 pt-6 border-t border-[#1a342e]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
                <Cpu className="w-4 h-4" />
                <span>Strategic Implementation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                The Engineering Strategy
              </h2>
              <p className="text-sm sm:text-base text-[#94a49a] leading-relaxed">
                {project.approach.strategy}
              </p>
              <div className="space-y-2 pt-2">
                {project.approach.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0d1f1c] border border-[#1a342e] flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-md bg-[#091615] border border-[#1a342e] font-mono text-[#dae7de] font-bold text-xs flex items-center justify-center flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-xs text-[#94a49a] pt-0.5 leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights Grid */}
            <div className="space-y-4 pt-6 border-t border-[#1a342e]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
                <Layers className="w-4 h-4" />
                <span>Deep Architecture</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Architecture Highlights & Decisions
              </h2>
              <p className="text-sm text-[#94a49a] leading-relaxed">
                {project.solution.overview}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {project.solution.architectureHighlights.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#0d1f1c] border border-[#1a342e] space-y-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#dae7de]" />
                    <p className="text-xs text-[#dae7de] leading-relaxed">
                      {arch}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Modules Delivered */}
            <div className="space-y-4 pt-6 border-t border-[#1a342e]">
              <span className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de] block">
                Deliverable Modules
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Delivered Components & Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#091615] border border-[#1a342e] space-y-1.5"
                  >
                    <h3 className="text-xs font-bold text-white tracking-tight flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#dae7de]" />
                      <span>{mod.title}</span>
                    </h3>
                    <p className="text-[11px] text-[#94a49a] leading-relaxed pl-5.5">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Outcomes */}
            <div className="space-y-4 pt-6 border-t border-[#1a342e]">
              <span className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de] block">
                Quantitative Results
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Verified Technical Outcomes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.projectOutcomes.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0d1f1c] border border-[#1a342e] space-y-1"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#dae7de]">
                      <CheckCircle2 className="w-4 h-4 text-[#dae7de] flex-shrink-0" />
                      <span>{metric.metricsLabel}</span>
                    </div>
                    <p className="text-[11px] text-[#94a49a] leading-relaxed pl-6">
                      {metric.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Project Tech Stack */}
            <div className="p-6 rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
                Technologies Utilized
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#091615] border border-[#1a342e] text-[#dae7de]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Scope of Work */}
            <div className="p-6 rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
                Agency Responsibilities
              </h3>
              <ul className="space-y-2 text-xs text-[#94a49a]">
                {project.agencyRole.map((role, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dae7de]" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Request Architecture Review CTA */}
            <div className="p-6 rounded-[24px] bg-gradient-to-br from-[#1a342e] via-[#0d1f1c] to-[#091615] border border-[#2d584d] space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#dae7de] block">
                Technical Scoping
              </span>
              <h3 className="text-base font-bold text-white tracking-tight">
                Need similar architecture engineered for your organization?
              </h3>
              <p className="text-xs text-[#94a49a] leading-relaxed">
                We review system requirements, data workflows, and concurrency needs under NDA.
              </p>
              <Link
                href="/contact"
                className="w-full py-2.5 rounded-lg text-xs font-semibold text-[#091615] bg-[#dae7de] hover:bg-white transition-colors block text-center"
              >
                Book Technical Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConversionCTA />
    </div>
  );
}
