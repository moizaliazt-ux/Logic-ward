import React from "react";
import { MessageSquare, ShieldAlert, Award, FileCheck } from "lucide-react";
import Link from "next/link";

export function ClientProofPlaceholder() {
  return (
    <section className="py-16 border-t border-slate-800/80 bg-slate-950/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-400">
          <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>Client Review Governance Policy</span>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Verified Client References & NDA Policy
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We adhere to strict non-disclosure agreements (NDAs) with our enterprise and international clients. To maintain ethical standards, we never publish unverified reviews or fabricated client quotes.
          </p>
        </div>

        {/* Placeholder Information Box */}
        <div className="p-6 rounded-2xl bg-[#090e1a] border border-dashed border-slate-800 text-left space-y-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">
                [Client Testimonials Placeholder]
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Verifiable client quotes and reference contacts are provided during the late-stage proposal phase upon mutual NDA execution. To request sanitized code samples or to speak directly with an active reference client, please contact our leadership team.
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>Enterprise procurement reference checks available upon request.</span>
            <Link
              href="/contact"
              className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
            >
              Request Reference Consultation →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

