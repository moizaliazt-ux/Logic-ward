import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Cookie, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie policy explaining telemetry, privacy, and technical storage practices for ${siteConfig.legalName}.`,
};

export default function CookiePolicyPage() {
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
        <span className="text-cyan-400 font-medium">Cookie Policy</span>
      </nav>

      <div className="space-y-4 pb-8 border-b border-slate-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-cyan-400">
          <Cookie className="w-3.5 h-3.5" />
          <span>Last Updated: November 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Cookie Policy
        </h1>
        <p className="text-sm text-slate-300">
          This policy explains how {siteConfig.name} uses cookies and similar storage technologies to maintain secure, fast website operation.
        </p>
      </div>

      <div className="pt-8 space-y-10 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your computer or mobile device when you browse websites. They are widely used to ensure websites function properly, retain user preferences, and provide analytical data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Essential Technical Cookies</h2>
          <p>
            Our website uses strictly necessary cookies and local browser storage to retain theme preferences, remember navigation states, and prevent cross-site request forgery (CSRF) during form submissions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Analytics & Performance Cookies</h2>
          <p>
            Per our development guidelines, marketing analytics cookies (such as Google Analytics 4) are only loaded after user consent verification. When enabled, they collect aggregated, anonymized metrics on page load times, device types, and referral paths to help us improve site responsiveness.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. Managing Your Preferences</h2>
          <p>
            You can configure your browser to reject all cookies or notify you when a cookie is sent. If you disable cookies, certain interactive features of our website may operate with reduced functionality.
          </p>
        </section>
      </div>
    </div>
  );
}

