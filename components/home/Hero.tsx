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
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-[#071312]">
      {/* Background Ambience: Diffuse Forest Spotlight from Top-Left (matching inspiration image) */}
      <div className="absolute top-0 left-0 w-[650px] h-[650px] bg-gradient-to-br from-[#8ea79f]/12 via-[#2d584d]/15 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#1a3832]/20 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle Matrix Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #dae7de 1px, transparent 1px), linear-gradient(to bottom, #dae7de 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bold Editorial Messaging & Conversion Triggers */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Capability Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#0d221f] border border-[#1d433b] text-[#b2c5bd] shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#dae7de] animate-pulse" />
              <span className="font-semibold text-white">Full-Service IT & Software Agency</span>
              <span className="text-[#1f453e]">•</span>
              <span className="text-[#dae7de] font-mono text-[11px]">Pakistan & Worldwide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-tight text-white leading-[1.08]">
              Technology That Moves Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dae7de] via-[#b2c5bd] to-[#8ea79f]">
                Business Forward.
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-[#b2c5bd] max-w-2xl leading-relaxed">
              We engineer custom software systems, scalable ERPs, high-converting web and mobile applications, practical AI workflows, and resilient IT infrastructure—delivering enterprise craft without vendor lock-in.
            </p>

            {/* Engineering Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-[#b2c5bd] max-w-xl">
              <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-[#0b1c19] border border-[#183832]">
                <CheckCircle2 className="w-4 h-4 text-[#dae7de] flex-shrink-0" />
                <span className="font-medium text-[#dae7de]">100% IP & Source Code Ownership</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-[#0b1c19] border border-[#183832]">
                <CheckCircle2 className="w-4 h-4 text-[#dae7de] flex-shrink-0" />
                <span className="font-medium text-[#dae7de]">Sub-Second Global Edge Performance</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-[#0b1c19] border border-[#183832]">
                <CheckCircle2 className="w-4 h-4 text-[#dae7de] flex-shrink-0" />
                <span className="font-medium text-[#dae7de]">Deterministic AI Scoped to Real ROI</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-[#0b1c19] border border-[#183832]">
                <CheckCircle2 className="w-4 h-4 text-[#dae7de] flex-shrink-0" />
                <span className="font-medium text-[#dae7de]">Transparent Milestone Governance</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full font-bold text-[#071312] bg-[#dae7de] hover:bg-[#eaf3ec] transition-all text-sm text-center shadow-xl shadow-black/40 inline-flex items-center justify-center gap-2 group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="px-6 py-4 rounded-full font-medium text-[#dae7de] bg-[#0d221f] hover:bg-[#132e2a] border border-[#1f453e] hover:border-[#2d584d] transition-colors text-sm text-center inline-flex items-center justify-center gap-2"
              >
                <span>Explore 40+ Services</span>
              </Link>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 rounded-full font-medium text-[#dae7de] hover:text-white bg-[#0e2622] hover:bg-[#15342e] border border-[#234c43] transition-colors text-sm text-center inline-flex items-center justify-center gap-2"
                title="Direct WhatsApp Inquiry"
              >
                <PhoneCall className="w-4 h-4 text-[#dae7de]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t border-[#16332d] flex flex-wrap items-center gap-6 text-xs text-[#8ea79f]">
              <div>
                <span className="text-[#dae7de] font-bold font-mono text-sm block">40+</span>
                <span>Active Services</span>
              </div>
              <div className="w-px h-7 bg-[#1a3832]" />
              <div>
                <span className="text-[#dae7de] font-bold font-mono text-sm block">&lt;24h</span>
                <span>Response Guarantee</span>
              </div>
              <div className="w-px h-7 bg-[#1a3832]" />
              <div>
                <span className="text-[#dae7de] font-bold font-mono text-sm block">100%</span>
                <span>Code Transfer</span>
              </div>
              <div className="w-px h-7 bg-[#1a3832]" />
              <div>
                <span className="text-[#dae7de] font-bold font-mono text-sm block">Global</span>
                <span>PK / US / UK / UAE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Architecture Console (matching rounded pill layered aesthetic) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Diffuse Forest Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#2d584d]/30 to-[#8ea79f]/10 blur-2xl opacity-75 pointer-events-none" />

              {/* Main Console Box */}
              <div className="relative rounded-3xl bg-[#091a17] border border-[#1d433b] shadow-2xl shadow-black/90 overflow-hidden">
                {/* Window Header */}
                <div className="px-5 py-3.5 bg-[#061110] border-b border-[#183832] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#1b3d37]" />
                    <span className="w-3 h-3 rounded-full bg-[#2d584d]" />
                    <span className="w-3 h-3 rounded-full bg-[#8ea79f]" />
                    <span className="ml-2 text-xs font-mono text-[#8ea79f]">
                      logicward-architecture-v1
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#0e2622] text-[#dae7de] border border-[#1e463e]">
                    <Zap className="w-3 h-3 text-[#dae7de]" />
                    <span>PRODUCTION VERIFIED</span>
                  </div>
                </div>

                {/* Interactive Console Tabs */}
                <div className="grid grid-cols-4 border-b border-[#183832] bg-[#071312]/60 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab("software")}
                    className={`py-2.5 px-2 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
                      activeTab === "software"
                        ? "border-[#dae7de] text-[#dae7de] bg-[#0f2824] font-semibold"
                        : "border-transparent text-[#8ea79f] hover:text-[#dae7de]"
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
                        ? "border-[#dae7de] text-[#dae7de] bg-[#0f2824] font-semibold"
                        : "border-transparent text-[#8ea79f] hover:text-[#dae7de]"
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
                        ? "border-[#dae7de] text-[#dae7de] bg-[#0f2824] font-semibold"
                        : "border-transparent text-[#8ea79f] hover:text-[#dae7de]"
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
                        ? "border-[#dae7de] text-[#dae7de] bg-[#0f2824] font-semibold"
                        : "border-transparent text-[#8ea79f] hover:text-[#dae7de]"
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
                      <div className="flex items-center justify-between text-[#8ea79f] text-[11px] pb-1 border-b border-[#183832]">
                        <span>MODULE: ENTERPRISE_ERP_CORE</span>
                        <span className="text-[#dae7de]">STATUS: ACTIVE</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#061110] border border-[#1b3d37] space-y-2">
                        <div className="text-[#dae7de] font-semibold flex items-center justify-between">
                          <span>PostgreSQL Relational Ledger</span>
                          <span className="text-[10px] text-[#dae7de] font-mono px-2 py-0.5 rounded-full bg-[#102b26] border border-[#1e463e]">ACID Compliant</span>
                        </div>
                        <p className="text-[11px] text-[#8ea79f] font-sans leading-relaxed">
                          Multi-location warehouse stock decrementation, tax compliance (FBR & VAT), and role-governed approval hierarchies.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-3 rounded-xl bg-[#061110]/80 border border-[#183832] text-[#b2c5bd]">
                          <span className="text-[#8ea79f] block text-[10px]">INVENTORY SYNC</span>
                          &lt;100ms Latency
                        </div>
                        <div className="p-3 rounded-xl bg-[#061110]/80 border border-[#183832] text-[#b2c5bd]">
                          <span className="text-[#8ea79f] block text-[10px]">IP OWNERSHIP</span>
                          100% Client Handoff
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "web" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[#8ea79f] text-[11px] pb-1 border-b border-[#183832]">
                        <span>FRAMEWORK: NEXT_16_APP_ROUTER</span>
                        <span className="text-[#dae7de]">TURBOPACK READY</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#061110] border border-[#1b3d37] space-y-2">
                        <div className="text-[#dae7de] font-semibold flex items-center justify-between">
                          <span>Edge Server Components</span>
                          <span className="text-[10px] text-[#dae7de] font-mono px-2 py-0.5 rounded-full bg-[#102b26] border border-[#1e463e]">0.7s LCP Score</span>
                        </div>
                        <p className="text-[11px] text-[#8ea79f] font-sans leading-relaxed">
                          Statically prerendered marketing pages, dynamic streaming interfaces, and cross-platform Flutter/React Native mobile applications.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-3 rounded-xl bg-[#061110]/80 border border-[#183832] text-[#b2c5bd]">
                          <span className="text-[#8ea79f] block text-[10px]">LIGHTHOUSE</span>
                          98+ Performance
                        </div>
                        <div className="p-3 rounded-xl bg-[#061110]/80 border border-[#183832] text-[#b2c5bd]">
                          <span className="text-[#8ea79f] block text-[10px]">SEARCH VISIBILITY</span>
                          AEO & Schema Native
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "ai" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[#8ea79f] text-[11px] pb-1 border-b border-[#183832]">
                        <span>PIPELINE: DETERMINISTIC_AI_ENGINE</span>
                        <span className="text-[#dae7de]">STRICT SCOPING</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#061110] border border-[#1b3d37] space-y-2">
                        <div className="text-[#dae7de] font-semibold flex items-center justify-between">
                          <span>Document & Lead Triage</span>
                          <span className="text-[10px] text-[#dae7de] font-mono px-2 py-0.5 rounded-full bg-[#102b26] border border-[#1e463e]">Zero Public Leak</span>
                        </div>
                        <p className="text-[11px] text-[#8ea79f] font-sans leading-relaxed">
                          Commercial enterprise zero-retention APIs extracting PDF invoices and qualifying inbound inquiries with human review triggers.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-3 rounded-xl bg-[#061110]/80 border border-[#183832] text-[#b2c5bd]">
                          <span className="text-[#8ea79f] block text-[10px]">RESPONSE SPEED</span>
                          Under 90 Seconds
                        </div>
                        <div className="p-3 rounded-xl bg-[#061110]/80 border border-[#183832] text-[#b2c5bd]">
                          <span className="text-[#8ea79f] block text-[10px]">SAFEGUARDS</span>
                          Human-in-the-Loop
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "infra" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[#8ea79f] text-[11px] pb-1 border-b border-[#183832]">
                        <span>TOPOLOGY: ENTERPRISE_NETWORKING</span>
                        <span className="text-[#dae7de]">FAILOVER ACTIVE</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-[#061110] border border-[#1b3d37] space-y-2">
                        <div className="text-[#dae7de] font-semibold flex items-center justify-between">
                          <span>MikroTik & Cisco Firewall</span>
                          <span className="text-[10px] text-[#dae7de] font-mono px-2 py-0.5 rounded-full bg-[#102b26] border border-[#1e463e]">Dual-WAN 99.9%</span>
                        </div>
                        <p className="text-[11px] text-[#8ea79f] font-sans leading-relaxed">
                          Isolated office VLANs for guest, biometric, and finance devices, automated WireGuard VPN tunnels, and encrypted cloud backups.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-3 rounded-xl bg-[#061110]/80 border border-[#183832] text-[#b2c5bd]">
                          <span className="text-[#8ea79f] block text-[10px]">FAILOVER TIME</span>
                          &lt;3s Seamless
                        </div>
                        <div className="p-3 rounded-xl bg-[#061110]/80 border border-[#183832] text-[#b2c5bd]">
                          <span className="text-[#8ea79f] block text-[10px]">BACKUP STRATEGY</span>
                          3-2-1 Automated
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Console Footer */}
                <div className="px-5 py-3.5 bg-[#061110] border-t border-[#183832] flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 text-[#8ea79f]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#dae7de]" />
                    <span>Bilateral NDA & SLA Protected</span>
                  </div>
                  <Link
                    href="/contact"
                    className="text-[#dae7de] hover:underline font-semibold inline-flex items-center gap-1"
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
