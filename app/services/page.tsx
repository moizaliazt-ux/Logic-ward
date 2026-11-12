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
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#060a12] via-[#091122] to-[#060a12] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-900 text-cyan-400 border border-slate-800">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Service Agency Directory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Services & Engineering Capabilities
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
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

