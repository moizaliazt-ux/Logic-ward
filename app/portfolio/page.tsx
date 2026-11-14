import React from "react";
import type { Metadata } from "next";
import { PortfolioFilter } from "@/components/portfolio/PortfolioFilter";
import { ConversionCTA } from "@/components/home/ConversionCTA";
import { Sparkles, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies & Portfolio — Systems Architecture & Engineering Work",
  description:
    "Explore our reference architectures and technical demonstrations across ERP software, telehealth mobile apps, headless e-commerce, and automated AI pipelines.",
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full bg-[#071312] text-[#dae7de]">
      {/* Header Banner */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#091615] via-[#0d1f1c] to-[#071312] border-b border-[#1a342e]">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#2d584d]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-[#0d1f1c] text-[#dae7de] border border-[#1a342e]">
              <Sparkles className="w-3.5 h-3.5 text-[#94a49a]" />
              <span>Verified Engineering Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Selected Work & Architecture Case Studies
            </h1>
            <p className="text-base sm:text-lg text-[#94a49a] leading-relaxed">
              Explore how we solve complex data models, low-latency mobile synchronizations, and high-concurrency business operations through structured software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* NDA & Concept Disclosure Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="p-4 rounded-xl bg-[#0d1f1c] border border-[#1a342e] text-xs text-[#dae7de] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#dae7de] flex-shrink-0" />
            <span>
              <strong className="text-white">Confidentiality Note:</strong> Under strict commercial non-disclosure agreements, live client brand marks are replaced with clearly labeled Reference Implementations demonstrating real architecture code and verifiable performance benchmarks.
            </span>
          </div>
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
