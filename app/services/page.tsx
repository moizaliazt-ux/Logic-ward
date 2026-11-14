import React from "react";
import type { Metadata } from "next";
import { ServiceDirectory } from "@/components/services/ServiceDirectory";
import { ConversionCTA } from "@/components/home/ConversionCTA";
import { Sparkles, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Services Directory — 40+ Full-Spectrum IT & Digital Capabilities",
  description:
    "Explore our complete service catalog across 7 disciplines: Custom Software & ERP, AI Automation, Web & E-Commerce, Mobile Apps, Growth & SEO, IT Infrastructure, and Content.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-[#071312] text-[#dae7de]">
      {/* Header Banner */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#091615] via-[#0d1f1c] to-[#071312] border-b border-[#1a342e]">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#2d584d]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-[#0d1f1c] text-[#dae7de] border border-[#1a342e]">
              <Sparkles className="w-3.5 h-3.5 text-[#94a49a]" />
              <span>Full-Service Agency Directory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Services & Engineering Capabilities
            </h1>
            <p className="text-base sm:text-lg text-[#94a49a] leading-relaxed">
              Explore our structured service portfolio organized across 7 core disciplines. Every capability is delivered with modular code, transparent scoping, and guaranteed IP ownership.
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
