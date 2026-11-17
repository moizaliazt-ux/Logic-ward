import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheck, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie policy and tracking disclosures for ${siteConfig.legalName}.`,
};

export default function CookiePolicyPage() {
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
        <span className="text-brand-text font-medium">Cookie Policy</span>
      </nav>

      <div className="space-y-4 pb-8 border-b border-brand-border">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-brand-card border border-brand-border  text-brand-text">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-muted" />
          <span>Last Updated: November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-text">
          Cookie Policy
        </h1>
        <p className="text-sm text-brand-muted">
          This Cookie Policy describes browser storage used by the Logicward website and how to manage it.
        </p>
      </div>

      <div className="pt-8 space-y-10 text-sm text-brand-muted leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">1. Strictly Necessary Cookies</h2>
          <p>
            This website does not currently implement inquiry-form persistence or analytics cookies. Hosting infrastructure may use essential technical storage depending on the production configuration; that configuration should be reviewed before launch.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">2. Analytics & Performance</h2>
          <p>
            No analytics or advertising tracking is configured in this website codebase.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">3. Managing Browser Storage</h2>
          <p>
            You can manage browser storage through your browser settings. Removing essential storage, if added by the hosting configuration, may affect platform behavior.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">4. Contact Information</h2>
          <p>
            For questions regarding our privacy or cookie practices, use the contact page to find currently available channels.
          </p>
          <div className="p-4 rounded-xl bg-brand-card border border-brand-border text-xs font-mono text-brand-text space-y-1">
            {siteConfig.contact.email && <div>Email: {siteConfig.contact.email}</div>}
            {siteConfig.contact.phone && <div>Phone: {siteConfig.contact.phone}</div>}
            {!siteConfig.contact.email && !siteConfig.contact.phone && (
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
