import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Sparkles,
  PhoneCall,
  ShieldCheck,
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
    <div className="flex flex-col w-full">
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Header */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-[#060a12] via-[#091122] to-[#060a12] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb nav */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/portfolio" className="hover:text-cyan-400 transition-colors">
              Portfolio
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-cyan-400 font-medium truncate max-w-[240px] sm:max-w-none">
              {project.title}
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                {project.projectBadge}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Industry: {project.industry}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 font-mono">
                Duration: {project.duration}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {project.summary}
            </p>

            {/* Tech Stack Bar */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Breakdown Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main 8-col Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* The Challenge */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  The Architectural Challenge
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Operational Bottlenecks & Legacy Constraints
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.challenge.overview}
                </p>
              </div>

              <div className="space-y-2.5">
                {project.challenge.keyIssues.map((issue, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 flex-shrink-0" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Approach */}
            <div className="space-y-6 pt-6 border-t border-slate-800/80">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  Engineering Strategy & Execution
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  How We Structured the Solution
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.approach.strategy}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.approach.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#090e1a] border border-slate-800 space-y-1.5"
                  >
                    <span className="text-[10px] font-mono font-bold text-cyan-400">
                      PHASE 0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-6 pt-6 border-t border-slate-800/80">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  System Architecture Highlights
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {project.solution.overview}
                </h2>
              </div>

              <div className="space-y-3">
                {project.solution.architectureHighlights.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-6 pt-6 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Feature Breakdown
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Core Functional Modules
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#090e1a] border border-slate-800 space-y-1.5"
                  >
                    <h3 className="text-sm font-bold text-white">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 4-col Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Verified Outcomes Card */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                  Telemetry & Outcomes
                </span>
                <h3 className="text-base font-bold text-white">
                  Verified Technical Results
                </h3>
              </div>

              <div className="space-y-3 pt-2">
                {project.projectOutcomes.map((out, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1"
                  >
                    <div className="text-xs font-bold text-cyan-300">
                      {out.metricsLabel}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {out.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Agency Roles Card */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Engineering Roles Deployed
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.agencyRole.map((role, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Similar System Scoping CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-800/40 space-y-4">
              <h3 className="text-base font-bold text-white">
                Need a similar system engineered?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We can adapt this exact architectural pattern to your organization's specific database schema, compliance rules, and operational workflow.
              </p>
              <Link
                href="/contact"
                className="w-full py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors block text-center"
              >
                Discuss System Architecture
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConversionCTA />
    </div>
  );
}

