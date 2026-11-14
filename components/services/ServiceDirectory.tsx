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
        return <Code2 className="w-5 h-5 text-[#dae7de]" />;
      case "ai-automation":
        return <Bot className="w-5 h-5 text-[#94a49a]" />;
      case "web-ecommerce":
        return <Globe className="w-5 h-5 text-[#dae7de]" />;
      case "mobile-development":
        return <Smartphone className="w-5 h-5 text-[#94a49a]" />;
      case "digital-marketing":
        return <TrendingUp className="w-5 h-5 text-[#dae7de]" />;
      case "it-infrastructure":
        return <Server className="w-5 h-5 text-[#94a49a]" />;
      case "content-creative":
        return <PenTool className="w-5 h-5 text-[#dae7de]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#dae7de]" />;
    }
  };

  return (
    <div className="space-y-10">
      {/* Search and Category Filter Bar */}
      <div className="p-6 rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] space-y-4 shadow-xl shadow-black/40">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Live Search Input */}
          <div className="relative w-full md:flex-1">
            <Search className="w-4 h-4 text-[#94a49a] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search across all 40+ services (e.g., ERP, Flutter, SEO, Next.js, Firewall)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#091615] border border-[#1a342e] text-sm text-[#dae7de] placeholder-[#94a49a]/60 focus:outline-none focus:border-[#2d584d] transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94a49a] hover:text-[#dae7de] transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto text-xs font-mono text-[#94a49a]">
            <Filter className="w-3.5 h-3.5 text-[#dae7de]" />
            <span>
              Showing <strong className="text-white">{totalMatchingServices}</strong> services
            </span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-[#dae7de] text-[#091615] border-[#dae7de] font-semibold"
                    : "bg-[#091615] text-[#94a49a] border-[#1a342e] hover:text-[#dae7de] hover:border-[#2d584d]"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Grid Grouped by Category */}
      {filteredCategories.length === 0 ? (
        <div className="py-16 text-center rounded-[24px] bg-[#0d1f1c] border border-dashed border-[#1a342e] space-y-3">
          <p className="text-sm text-[#94a49a]">
            No services matched your query &quot;{searchTerm}&quot;.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
            className="text-xs font-mono text-[#dae7de] underline hover:text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1a342e] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#091615] border border-[#1a342e] flex items-center justify-center">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {category.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#94a49a]">
                      {category.shortSummary}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-[#94a49a] self-start sm:self-auto bg-[#0d1f1c] px-2.5 py-1 rounded-md border border-[#1a342e]">
                  {category.filteredServices.length} {category.filteredServices.length === 1 ? "Capability" : "Capabilities"}
                </span>
              </div>

              {/* Service Cards Grid (PRD: 12px radius, #0d1f1c background, #1a342e border) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.filteredServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex flex-col justify-between p-6 rounded-xl bg-[#0d1f1c] border border-[#1a342e] hover:border-[#2d584d] hover:bg-[#132b27]/30 transition-all shadow-sm"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono text-[#94a49a] uppercase tracking-wider">
                          Module #{service.slug.slice(0, 4)}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#94a49a] group-hover:text-[#dae7de] group-hover:translate-x-1 transition-all" />
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-[#dae7de] transition-colors tracking-tight">
                        {service.title}
                      </h3>

                      <p className="text-xs text-[#94a49a] leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-[#1a342e]/70">
                      <span className="text-xs font-mono font-medium text-[#dae7de] flex items-center gap-1.5 group-hover:underline">
                        <span>View Specification</span>
                        <span>→</span>
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
