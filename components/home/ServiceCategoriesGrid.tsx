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
  Layers,
} from "lucide-react";
import { serviceCategories } from "@/lib/data/services";

export function ServiceCategoriesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>(serviceCategories[0].id);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "software-systems":
        return <Code2 className="w-5 h-5 text-[#dae7de]" />;
      case "ai-automation":
        return <Bot className="w-5 h-5 text-[#8ea79f]" />;
      case "web-ecommerce":
        return <Globe className="w-5 h-5 text-[#dae7de]" />;
      case "mobile-development":
        return <Smartphone className="w-5 h-5 text-[#8ea79f]" />;
      case "digital-marketing":
        return <TrendingUp className="w-5 h-5 text-[#dae7de]" />;
      case "it-infrastructure":
        return <Server className="w-5 h-5 text-[#8ea79f]" />;
      case "content-creative":
        return <PenTool className="w-5 h-5 text-[#dae7de]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#dae7de]" />;
    }
  };

  const selectedCategory =
    serviceCategories.find((cat) => cat.id === activeCategory) ||
    serviceCategories[0];

  return (
    <section className="py-20 md:py-28 relative bg-[#071312]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0d221f] text-[#dae7de] border border-[#1e463e]">
              <Sparkles className="w-3.5 h-3.5 text-[#dae7de]" />
              Full-Spectrum Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Comprehensive Technology Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#b2c5bd] leading-relaxed">
              We cover the entire digital engineering stack across 7 core disciplines. Eliminate the friction of managing separate marketing agencies, freelance developers, and network technicians.
            </p>
          </div>

          <Link
            href="/services"
            className="text-sm font-semibold text-[#dae7de] hover:underline inline-flex items-center gap-1.5 group flex-shrink-0"
          >
            <span>Explore all 40+ services directory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none border-b border-[#16332d] mb-8">
          {serviceCategories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#dae7de] border-[#dae7de] text-[#071312] font-bold shadow-md shadow-black/40"
                    : "bg-[#0a1a17] border-[#183832] text-[#8ea79f] hover:text-[#dae7de] hover:bg-[#0e2420]"
                }`}
              >
                <span>{getCategoryIcon(cat.id)}</span>
                <span>{cat.title}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    isActive
                      ? "bg-[#071312] text-[#dae7de]"
                      : "bg-[#142e2a] text-[#8ea79f]"
                  }`}
                >
                  {cat.serviceCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Detail Card & Sub-services Grid */}
        <div className="rounded-3xl bg-[#091a17] border border-[#1a3832] p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl shadow-black/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Category Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#0f2824] text-[#dae7de] border border-[#1e463e]">
                  {selectedCategory.badge}
                </span>
                <span className="text-xs text-[#8ea79f] font-mono">
                  {selectedCategory.serviceCount} Specializations
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {selectedCategory.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#dae7de] font-medium">
                  {selectedCategory.shortSummary}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#b2c5bd] leading-relaxed">
                {selectedCategory.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={`/services/${selectedCategory.featuredSlug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#071312] bg-[#dae7de] hover:bg-[#eaf3ec] transition-colors shadow-lg shadow-black/30"
                >
                  <span>Featured Service Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-medium text-[#dae7de] bg-[#0c201d] border border-[#1e463e] hover:bg-[#122e29] transition-colors"
                >
                  <span>View All in Directory</span>
                </Link>
              </div>
            </div>

            {/* Sub-services Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {selectedCategory.services.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/services/${sub.slug}`}
                  className="p-4 rounded-2xl bg-[#061110] border border-[#183832] hover:border-[#dae7de]/40 hover:bg-[#091b18] transition-all group space-y-1.5 block shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-semibold text-[#f2f7f4] group-hover:text-[#dae7de] transition-colors">
                      {sub.title}
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8ea79f] group-hover:text-[#dae7de] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </div>
                  <p className="text-xs text-[#8ea79f] line-clamp-2 leading-relaxed">
                    {sub.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
