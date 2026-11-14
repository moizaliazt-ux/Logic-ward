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
    <footer className="w-full bg-[#040b0a] text-[#8ea79f] border-t border-[#142c27]">
      {/* Upper Brand / Consultation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="bg-gradient-to-r from-[#091a17] via-[#091a17]/70 to-[#0f2824] border border-[#1b3e37] rounded-3xl p-8 sm:p-10 mb-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#dae7de]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#0e2622] text-[#dae7de] border border-[#1e463e]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#dae7de]" />
                Trusted Engineering Partner
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ready to engineer technology that moves your business forward?
              </h2>
              <p className="text-sm sm:text-base text-[#b2c5bd] leading-relaxed">
                Schedule a 30-minute discovery consultation. We review your requirements, scope technical architecture, and provide realistic timelines with zero obligation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full font-bold text-[#071312] bg-[#dae7de] hover:bg-[#eaf3ec] transition-all text-sm text-center shadow-lg shadow-black/40"
              >
                Book a Free Consultation
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full font-medium text-[#dae7de] bg-[#0d221f] hover:bg-[#132e29] border border-[#1e463e] transition-colors text-sm text-center inline-flex items-center justify-center gap-2"
              >
                <span>WhatsApp Us</span>
                <ArrowUpRight className="w-4 h-4 text-[#dae7de]" />
              </a>
            </div>
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#142c27]">
          {/* Column 1: Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2d584d] to-[#122b26] flex items-center justify-center font-bold text-[#dae7de] font-mono text-sm border border-[#2d584d]">
                LW
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-xs text-[#8ea79f] leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-[#8ea79f] leading-relaxed">
              One technology partner for your digital growth—from strategy and marketing to websites, mobile apps, custom software, AI automation, and IT infrastructure.
            </p>

            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center gap-2 text-[#b2c5bd]">
                <Globe2 className="w-3.5 h-3.5 text-[#dae7de] flex-shrink-0" />
                <span>Pakistan & Worldwide Clients</span>
              </div>
              <div className="flex items-center gap-2 text-[#8ea79f]">
                <Clock className="w-3.5 h-3.5 text-[#1f453e] flex-shrink-0" />
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
                    className="hover:text-[#dae7de] transition-colors block py-0.5"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#dae7de] hover:underline font-medium inline-flex items-center gap-1 pt-1"
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
                <Link href="/solutions#erp-solutions" className="hover:text-[#dae7de] transition-colors">
                  Enterprise ERP Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions#crm-systems" className="hover:text-[#dae7de] transition-colors">
                  Custom CRM Pipelines
                </Link>
              </li>
              <li>
                <Link href="/solutions#school-college" className="hover:text-[#dae7de] transition-colors">
                  School & College Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions#hrm-payroll" className="hover:text-[#dae7de] transition-colors">
                  HRM & Payroll Platforms
                </Link>
              </li>
              <li>
                <Link href="/solutions#inventory-stock" className="hover:text-[#dae7de] transition-colors">
                  Inventory & Stock Control
                </Link>
              </li>
              <li>
                <Link href="/solutions#pos-billing" className="hover:text-[#dae7de] transition-colors">
                  POS & Billing Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions#dashboards-bi" className="hover:text-[#dae7de] transition-colors">
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
                <Link href="/about" className="hover:text-[#dae7de] transition-colors">
                  About Us & Engineering Ethos
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#dae7de] transition-colors">
                  Case Studies & Reference Projects
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#dae7de] transition-colors">
                  Technical Insights & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#dae7de] transition-colors">
                  Contact & Project Inquiries
                </Link>
              </li>
              <li>
                <Link href="/about#process" className="hover:text-[#dae7de] transition-colors">
                  Our 6-Step Delivery Model
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-[#dae7de] transition-colors">
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
                <span className="text-[11px] text-[#8ea79f] block">General Inquiries:</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#b2c5bd] hover:text-[#dae7de] transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#dae7de]" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] text-[#8ea79f] block">WhatsApp Desk:</span>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b2c5bd] hover:text-[#dae7de] transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#dae7de]" />
                  <span>{siteConfig.contact.whatsappDisplay}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] text-[#8ea79f] block">Headquarters / Operations:</span>
                <div className="text-[#b2c5bd] inline-flex items-start gap-1.5 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#dae7de] mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.contact.address.label}</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[10px] text-[#8ea79f] block leading-tight">
                  Initial response guaranteed within 1 business day.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer & Regulatory / Placeholder Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8ea79f]">
          <div>
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Explicit Placeholder Notice (per Brief guidelines) */}
        <div className="mt-6 pt-4 border-t border-[#112420] text-center">
          <p className="text-[11px] text-[#8ea79f]">
            [Production Notice: Brand contact details, phone numbers, and official office registrations are centralized in{" "}
            <code className="text-[#dae7de]">lib/site-config.ts</code> for verification prior to commercial deployment.]
          </p>
        </div>
      </div>
    </footer>
  );
}
