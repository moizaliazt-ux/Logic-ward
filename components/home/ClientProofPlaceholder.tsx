import React from "react";
import { ShieldCheck, FileCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ClientProofPlaceholder() {
  return (
    <section className="py-16 border-b border-brand-border  bg-brand-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-brand-surface border border-brand-border  text-brand-accent">
          <FileCheck className="w-3.5 h-3.5 text-brand-accent" />
          <span>CLIENT EVIDENCE & PUBLICATION POLICY</span>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text tracking-tight">
            Evidence Before Client Claims
          </h2>
          <p className="text-sm text-brand-secondary leading-relaxed max-w-2xl mx-auto">
            Client names, logos, testimonials, and outcome metrics should be published only when permission and supporting evidence are available. Concept work is labeled as such.
          </p>
        </div>

        {/* NDA Governance Information Box */}
        <div className="p-7 rounded-2xl bg-brand-surface border border-brand-border text-left space-y-4 shadow-sm">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-brand-text">
                Project Evidence & Confidentiality
              </h3>
              <p className="text-xs text-brand-secondary leading-relaxed">
                If an engagement permits publication, its details can be reviewed and anonymized as needed. Any project reference should make its scope and evidence clear.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-muted">
            <span>Ask about the reference architectures shown on this site.</span>
            <Link
              href="/contact"
              className="text-brand-accent hover:text-brand-accent font-semibold inline-flex items-center gap-1"
            >
              <span>Discuss a Reference Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
