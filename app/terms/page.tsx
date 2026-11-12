import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { FileText, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Standard terms of service and commercial engagement policies for ${siteConfig.legalName}.`,
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-xs text-slate-400 mb-6"
      >
        <Link href="/" className="hover:text-cyan-400 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3 text-slate-600" />
        <span className="text-cyan-400 font-medium">Terms of Service</span>
      </nav>

      <div className="space-y-4 pb-8 border-b border-slate-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-cyan-400">
          <FileText className="w-3.5 h-3.5" />
          <span>Last Updated: November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-300">
          These Terms of Service govern your use of the {siteConfig.name} website and outline our standard engineering and milestone delivery policies.
        </p>
      </div>

      <div className="pt-8 space-y-10 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Master Services Agreements (MSA)</h2>
          <p>
            While these website terms govern general site access, all commercial software engineering, IT infrastructure deployments, and digital marketing retainers are governed by dedicated Master Services Agreements (MSAs) and Statements of Work (SOWs) executed directly between {siteConfig.legalName} and client organizations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Intellectual Property Ownership</h2>
          <p>
            Upon receipt of final milestone payments as specified in client Statements of Work, full title, intellectual property rights, and ownership of custom developed source code, schemas, and assets are assigned to the client. Pre-existing open-source libraries remain licensed under their respective MIT/Apache licenses.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Milestone Verification & Acceptance</h2>
          <p>
            Project deliverables are deployed to private client staging servers for testing. Clients have a standard review window (typically 10 business days) to verify that deliverables satisfy agreed acceptance criteria before approving milestone fund releases.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. Warranty & Support Period</h2>
          <p>
            Custom software deliverables include a standard 30 to 60-day post-launch warranty covering defect remediation at no extra charge. Ongoing maintenance and feature requests following the warranty period are supported under separate Service Level Agreements (SLAs).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, {siteConfig.legalName} shall not be liable for indirect, incidental, special, consequential, or punitive damages resulting from third-party hosting outages, network failures, or unapproved third-party code modifications.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">6. Inquiries</h2>
          <p>
            For commercial agreement questions, contact us at:{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-cyan-400 hover:underline">
              {siteConfig.contact.email}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
