"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Zap,
  PhoneCall,
  CheckCircle2,
  Database,
  Cpu,
  Network,
  ChevronRight,
  Terminal,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"software" | "web" | "ai" | "infra">("software");

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-brand-surface text-brand-text">
      {/* Engineering Grid Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F5F7FA 1px, transparent 1px), linear-gradient(to bottom, #F5F7FA 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Bold Editorial Messaging & Conversion Triggers */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* PRD Section 5.2 Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider bg-brand-card border border-brand-border text-brand-secondary shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-brand-accent font-semibold">SOFTWARE • DIGITAL PRODUCTS • BUSINESS SYSTEMS</span>
            </div>

            {/* PRD Section 2.2 Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-tight text-brand-text leading-[1.08]">
              Build smarter. Move your{" "}
              <span className="text-brand-accent">
                business forward.
              </span>
            </h1>

            {/* PRD Section 2.2 Supporting Message */}
            <p className="text-base sm:text-lg text-brand-secondary max-w-2xl leading-relaxed">
              From custom software and digital products to business automation and cloud-ready platforms, Logicward turns complex business needs into practical technology.
            </p>

            {/* Engineering Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-brand-secondary max-w-xl">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-brand-card border border-brand-border">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span className="text-brand-text font-medium">Contractual Code & IP Ownership</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-brand-card border border-brand-border">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span className="text-brand-text font-medium">Performance-Focused Architecture</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-brand-card border border-brand-border">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span className="text-brand-text font-medium">Pragmatic, Scoped Automation</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-brand-card border border-brand-border">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span className="text-brand-text font-medium">Milestone-Based Staging Reviews</span>
              </div>
            </div>

            {/* PRD Section 5.2 Calls to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-lg text-sm font-semibold text-brand-background bg-brand-accent hover:bg-brand-accent-hover transition-all text-center shadow-sm shadow-brand-background/20 inline-flex items-center justify-center gap-2 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/work"
                className="px-5 py-3.5 rounded-lg text-sm font-semibold text-brand-secondary hover:text-brand-text bg-brand-card hover:bg-brand-elevated border border-brand-border hover:border-brand-accent/50 transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>Explore Our Work</span>
              </Link>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-lg text-sm font-semibold text-brand-secondary hover:text-brand-text bg-brand-card hover:bg-brand-elevated border border-brand-border hover:border-brand-accent/50 transition-colors text-center inline-flex items-center justify-center gap-2"
                title="Direct WhatsApp Inquiry"
              >
                <PhoneCall className="w-4 h-4 text-brand-accent" />
                <span className="font-mono text-xs">WhatsApp</span>
              </a>
            </div>

            {/* Verified Capability Standards Bar (PRD Section 5.3) */}
            <div className="pt-4 border-t border-brand-border flex flex-wrap items-center gap-6 text-xs text-brand-muted">
              <div>
                <span className="text-brand-text font-bold font-mono text-sm block">Full-Stack</span>
                <span>Software & Systems</span>
              </div>
              <div className="w-px h-7 bg-brand-elevated" />
              <div>
                <span className="text-brand-text font-bold font-mono text-sm block">100% Transfer</span>
                <span>Code & IP Handover</span>
              </div>
              <div className="w-px h-7 bg-brand-elevated" />
              <div>
                <span className="text-brand-text font-bold font-mono text-sm block">Milestone SOW</span>
                <span>Staging Demonstrations</span>
              </div>
              <div className="w-px h-7 bg-brand-elevated" />
              <div>
                <span className="text-brand-text font-bold font-mono text-sm block">International</span>
                <span>PK / US / UK / UAE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Architecture Console */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Console Box */}
              <div className="relative rounded-2xl bg-brand-card border border-brand-border shadow-md overflow-hidden">
                {/* Window Header */}
                <div className="px-5 py-3.5 bg-brand-background border-b border-brand-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-brand-accent" />
                    <span className="w-3 h-3 rounded-full bg-brand-accent" />
                    <span className="w-3 h-3 rounded-full bg-brand-accent" />
                    <span className="ml-2 text-xs font-mono text-brand-muted">
                      logicward-architecture-v2
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-brand-surface  text-brand-accent border border-brand-border">
                    <Zap className="w-3 h-3 text-brand-accent" />
                    <span>REFERENCE ARCHITECTURE</span>
                  </div>
                </div>

                {/* Interactive Console Tabs */}
                <div className="grid grid-cols-4 border-b border-brand-border  bg-brand-background/80 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab("software")}
                    className={`py-2.5 px-2 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
                      activeTab === "software"
                        ? "border-brand-accent text-brand-text bg-brand-surface font-semibold"
                        : "border-transparent text-brand-muted hover:text-brand-text"
                    }`}
                  >
                    <Database className="w-3.5 h-3.5 text-brand-accent" />
                    <span className="hidden sm:inline">ERP/Core</span>
                    <span className="sm:hidden">ERP</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("web")}
                    className={`py-2.5 px-2 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
                      activeTab === "web"
                        ? "border-brand-accent text-brand-text bg-brand-surface font-semibold"
                        : "border-transparent text-brand-muted hover:text-brand-text"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5 text-brand-accent" />
                    <span className="hidden sm:inline">Web/Apps</span>
                    <span className="sm:hidden">Web</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`py-2.5 px-2 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
                      activeTab === "ai"
                        ? "border-brand-accent text-brand-text bg-brand-surface font-semibold"
                        : "border-transparent text-brand-muted hover:text-brand-text"
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5 text-brand-accent" />
                    <span className="hidden sm:inline">AI Workflows</span>
                    <span className="sm:hidden">AI</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("infra")}
                    className={`py-2.5 px-2 text-center transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
                      activeTab === "infra"
                        ? "border-brand-accent text-brand-text bg-brand-surface font-semibold"
                        : "border-transparent text-brand-muted hover:text-brand-text"
                    }`}
                  >
                    <Network className="w-3.5 h-3.5 text-brand-accent" />
                    <span className="hidden sm:inline">Network/IT</span>
                    <span className="sm:hidden">IT</span>
                  </button>
                </div>

                {/* Console Content Screen */}
                <div className="p-6 space-y-5 text-left text-xs font-mono">
                  {activeTab === "software" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[11px] text-brand-muted border-b border-brand-border pb-2">
                        <span className="flex items-center gap-1.5 text-brand-text">
                          <Terminal className="w-3.5 h-3.5 text-brand-accent" />
                          ARCHITECTURE: MODULAR ERP & RELATIONAL SCHEMA
                        </span>
                        <span className="text-brand-accent">ACID COMPLIANT</span>
                      </div>

                      <div className="bg-brand-background p-3.5 rounded-xl border border-brand-border space-y-2 text-brand-secondary">
                        <p className="text-[11px] text-brand-accent">
                          {"// High-Integrity Transactional Pipeline"}
                        </p>
                        <p className="text-[11px] leading-relaxed">
                          SCHEMA: PostgreSQL Normalization + Redis Query Caching
                          <br />
                          TRANSACTIONS: Row-level write locks preventing stock over-allocation
                          <br />
                          RECONCILIATION: Structured financial ledger balancing
                          <br />
                          MIGRATION: Versioned database migration scripts
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border">
                          <span className="text-brand-muted block text-[10px]">SCALABILITY</span>
                          <span className="text-brand-text font-bold">Partitioned Tables</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border">
                          <span className="text-brand-muted block text-[10px]">DATA INTEGRITY</span>
                          <span className="text-brand-accent font-bold">Foreign Key Constraints</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "web" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[11px] text-brand-muted border-b border-brand-border pb-2">
                        <span className="flex items-center gap-1.5 text-brand-text">
                          <Terminal className="w-3.5 h-3.5 text-brand-accent" />
                          STACK: NEXT.JS 16 APP ROUTER + REACT 19
                        </span>
                        <span className="text-brand-accent">SSR + RSC</span>
                      </div>

                      <div className="bg-brand-background p-3.5 rounded-xl border border-brand-border space-y-2 text-brand-secondary">
                        <p className="text-[11px] text-brand-accent">
                          {"// Performance-Focused Architecture"}
                        </p>
                        <p className="text-[11px] leading-relaxed">
                          RENDERING: React Server Components by default
                          <br />
                          BUNDLE: Client JavaScript strictly reserved for interactive islands
                          <br />
                          RESPONSIVE: Touch-optimized mobile navigation drawer
                          <br />
                          STRUCTURED DATA: Schema.org microdata for search engines
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border">
                          <span className="text-brand-muted block text-[10px]">OPTIMIZATION</span>
                          <span className="text-brand-text font-bold">Core Web Vitals Best Practices</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border">
                          <span className="text-brand-muted block text-[10px]">DEPLOYMENT</span>
                          <span className="text-brand-accent font-bold">Global Edge CDN Distribution</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "ai" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[11px] text-brand-muted border-b border-brand-border pb-2">
                        <span className="flex items-center gap-1.5 text-brand-text">
                          <Terminal className="w-3.5 h-3.5 text-brand-accent" />
                          PIPELINE: PRAGMATIC WORKFLOW AUTOMATION
                        </span>
                        <span className="text-brand-accent">SCHEMA VALIDATED</span>
                      </div>

                      <div className="bg-brand-background p-3.5 rounded-xl border border-brand-border space-y-2 text-brand-secondary">
                        <p className="text-[11px] text-brand-accent">
                          {"// Practical Automation Without Hype"}
                        </p>
                        <p className="text-[11px] leading-relaxed">
                          TRIAGE: Rules-based and model-assisted lead classification
                          <br />
                          EXTRACTION: Structured JSON data extraction from documents
                          <br />
                          GUARDRAILS: Human review thresholds for high-stakes actions
                          <br />
                          INTEGRATION: Standardized REST webhook payloads to CRM
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border">
                          <span className="text-brand-muted block text-[10px]">APPROACH</span>
                          <span className="text-brand-text font-bold">Deterministic Pipelines</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border">
                          <span className="text-brand-muted block text-[10px]">OVERSIGHT</span>
                          <span className="text-brand-accent font-bold">Human-in-the-Loop Review</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "infra" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[11px] text-brand-muted border-b border-brand-border pb-2">
                        <span className="flex items-center gap-1.5 text-brand-text">
                          <Terminal className="w-3.5 h-3.5 text-brand-accent" />
                          TOPOLOGY: ROUTER, SWITCH & CLOUD RESILIENCY
                        </span>
                        <span className="text-brand-accent">REDUNDANT ROUTING</span>
                      </div>

                      <div className="bg-brand-background p-3.5 rounded-xl border border-brand-border space-y-2 text-brand-secondary">
                        <p className="text-[11px] text-brand-accent">
                          {"// Network Infrastructure & Security"}
                        </p>
                        <p className="text-[11px] leading-relaxed">
                          ROUTING: Multi-WAN configuration and bandwidth shaping
                          <br />
                          SECURITY: Hardware firewall filtering and secure VPN tunnels
                          <br />
                          BACKUPS: 3-2-1 backup strategy with encrypted off-site copies
                          <br />
                          MONITORING: Automated ping and uptime telemetry alerts
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border">
                          <span className="text-brand-muted block text-[10px]">ARCHITECTURE</span>
                          <span className="text-brand-text font-bold">Multi-ISP Gateway</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-brand-surface border border-brand-border">
                          <span className="text-brand-muted block text-[10px]">STANDARDS</span>
                          <span className="text-brand-accent font-bold">Encrypted VPN Protocols</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Scoping CTA Link inside Console */}
                  <div className="pt-3 border-t border-brand-border flex items-center justify-between text-[11px]">
                    <span className="text-brand-muted">Want to inspect raw architectural specs?</span>
                    <Link
                      href="/contact"
                      className="text-brand-accent hover:text-brand-text font-semibold inline-flex items-center gap-1"
                    >
                      <span>Request TRD Blueprint</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
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
