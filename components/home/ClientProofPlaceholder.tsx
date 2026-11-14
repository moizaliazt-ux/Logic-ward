import React from "react";
import { ShieldAlert, FileCheck } from "lucide-react";
import Link from "next/link";

export function ClientProofPlaceholder() {
  return (
    <section className="py-16 border-t border-[#1a342e] bg-[#091615]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] text-xs font-mono uppercase tracking-[0.72px] bg-[#0d1f1c] border border-[#1a342e] text-[#dae7de]">
          <FileCheck className="w-3.5 h-3.5 text-[#dae7de]" />
          <span>Client Review Governance Policy</span>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-normal text-[#dae7de] tracking-[-1.08px]">
            Verified Client References & NDA Policy
          </h2>
          <p className="text-sm text-[#94a49a] leading-relaxed max-w-2xl mx-auto">
            We adhere to strict non-disclosure agreements (NDAs) with our enterprise and international clients. To maintain ethical standards, we never publish unverified reviews or fabricated client quotes.
          </p>
        </div>

        {/* Placeholder Information Box */}
        <div className="p-6 rounded-xl bg-[#0d1f1c] border border-dashed border-[#1a342e] text-left space-y-4 shadow-xl">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#dae7de] mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-[#dae7de]">
                [Client Testimonials Placeholder]
              </h3>
              <p className="text-xs text-[#94a49a] leading-relaxed">
                Verifiable client quotes and reference contacts are provided during the late-stage proposal phase upon mutual NDA execution. To request sanitized code samples or to speak directly with an active reference client, please contact our leadership team.
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#1a342e] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94a49a]">
            <span>Enterprise procurement reference checks available upon request.</span>
            <Link
              href="/contact"
              className="text-[#dae7de] hover:underline font-mono uppercase font-bold tracking-[0.72px] inline-flex items-center gap-1"
            >
              Request Reference Consultation →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
