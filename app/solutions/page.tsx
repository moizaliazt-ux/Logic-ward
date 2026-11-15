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
  Layers,
} from "lucide-react";
import { solutionsData } from "@/lib/data/solutions";
import { ConversionCTA } from "@/components/home/ConversionCTA";

export const metadata: Metadata = {
  title: "Management Solutions & Custom ERP Systems",
  description:
    "Tailored enterprise platforms: ERP, CRM, School Management, HRM/Payroll, Inventory, POS, Gym, Agriculture, and Executive BI Dashboards adapted to your workflow.",
};

export default function SolutionsPage() {
  const getIcon = (id: string) => {
    switch (id) {
      case "erp-enterprise":
        return <Building2 className="w-5 h-5 text-brand-accent" />;
      case "crm-pipeline":
        return <Users2 className="w-5 h-5 text-brand-accent" />;
      case "school-college":
        return <GraduationCap className="w-5 h-5 text-brand-accent" />;
      case "hrm-payroll":
        return <Users2 className="w-5 h-5 text-brand-accent" />;
      case "inventory-stock":
        return <Boxes className="w-5 h-5 text-brand-accent" />;
      case "pos-billing":
        return <Receipt className="w-5 h-5 text-brand-accent" />;
      case "gym-membership":
        return <Dumbbell className="w-5 h-5 text-brand-accent" />;
      case "agriculture-business":
        return <Wheat className="w-5 h-5 text-brand-accent" />;
      case "booking-workflow":
        return <CalendarCheck className="w-5 h-5 text-brand-accent" />;
      case "dashboards-bi":
        return <BarChart3 className="w-5 h-5 text-brand-accent" />;
      default:
        return <Building2 className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <div className="flex flex-col w-full bg-brand-surface  text-brand-text">
      {/* Header Banner */}
      <section className="relative py-16 md:py-24 bg-brand-surface  text-brand-text border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-brand-card  text-brand-accent border border-brand-border">
              <Layers className="w-3.5 h-3.5" />
              <span>OPERATIONAL SYSTEMS ARCHITECTURE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
              Business Management Systems & Custom ERPs
            </h1>
            <p className="text-base sm:text-lg text-brand-secondary leading-relaxed">
              Eliminate disconnected spreadsheets and rigid per-user SaaS licenses. We engineer purpose-built operational software tailored to your company&apos;s actual approval matrices, tax rules, and daily workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Scope Disclaimer Notice (PRD § 7) */}
      <div className="bg-brand-card border-b border-brand-border py-3.5 px-4 text-center">
        <p className="text-xs text-brand-muted max-w-4xl mx-auto">
          <strong className="text-brand-text">Implementation Note:</strong> Our management solutions are custom-configured around your exact organizational hierarchies, approval matrices, and reporting logic. We deliver tailored software without rigid vendor lock-in.
        </p>
      </div>

      {/* Main Solutions Deep Dive */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        {solutionsData.map((solution) => (
          <div
            key={solution.id}
            id={solution.slug}
            className="rounded-2xl bg-brand-card border border-brand-border p-8 sm:p-10 lg:p-12 relative overflow-hidden scroll-mt-24 shadow-sm space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Solution Identity & Adaptation */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-brand-elevated border border-brand-border">
                    {getIcon(solution.id)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-brand-surface  text-brand-accent border border-brand-border font-semibold">
                      {solution.badge}
                    </span>
                    <h2 className="text-2xl font-bold text-brand-text tracking-tight mt-1">
                      {solution.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xs font-mono font-medium text-brand-accent">
                  {solution.tagline}
                </p>

                <p className="text-sm text-brand-secondary leading-relaxed">
                  {solution.shortSummary}
                </p>

                <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-2">
                  <span className="text-xs font-semibold text-brand-text uppercase tracking-wider block">
                    Workflow Adaptation:
                  </span>
                  <p className="text-xs text-brand-secondary leading-relaxed">
                    {solution.workflowAdaptation}
                  </p>
                </div>

                {/* Target Industry & Tech Stack */}
                <div className="space-y-3 pt-2">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-brand-muted block">
                      TARGET SECTORS:
                    </span>
                    <span className="text-xs font-medium text-brand-text">
                      {solution.targetIndustry}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase text-brand-muted block mb-1">
                      CORE ARCHITECTURE:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {solution.technicalHighlights.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded text-[11px] font-mono bg-brand-surface border border-brand-border  text-brand-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-brand-background bg-brand-accent hover:bg-brand-accent-hover transition-colors inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Full Architecture Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-brand-accent hover:underline"
                  >
                    Request Scoping →
                  </Link>
                </div>
              </div>

              {/* Right Column: Core Modules & Key Capabilities */}
              <div className="lg:col-span-7 space-y-8">
                {/* Core Modules Grid */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-brand-text uppercase tracking-wider block">
                    Core Functional Modules:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {solution.coreModules.map((module, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-center gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                        <span className="text-xs font-medium text-brand-text">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-brand-text uppercase tracking-wider block">
                    Operational Impact:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {solution.keyCapabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-brand-border  bg-brand-card space-y-1.5"
                      >
                        <h3 className="text-xs font-bold text-brand-text">
                          {cap.title}
                        </h3>
                        <p className="text-xs text-brand-secondary leading-relaxed">
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
