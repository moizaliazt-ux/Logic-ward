import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Project Consultation & Technical Scoping",
  description:
    "Discuss your software, digital product, automation, or infrastructure requirements with Logicward and explore a practical next step.",
};

export default function ContactPage() {
  const whatsAppUrl = getWhatsAppUrl();
  const hasDirectContact = Boolean(
    siteConfig.contact.email ||
      siteConfig.contact.phone ||
      siteConfig.contact.address.label ||
      siteConfig.contact.workingHours ||
      whatsAppUrl,
  );

  return (
    <div className="flex flex-col w-full bg-brand-background  text-brand-text">
      {/* Header Banner */}
      <section className="page-hero relative py-16 md:py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-brand-card  text-brand-text border border-brand-border">
              <Clock className="w-3.5 h-3.5 text-brand-muted" />
              <span>Project Consultation & Technical Scoping</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
              Let’s Discuss Your Next Technology Initiative.
            </h1>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Whether you need to scope a custom software architecture, build an MVP, automate operational workflows, or audit office IT infrastructure—we are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Channels Grid */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Quick Channel Card */}
            {whatsAppUrl && (
            <div className="p-6 rounded-[24px] bg-brand-card border border-brand-border space-y-4 shadow-md shadow-brand-background/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-background border border-brand-border  text-brand-text flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-brand-text uppercase tracking-wider block">
                    WhatsApp Direct Inquiry
                  </span>
                  <h3 className="text-base font-bold text-brand-text tracking-tight">
                    Direct WhatsApp Desk
                  </h3>
                </div>
              </div>

              <p className="text-xs text-brand-muted leading-relaxed">
                Open WhatsApp to start a conversation. Review the prefilled draft there, then choose whether to send it.
              </p>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg font-semibold text-brand-background  bg-brand-accent hover:bg-brand-accent-hover transition-colors text-xs text-center inline-flex items-center justify-center gap-2 shadow-md shadow-brand-background/20"
              >
                <span>Chat on WhatsApp ({siteConfig.contact.whatsappDisplay})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            )}

            {/* Direct Channels */}
            <div className="p-6 rounded-[24px] bg-brand-card border border-brand-border space-y-5 shadow-md shadow-brand-background/20">
              <h3 className="text-xs font-mono uppercase tracking-[0.72px] text-brand-text">
                Direct Channels & Details
              </h3>

              <div className="space-y-4 text-xs font-mono">
                {siteConfig.contact.email && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-background border border-brand-border text-brand-text flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-brand-muted block text-[11px]">Official Email</span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-brand-text hover:text-brand-text font-medium transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                )}

                {siteConfig.contact.phone && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-background border border-brand-border text-brand-text flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-brand-muted block text-[11px]">Direct Telephone</span>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-brand-text hover:text-brand-text font-medium transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                {siteConfig.contact.address.label && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-background border border-brand-border text-brand-text flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-brand-muted block text-[11px]">Operational Hub</span>
                      <p className="text-brand-text leading-relaxed">
                        {siteConfig.contact.address.city}
                        {siteConfig.contact.address.city && siteConfig.contact.address.country ? ", " : ""}
                        {siteConfig.contact.address.country} ({siteConfig.contact.address.label})
                      </p>
                    </div>
                  </div>
                )}

                {siteConfig.contact.workingHours && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-brand-background border border-brand-border text-brand-text flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-brand-muted block text-[11px]">Engineering Hours</span>
                      <p className="text-brand-text leading-relaxed">
                        {siteConfig.contact.workingHours}
                      </p>
                    </div>
                  </div>
                )}
                {!hasDirectContact && (
                  <p className="text-brand-muted">
                    Verified direct contact details are not currently published.
                  </p>
                )}
              </div>
            </div>

            {/* Sensitive Information Notice */}
            <div className="p-6 rounded-[24px] bg-brand-card border border-brand-border space-y-3 shadow-md shadow-brand-background/20">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.72px] text-brand-text">
                <AlertCircle className="w-4 h-4" />
                <span>Sharing Sensitive Information</span>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed">
                Do not include passwords, sensitive personal information, or proprietary material in this form. Before sharing sensitive project details through any channel, confirm the recipient and applicable confidentiality terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
