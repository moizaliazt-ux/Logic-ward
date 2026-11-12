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
        return <Building2 className="w-6 h-6 text-cyan-400" />;
      case "crm-pipeline":
        return <Users2 className="w-6 h-6 text-sky-400" />;
      case "school-college":
        return <GraduationCap className="w-6 h-6 text-teal-400" />;
      case "hrm-payroll":
        return <Users2 className="w-6 h-6 text-indigo-400" />;
      case "inventory-stock":
        return <Boxes className="w-6 h-6 text-blue-400" />;
      case "pos-billing":
        return <Receipt className="w-6 h-6 text-emerald-400" />;
      case "gym-membership":
        return <Dumbbell className="w-6 h-6 text-purple-400" />;
      case "agriculture-business":
        return <Wheat className="w-6 h-6 text-amber-400" />;
      case "booking-workflow":
        return <CalendarCheck className="w-6 h-6 text-cyan-400" />;
      case "dashboards-bi":
        return <BarChart3 className="w-6 h-6 text-teal-400" />;
      default:
        return <Building2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#060a12] via-[#091122] to-[#060a12] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-900 text-cyan-400 border border-slate-800">
              <Layers className="w-3.5 h-3.5" />
              <span>Operational Systems Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Business Management Systems & Custom ERPs
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Eliminate disconnected spreadsheets and rigid per-user SaaS licenses. We engineer purpose-built operational software tailored to your company's actual approval matrices, tax rules, and daily workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Main Solutions Deep Dive */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-20">
        {solutionsData.map((solution, idx) => (
          <div
            key={solution.id}
            id={solution.slug}
            className="rounded-3xl bg-[#090e1a] border border-slate-800 p-8 sm:p-10 lg:p-12 relative overflow-hidden scroll-mt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Solution Identity & Adaptation */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                    {getIcon(solution.id)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                      {solution.badge}
                    </span>
                    <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
                      {solution.title}
                    </h2>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-cyan-300">
                    {solution.tagline}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {solution.shortSummary}
                  </p>
                </div>

                {/* Workflow Adaptation Notice */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                    Workflow Customization:
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {solution.workflowAdaptation}
                  </p>
                </div>

                {/* Tech Highlights */}
                <div className="pt-2">
                  <span className="text-[11px] text-slate-400 block mb-2 font-mono">
                    Targeted Sectors: {solution.targetIndustry}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {solution.technicalHighlights.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm shadow-cyan-950/40"
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
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Included Architectural Modules
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {solution.coreModules.map((mod, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-2 text-xs sm:text-sm text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-3 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Operational Highlights
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {solution.keyCapabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 space-y-1"
                      >
                        <h4 className="text-xs font-bold text-white">
                          {cap.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
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
