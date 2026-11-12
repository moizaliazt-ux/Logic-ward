import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Code2,
  Terminal,
  Zap,
  Globe2,
  Lock,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Capability Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Full-Service Technology & Digital Partner</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400">Pakistan & Worldwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Technology That Moves Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                Business Forward.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              We design, build, and scale custom software systems, high-converting web and mobile applications, practical AI workflows, and enterprise IT infrastructure for companies that demand reliability and craft.
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300 max-w-xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>100% IP & Source Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Sub-Second Global Edge Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Deterministic AI Scoped to Real ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Transparent Milestone Pricing</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all text-sm text-center shadow-lg shadow-cyan-950/40 inline-flex items-center justify-center gap-2 group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 transition-colors text-sm text-center inline-flex items-center justify-center gap-2"
              >
                <span>Explore All Services</span>
              </Link>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-800/40 transition-colors text-sm text-center inline-flex items-center justify-center gap-1.5"
                title="Direct WhatsApp Inquiry"
              >
                <PhoneCall className="w-4 h-4" />
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual System & Architecture Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Accent Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-xl opacity-75" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-[#0a0f1d] border border-slate-800 shadow-2xl p-6 sm:p-7 space-y-5">
                {/* Header Window Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">
                      logicward-core-stack
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                    <Zap className="w-3 h-3 text-cyan-400" />
                    <span>PRODUCTION READY</span>
                  </div>
                </div>

                {/* Architecture Layers */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="text-slate-200 font-medium">Enterprise Software & ERP</div>
                        <div className="text-[11px] text-slate-400 font-sans">
                          Modular CRM, Inventory, School, POS & HR
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400">PostgreSQL</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Zap className="w-4 h-4 text-sky-400" />
                      <div>
                        <div className="text-slate-200 font-medium">Next.js & Mobile Apps</div>
                        <div className="text-[11px] text-slate-400 font-sans">
                          App Router, React Native & Flutter
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400">&lt;1s LCP</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="text-slate-200 font-medium">AI & Document Automation</div>
                        <div className="text-[11px] text-slate-400 font-sans">
                          Deterministic Pipelines & Human Safeguards
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400">Zero-Leak</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Globe2 className="w-4 h-4 text-purple-400" />
                      <div>
                        <div className="text-slate-200 font-medium">IT Infrastructure & Networks</div>
                        <div className="text-[11px] text-slate-400 font-sans">
                          VLANs, Enterprise Firewalls & Redundancy
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400">Dual-WAN</span>
                  </div>
                </div>

                {/* Footer Metric Strip */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Complete Client IP Handoff</span>
                  </div>
                  <div className="font-mono text-cyan-400 text-[11px]">
                    SLA Guaranteed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
