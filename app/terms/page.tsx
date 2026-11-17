import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheck, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Website terms and project-scope information for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-brand-background  text-brand-text">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-xs text-brand-muted mb-6 font-mono"
      >
        <Link href="/" className="hover:text-brand-text transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3 text-brand-secondary" />
        <span className="text-brand-text font-medium">Terms of Service</span>
      </nav>

      <div className="space-y-4 pb-8 border-b border-brand-border">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-brand-card border border-brand-border  text-brand-text">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-muted" />
          <span>Last Updated: November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-text">
          Terms of Service
        </h1>
        <p className="text-sm text-brand-muted">
          This page summarizes website use and general project information. The scope and terms of any engagement are established only in the written agreement accepted by the parties.
        </p>
      </div>

      <div className="pt-8 space-y-10 text-sm text-brand-muted leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">1. Website information and project scope</h2>
          <p>
            Website content and service descriptions are informational and do not establish a project scope, delivery commitment, price, or service-level agreement. Requirements, deliverables, schedule, acceptance criteria, and commercial terms must be confirmed in a written project agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">2. Intellectual Property (IP) Ownership</h2>
          <p>
            Ownership, licensing, repository access, and handover of project-specific work are governed by the written project agreement and its payment and acceptance terms. This page does not promise an unconditional transfer.
          </p>
          <p>
            Any treatment of pre-existing materials, third-party or open-source components, and reusable tools should also be specified in that agreement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">3. Milestone Governance & Acceptance</h2>
          <p>
            Milestones, review periods, approval responsibilities, and acceptance procedures are defined for each engagement. No standard review period is promised by this website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">4. Warranties and ongoing support</h2>
          <p>
            Warranty coverage, defect handling, maintenance, support availability, response targets, and fees—if offered—must be stated in the applicable written agreement. This page does not promise a standard warranty period or free remediation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">5. Contact Information</h2>
          <p>
            For inquiries regarding service terms, use the contact page to find currently available channels.
          </p>
          <div className="p-4 rounded-xl bg-brand-card border border-brand-border text-xs font-mono text-brand-text space-y-1">
            {siteConfig.contact.email && <div>Email: {siteConfig.contact.email}</div>}
            {siteConfig.contact.phone && <div>Phone: {siteConfig.contact.phone}</div>}
            {siteConfig.contact.address.label && (
              <div>
                Address: {siteConfig.contact.address.city}
                {siteConfig.contact.address.city && siteConfig.contact.address.country ? ", " : ""}
                {siteConfig.contact.address.country} ({siteConfig.contact.address.label})
              </div>
            )}
            {!siteConfig.contact.email &&
              !siteConfig.contact.phone &&
              !siteConfig.contact.address.label && (
                <Link href="/contact" className="text-brand-accent underline">
                  Contact page
                </Link>
              )}
          </div>
        </section>
      </div>
    </div>
  );
}
