import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Calendar,
  MessageSquare,
  Globe2,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Project Consultation & Technical Scoping",
  description:
    "Schedule a 30-minute discovery consultation with Logicward engineers. Discuss software architecture, timelines, and receive a milestone proposal with zero obligation.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#071312] text-[#dae7de]">
      {/* Header Banner */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#091615] via-[#0d1f1c] to-[#071312] border-b border-[#1a342e]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2d584d]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-[#0d1f1c] text-[#dae7de] border border-[#1a342e]">
              <Clock className="w-3.5 h-3.5 text-[#94a49a]" />
              <span>Initial Response Guaranteed Within 1 Business Day</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Let’s Discuss Your Next Technology Initiative.
            </h1>
            <p className="text-base sm:text-lg text-[#94a49a] leading-relaxed">
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
            <div className="p-6 rounded-[24px] bg-[#0d1f1c] border border-[#2d584d] space-y-4 shadow-xl shadow-black/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#091615] border border-[#1a342e] text-[#dae7de] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#dae7de] uppercase tracking-wider block">
                    Immediate Response
                  </span>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Direct WhatsApp Desk
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#94a49a] leading-relaxed">
                Need a rapid preliminary conversation? Reach our technical desk directly on WhatsApp for quick scoping questions and availability.
              </p>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg font-semibold text-[#091615] bg-[#dae7de] hover:bg-white transition-colors text-xs text-center inline-flex items-center justify-center gap-2 shadow-md shadow-black/50"
              >
                <span>Chat on WhatsApp ({siteConfig.contact.whatsappDisplay})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] space-y-5 shadow-xl shadow-black/40">
              <h3 className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
                Direct Channels & Details
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#091615] border border-[#1a342e] text-[#dae7de] flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#94a49a] block text-[11px]">Official Email</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-white hover:text-[#dae7de] font-medium transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#091615] border border-[#1a342e] text-[#dae7de] flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#94a49a] block text-[11px]">Direct Telephone</span>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-white hover:text-[#dae7de] font-medium transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#091615] border border-[#1a342e] text-[#dae7de] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#94a49a] block text-[11px]">Operational Hub</span>
                    <p className="text-white leading-relaxed">
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.country} ({siteConfig.contact.address.label})
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#091615] border border-[#1a342e] text-[#dae7de] flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#94a49a] block text-[11px]">Engineering Hours</span>
                    <p className="text-white leading-relaxed">
                      {siteConfig.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bilateral NDA Notice */}
            <div className="p-6 rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] space-y-3 shadow-xl shadow-black/40">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
                <ShieldCheck className="w-4 h-4" />
                <span>NDA & Confidentiality</span>
              </div>
              <p className="text-xs text-[#94a49a] leading-relaxed">
                Prior to receiving sensitive business datasets, proprietary workflow schemas, or legacy code access, we execute a bilateral Non-Disclosure Agreement (NDA) under standard international legal governance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
