import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Truck,
  Landmark,
  Home,
  Factory,
  Dumbbell,
  Wheat,
  CheckCircle2,
} from "lucide-react";
import { industriesData } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Target Industries & Domain Workflows",
  description:
    "Explore how Logicward engineers domain-specific software systems, workflow automation, and management platforms for ambitious industries worldwide.",
};

export default function IndustriesPage() {
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "education":
        return <GraduationCap className="w-6 h-6 text-brand-accent" />;
      case "healthcare":
        return <HeartPulse className="w-6 h-6 text-brand-accent" />;
      case "retail-ecommerce":
        return <ShoppingBag className="w-6 h-6 text-brand-accent" />;
      case "logistics-transport":
        return <Truck className="w-6 h-6 text-brand-accent" />;
      case "finance-services":
        return <Landmark className="w-6 h-6 text-brand-accent" />;
      case "real-estate":
        return <Home className="w-6 h-6 text-brand-accent" />;
      case "manufacturing-distribution":
        return <Factory className="w-6 h-6 text-brand-accent" />;
      case "fitness-wellness":
        return <Dumbbell className="w-6 h-6 text-brand-accent" />;
      case "agriculture-commodities":
        return <Wheat className="w-6 h-6 text-brand-accent" />;
      default:
        return <Building2 className="w-6 h-6 text-brand-accent" />;
    }
  };

  return (
    <div className="w-full flex flex-col bg-brand-surface">
      {/* Header Section */}
      <section className="page-hero bg-brand-surface text-brand-text pt-24 pb-20 border-b border-brand-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-brand-card border border-brand-border  text-brand-accent">
              <span>TARGET SECTORS & DOMAIN ARCHITECTURES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Software Engineered for Specific Industry Operations
            </h1>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Every vertical has unique data models, regulatory boundaries, and manual bottlenecks. We build custom management systems and platforms configured around the way your industry actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Notice */}
      <div className="bg-brand-card border-b border-brand-border py-3.5 px-4 text-center">
        <p className="text-xs text-brand-muted max-w-4xl mx-auto">
          <span className="font-semibold text-brand-text">Reference Notice:</span> The industries below represent target domain capabilities and illustrative workflows. Demonstration projects are marked as Concept Projects or Reference Implementations, not verified client engagements or outcomes.
        </p>
      </div>

      {/* Industries Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="bg-brand-card rounded-2xl border border-brand-border p-7 shadow-sm hover:shadow-md hover:border-brand-accent/40 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIndustryIcon(ind.id)}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                      {ind.name}
                    </h2>
                    <p className="text-xs font-mono text-brand-muted mt-0.5">
                      {ind.heroHeadline}
                    </p>
                  </div>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    {ind.shortDescription}
                  </p>

                  {/* Operational Challenges Addressed */}
                  <div className="pt-2 border-t border-brand-border space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-text block">
                      Common Challenges Addressed:
                    </span>
                    <ul className="space-y-1.5 text-xs text-brand-muted">
                      {ind.operationalChallenges.slice(0, 2).map((ch, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reference Implementation Badge */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono bg-brand-surface border border-brand-border  text-brand-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      {ind.referenceConcept.label}: {ind.referenceConcept.title}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-brand-accent inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Workflows & Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
        </div>
      </section>

      {/* Scoping CTA */}
      <section className="bg-brand-card border-t border-brand-border py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
            Operating in a Specialized Industry Domain?
          </h2>
          <p className="text-sm text-brand-secondary leading-relaxed">
            We adapt data models, compliance boundaries, and integration architectures to your unique organizational workflows. Speak directly with a solutions lead.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg text-sm font-semibold text-brand-background bg-brand-accent hover:bg-brand-accent-hover transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>Schedule an Industry Scoping Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
