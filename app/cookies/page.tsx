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
          This Cookie Policy explains how {siteConfig.legalName} (&quot;Logicward&quot;) uses cookies and similar browser storage technologies to maintain platform security and essential functionality.
        </p>
      </div>

      <div className="pt-8 space-y-10 text-sm text-brand-muted leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">1. Strictly Necessary Cookies</h2>
          <p>
            We use minimal, strictly necessary session cookies required for core website security, load balancing, CSRF protection, and form state preservation. These cookies do not track personal identifying information across external websites.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">2. Analytics & Performance</h2>
          <p>
            If aggregated performance metrics are enabled, we collect strictly anonymized page-load timing and core web vital telemetry to optimize edge distribution latency.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">3. Managing Browser Storage</h2>
          <p>
            You can configure your browser preferences to reject or purge cookies at any time. Because our platform relies primarily on static edge generation, disabling cookies will not affect your ability to browse our services, solutions, or insights.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">4. Contact Information</h2>
          <p>
            For questions regarding our privacy or cookie practices, contact our security officer at:
          </p>
          <div className="p-4 rounded-xl bg-brand-card border border-brand-border text-xs font-mono text-brand-text space-y-1">
            <div>Email: {siteConfig.contact.email}</div>
            <div>Phone: {siteConfig.contact.phone}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
