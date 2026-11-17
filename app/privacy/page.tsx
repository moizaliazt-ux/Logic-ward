import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ShieldCheck, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.legalName} governing client information, confidentiality, and data handling.`,
};

export default function PrivacyPolicyPage() {
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
        <span className="text-brand-text font-medium">Privacy Policy</span>
      </nav>

      <div className="space-y-4 pb-8 border-b border-brand-border">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-brand-card border border-brand-border  text-brand-text">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-muted" />
          <span>Last Updated: November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-text">
          Privacy Policy
        </h1>
        <p className="text-sm text-brand-muted">
          {siteConfig.legalName} (&quot;{siteConfig.name}&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects the confidentiality of client data and intellectual property. This Privacy Policy details how we handle information collected via our website and client service engagements.
        </p>
      </div>

      <div className="pt-8 space-y-10 text-sm text-brand-muted leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">1. Information We Collect</h2>
          <p>
            When you submit the project inquiry form with the required consent, the details are sent by email to Logicward&apos;s configured contact mailbox. The mail provider processes the message, and the website does not save inquiry entries to a database. An automatic receipt confirmation is also sent to the email address you provide.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">2. How We Use Project Information</h2>
          <p>
            Submitted inquiry details may be used to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-brand-muted">
            <li>Review project requirements and prepare technical architectural proposals;</li>
            <li>Communicate regarding your consultation requests and technical questions;</li>
            <li>Fulfill contractual deliverables and milestones under client agreements, if an engagement proceeds;</li>
            <li>Comply with applicable legal, accounting, and regulatory obligations.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">3. Sensitive Information & Confidentiality</h2>
          <p>
            Do not include passwords, sensitive personal information, or proprietary material in this form. Before sharing sensitive project details through any channel, confirm the recipient and applicable confidentiality terms. If you choose to use a third-party service such as WhatsApp, that service’s policies also apply.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">4. Website Tracking & Data Sharing</h2>
          <p>
            The website currently has no analytics or advertising tracking integration. Inquiry emails are transmitted through the configured mail provider and received at Logicward&apos;s contact mailbox. If an inquiry leads to an engagement, client data handling should be governed by applicable written terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-brand-text tracking-tight">5. Contact Information</h2>
          <p>
            For privacy inquiries or data requests, use the contact page to find currently available channels.
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
