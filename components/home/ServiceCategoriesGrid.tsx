"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Bot,
  Globe,
  Smartphone,
  TrendingUp,
  Server,
  PenTool,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { serviceCategories } from "@/lib/data/services";

export function ServiceCategoriesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>(serviceCategories[0].id);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "software-systems":
        return <Code2 className="w-5 h-5 text-brand-accent" />;
      case "ai-automation":
        return <Bot className="w-5 h-5 text-brand-accent" />;
      case "web-ecommerce":
        return <Globe className="w-5 h-5 text-brand-accent" />;
      case "mobile-development":
        return <Smartphone className="w-5 h-5 text-brand-accent" />;
      case "digital-marketing":
        return <TrendingUp className="w-5 h-5 text-brand-accent" />;
      case "it-infrastructure":
        return <Server className="w-5 h-5 text-brand-accent" />;
      case "content-creative":
        return <PenTool className="w-5 h-5 text-brand-accent" />;
      default:
        return <Code2 className="w-5 h-5 text-brand-accent" />;
    }
  };

  const selectedCategory =
    serviceCategories.find((cat) => cat.id === activeCategory) ||
    serviceCategories[0];

  return (
    <section className="py-20 md:py-28 relative bg-brand-surface border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider bg-brand-card text-brand-accent border border-brand-border">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              CAPABILITY SPECTRUM
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text tracking-tight leading-tight">
              Comprehensive Technology Capabilities
            </h2>
            <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
              Explore services across 7 digital engineering disciplines, from software and web development to SEO and office IT.
            </p>
          </div>

          <Link
            href="/services"
            className="text-sm font-semibold text-brand-accent hover:text-brand-accent inline-flex items-center gap-1.5 group flex-shrink-0"
          >
            <span>Explore the full service directory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Navigation Pills */}
        <div
          role="group"
          aria-label="Select a service discipline"
          className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-brand-border mb-10"
        >
          {serviceCategories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={isActive}
                aria-controls="featured-service-list"
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? "bg-brand-background border-brand-border  text-brand-text font-semibold shadow-sm"
                    : "bg-brand-card border-brand-border  text-brand-secondary hover:text-brand-text hover:border-brand-border"
                }`}
              >
                <span>{cat.title}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    isActive
                      ? "bg-brand-accent text-brand-background"
                      : "bg-brand-surface text-brand-muted"
                  }`}
                >
                  {cat.serviceCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Category Overview Card */}
          <div className="lg:col-span-5 bg-brand-card rounded-2xl border border-brand-border p-7 sm:p-8 space-y-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center">
              {getCategoryIcon(selectedCategory.id)}
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
                DISCIPLINE OVERVIEW
              </span>
              <h3 className="text-2xl font-bold text-brand-text">
                {selectedCategory.title}
              </h3>
              <p className="text-sm text-brand-secondary leading-relaxed">
                {selectedCategory.description}
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-brand-border">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-text block">
                Engagement planning:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-secondary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <span>Requirements and technical specifications scoped before implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <span>Review cadence and staging access agreed for each project</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <span>Ownership terms recorded in the project agreement</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <Link
                href={`/services#${selectedCategory.id}`}
                className="w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-brand-background bg-brand-accent hover:bg-brand-accent-hover transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Browse this discipline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div
            id="featured-service-list"
            className="lg:col-span-7 divide-y divide-brand-border border-y border-brand-border"
          >
            {selectedCategory.services.slice(0, 6).map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group grid min-h-24 grid-cols-[2.25rem_1fr_auto] items-start gap-4 py-5 transition-colors hover:bg-brand-surface/70 sm:px-3"
              >
                <span className="pt-1 font-mono text-xs text-brand-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="space-y-2">
                  <span className="block text-base font-semibold text-brand-text transition-colors group-hover:text-brand-accent">
                    {service.title}
                  </span>
                  <span className="block text-sm leading-relaxed text-brand-secondary">
                    {service.description}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 text-brand-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-accent"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
