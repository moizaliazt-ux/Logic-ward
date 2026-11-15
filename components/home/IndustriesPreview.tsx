import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Truck,
  Landmark,
  Home,
  Factory,
  Dumbbell,
  Wheat,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { industriesData } from "@/lib/data/industries";

export function IndustriesPreview() {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "education":
        return <GraduationCap className="w-5 h-5 text-brand-accent" />;
      case "healthcare":
        return <HeartPulse className="w-5 h-5 text-brand-accent" />;
      case "retail-ecommerce":
        return <ShoppingBag className="w-5 h-5 text-brand-accent" />;
      case "logistics-transport":
        return <Truck className="w-5 h-5 text-brand-accent" />;
      case "finance-services":
        return <Landmark className="w-5 h-5 text-brand-accent" />;
      case "real-estate":
        return <Home className="w-5 h-5 text-brand-accent" />;
      case "manufacturing-distribution":
        return <Factory className="w-5 h-5 text-brand-accent" />;
      case "fitness-wellness":
        return <Dumbbell className="w-5 h-5 text-brand-accent" />;
      case "agriculture-commodities":
        return <Wheat className="w-5 h-5 text-brand-accent" />;
      default:
        return <Building2 className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-brand-surface border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
              TARGET INDUSTRY CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight">
              Software Engineered for Domain Workflows
            </h2>
            <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
              We design and develop custom management systems adapted to the specific operational constraints, data schemas, and regulatory expectations of target industry sectors.
            </p>
          </div>

          <Link
            href="/industries"
            className="text-sm font-semibold text-brand-accent hover:text-brand-accent inline-flex items-center gap-1.5 group flex-shrink-0"
          >
            <span>Explore all 9 target industries</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Industry Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.slice(0, 6).map((ind) => (
            <div
              key={ind.id}
              className="p-7 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 hover:shadow-sm transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center group-hover:border-brand-accent transition-colors">
                    {getIndustryIcon(ind.id)}
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-brand-surface  text-brand-muted border border-brand-border">
                    {ind.referenceConcept.label}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-brand-accent font-mono">
                    {ind.heroHeadline}
                  </p>
                  <p className="text-xs text-brand-secondary leading-relaxed pt-1">
                    {ind.shortDescription}
                  </p>
                </div>

                <div className="pt-2 border-t border-brand-border space-y-1.5">
                  <span className="text-[11px] font-semibold text-brand-text uppercase tracking-wider block">
                    Key Workflows Solved:
                  </span>
                  <ul className="space-y-1 text-xs text-brand-muted">
                    {ind.keyWorkflows.slice(0, 2).map((wf, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{wf.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="text-xs font-bold text-brand-accent hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>View Industry Architecture</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs text-brand-muted hover:text-brand-text font-medium"
                >
                  Inquire →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Notice */}
        <div className="mt-8 p-4 rounded-xl bg-brand-card border border-brand-border text-center text-xs text-brand-muted">
          <span>Notice: Target industry sectors represent domain architectural models. All client contracts are bound by strict bilateral NDAs.</span>
        </div>
      </div>
    </section>
  );
}
