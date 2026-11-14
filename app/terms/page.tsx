import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheck, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Master terms of service and commercial delivery governance for ${siteConfig.legalName}.`,
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#071312] text-[#dae7de]">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-xs text-[#94a49a] mb-6 font-mono"
      >
        <Link href="/" className="hover:text-[#dae7de] transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3 text-[#1a342e]" />
        <span className="text-[#dae7de] font-medium">Terms of Service</span>
      </nav>

      <div className="space-y-4 pb-8 border-b border-[#1a342e]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-[#0d1f1c] border border-[#1a342e] text-[#dae7de]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#94a49a]" />
          <span>Last Updated: November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Terms of Service
        </h1>
        <p className="text-sm text-[#94a49a]">
          These Terms of Service govern your access to the {siteConfig.name} website and outline the commercial and technical delivery standards applicable to all engineering engagements with {siteConfig.legalName}.
        </p>
      </div>

      <div className="pt-8 space-y-10 text-sm text-[#94a49a] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">1. Scoping & Master Services Agreements</h2>
          <p>
            Website content and service descriptions do not constitute a binding unilateral offer. All client engagements are executed through formal Statements of Work (SOW) or Master Services Agreements (MSA) detailing deliverables, milestones, technical specifications, and acceptance criteria.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">2. Intellectual Property (IP) Ownership</h2>
          <p>
            Upon settlement of milestone invoices, 100% of custom application source code, database architectures, graphics, and technical documentation produced specifically for the client are assigned unconditionally to the client.
          </p>
          <p>
            Logicward retains rights solely to pre-existing open-source libraries, reusable boilerplates, and general agency design methodologies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">3. Milestone Governance & Acceptance</h2>
          <p>
            Engineering work proceeds in iterative, milestone-governed phases. Clients have a standard review window (typically 10 business days) to test delivered functionality against agreed acceptance criteria prior to milestone sign-off.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">4. Warranties & Code Quality</h2>
          <p>
            We warrant that delivered software will perform substantially in accordance with agreed specifications. Standard engagements include a 30-to-90 day post-launch bug warranty covering any defect remediation at zero additional fee.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">5. Contact Information</h2>
          <p>
            Inquiries regarding service terms should be directed to:
          </p>
          <div className="p-4 rounded-xl bg-[#0d1f1c] border border-[#1a342e] text-xs font-mono text-[#dae7de] space-y-1">
            <div>Email: {siteConfig.contact.email}</div>
            <div>Phone: {siteConfig.contact.phone}</div>
            <div>Address: {siteConfig.contact.address.city}, {siteConfig.contact.address.country} ({siteConfig.contact.address.label})</div>
          </div>
        </section>
      </div>
    </div>
  );
}
