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
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case "ai-automation":
        return <Bot className="w-5 h-5 text-sky-400" />;
      case "web-ecommerce":
        return <Globe className="w-5 h-5 text-teal-400" />;
      case "mobile-development":
        return <Smartphone className="w-5 h-5 text-blue-400" />;
      case "digital-marketing":
        return <TrendingUp className="w-5 h-5 text-indigo-400" />;
      case "it-infrastructure":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "content-creative":
        return <PenTool className="w-5 h-5 text-purple-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const selectedCategory =
    serviceCategories.find((cat) => cat.id === activeCategory) ||
    serviceCategories[0];

  return (
    <section className="py-20 md:py-28 relative bg-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Full-Spectrum Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Comprehensive Technology Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We cover the entire digital engineering stack across 7 core disciplines. Eliminate the friction of managing separate marketing agencies, freelance developers, and network technicians.
            </p>
          </div>

          <Link
            href="/services"
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 group flex-shrink-0"
          >
            <span>Explore all 40+ services directory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-800/80 mb-8">
          {serviceCategories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? "bg-cyan-500/15 border-cyan-400/50 text-cyan-300 shadow-md shadow-cyan-950/40"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                }`}
              >
                <span>{getCategoryIcon(cat.id)}</span>
                <span className="font-semibold">{cat.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    isActive
                      ? "bg-cyan-950 text-cyan-300 border border-cyan-800/60"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {cat.serviceCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Detail Card & Sub-services Grid */}
        <div className="rounded-3xl bg-[#090e1a] border border-slate-800 p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Category Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                  {selectedCategory.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedCategory.serviceCount} Specializations
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {selectedCategory.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 font-medium">
                  {selectedCategory.shortSummary}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedCategory.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={`/services/${selectedCategory.featuredSlug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm shadow-cyan-950/50"
                >
                  <span>Featured Service Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors"
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
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-800/70 hover:bg-slate-900/60 transition-all group space-y-1.5 block shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {sub.title}
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
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
