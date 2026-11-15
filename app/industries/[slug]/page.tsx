import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { industriesData } from "@/lib/data/industries";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  return industriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData.find((ind) => ind.slug === slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.name} Software Systems & Architecture`,
    description: industry.shortDescription,
    alternates: {
      canonical: `${siteConfig.url}/industries/${industry.slug}`,
    },
    openGraph: {
      title: `${industry.name} | ${siteConfig.name}`,
      description: industry.shortDescription,
      url: `${siteConfig.url}/industries/${industry.slug}`,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesData.find((ind) => ind.slug === slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Industries", url: `${siteConfig.url}/industries` },
    { name: industry.name, url: `${siteConfig.url}/industries/${industry.slug}` },
  ];

  return (
    <div className="w-full flex flex-col bg-brand-surface">
      <BreadcrumbJsonLd items={breadcrumbs} />
      {/* Hero Header */}
      <section className="bg-brand-surface text-brand-text pt-24 pb-20 border-b border-brand-border relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-brand-muted flex-wrap">
            <Link href="/" className="hover:text-brand-text transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-brand-secondary" />
            <Link href="/industries" className="hover:text-brand-text transition-colors">Industries</Link>
            <ChevronRight className="w-3 h-3 text-brand-secondary" />
            <span className="text-brand-text font-medium">{industry.name}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-brand-card border border-brand-border  text-brand-accent">
              <span>TARGET INDUSTRY DOMAIN</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              {industry.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              {industry.overview}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg text-sm font-semibold text-brand-background bg-brand-accent hover:bg-brand-accent-hover transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>Request Scoping for {industry.name}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Logicward,%20I%20would%20like%20to%20discuss%20a%20software%20project%20for%20the%20${encodeURIComponent(industry.name)}%20sector.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg text-sm font-semibold text-brand-text  bg-brand-card border border-brand-border hover:bg-brand-elevated transition-colors inline-flex items-center gap-2"
            >
              <span>Direct WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Columns: Challenges, Workflows, Demonstration Blueprint */}
            <div className="lg:col-span-8 space-y-12">
              {/* Operational Challenges */}
              <div className="bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-brand-text">
                    Operational Bottlenecks We Eliminate
                  </h2>
                  <p className="text-sm text-brand-muted mt-1">
                    Typical inefficiencies encountered by organizations in {industry.name} before modern system adoption:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {industry.operationalChallenges.map((ch, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-brand-surface border border-brand-border flex items-start gap-3"
                    >
                      <AlertCircle className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                        {ch}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Workflows */}
              <div className="bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-brand-text">
                    Automated Domain Workflows & Architecture
                  </h2>
                  <p className="text-sm text-brand-muted mt-1">
                    Key system modules designed to streamline operations and ensure data integrity:
                  </p>
                </div>

                <div className="space-y-4">
                  {industry.keyWorkflows.map((wf, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-brand-border  bg-brand-card hover:border-brand-accent/40 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                        <h3 className="text-base font-semibold text-brand-text">
                          {wf.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed pl-6">
                        {wf.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reference Concept / Case Demonstration */}
              <div className="bg-brand-surface text-brand-text rounded-2xl border border-brand-border p-8 space-y-4 shadow-md">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 rounded text-xs font-mono uppercase tracking-wider bg-brand-card border border-brand-border  text-brand-accent">
                    {industry.referenceConcept.label}
                  </span>
                  <span className="text-xs text-brand-muted font-mono">
                    ARCHITECTURE SPECIFICATION
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-brand-text">
                  {industry.referenceConcept.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {industry.referenceConcept.description}
                </p>
                <div className="pt-2 text-xs text-brand-muted border-t border-brand-border/80">
                  Note: Client projects in this industry sector remain strictly confidential under bilateral non-disclosure agreements.
                </div>
              </div>

              {/* Compliance Notice if present */}
              {industry.complianceNotice && (
                <div className="p-4 rounded-xl bg-brand-elevated border border-brand-border text-xs text-brand-secondary">
                  <strong className="text-brand-text">Compliance Notice:</strong> {industry.complianceNotice}
                </div>
              )}
            </div>

            {/* Right 4 Columns: Applicable Services & Solutions Links */}
            <div className="lg:col-span-4 space-y-8">
              {/* Applicable Services */}
              <div className="bg-brand-card rounded-2xl border border-brand-border p-6 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-brand-text uppercase tracking-wider text-xs">
                  Applicable Services
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {industry.applicableServices.map((srv, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-brand-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link
                    href="/services"
                    className="text-xs font-bold text-brand-accent hover:underline inline-flex items-center gap-1"
                  >
                    <span>Browse 40+ Services Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Related Platform Solutions */}
              <div className="bg-brand-card rounded-2xl border border-brand-border p-6 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-brand-text uppercase tracking-wider text-xs">
                  Related Management Systems
                </h3>
                <div className="space-y-2">
                  {industry.relatedSolutions.map((sol, idx) => (
                    <Link
                      key={idx}
                      href={sol.href}
                      className="p-3 rounded-lg border border-brand-border hover:border-brand-accent hover:bg-brand-elevated transition-all block text-xs font-medium text-brand-text"
                    >
                      {sol.title} →
                    </Link>
                  ))}
                </div>
              </div>

              {/* Scoping Card */}
              <div className="bg-brand-card  text-brand-text rounded-2xl border border-brand-border p-6 space-y-4 shadow-sm">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-accent block">
                  TECHNICAL CONSULTATION
                </span>
                <h4 className="text-lg font-bold text-brand-text">
                  Plan Your {industry.name} Platform
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Discuss your workflows and constraints to determine whether a tailored technical scoping brief is the right next step.
                </p>
                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-brand-accent hover:bg-brand-accent-hover text-brand-background text-center block transition-colors"
                >
                  Book Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
