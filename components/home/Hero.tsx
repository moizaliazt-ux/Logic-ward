"use client";

import React, { useState } from "react";
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
  Database,
  Cpu,
  Network,
  Server,
  Layers,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"software" | "web" | "ai" | "infra">("software");

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-[#060a12]">
      {/* Background Ambience & Fine Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.18),rgba(255,255,255,0))]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-cyan-500/8 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bold Editorial Messaging & Conversion Triggers */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Capability Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-semibold text-white">Full-Service IT & Software Agency</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-mono text-[11px]">Pakistan & Worldwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-tight text-white leading-[1.08]">
              Technology That Moves Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                Business Forward.
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              We engineer custom software systems, scalable ERPs, high-converting web and mobile applications, practical AI workflows, and resilient IT infrastructure—delivering enterprise craft without vendor lock-in.
            </p>

            {/* Engineering Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-300 max-w-xl">
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="font-medium text-slate-200">100% IP & Source Code Ownership</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="font-medium text-slate-200">Sub-Second Global Edge Performance</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="font-medium text-slate-200">Deterministic AI Scoped to Real ROI</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="font-medium text-slate-200">Transparent Milestone Governance</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="px-7 py-4 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all text-sm text-center shadow-lg shadow-cyan-950/50 inline-flex items-center justify-center gap-2 group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="px-6 py-4 rounded-xl font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors text-sm text-center inline-flex items-center justify-center gap-2"
              >
                <span>Explore 40+ Services</span>
              </Link>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 rounded-xl font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-800/40 transition-colors text-sm text-center inline-flex items-center justify-center gap-2"
                title="Direct WhatsApp Inquiry"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t border-slate-800/70 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div>
                <span className="text-white font-bold font-mono text-sm block">40+</span>
                <span>Active Services</span>
              </div>
              <div className="w-px h-7 bg-slate-800" />
              <div>
                <span className="text-white font-bold font-mono text-sm block">&lt;24h</span>
                <span>Response Guarantee</span>
              </div>
              <div className="w-px h-7 bg-slate-800" />
              <div>
                <span className="text-white font-bold font-mono text-sm block">100%</span>
                <span>Code Transfer</span>
              </div>
              <div className="w-px h-7 bg-slate-800" />
              <div>
                <span className="text-white font-bold font-mono text-sm block">Global</span>
                <span>PK / US / UK / UAE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Architecture Console */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Cyan Ambient Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-sky-500/15 to-blue-600/20 blur-2xl opacity-75 pointer-events-none" />

              {/* Main Console Box */}
              <div className="relative rounded-2xl bg-[#090e1a] border border-slate-800 shadow-2xl shadow-black/80 overflow-hidden">
                {/* Window Header */}
                <div className="px-5 py-3.5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">
                      logicward-architecture-v1
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                    <Zap className="w-3 h-3 text-cyan-400" />
                    <span>PRODUCTION VERIFIED</span>
                  </div>
                </div>

                {/* Interactive Console Tabs */}
                <div className="grid grid-cols-4 border-b border-slate-800 bg-slate-950/40 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab("software")}
                    className={`py-2.5 px-2 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
                      activeTab === "software"
                        ? "border-cyan-400 text-cyan-300 bg-slate-900/70 font-semibold"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Database className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">ERP/Software</span>
                    <span className="sm:hidden">ERP</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("web")}
                    className={`py-2.5 px-2 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
                      activeTab === "web"
                        ? "border-cyan-400 text-cyan-300 bg-slate-900/70 font-semibold"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Web/Apps</span>
                    <span className="sm:hidden">Web</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`py-2.5 px-2 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
                      activeTab === "ai"
                        ? "border-cyan-400 text-cyan-300 bg-slate-900/70 font-semibold"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">AI Workflows</span>
                    <span className="sm:hidden">AI</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("infra")}
                    className={`py-2.5 px-2 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
                      activeTab === "infra"
                        ? "border-cyan-400 text-cyan-300 bg-slate-900/70 font-semibold"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Network className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">IT/Networks</span>
                    <span className="sm:hidden">IT</span>
                  </button>
                </div>

                {/* Console Tab Content */}
                <div className="p-6 space-y-4 font-mono text-xs">
                  {activeTab === "software" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800/80">
                        <span>MODULE: ENTERPRISE_ERP_CORE</span>
                        <span className="text-cyan-400">STATUS: ACTIVE</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                        <div className="text-slate-200 font-semibold flex items-center justify-between">
                          <span>PostgreSQL Relational Ledger</span>
                          <span className="text-[10px] text-emerald-400 font-mono">ACID Compliant</span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                          Multi-location warehouse stock decrementation, tax compliance (FBR & VAT), and role-governed approval hierarchies.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                          <span className="text-slate-500 block text-[10px]">INVENTORY SYNC</span>
                          &lt;100ms Latency
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                          <span className="text-slate-500 block text-[10px]">IP OWNERSHIP</span>
                          100% Client Handoff
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "web" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800/80">
                        <span>FRAMEWORK: NEXT_16_APP_ROUTER</span>
                        <span className="text-cyan-400">TURBOPACK READY</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                        <div className="text-slate-200 font-semibold flex items-center justify-between">
                          <span>Edge Server Components</span>
                          <span className="text-[10px] text-cyan-400 font-mono">0.7s LCP Score</span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                          Statically prerendered marketing pages, dynamic streaming interfaces, and cross-platform Flutter/React Native mobile applications.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                          <span className="text-slate-500 block text-[10px]">LIGHTHOUSE</span>
                          98+ Performance
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                          <span className="text-slate-500 block text-[10px]">SEARCH VISIBILITY</span>
                          AEO & Schema Native
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "ai" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800/80">
                        <span>PIPELINE: DETERMINISTIC_AI_ENGINE</span>
                        <span className="text-cyan-400">STRICT SCOPING</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                        <div className="text-slate-200 font-semibold flex items-center justify-between">
                          <span>Document & Lead Triage</span>
                          <span className="text-[10px] text-teal-400 font-mono">Zero Public Leak</span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                          Commercial enterprise zero-retention APIs extracting PDF invoices and qualifying inbound inquiries with human review triggers.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                          <span className="text-slate-500 block text-[10px]">RESPONSE SPEED</span>
                          Under 90 Seconds
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                          <span className="text-slate-500 block text-[10px]">SAFEGUARDS</span>
                          Human-in-the-Loop
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "infra" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800/80">
                        <span>TOPOLOGY: ENTERPRISE_NETWORKING</span>
                        <span className="text-cyan-400">FAILOVER ACTIVE</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                        <div className="text-slate-200 font-semibold flex items-center justify-between">
                          <span>MikroTik & Cisco Firewall</span>
                          <span className="text-[10px] text-purple-400 font-mono">Dual-WAN 99.9%</span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                          Isolated office VLANs for guest, biometric, and finance devices, automated WireGuard VPN tunnels, and encrypted cloud backups.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                          <span className="text-slate-500 block text-[10px]">FAILOVER TIME</span>
                          &lt;3s Seamless
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
                          <span className="text-slate-500 block text-[10px]">BACKUP STRATEGY</span>
                          3-2-1 Automated
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Console Footer */}
                <div className="px-5 py-3.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Bilateral NDA & SLA Protected</span>
                  </div>
                  <Link
                    href="/contact"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Request Technical Review</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
