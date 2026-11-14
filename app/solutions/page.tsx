import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Users2,
  GraduationCap,
  Boxes,
  Receipt,
  BarChart3,
  Dumbbell,
  Wheat,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";
import { solutionsData } from "@/lib/data/solutions";
import { ConversionCTA } from "@/components/home/ConversionCTA";

export const metadata: Metadata = {
  title: "Business Solutions & Management Systems — ERP, CRM, POS & Dashboards",
  description:
    "Tailored enterprise platforms: ERP, CRM, School Management, HRM/Payroll, Inventory, POS, Gym, Agriculture, and Executive BI Dashboards adapted to your workflow.",
};

export default function SolutionsPage() {
  const getIcon = (id: string) => {
    switch (id) {
      case "erp-enterprise":
        return <Building2 className="w-5 h-5 text-[#dae7de]" />;
      case "crm-pipeline":
        return <Users2 className="w-5 h-5 text-[#94a49a]" />;
      case "school-college":
        return <GraduationCap className="w-5 h-5 text-[#dae7de]" />;
      case "hrm-payroll":
        return <Users2 className="w-5 h-5 text-[#94a49a]" />;
      case "inventory-stock":
        return <Boxes className="w-5 h-5 text-[#dae7de]" />;
      case "pos-billing":
        return <Receipt className="w-5 h-5 text-[#94a49a]" />;
      case "gym-membership":
        return <Dumbbell className="w-5 h-5 text-[#dae7de]" />;
      case "agriculture-business":
        return <Wheat className="w-5 h-5 text-[#94a49a]" />;
      case "booking-workflow":
        return <CalendarCheck className="w-5 h-5 text-[#dae7de]" />;
      case "dashboards-bi":
        return <BarChart3 className="w-5 h-5 text-[#94a49a]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#dae7de]" />;
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#071312] text-[#dae7de]">
      {/* Header Banner */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#091615] via-[#0d1f1c] to-[#071312] border-b border-[#1a342e]">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#2d584d]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-[#0d1f1c] text-[#dae7de] border border-[#1a342e]">
              <Layers className="w-3.5 h-3.5 text-[#94a49a]" />
              <span>Operational Systems Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Business Management Systems & Custom ERPs
            </h1>
            <p className="text-base sm:text-lg text-[#94a49a] leading-relaxed">
              Eliminate disconnected spreadsheets and rigid per-user SaaS licenses. We engineer purpose-built operational software tailored to your company&apos;s actual approval matrices, tax rules, and daily workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Main Solutions Deep Dive */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        {solutionsData.map((solution) => (
          <div
            key={solution.id}
            id={solution.slug}
            className="rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] p-8 sm:p-10 lg:p-12 relative overflow-hidden scroll-mt-24 shadow-xl shadow-black/40"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Solution Identity & Adaptation */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#091615] border border-[#1a342e]">
                    {getIcon(solution.id)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#091615] text-[#dae7de] border border-[#1a342e]">
                      {solution.badge}
                    </span>
                    <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                      {solution.title}
                    </h2>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-[#dae7de]">
                    {solution.tagline}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94a49a] leading-relaxed">
                    {solution.shortSummary}
                  </p>
                </div>

                {/* Workflow Adaptation Notice */}
                <div className="p-4 rounded-xl bg-[#091615] border border-[#1a342e] space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-[0.72px] text-[#dae7de] block">
                    Workflow Customization:
                  </span>
                  <p className="text-xs text-[#94a49a] leading-relaxed">
                    {solution.workflowAdaptation}
                  </p>
                </div>

                {/* Tech Highlights */}
                <div className="pt-2">
                  <span className="text-[11px] text-[#94a49a] block mb-2 font-mono">
                    Targeted Sectors: {solution.targetIndustry}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {solution.technicalHighlights.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#091615] border border-[#1a342e] text-[#dae7de]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold text-[#091615] bg-[#dae7de] hover:bg-white transition-colors shadow-sm"
                  >
                    <span>Request Scoping for this System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Modules and Capabilities */}
              <div className="lg:col-span-7 space-y-6">
                {/* Core Modules Grid */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
                    Included Architectural Modules
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {solution.coreModules.map((mod, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-[#091615] border border-[#1a342e] flex items-start gap-2 text-xs sm:text-sm text-[#dae7de]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#dae7de] mt-0.5 flex-shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-3 pt-4 border-t border-[#1a342e]">
                  <span className="text-xs font-mono uppercase tracking-[0.72px] text-[#94a49a]">
                    Operational Highlights
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {solution.keyCapabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-[#091615]/60 border border-[#1a342e] space-y-1"
                      >
                        <h4 className="text-xs font-bold text-white tracking-tight">
                          {cap.title}
                        </h4>
                        <p className="text-[11px] text-[#94a49a] leading-relaxed">
                          {cap.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <ConversionCTA />
    </div>
  );
}
