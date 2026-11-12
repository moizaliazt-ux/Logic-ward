import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Globe2,
  Code2,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/lib/data/services";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#04070d] text-slate-400 border-t border-slate-800/80">
      {/* Upper Brand / Consultation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-cyan-950/30 border border-slate-800 rounded-2xl p-8 sm:p-10 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                Trusted Engineering Partner
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ready to engineer technology that moves your business forward?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Schedule a 30-minute discovery consultation. We review your requirements, scope technical architecture, and provide realistic timelines with zero obligation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all text-sm text-center shadow-lg shadow-cyan-950/40"
              >
                Book a Free Consultation
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors text-sm text-center inline-flex items-center justify-center gap-2"
              >
                <span>WhatsApp Us</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center font-bold text-white font-mono text-sm border border-cyan-400/40">
                LW
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              One technology partner for your digital growth—from strategy and marketing to websites, mobile apps, custom software, AI automation, and IT infrastructure.
            </p>

            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Globe2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>Pakistan & Worldwide Clients</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Core Services
            </h3>
            <ul className="space-y-2 text-xs">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/services/${cat.featuredSlug}`}
                    className="hover:text-cyan-400 transition-colors block py-0.5"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 pt-1"
                >
                  View All 40+ Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Business Systems */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Solutions & Systems
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions#erp-solutions" className="hover:text-cyan-400 transition-colors">
                  Enterprise ERP Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions#crm-systems" className="hover:text-cyan-400 transition-colors">
                  Custom CRM Pipelines
                </Link>
              </li>
              <li>
                <Link href="/solutions#school-college" className="hover:text-cyan-400 transition-colors">
                  School & College Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions#hrm-payroll" className="hover:text-cyan-400 transition-colors">
                  HRM & Payroll Platforms
                </Link>
              </li>
              <li>
                <Link href="/solutions#inventory-stock" className="hover:text-cyan-400 transition-colors">
                  Inventory & Stock Control
                </Link>
              </li>
              <li>
                <Link href="/solutions#pos-billing" className="hover:text-cyan-400 transition-colors">
                  POS & Billing Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions#dashboards-bi" className="hover:text-cyan-400 transition-colors">
                  Executive BI Dashboards
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Agency & Insights */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Agency & Work
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About Us & Engineering Ethos
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition-colors">
                  Case Studies & Reference Projects
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-cyan-400 transition-colors">
                  Technical Insights & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact & Project Inquiries
                </Link>
              </li>
              <li>
                <Link href="/about#process" className="hover:text-cyan-400 transition-colors">
                  Our 6-Step Delivery Model
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-cyan-400 transition-colors">
                  Team Roles & Organization
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Inquiries */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Direct Contact
            </h3>
            <div className="space-y-2.5 text-xs">
              <div>
                <span className="text-[11px] text-slate-400 block">General Inquiries:</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block">WhatsApp Desk:</span>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{siteConfig.contact.whatsappDisplay}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block">Headquarters / Operations:</span>
                <div className="text-slate-300 inline-flex items-start gap-1.5 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.contact.address.label}</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[10px] text-slate-400 block leading-tight">
                  Initial response guaranteed within 1 business day.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer & Regulatory / Placeholder Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Explicit Placeholder Notice (per Brief guidelines) */}
        <div className="mt-6 pt-4 border-t border-slate-900 text-center">
          <p className="text-[11px] text-slate-400">
            [Production Notice: Brand contact details, phone numbers, and official office registrations are centralized in{" "}
            <code className="text-slate-400">lib/site-config.ts</code> for verification prior to commercial deployment.]
          </p>
        </div>
      </div>
    </footer>
  );
}

