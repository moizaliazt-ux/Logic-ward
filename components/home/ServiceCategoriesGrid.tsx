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
        return <Code2 className="w-5 h-5" />;
      case "ai-automation":
        return <Bot className="w-5 h-5" />;
      case "web-ecommerce":
        return <Globe className="w-5 h-5" />;
      case "mobile-development":
        return <Smartphone className="w-5 h-5" />;
      case "digital-marketing":
        return <TrendingUp className="w-5 h-5" />;
      case "it-infrastructure":
        return <Server className="w-5 h-5" />;
      case "content-creative":
        return <PenTool className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  const selectedCategory =
    serviceCategories.find((cat) => cat.id === activeCategory) ||
    serviceCategories[0];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800/50">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Full-Spectrum Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Comprehensive Technology Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We cover the entire modern digital stack. Whether you need custom enterprise management software, mobile apps, marketing pipelines, or secure office networking, we eliminate the friction of coordinating multiple disconnected vendors.
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
                    ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300 shadow-sm"
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                }`}
              >
                <span className={isActive ? "text-cyan-400" : "text-slate-500"}>
                  {getCategoryIcon(cat.id)}
                </span>
                <span>{cat.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                    isActive
                      ? "bg-cyan-950 text-cyan-300"
                      : "bg-slate-800 text-slate-500"
                  }`}
                >
                  {cat.serviceCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Detail Card & Sub-services Grid */}
        <div className="rounded-2xl bg-[#090e1a] border border-slate-800 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Category Overview */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 text-cyan-400 border border-slate-800">
                {selectedCategory.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {selectedCategory.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedCategory.description}
              </p>

              <div className="pt-2">
                <Link
                  href={`/services/${selectedCategory.featuredSlug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm shadow-cyan-950/50"
                >
                  <span>Deep-Dive Service Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Sub-services List */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {selectedCategory.services.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/services/${sub.slug}`}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-800/50 hover:bg-slate-900/60 transition-all group space-y-1.5 block"
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
