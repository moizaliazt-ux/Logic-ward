import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ConversionCTA() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#060a12] via-[#091122] to-[#04070d]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-cyan-950/80 border border-cyan-800/60 text-cyan-300">
          <Clock className="w-3.5 h-3.5" />
          <span>Initial Discovery Response Within 1 Business Day</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Let’s Build the Technology Platform Your Business Deserves.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you are modernizing a legacy enterprise software system, launching an MVP, or automating back-office bottlenecks—we are ready to engineer your solution.
          </p>
        </div>

        {/* Benefits Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Free 30-Min Architectural Scoping</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Detailed Milestone Proposal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Mutual NDA Protection</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all text-sm text-center shadow-xl shadow-cyan-950/50 inline-flex items-center justify-center gap-2 group"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-medium text-slate-200 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors text-sm text-center inline-flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Direct ({siteConfig.contact.whatsappDisplay})</span>
          </a>
        </div>
      </div>
    </section>
  );
}

