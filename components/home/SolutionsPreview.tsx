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
        return <Building2 className="w-5 h-5 text-brand-accent" />;
      case "crm-pipeline":
        return <Users2 className="w-5 h-5 text-brand-accent" />;
      case "school-college":
        return <GraduationCap className="w-5 h-5 text-brand-accent" />;
      case "inventory-stock":
        return <Boxes className="w-5 h-5 text-brand-accent" />;
      case "pos-billing":
        return <Receipt className="w-5 h-5 text-brand-accent" />;
      case "dashboards-bi":
        return <BarChart3 className="w-5 h-5 text-brand-accent" />;
      default:
        return <Building2 className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <section className="py-20 bg-brand-card border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
              OPERATIONAL MANAGEMENT PLATFORMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight">
              Business Systems Tailored to Your Workflows
            </h2>
            <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
              We engineer modular ERPs, CRMs, institutional management, and point-of-sale software adapted around your exact organizational hierarchies, tax requirements, and operational logic.
            </p>
          </div>

          <Link
            href="/solutions"
            className="text-sm font-semibold text-brand-accent hover:text-brand-accent inline-flex items-center gap-1.5 group flex-shrink-0"
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
              className="p-7 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 hover:bg-brand-elevated hover:shadow-sm transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center group-hover:border-brand-accent transition-colors shadow-2xs">
                    {getIcon(solution.id)}
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-brand-card text-brand-secondary border border-brand-border">
                    {solution.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-brand-accent font-medium">
                    {solution.tagline}
                  </p>
                  <p className="text-xs text-brand-secondary leading-relaxed pt-1">
                    {solution.shortSummary}
                  </p>
                </div>

                {/* Core Module Bullets */}
                <div className="pt-2 border-t border-brand-border space-y-1.5">
                  <span className="text-[11px] font-semibold text-brand-text uppercase tracking-wider block">
                    Core Capabilities:
                  </span>
                  <ul className="space-y-1 text-xs text-brand-muted">
                    {solution.coreModules.slice(0, 3).map((mod, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                <Link
                  href={`/solutions#${solution.id}`}
                  className="text-xs font-bold text-brand-accent hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore System Modules</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs text-brand-muted hover:text-brand-text font-medium"
                >
                  Request Scoping →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
