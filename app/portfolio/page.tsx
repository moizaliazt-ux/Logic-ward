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
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#060a12] via-[#091122] to-[#060a12] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-900 text-cyan-400 border border-slate-800">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Engineering Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Selected Work & Architecture Case Studies
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore how we solve complex data models, low-latency mobile synchronizations, and high-concurrency business operations through structured software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* NDA & Concept Disclosure Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
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
