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
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#060a12] via-[#091122] to-[#060a12] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-900 text-cyan-400 border border-slate-800">
              <Clock className="w-3.5 h-3.5" />
              <span>Initial Response Guaranteed Within 1 Business Day</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Let’s Discuss Your Next Technology Initiative.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
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
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-[#090e1a] border border-emerald-800/50 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                    Immediate Response
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Direct WhatsApp Desk
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Need a rapid preliminary conversation? Reach our technical desk directly on WhatsApp for quick scoping questions and availability.
              </p>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors text-xs text-center inline-flex items-center justify-center gap-2 shadow-md shadow-emerald-950/50"
              >
                <span>Chat on WhatsApp ({siteConfig.contact.whatsappDisplay})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Channels */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 space-y-5">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Direct Channels & Details
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Official Email</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-white hover:text-cyan-400 font-medium transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Phone Inquiries</span>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-white hover:text-cyan-400 font-medium transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Primary Operational Hub</span>
                    <span className="text-slate-300">
                      {siteConfig.contact.address.label}
                    </span>
                    <span className="text-slate-500 block text-[10px] mt-0.5">
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Operating Hours</span>
                    <span className="text-slate-300">{siteConfig.contact.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Call Booking Placeholder */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-dashed border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Direct Video Scheduling
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prefer to schedule a direct Google Meet or Zoom video call with a lead architect?
              </p>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                [Scheduling Placeholder: Connect your Cal.com or Calendly booking link here prior to live marketing campaigns.]
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
