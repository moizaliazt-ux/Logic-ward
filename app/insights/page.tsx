import React from "react";
import type { Metadata } from "next";
import { InsightsDirectory } from "@/components/insights/InsightsDirectory";
import { ConversionCTA } from "@/components/home/ConversionCTA";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Technical Perspectives — Software Architecture & AI Scoping",
  description:
    "Engineering essays, strategic decision frameworks, and practical guides on Custom Software, AI Automation, Answer Engine Optimization (AEO), and Next.js performance.",
};

export default function InsightsPage() {
  return (
    <div className="flex flex-col w-full bg-brand-background  text-brand-text">
      {/* Header Banner */}
      <section className="page-hero relative py-16 md:py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-brand-card  text-brand-text border border-brand-border">
              <Sparkles className="w-3.5 h-3.5 text-brand-muted" />
              <span>Engineering & Technology Perspectives</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
              Insights, Frameworks & Case Notes
            </h1>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Practical writing on architecture, cost trade-offs, automation, and web engineering. Articles offer general guidance, not measured client outcomes or performance guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* Main Insights Directory */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <InsightsDirectory />
      </section>

      <ConversionCTA />
    </div>
  );
}
