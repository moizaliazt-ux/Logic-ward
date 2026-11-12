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
    <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-xs text-slate-400 mb-6"
      >
        <Link href="/" className="hover:text-cyan-400 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3 text-slate-600" />
        <span className="text-cyan-400 font-medium">Privacy Policy</span>
      </nav>

      <div className="space-y-4 pb-8 border-b border-slate-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-cyan-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Last Updated: November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-300">
          {siteConfig.legalName} ("{siteConfig.name}", "we", "us", or "our") respects the confidentiality of client data and intellectual property. This Privacy Policy details how we handle information collected via our website and client service engagements.
        </p>
      </div>

      <div className="pt-8 space-y-10 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
          <p>
            When you submit a project inquiry or contact us via our website, email, or WhatsApp, we collect information you voluntarily provide. This typically includes your full name, business email address, telephone/WhatsApp contact, company name, and project specifications.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. How We Use Project Information</h2>
          <p>
            Information provided is utilized solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Review project requirements and prepare technical architectural proposals;</li>
            <li>Communicate regarding your consultation requests and technical questions;</li>
            <li>Fulfill contractual deliverables and milestones under client agreements;</li>
            <li>Comply with applicable legal, accounting, and regulatory obligations.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Non-Disclosure & Confidentiality</h2>
          <p>
            We consider all client source code, database architectures, proprietary business metrics, and trade secrets strictly confidential. We execute bilateral Non-Disclosure Agreements (NDAs) prior to detailed discovery and adhere to industry-standard data isolation practices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. No Sale of Client Data</h2>
          <p>
            We never sell, rent, monetize, or trade client personal information or project data to third-party data brokers, advertising networks, or unauthorized external parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">5. Security Standards</h2>
          <p>
            We employ modern encryption standards (TLS/SSL in transit), secure role-governed repositories, multi-factor authentication, and partitioned staging environments to prevent unauthorized data access or loss.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">6. Inquiries and Contact</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request data deletion, contact us at:{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-cyan-400 hover:underline">
              {siteConfig.contact.email}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
