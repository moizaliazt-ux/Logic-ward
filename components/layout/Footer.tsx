import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/lib/data/services";
import { solutionsData } from "@/lib/data/solutions";

export function Footer() {
  const currentYear = 2026;
  const whatsAppUrl = getWhatsAppUrl();

  return (
    <footer className="w-full bg-brand-background text-brand-muted border-t border-brand-border">
      {/* Upper Brand / Consultation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="bg-brand-card border border-brand-border rounded-2xl p-8 sm:p-10 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-brand-card  text-brand-accent border border-brand-border">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                SOFTWARE, BUILT AROUND YOUR BUSINESS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-text tracking-tight">
                Ready to plan your next technology project?
              </h2>
              <p className="text-sm text-brand-secondary leading-relaxed">
                Use the project inquiry form to outline your requirements and technical scope. Available delivery channels appear only after they are verified.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-lg text-sm font-semibold text-brand-background bg-brand-accent hover:bg-brand-accent-hover transition-all text-center shadow-sm shadow-brand-background/20"
              >
                {siteConfig.contact.email || siteConfig.contact.phone || whatsAppUrl
                  ? "Start a Project"
                  : "View Inquiry Form"}
              </Link>
              {whatsAppUrl && (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-lg text-sm font-semibold text-brand-secondary hover:text-brand-text bg-brand-card hover:bg-brand-elevated border border-brand-border transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  <span>WhatsApp Us</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-accent" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-brand-border">
          {/* Column 1: Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center font-bold text-brand-background font-mono text-xs">
                LW
              </div>
              <span className="text-lg font-bold text-brand-text tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-xs text-brand-secondary leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-brand-secondary leading-relaxed">
              Software, digital products, and business systems planned around the way organizations work.
            </p>

            {siteConfig.contact.workingHours && (
              <div className="pt-2 flex items-center gap-2 text-xs text-brand-muted">
                <Clock className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </div>
            )}
          </div>

          {/* Column 2: Core Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-brand-text uppercase tracking-wider">
              Core Services
            </h3>
            <ul className="space-y-2 text-xs">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/services/${cat.featuredSlug}`}
                    className="hover:text-brand-text transition-colors block py-0.5"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-brand-accent hover:underline font-medium inline-flex items-center gap-1 pt-1"
                >
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Business Systems */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-brand-text uppercase tracking-wider">
              Solutions & ERP
            </h3>
            <ul className="space-y-2 text-xs">
              {solutionsData.slice(0, 7).map((solution) => (
                <li key={solution.id}>
                  <Link href={`/solutions#${solution.slug}`} className="hover:text-brand-text transition-colors">
                    {solution.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Target Sectors & Work */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-brand-text uppercase tracking-wider">
              Industries & Work
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/industries" className="hover:text-brand-text transition-colors">
                  Target Industries Overview
                </Link>
              </li>
              <li>
                <Link href="/industries/education" className="hover:text-brand-text transition-colors">
                  Education & E-Learning
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="hover:text-brand-text transition-colors">
                  Healthcare & Telehealth
                </Link>
              </li>
              <li>
                <Link href="/industries/retail-ecommerce" className="hover:text-brand-text transition-colors">
                  Retail & E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/industries/logistics-transport" className="hover:text-brand-text transition-colors">
                  Logistics & Transportation
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-brand-text transition-colors">
                  Reference Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-brand-text transition-colors">
                  Engineering Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Contact */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-brand-text uppercase tracking-wider">
              Direct Contact
            </h3>
            <div className="space-y-2.5 text-xs">
              {siteConfig.contact.email && (
              <div>
                <span className="text-[11px] text-brand-muted block">General Inquiries:</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-brand-secondary hover:text-brand-text transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-accent" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
              )}

              {siteConfig.contact.phone && (
                <div>
                  <span className="text-[11px] text-brand-muted block">Telephone:</span>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-brand-secondary hover:text-brand-text transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-accent" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </div>
              )}

              {whatsAppUrl && (
              <div>
                <span className="text-[11px] text-brand-muted block">WhatsApp Desk:</span>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-secondary hover:text-brand-text transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-accent" />
                  <span>{siteConfig.contact.whatsappDisplay}</span>
                </a>
              </div>
              )}

              {siteConfig.contact.address.label && (
              <div>
                <span className="text-[11px] text-brand-muted block">Headquarters / Operations:</span>
                <div className="text-brand-secondary inline-flex items-start gap-1.5 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-accent mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.contact.address.label}</span>
                </div>
              </div>
              )}

              {!siteConfig.contact.email &&
                !siteConfig.contact.phone &&
                !whatsAppUrl &&
                !siteConfig.contact.address.label && (
                <p className="text-brand-muted">Direct contact details are being finalized.</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer and Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <div>
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-brand-text transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-text transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-brand-text transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
