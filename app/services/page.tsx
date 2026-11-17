import React from "react";
import type { Metadata } from "next";
import { ServiceDirectory } from "@/components/services/ServiceDirectory";
import { ConversionCTA } from "@/components/home/ConversionCTA";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Services Directory — Software & Engineering Capabilities",
  description:
    "Explore our complete service portfolio across 7 disciplines: Custom Software & ERP, AI Automation, Web & E-Commerce, Mobile Apps, Growth & SEO, IT Infrastructure, and Content.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-brand-surface  text-brand-text">
      {/* Header Banner */}
      <section className="page-hero relative py-16 md:py-24 bg-brand-surface text-brand-text border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-brand-card  text-brand-accent border border-brand-border">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FULL-SPECTRUM ENGINEERING PORTFOLIO</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Services & Engineering Capabilities
            </h1>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Explore service topics across seven disciplines. Deliverables, documentation, ownership, review cadence, and commercial terms are confirmed for each engagement in writing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Directory */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <ServiceDirectory />
      </section>

      <ConversionCTA />
    </div>
  );
}
