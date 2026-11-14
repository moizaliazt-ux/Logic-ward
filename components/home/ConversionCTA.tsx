import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, Clock, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ConversionCTA() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#091615] via-[#0d1f1c] to-[#091615] border-t border-[#1a342e]">
      {/* Ambient Forest Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-[#2d584d]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] text-xs font-mono uppercase tracking-[0.72px] bg-[#0d1f1c] border border-[#1a342e] text-[#dae7de]">
          <Clock className="w-3.5 h-3.5" />
          <span>Initial Discovery Response Within 1 Business Day</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-normal tracking-[-1.86px] text-[#dae7de] leading-tight">
            Let&apos;s Build the Technology Platform Your Business Deserves.
          </h2>
          <p className="text-sm sm:text-base text-[#94a49a] leading-relaxed max-w-2xl mx-auto">
            Whether you are modernizing a legacy enterprise software system, launching an MVP, or automating back-office bottlenecks—we are ready to engineer your solution.
          </p>
        </div>

        {/* Benefits Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-[#94a49a]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#dae7de]" />
            <span>Free 30-Min Architectural Scoping</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#dae7de]" />
            <span>Detailed Milestone Proposal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#dae7de]" />
            <span>Mutual NDA Protection</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-[6px] font-mono text-xs font-bold uppercase text-[#091615] bg-[#dae7de] hover:bg-white transition-all text-center shadow-xl shadow-black/50 inline-flex items-center justify-center gap-2 group"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-[6px] font-mono text-xs font-bold uppercase text-[#dae7de] bg-[#0d1f1c] border border-[#1a342e] hover:border-[#43634f] hover:text-white transition-colors text-center inline-flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#dae7de]" />
            <span>WhatsApp Direct ({siteConfig.contact.whatsappDisplay})</span>
          </a>
        </div>
      </div>
    </section>
  );
}
