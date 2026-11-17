import React from "react";
import type { Metadata } from "next";
import { PortfolioFilter } from "@/components/portfolio/PortfolioFilter";
import { ConversionCTA } from "@/components/home/ConversionCTA";
import { Sparkles, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Case Studies & Work — Systems Architecture & Engineering",
  description:
    "Explore our reference architectures and technical demonstrations across ERP software, telehealth mobile apps, headless e-commerce, and automated AI pipelines.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full bg-brand-surface  text-brand-text">
      {/* Header Banner */}
      <section className="page-hero relative py-16 md:py-24 bg-brand-surface text-brand-text border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-brand-card  text-brand-accent border border-brand-border">
              <Sparkles className="w-3.5 h-3.5" />
              <span>REFERENCE IMPLEMENTATIONS & CASE STUDIES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
              Selected Work & Architecture Case Studies
            </h1>
            <p className="text-base sm:text-lg text-brand-secondary leading-relaxed">
              Review labeled reference architectures and demonstration projects that explore business workflows, system boundaries, and technical trade-offs.
            </p>
          </div>
        </div>
      </section>

      {/* NDA & Concept Disclosure Notice (PRD § 9.3) */}
      <div className="bg-brand-card border-b border-brand-border py-4 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2.5 text-xs text-brand-muted">
          <ShieldAlert className="w-4 h-4 text-brand-accent flex-shrink-0" />
          <span>
            <strong className="text-brand-text">Concept disclosure:</strong> The examples below are reference architectures or demonstration projects, not client delivery claims. No performance benchmarks or business outcomes are implied.
          </span>
        </div>
      </div>

      {/* Main Filterable Projects */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <PortfolioFilter />
      </section>

      <ConversionCTA />
    </div>
  );
}
