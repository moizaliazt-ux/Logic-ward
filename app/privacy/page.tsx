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
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#071312] text-[#dae7de]">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-xs text-[#94a49a] mb-6 font-mono"
      >
        <Link href="/" className="hover:text-[#dae7de] transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3 text-[#1a342e]" />
        <span className="text-[#dae7de] font-medium">Privacy Policy</span>
      </nav>

      <div className="space-y-4 pb-8 border-b border-[#1a342e]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-[#0d1f1c] border border-[#1a342e] text-[#dae7de]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#94a49a]" />
          <span>Last Updated: November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#94a49a]">
          {siteConfig.legalName} (&quot;{siteConfig.name}&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects the confidentiality of client data and intellectual property. This Privacy Policy details how we handle information collected via our website and client service engagements.
        </p>
      </div>

      <div className="pt-8 space-y-10 text-sm text-[#94a49a] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">1. Information We Collect</h2>
          <p>
            When you submit a project inquiry or contact us via our website, email, or WhatsApp, we collect information you voluntarily provide. This typically includes your full name, business email address, telephone/WhatsApp contact, company name, and project specifications.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">2. How We Use Project Information</h2>
          <p>
            Information provided is utilized solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#94a49a]">
            <li>Review project requirements and prepare technical architectural proposals;</li>
            <li>Communicate regarding your consultation requests and technical questions;</li>
            <li>Fulfill contractual deliverables and milestones under client agreements;</li>
            <li>Comply with applicable legal, accounting, and regulatory obligations.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">3. Confidentiality & Non-Disclosure (NDA)</h2>
          <p>
            We adhere strictly to professional confidentiality standards. All proprietary business concepts, technical specifications, and proprietary data submitted through technical consultations are treated as strictly confidential. Formal bilateral Non-Disclosure Agreements (NDAs) are routinely executed prior to code audits or repository onboarding.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">4. Zero Monetization of Data</h2>
          <p>
            We do not sell, rent, trade, or monetize client contact lists, project specifications, or behavioral telemetry to any third party, advertising network, or data broker.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">5. Contact Information</h2>
          <p>
            For privacy inquiries or data requests, please contact our administrative desk at:
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
