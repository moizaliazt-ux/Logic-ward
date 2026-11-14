import React from "react";
import Link from "next/link";
import {
  Building2,
  Users2,
  GraduationCap,
  Boxes,
  Receipt,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { solutionsData } from "@/lib/data/solutions";

export function SolutionsPreview() {
  const getIcon = (id: string) => {
    switch (id) {
      case "erp-enterprise":
        return <Building2 className="w-5 h-5 text-[#dae7de]" />;
      case "crm-pipeline":
        return <Users2 className="w-5 h-5 text-[#8ea79f]" />;
      case "school-college":
        return <GraduationCap className="w-5 h-5 text-[#dae7de]" />;
      case "inventory-stock":
        return <Boxes className="w-5 h-5 text-[#8ea79f]" />;
      case "pos-billing":
        return <Receipt className="w-5 h-5 text-[#dae7de]" />;
      case "dashboards-bi":
        return <BarChart3 className="w-5 h-5 text-[#8ea79f]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#dae7de]" />;
    }
  };

  return (
    <section className="py-20 bg-[#06100f] border-t border-[#16332d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#dae7de]">
              Operational Management Platforms
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Business Systems Tailored to Your Workflows
            </h2>
            <p className="text-sm sm:text-base text-[#b2c5bd] leading-relaxed">
              We engineer modular ERPs, CRMs, institutional management, and point-of-sale software adapted around your exact organizational hierarchies, tax requirements, and operational logic.
            </p>
          </div>

          <Link
            href="/solutions"
            className="text-sm font-semibold text-[#dae7de] hover:underline inline-flex items-center gap-1.5 group flex-shrink-0"
          >
            <span>View all 10 business solution architectures</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Featured Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.slice(0, 6).map((solution) => (
            <div
              key={solution.id}
              className="p-6 rounded-3xl bg-[#091a17] border border-[#1a3832] hover:border-[#2d584d] transition-all flex flex-col justify-between space-y-5 group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#0e2622] border border-[#1e463e] flex items-center justify-center group-hover:border-[#dae7de]/40 transition-colors">
                    {getIcon(solution.id)}
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#061110] text-[#dae7de] border border-[#183832]">
                    {solution.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-[#dae7de] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-[#dae7de]/90 font-medium">
                    {solution.tagline}
                  </p>
                  <p className="text-xs text-[#8ea79f] leading-relaxed pt-1">
                    {solution.shortSummary}
                  </p>
                </div>

                {/* Core Module Bullets */}
                <div className="pt-2 border-t border-[#16332d] space-y-1.5">
                  <span className="text-[11px] font-semibold text-[#b2c5bd] uppercase tracking-wider block">
                    Core Capabilities:
                  </span>
                  <ul className="space-y-1 text-xs text-[#8ea79f]">
                    {solution.coreModules.slice(0, 3).map((mod, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#dae7de] mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-[#16332d] flex items-center justify-between">
                <span className="text-[11px] text-[#8ea79f] font-mono">
                  {solution.targetIndustry.split(",")[0]}
                </span>
                <Link
                  href={`/solutions#${solution.slug}`}
                  className="text-xs font-semibold text-[#dae7de] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore Modules</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
