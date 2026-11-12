"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  Code2,
  Bot,
  Globe,
  Smartphone,
  TrendingUp,
  Server,
  PenTool,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { serviceCategories } from "@/lib/data/services";

export function ServiceDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(() => {
    return [
      { id: "all", title: "All Categories" },
      ...serviceCategories.map((c) => ({ id: c.id, title: c.title })),
    ];
  }, []);

  const filteredCategories = useMemo(() => {
    return serviceCategories
      .filter((cat) => {
        if (selectedCategory !== "all" && cat.id !== selectedCategory) {
          return false;
        }
        return true;
      })
      .map((cat) => {
        const filteredServices = cat.services.filter((s) => {
          if (!searchTerm.trim()) return true;
          const query = searchTerm.toLowerCase();
          return (
            s.title.toLowerCase().includes(query) ||
            s.description.toLowerCase().includes(query)
          );
        });
        return {
          ...cat,
          filteredServices,
        };
      })
      .filter((cat) => cat.filteredServices.length > 0);
  }, [selectedCategory, searchTerm]);

  const totalMatchingServices = useMemo(() => {
    return filteredCategories.reduce(
      (acc, cat) => acc + cat.filteredServices.length,
      0
    );
  }, [filteredCategories]);

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

  return (
    <div className="space-y-10">
      {/* Search and Category Filter Bar */}
      <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Live Search Input */}
          <div className="relative w-full md:flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search across all 40+ services (e.g., ERP, Flutter, SEO, Next.js, Firewall)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Counter */}
          <div className="text-xs text-slate-400 whitespace-nowrap font-mono">
            Showing <span className="text-cyan-400 font-bold">{totalMatchingServices}</span> services
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-slate-800/80">
          <Filter className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
          {categories.map((c) => {
            const isSelected = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                  isSelected
                    ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                {c.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Categories Sections */}
      {filteredCategories.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-slate-950/40 border border-dashed border-slate-800 space-y-3">
          <p className="text-slate-400 text-sm">
            No services matched your search query "{searchTerm}".
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
            className="text-xs font-semibold text-cyan-400 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="space-y-6 pt-4 scroll-mt-24"
              id={category.slug}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {category.title}
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {category.shortSummary}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/services/${category.featuredSlug}`}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group flex-shrink-0"
                >
                  <span>Featured Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Sub-Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.filteredServices.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/services/${sub.slug}`}
                    className="p-5 rounded-xl bg-[#090e1a] border border-slate-800/90 hover:border-cyan-800/60 hover:bg-slate-900/40 transition-all flex flex-col justify-between space-y-3 group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {sub.title}
                        </h3>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0 mt-0.5" />
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {sub.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>{category.badge}</span>
                      <span className="text-cyan-400/80 group-hover:text-cyan-300">
                        View Service →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
