import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";

export function ConversionCTA() {
  const whatsAppUrl = getWhatsAppUrl();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-brand-surface  text-brand-text border-t border-brand-border">
      {/* Ambient Electric Cyan Glow */}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider bg-brand-card border border-brand-border  text-brand-accent">
          <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />
          <span>PROJECT DISCOVERY & TECHNICAL SCOPING</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
            Have a technology project to scope?
          </h2>
          <p className="text-sm sm:text-base text-brand-secondary leading-relaxed max-w-2xl mx-auto">
            Share the problem, current systems, and constraints. Feasibility, timing, deliverables, and any next steps are confirmed after review.
          </p>
        </div>

        {/* Benefits Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-brand-secondary">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-accent" />
            <span>Outline the requirements</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-brand-accent" />
            <span>Confirm scope before work begins</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold text-brand-background bg-brand-accent hover:bg-brand-accent-hover transition-all text-center shadow-sm shadow-brand-background/25 inline-flex items-center justify-center gap-2 group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {whatsAppUrl && (
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg text-sm font-semibold text-brand-secondary hover:text-brand-text bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-brand-accent" />
              <span>WhatsApp Direct ({siteConfig.contact.whatsappDisplay})</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
